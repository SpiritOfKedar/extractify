"use client";

import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import { socialPlatforms, documentPlatforms } from "@/lib/platforms";

export default function Navbar() {
  const [platformsOpen, setPlatformsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close on outside click
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setPlatformsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full bg-primary-light shadow-[0px_1px_6px_0px_rgba(170,170,170,0.25)]">
      <div className="mx-auto flex max-w-[1440px] items-center justify-between px-8 md:px-16 py-5">
        {/* Logo */}
        <Link href="/" className="text-primary font-bold text-[32px] leading-none">
          Logo
        </Link>

        {/* Nav items */}
        <nav className="flex items-center gap-4">
          <Link
            href="/blogs"
            className="hidden md:flex items-center justify-center rounded-full py-2 text-foreground text-base font-medium hover:text-primary transition-colors"
          >
            Blogs
          </Link>
          <Link
            href="/#faq"
            className="hidden md:flex items-center justify-center rounded-full py-2 text-foreground text-base font-medium hover:text-primary transition-colors"
          >
            FAQ
          </Link>
          <Link
            href="/#reviews"
            className="hidden md:flex items-center justify-center rounded-full py-2 text-foreground text-base font-medium hover:text-primary transition-colors"
          >
            Review
          </Link>

          <div className="flex items-center gap-3">
            {/* Language selector */}
            <button className="flex items-center justify-center gap-2 rounded-full border border-border bg-card px-3 py-2">
              <span className="text-lg">🇺🇸</span>
              <span className="text-foreground text-lg font-semibold">EN</span>
            </button>

            {/* Platforms dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setPlatformsOpen(!platformsOpen)}
                className="flex items-center gap-1 rounded-full border border-border bg-card px-4 py-2 text-foreground text-base font-medium hover:border-primary transition-colors"
              >
                Platforms
                <ChevronDown
                  className={`h-5 w-5 transition-transform ${platformsOpen ? "rotate-180" : ""}`}
                />
              </button>

              {platformsOpen && (
                <div className="absolute right-0 top-full mt-2 w-[520px] rounded-2xl border border-border bg-card p-5 shadow-lg">
                  {/* Social Media */}
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted mb-2">
                    Social Media
                  </p>
                  <div className="grid grid-cols-3 gap-x-4 gap-y-1 mb-4">
                    {socialPlatforms.map((p) => (
                      <Link
                        key={p.slug}
                        href={`/platform/${p.slug}`}
                        className="flex items-center gap-2 rounded-lg px-2 py-1.5 text-sm font-medium text-foreground hover:bg-background hover:text-primary transition-colors"
                        onClick={() => setPlatformsOpen(false)}
                      >
                        <span
                          className="h-2 w-2 rounded-full shrink-0"
                          style={{ backgroundColor: p.color }}
                        />
                        {p.name}
                      </Link>
                    ))}
                  </div>

                  <hr className="border-border mb-4" />

                  {/* Document Platforms */}
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted mb-2">
                    Documents &amp; Publications
                  </p>
                  <div className="grid grid-cols-3 gap-x-4 gap-y-1">
                    {documentPlatforms.map((p) => (
                      <Link
                        key={p.slug}
                        href={`/platform/${p.slug}`}
                        className="flex items-center gap-2 rounded-lg px-2 py-1.5 text-sm font-medium text-foreground hover:bg-background hover:text-primary transition-colors"
                        onClick={() => setPlatformsOpen(false)}
                      >
                        <span
                          className="h-2 w-2 rounded-full shrink-0"
                          style={{ backgroundColor: p.color }}
                        />
                        {p.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}
