"use client";
// @ts-nocheck

import React, { useState, useEffect, useMemo } from "react";
import { usePuck } from "@measured/puck";

const FAVORITES_KEY = "cds-builder-favorites";

function loadFavorites(): Set<string> {
  if (typeof window === "undefined") return new Set();
  try {
    const raw = localStorage.getItem(FAVORITES_KEY);
    return raw ? new Set(JSON.parse(raw)) : new Set();
  } catch {
    return new Set();
  }
}

function saveFavorites(favs: Set<string>) {
  localStorage.setItem(FAVORITES_KEY, JSON.stringify([...favs]));
}

export function ComponentSearch() {
  const { config } = usePuck();
  const [search, setSearch] = useState("");
  const [favorites, setFavorites] = useState<Set<string>>(new Set());
  const [activeFilter, setActiveFilter] = useState<"all" | "favorites">("all");

  useEffect(() => {
    setFavorites(loadFavorites());
  }, []);

  const toggleFavorite = (name: string) => {
    setFavorites((prev) => {
      const next = new Set(prev);
      if (next.has(name)) next.delete(name);
      else next.add(name);
      saveFavorites(next);
      return next;
    });
  };

  // Get all component names sorted alphabetically
  const allComponents = useMemo(() => {
    return Object.keys(config.components || {}).sort((a, b) =>
      a.toLowerCase().localeCompare(b.toLowerCase())
    );
  }, [config.components]);

  // Get categories
  const categories = useMemo(() => {
    return config.categories || {};
  }, [config.categories]);

  // Filter components
  const filtered = useMemo(() => {
    let list = allComponents;

    if (activeFilter === "favorites") {
      list = list.filter((name) => favorites.has(name));
    }

    if (search.trim()) {
      const q = search.toLowerCase().trim();
      list = list.filter((name) => name.toLowerCase().includes(q));
    }

    return list;
  }, [allComponents, search, activeFilter, favorites]);

  // Group filtered components by category
  const grouped = useMemo(() => {
    if (search.trim() || activeFilter === "favorites") {
      // When searching or showing favorites, show flat sorted list
      return null;
    }

    const catEntries = Object.entries(categories);
    const assigned = new Set<string>();
    const groups: { title: string; components: string[] }[] = [];

    for (const [, cat] of catEntries) {
      const comps = (cat.components || [])
        .filter((c: string) => filtered.includes(c))
        .sort((a: string, b: string) => a.toLowerCase().localeCompare(b.toLowerCase()));
      if (comps.length > 0) {
        groups.push({ title: cat.title || "Unnamed", components: comps });
        comps.forEach((c: string) => assigned.add(c));
      }
    }

    const unassigned = filtered.filter((c) => !assigned.has(c));
    if (unassigned.length > 0) {
      groups.push({ title: "Other", components: unassigned });
    }

    return groups;
  }, [categories, filtered, search, activeFilter]);

  return (
    <div style={{ padding: "8px 12px" }}>
      {/* Search input */}
      <input
        type="text"
        placeholder="Search components..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{
          width: "100%",
          height: 32,
          padding: "0 10px",
          fontSize: 13,
          border: "1px solid #ddd",
          borderRadius: 6,
          outline: "none",
          marginBottom: 8,
          background: "#fafafa",
        }}
        onFocus={(e) => (e.target.style.borderColor = "#0052FF")}
        onBlur={(e) => (e.target.style.borderColor = "#ddd")}
      />

      {/* Filter tabs */}
      <div style={{ display: "flex", gap: 4, marginBottom: 10 }}>
        {(["all", "favorites"] as const).map((filter) => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            style={{
              flex: 1,
              height: 28,
              fontSize: 12,
              fontWeight: 600,
              border: "1px solid #ddd",
              borderRadius: 6,
              cursor: "pointer",
              background: activeFilter === filter ? "#0052FF" : "white",
              color: activeFilter === filter ? "white" : "#333",
              transition: "all 0.15s",
            }}
          >
            {filter === "all" ? `All (${allComponents.length})` : `★ Favorites (${favorites.size})`}
          </button>
        ))}
      </div>

      {/* Component count */}
      <div style={{ fontSize: 11, color: "#888", marginBottom: 6 }}>
        {filtered.length} component{filtered.length !== 1 ? "s" : ""}
        {search && ` matching "${search}"`}
      </div>

      {/* Results */}
      <div style={{ maxHeight: "calc(100vh - 280px)", overflowY: "auto" }}>
        {filtered.length === 0 && (
          <div style={{ textAlign: "center", padding: 20, color: "#999", fontSize: 13 }}>
            {activeFilter === "favorites"
              ? "No favorites yet. Click ★ on any component."
              : "No components match your search."}
          </div>
        )}

        {grouped
          ? // Grouped view (categories)
            grouped.map((group) => (
              <CategoryGroup
                key={group.title}
                title={group.title}
                components={group.components}
                favorites={favorites}
                onToggleFavorite={toggleFavorite}
              />
            ))
          : // Flat view (search/favorites)
            filtered.map((name) => (
              <ComponentItem
                key={name}
                name={name}
                isFavorite={favorites.has(name)}
                onToggleFavorite={toggleFavorite}
              />
            ))}
      </div>
    </div>
  );
}

function CategoryGroup({
  title,
  components,
  favorites,
  onToggleFavorite,
}: {
  title: string;
  components: string[];
  favorites: Set<string>;
  onToggleFavorite: (name: string) => void;
}) {
  const [expanded, setExpanded] = useState(title === "Layout Helpers");

  return (
    <div style={{ marginBottom: 4 }}>
      <button
        onClick={() => setExpanded(!expanded)}
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "6px 4px",
          fontSize: 11,
          fontWeight: 700,
          textTransform: "uppercase",
          letterSpacing: "0.05em",
          color: "#666",
          background: "none",
          border: "none",
          cursor: "pointer",
          borderBottom: "1px solid #eee",
        }}
      >
        <span>{title} ({components.length})</span>
        <span style={{ transform: expanded ? "rotate(0deg)" : "rotate(-90deg)", transition: "transform 0.15s" }}>
          ▾
        </span>
      </button>
      {expanded && (
        <div style={{ paddingTop: 2 }}>
          {components.map((name) => (
            <ComponentItem
              key={name}
              name={name}
              isFavorite={favorites.has(name)}
              onToggleFavorite={onToggleFavorite}
            />
          ))}
        </div>
      )}
    </div>
  );
}

function ComponentItem({
  name,
  isFavorite,
  onToggleFavorite,
}: {
  name: string;
  isFavorite: boolean;
  onToggleFavorite: (name: string) => void;
}) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "5px 6px",
        borderRadius: 4,
        fontSize: 13,
        cursor: "default",
      }}
      onMouseEnter={(e) => (e.currentTarget.style.background = "#f5f5f5")}
      onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
    >
      <span style={{ fontWeight: 500 }}>{name}</span>
      <button
        onClick={(e) => {
          e.stopPropagation();
          onToggleFavorite(name);
        }}
        title={isFavorite ? "Remove from favorites" : "Add to favorites"}
        style={{
          background: "none",
          border: "none",
          cursor: "pointer",
          fontSize: 14,
          padding: "0 2px",
          color: isFavorite ? "#F5A623" : "#ccc",
          transition: "color 0.15s",
        }}
        onMouseEnter={(e) => (e.currentTarget.style.color = isFavorite ? "#e09000" : "#999")}
        onMouseLeave={(e) => (e.currentTarget.style.color = isFavorite ? "#F5A623" : "#ccc")}
      >
        {isFavorite ? "★" : "☆"}
      </button>
    </div>
  );
}
