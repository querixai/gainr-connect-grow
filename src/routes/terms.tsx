import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms & Conditions | Gainr" },
      { name: "description", content: "Terms and conditions governing the use of the Gainr platform by EmpowerNet Technologies Private Limited." },
      { property: "og:title", content: "Terms & Conditions | Gainr" },
      { property: "og:description", content: "Terms governing the use of the Gainr platform." },
      { property: "og:url", content: "/terms" },
    ],
    links: [{ rel: "canonical", href: "/terms" }],
  }),
  component: TermsPage,
});

function TermsPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main className="container-page py-16 md:py-24">
        <div className="mx-auto max-w-3xl">
          <span className="inline-block rounded-full bg-brand-soft px-3 py-1 text-xs font-semibold uppercase tracking-wide text-brand">Legal</span>
          <h1 className="mt-4 text-4xl font-bold md:text-5xl">Terms & Conditions</h1>
          <p className="mt-3 text-sm text-muted-foreground">Last updated: 2026</p>
          <div className="prose prose-slate mt-8 max-w-none text-foreground/85">
            <p>These Terms govern your access to and use of Gainr, a digital marketplace platform developed and owned by EmpowerNet Technologies Private Limited.</p>
            <h2 className="mt-8 text-xl font-semibold">Use of the Platform</h2>
            <p>You agree to use Gainr in compliance with applicable laws and not to misuse the platform, its listings, or its verification features.</p>
            <h2 className="mt-8 text-xl font-semibold">User Content</h2>
            <p>You are responsible for the accuracy of any information, listings or messages you post. Gainr may remove content that violates these Terms.</p>
            <h2 className="mt-8 text-xl font-semibold">Transactions</h2>
            <p>Gainr connects buyers, sellers, freelancers and service providers. Transactions are between users; we are not a party to them unless expressly stated.</p>
            <h2 className="mt-8 text-xl font-semibold">Limitation of Liability</h2>
            <p>To the maximum extent permitted by law, EmpowerNet Technologies Private Limited is not liable for indirect or consequential damages arising from platform use.</p>
            <h2 className="mt-8 text-xl font-semibold">Contact</h2>
            <p>For questions about these Terms, email <a className="text-brand hover:underline" href="mailto:connect@gainr.in">connect@gainr.in</a>.</p>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
