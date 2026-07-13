import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy | Gainr" },
      {
        name: "description",
        content:
          "How Gainr and EmpowerNet Technologies Private Limited collect, use, and protect your information.",
      },
      { property: "og:title", content: "Privacy Policy | Gainr" },
      {
        property: "og:description",
        content: "How Gainr collects, uses, and protects your information.",
      },
      { property: "og:url", content: "/privacy" },
    ],
    links: [{ rel: "canonical", href: "/privacy" }],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main className="container-page py-16 md:py-24">
        <div className="mx-auto max-w-3xl">
          <span className="inline-block rounded-full bg-brand-soft px-3 py-1 text-xs font-semibold uppercase tracking-wide text-brand">
            Legal
          </span>
          <h1 className="mt-4 text-4xl font-bold md:text-5xl">Privacy Policy</h1>
          <p className="mt-3 text-sm text-muted-foreground">Last updated: 2026</p>
          <div className="prose prose-slate mt-8 max-w-none text-foreground/85">
            <p>
              EmpowerNet Technologies Private Limited ("we", "us", or "our") operates the Gainr
              platform. This Privacy Policy explains how we collect, use, and protect your
              information when you use our services.
            </p>
            <h2 className="mt-8 text-xl font-semibold">Information We Collect</h2>
            <p>
              We collect information you provide directly (name, email, phone, business details),
              information generated through your use of the platform, and information from
              verification partners where applicable.
            </p>
            <h2 className="mt-8 text-xl font-semibold">How We Use Information</h2>
            <p>
              To operate and improve the platform, connect users with relevant services, prevent
              fraud, verify identities where offered, and communicate with you about your account
              and updates.
            </p>
            <h2 className="mt-8 text-xl font-semibold">Sharing</h2>
            <p>
              We do not sell your personal information. We share limited data with service providers
              necessary to run the platform, and with authorities when required by law.
            </p>
            <h2 className="mt-8 text-xl font-semibold">Your Rights</h2>
            <p>
              You may access, correct, or request deletion of your personal data by contacting
              connect@gainr.in.
            </p>
            <h2 className="mt-8 text-xl font-semibold">Contact</h2>
            <p>
              For privacy questions, email{" "}
              <a className="text-brand hover:underline" href="mailto:connect@gainr.in">
                connect@gainr.in
              </a>
              .
            </p>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
