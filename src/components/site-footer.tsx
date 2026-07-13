import { Link } from "@tanstack/react-router";
import { Mail, Phone, MapPin } from "lucide-react";
import logoAsset from "@/assets/gainr-logo.png.asset.json";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-brand-soft/60">
      <div className="container-page py-14">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <img src={logoAsset.url} alt="Gainr" className="h-9 w-auto" />
            <p className="mt-4 max-w-md text-sm leading-relaxed text-muted-foreground">
              Gainr is a digital marketplace platform developed and owned by EmpowerNet Technologies
              Private Limited.
            </p>
            <div className="mt-5 space-y-2 text-sm text-muted-foreground">
              <div className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 text-brand" /> B303, Sriram Vijaya Hyde Park,
                Peelamedu, Coimbatore – 641004, Tamil Nadu
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-brand" />{" "}
                <a href="mailto:connect@gainr.in" className="hover:text-brand">
                  connect@gainr.in
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-brand" />{" "}
                <a href="tel:+919384281014" className="hover:text-brand">
                  +91 93842 81014
                </a>
              </div>
            </div>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-foreground">Company</h4>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="/#about" className="hover:text-brand">
                  About Gainr
                </a>
              </li>
              <li>
                <a href="/#products" className="hover:text-brand">
                  Features
                </a>
              </li>
              <li>
                <a href="/#contact" className="hover:text-brand">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-foreground">Legal</h4>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li>
                <Link to="/privacy" className="hover:text-brand">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="hover:text-brand">
                  Terms & Conditions
                </Link>
              </li>
            </ul>
            <div className="mt-4 text-xs text-muted-foreground">
              CIN: U63119TZ2025PTC037077
              <br />
              GSTIN: 33AAJCE3483F1ZP
            </div>
          </div>
        </div>
        <div className="mt-10 border-t border-border pt-6 text-center text-xs text-muted-foreground">
          © 2026 EmpowerNet Technologies Private Limited. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
