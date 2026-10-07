"use client";

import { X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useRef } from "react";
import { nav, site } from "@/content/site";

const links = [...nav, { label: "Contact", href: "#contact" }];

export function MobileMenu({ open, onClose }: { open: boolean; onClose: () => void }) {
  const firstLinkRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    firstLinkRef.current?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          id="mobile-menu"
          role="dialog"
          aria-modal="true"
          aria-label="Menu"
          className="fixed inset-0 z-50 flex flex-col bg-linen md:hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="shell grid h-18 grid-cols-[1fr_auto_1fr] items-center">
            <span />
            <span className="font-serif text-[1.85rem] leading-none tracking-tight">{site.name}</span>
            <button
              type="button"
              onClick={onClose}
              aria-label="Close menu"
              className="-mr-2 inline-flex size-10 items-center justify-center justify-self-end rounded-full"
            >
              <X className="size-5" strokeWidth={1.5} />
            </button>
          </div>

          <nav aria-label="Mobile" className="shell flex flex-1 flex-col justify-center">
            <ul className="space-y-2">
              {links.map((item, i) => (
                <motion.li
                  key={item.href}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.08 + i * 0.05, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                >
                  <a
                    ref={i === 0 ? firstLinkRef : undefined}
                    href={item.href}
                    onClick={onClose}
                    className="font-serif text-5xl leading-tight transition-colors hover:text-terracotta"
                  >
                    {i % 2 === 1 ? <em>{item.label}</em> : item.label}
                  </a>
                </motion.li>
              ))}
            </ul>
          </nav>

          <p className="shell pb-10 text-[0.6875rem] font-medium uppercase tracking-[0.22em] text-muted">
            {site.base}
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
