"use client";
import React, { ReactNode, useContext, useEffect, useState } from "react";
import { LinksContext } from "./context";
import { usePathname } from "next/navigation";

type Link = {
  href: string;
  title: string;
};

const homeLinks = [
  { href: "/hashnote", title: "Hashnote" },
  { href: "/player", title: "Player" },
];

const hashnoteLinks = [
  { href: "/hashnote/about", title: "About" },
  { href: "/hashnote/guides", title: "Guides" },
  { href: "/hashnote/privacy", title: "Privacy" },
  { href: "/hashnote/releases", title: "Releases" },
];

const playerLinks = [
  { href: "/player/about", title: "About" },
  { href: "/player/guides", title: "Guides" },
  { href: "/player/releases", title: "Releases" },
];

export const LinksProvider = ({ children }: { children: ReactNode }) => {
  const path = usePathname();
  const [links, setLinks] = useState<Link[]>(homeLinks);
  const [breadcrumb, setBreadcrumb] = useState<string | null>(null);

  useEffect(() => {
    if (path.includes("hashnote")) {
      setLinks(hashnoteLinks);
      setBreadcrumb("Hashnote");
    } else if (path.includes("player")) {
      setLinks(playerLinks);
      setBreadcrumb("Player");
    } else {
      setLinks(homeLinks);
      setBreadcrumb(null);
    }
  }, [path]);

  return (
    <>
      <LinksContext.Provider value={{ links, setLinks, breadcrumb }}>
        {children}
      </LinksContext.Provider>
    </>
  );
};

export const useLinks = () => {
  const context = useContext(LinksContext);
  if (!context) {
    throw new Error("useLinks must be used within a LinksProvider");
  }
  return context;
};
