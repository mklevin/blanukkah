"use client";

import { useEffect, useRef, useState } from "react";

const PAGE_HEIGHTS = {
  mobile: [
    3550, // intro
    1300, // senate election
    1130, // demographics
    600,  // confirmation
  ],
  desktop: [
    3050, // intro
    920,  // senate election
    900,  // demographics
    550,  // confirmation
  ],
};

export default function Vote() {
  const [page, setPage] = useState(0);
  const [isDesktop, setIsDesktop] = useState(false);
  const initialLoad = useRef(true);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 768px)");

    function handleResize() {
      setIsDesktop(mediaQuery.matches);
    }

    handleResize();
    mediaQuery.addEventListener("change", handleResize);

    return () => {
      mediaQuery.removeEventListener("change", handleResize);
    };
  }, []);

  const heights = isDesktop
    ? PAGE_HEIGHTS.desktop
    : PAGE_HEIGHTS.mobile;

  function handleLoad() {
    // Ignore the initial iframe load
    if (initialLoad.current) {
      initialLoad.current = false;
      return;
    }

    // Advance to the next page height, wrapping back to the intro
    setPage((current) => (current + 1) % heights.length);
  }

  return (
    <iframe
      src="https://docs.google.com/forms/d/e/1FAIpQLSdTYuZDZD1OQGTsVPNsysmJGthhOOYsFiBNwrFhquDGxOeIkg/viewform?embedded=true"
      title="Hanukkah Election Form"
      width="100%"
      height={heights[page]}
      className="w-full border-0"
      onLoad={handleLoad}
    >
      Loading…
    </iframe>
  );
}