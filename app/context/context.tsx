import { createContext } from "react";

type Link = {
  href: string;
  title: string;
};

type LinksContextType = {
  links: Link[] | null;
  setLinks: React.Dispatch<React.SetStateAction<Link[] | null>>;
  breadcrumb: string | null;
};

export const LinksContext = createContext<LinksContextType | undefined>(
  undefined
);

export const defaultLinks: Link[] = [
  { href: "/hashnote", title: "Hashnote" },
  { href: "/player", title: "Player" },
];
