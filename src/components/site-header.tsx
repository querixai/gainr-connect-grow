import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import logoUrl from "@/assets/gainr-logo.png";
import { Button } from "@/components/ui/button";

const nav = [
  { href: "/#about", label: "About" },
  { href: "/#products", label: "Products" },
  { href: "/#why", label: "Why Gainr" },
  { href: "/#contact", label: "Contact" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 w-full border-b border-border/60 bg-background/85 backdrop-blur supports-[backdrop-filter]:bg-background/70">
      <div className="container-page flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2" onClick={() => setOpen(false)}>
          <img src={logoUrl} alt="Gainr" className="h-10 w-auto" />
        </Link>
        <nav className="hidden items-center gap-8 md:flex">
          {nav.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="text-sm font-medium text-foreground/75 transition-colors hover:text-brand"
            >
              {n.label}
            </a>
          ))}
        </nav>
        <div className="hidden md:block">
          <Button asChild className="rounded-full bg-brand text-brand-foreground hover:bg-brand/90">
            <a href="/#contact">Get in Touch</a>
          </Button>
        </div>
        <button
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-border md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>
      {open && (
        <div className="border-t border-border md:hidden">
          <div className="container-page flex flex-col gap-1 py-3">
            {nav.map((n) => (
              <a
                key={n.href}
                href={n.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2 text-sm font-medium text-foreground/80 hover:bg-brand-soft"
              >
                {n.label}
              </a>
            ))}
            <Button
              asChild
              className="mt-2 rounded-full bg-brand text-brand-foreground hover:bg-brand/90"
            >
              <a href="/#contact" onClick={() => setOpen(false)}>
                Get in Touch
              </a>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
