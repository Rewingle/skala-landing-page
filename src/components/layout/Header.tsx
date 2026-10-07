"use client";

import { Menu } from "lucide-react";
import { useRef, useState, useSyncExternalStore } from "react";
import { ButtonLink } from "@/components/ui/Button";
import { nav, site } from "@/content/site";
import { cn } from "@/lib/cn";
import { MobileMenu } from "./MobileMenu";

function subscribeToScroll(onChange: () => void) {
  window.addEventListener("scroll", onChange, { passive: true });
  return () => window.removeEventListener("scroll", onChange);
}

export function Header() {
  const scrolled = useSyncExternalStore(
    subscribeToScroll,
    () => window.scrollY > 24,
    () => false,
  );
  const [menuOpen, setMenuOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  const closeMenu = () => {
    setMenuOpen(false);
    menuButtonRef.current?.focus();
  };

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-40 transition-[background-color,box-shadow] duration-500",
          scrolled
            ? "bg-linen/85 shadow-[0_1px_0_var(--color-stone)] backdrop-blur-md"
            : "bg-transparent",
        )}
      >
        <div className="shell grid h-18 grid-cols-[1fr_auto_1fr] items-center">
          <nav aria-label="Primary" className="hidden md:block">
            <ul className="flex items-center gap-7 text-[0.8125rem]">
              {nav.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-espresso/80 transition-colors hover:text-terracotta"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <button
            ref={menuButtonRef}
            type="button"
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            className="-ml-2 inline-flex size-10 items-center justify-center justify-self-start rounded-full md:hidden"
          >
            <Menu className="size-5" strokeWidth={1.5} />
          </button>

          <a href="#top" className="font-serif text-[1.85rem] leading-none tracking-tight">
            {site.name}
          </a>

          <div className="justify-self-end">
            <ButtonLink href="#contact" variant="outline" size="sm">
              Contact Us
            </ButtonLink>
          </div>
        </div>
      </header>

      {/* Rendered outside <header>: its backdrop-filter would trap a fixed overlay. */}
      <MobileMenu open={menuOpen} onClose={closeMenu} />
    </>
  );
}
