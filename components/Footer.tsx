import * as React from "react";

export const Footer = () => {
  return (
    <footer className="fixed w-full text-xs p-4 bottom-0 left-0 text-center dark:text-white/40 text-gray-300">
      © {new Date().getFullYear()} thmsmtylr &middot;{" "}
      <a
        href="https://github.com/thmsmtylr/website"
        target="_blank"
        rel="noreferrer"
        aria-label="Link to Github source code"
      >
        Sauce
      </a>
    </footer>
  );
};
