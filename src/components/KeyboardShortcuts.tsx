"use client";
// @ts-nocheck

import { useEffect } from "react";
import { usePuck } from "@measured/puck";

export function KeyboardShortcuts() {
  const { appState, dispatch, selectedItem, getSelectorForId } = usePuck();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Don't trigger when typing in inputs
      const tag = (e.target as HTMLElement)?.tagName;
      if (tag === "INPUT" || tag === "TEXTAREA" || tag === "SELECT") return;
      if ((e.target as HTMLElement)?.isContentEditable) return;

      // Delete / Backspace — remove selected component
      if (e.key === "Delete" || e.key === "Backspace") {
        if (!selectedItem) return;

        const selector = getSelectorForId(selectedItem.props.id);
        if (!selector) return;

        e.preventDefault();
        dispatch({
          type: "remove",
          index: selector.index,
          zone: selector.zone,
        });
      }

      // Ctrl+D — duplicate selected component
      if ((e.ctrlKey || e.metaKey) && e.key === "d") {
        if (!selectedItem) return;

        const selector = getSelectorForId(selectedItem.props.id);
        if (!selector) return;

        e.preventDefault();
        dispatch({
          type: "duplicate",
          sourceIndex: selector.index,
          sourceZone: selector.zone,
        });
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedItem, dispatch, getSelectorForId]);

  return null;
}
