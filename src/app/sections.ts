/* Single source of truth for the sidebar rail: the id must match the id
   rendered by the corresponding section on the home page, since the
   scroll-spy observer looks each one up by getElementById. */
export type Section = {
  id: string;
  label: string;
  /* Two-character marker shown when the rail is collapsed to its narrow width. */
  glyph: string;
};

export const SECTIONS: readonly Section[] = [
  { id: "hero", label: "Home", glyph: "00" },
  { id: "about", label: "About Me", glyph: "01" },
  { id: "links", label: "Elsewhere", glyph: "02" },
];

export const ROUTES = [
  { href: "/blog", label: "Blog", glyph: "03" },
  { href: "/resume", label: "Resume", glyph: "04" },
] as const;
