import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  Store, Briefcase, PackageSearch, ClipboardList, ShieldCheck,
  Building2, Sparkles, ArrowRight, CheckCircle2, Users, MapPin,
  Zap, MessageSquare, Rocket, GraduationCap, HeartHandshake,
  Handshake, LineChart, Mail, Phone,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast, Toaster } from "sonner";
import { z } from "zod";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import heroImg from "@/assets/hero-marketplace.jpg";
import iconAsset from "@/assets/gainr-icon.jpg.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Gainr | Hyperlocal Marketplace & Digital Opportunity Platform" },
      { name: "description", content: "Gainr is an AI-powered hyperlocal marketplace developed by EmpowerNet Technologies Private Limited. Discover local services, freelance opportunities, rentals, surveys and customer verification." },
      { property: "og:title", content: "Gainr | AI-Powered Hyperlocal Marketplace" },
      { property: "og:description", content: "One platform. Endless opportunities. Discover local services, freelance work, rentals and more." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: HomePage,
});

const products = [
  { icon: Store, title: "Gainr Marketplace", desc: "A hyperlocal marketplace where users can buy, sell, promote products, and discover trusted local services within their city.",
    points: ["Local product listings", "Service marketplace", "Direct customer connections", "Verified user ecosystem"] },
  { icon: Briefcase, title: "Gainr Freelance", desc: "Connect businesses with skilled freelancers across multiple categories.",
    points: ["Freelance job postings", "Direct communication", "Flexible work opportunities", "Extra income generation"] },
  { icon: PackageSearch, title: "Gainr Rental Marketplace", desc: "Rent or list products instead of buying them — from appliances and vehicles to event equipment, fashion and tools.",
    points: ["Home appliances & electronics", "Vehicles & tools", "Event equipment", "Fashion accessories"] },
  { icon: ClipboardList, title: "Gainr Survey", desc: "A targeted survey platform that enables organizations to collect authentic consumer insights from verified users.",
    points: ["Market research", "Brand studies", "Customer feedback", "Public opinion surveys"] },
  { icon: ShieldCheck, title: "Verify Your Client (VYC)", desc: "Identity verification that helps users verify customers before doing business — improving trust and reducing fraud.",
    points: ["Customer identity checks", "Fraud prevention", "Marketplace safety", "Trust building"] },
  { icon: Building2, title: "Gainr Business Profiles", desc: "Businesses create professional profiles to showcase products, services, contact information and build credibility.",
    points: ["Rich business pages", "Contact & catalog", "Ratings & reviews", "Local discoverability"] },
  { icon: Sparkles, title: "AI-Powered Search", desc: "Intelligent search that understands user intent rather than relying only on keywords — helping users find what they need faster.",
    points: ["Intent-based results", "Smart recommendations", "Faster discovery", "Continuously learning"] },
];

const whyGainr = [
  { icon: ShieldCheck, title: "Trusted Marketplace", desc: "Designed with user trust and transparency in mind." },
  { icon: Rocket, title: "Extra Income Opportunities", desc: "Helping individuals monetize skills, services, and idle assets." },
  { icon: Sparkles, title: "AI-Driven Platform", desc: "Intelligent search and modern technology improve discovery." },
  { icon: MapPin, title: "Local First", desc: "Built specifically for city-level commerce and community engagement." },
  { icon: MessageSquare, title: "Secure Communication", desc: "Verified users and structured interactions build confidence." },
  { icon: Zap, title: "Continuous Innovation", desc: "Regularly introducing new modules for emerging marketplace needs." },
];

const audience = [
  { icon: Users, label: "Individuals" },
  { icon: Briefcase, label: "Freelancers" },
  { icon: Store, label: "Small Businesses" },
  { icon: HeartHandshake, label: "Professionals" },
  { icon: Handshake, label: "Local Service Providers" },
  { icon: GraduationCap, label: "Students" },
  { icon: Rocket, label: "Entrepreneurs" },
  { icon: LineChart, label: "Market Research" },
];

const contactSchema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(100),
  email: z.string().trim().email("Invalid email").max(255),
  phone: z.string().trim().min(7, "Enter a valid phone").max(20),
  message: z.string().trim().min(5, "Message is too short").max(1000),
});

function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Toaster position="top-center" richColors />
      <SiteHeader />
      <main>
        <Hero />
        <About />
        <Products />
        <WhyGainr />
        <WhoWeServe />
        <Mission />
        <Company />
        <Contact />
        <Support />
      </main>
      <SiteFooter />
    </div>
  );
}

function SectionHead({ eyebrow, title, sub }: { eyebrow: string; title: string; sub?: string }) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <span className="inline-block rounded-full bg-brand-soft px-3 py-1 text-xs font-semibold tracking-wide text-brand uppercase">
        {eyebrow}
      </span>
      <h2 className="mt-4 text-3xl font-bold sm:text-4xl md:text-5xl">{title}</h2>
      {sub && <p className="mt-4 text-base leading-relaxed text-muted-foreground">{sub}</p>}
    </div>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden gradient-hero">
      <div className="container-page grid gap-12 py-16 md:grid-cols-2 md:items-center md:py-24">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-brand/20 bg-white px-3 py-1 text-xs font-semibold text-brand shadow-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-accent-orange" /> AI-Powered Hyperlocal Marketplace
          </span>
          <h1 className="mt-5 text-4xl font-bold leading-[1.05] sm:text-5xl md:text-6xl">
            One Platform. <span className="text-gradient-brand">Endless Opportunities.</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
            Gainr is an AI-powered hyperlocal marketplace developed by EmpowerNet Technologies Private Limited.
            We help individuals, professionals, freelancers, businesses, and local service providers discover
            opportunities, earn additional income, and grow through trusted digital solutions.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild size="lg" className="rounded-full bg-brand text-brand-foreground hover:bg-brand/90">
              <a href="#products">Explore Features <ArrowRight className="ml-1 h-4 w-4" /></a>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-full border-brand/30 text-brand hover:bg-brand-soft">
              <a href="#contact">Contact Us</a>
            </Button>
          </div>
          <div className="mt-8 flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-accent-orange" /> Verified users</div>
            <div className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-accent-orange" /> Local first</div>
            <div className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-accent-orange" /> AI search</div>
          </div>
        </div>
        <div className="relative">
          <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-brand/10 via-transparent to-accent-orange/20 blur-2xl" aria-hidden />
          <div className="relative overflow-hidden rounded-3xl border border-border bg-white shadow-xl">
            <img
              src={heroImg}
              alt="Illustration of Gainr's hyperlocal marketplace connecting shops, freelancers and customers"
              width={1408}
              height={1200}
              className="h-auto w-full"
            />
          </div>
          <div className="absolute -bottom-5 -left-5 hidden items-center gap-3 rounded-2xl border border-border bg-white p-3 pr-4 shadow-lg sm:flex">
            <img src={iconAsset.url} alt="" className="h-10 w-10 rounded-xl" />
            <div>
              <div className="text-xs text-muted-foreground">Powered by</div>
              <div className="text-sm font-semibold text-brand">Gainr AI Search</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="scroll-mt-20 py-20 md:py-28">
      <div className="container-page">
        <SectionHead
          eyebrow="About Gainr"
          title="Connecting People. Creating Opportunities."
        />
        <div className="mx-auto mt-10 grid max-w-5xl gap-6 text-base leading-relaxed text-muted-foreground md:grid-cols-3">
          <p>
            Gainr is a next-generation digital marketplace built to simplify how people discover services,
            promote businesses, earn additional income, and connect with verified local communities.
          </p>
          <p>
            Our mission is to empower every individual — from freelancers and small business owners to
            professionals and entrepreneurs — with technology that creates meaningful economic opportunities.
          </p>
          <p>
            Built with scalability, trust, and AI-driven innovation, Gainr continues to introduce new modules
            designed to solve real-world problems.
          </p>
        </div>
      </div>
    </section>
  );
}

function Products() {
  return (
    <section id="products" className="scroll-mt-20 bg-brand-soft/40 py-20 md:py-28">
      <div className="container-page">
        <SectionHead
          eyebrow="Our Products"
          title="A Complete Ecosystem, Built Around You"
          sub="Seven modules that work together to help you discover, transact, and grow — locally."
        />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((p) => (
            <Card key={p.title} className="group relative overflow-hidden rounded-2xl border-border bg-card p-6 shadow-sm transition-shadow hover:shadow-md">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand text-brand-foreground">
                <p.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-xl font-semibold">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
              <ul className="mt-4 space-y-2">
                {p.points.map((pt) => (
                  <li key={pt} className="flex items-start gap-2 text-sm text-foreground/80">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent-orange" />
                    {pt}
                  </li>
                ))}
              </ul>
              <div className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full bg-accent-orange/10 blur-2xl transition-opacity group-hover:opacity-100" />
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyGainr() {
  return (
    <section id="why" className="scroll-mt-20 py-20 md:py-28">
      <div className="container-page">
        <SectionHead eyebrow="Why Choose Gainr" title="Built for Trust, Growth, and Local Impact" />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {whyGainr.map((w) => (
            <div key={w.title} className="rounded-2xl border border-border bg-card p-6 transition-colors hover:border-brand/40">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent-orange/10 text-accent-orange">
                <w.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-lg font-semibold">{w.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{w.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhoWeServe() {
  return (
    <section className="bg-brand py-20 text-brand-foreground md:py-24">
      <div className="container-page">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-block rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide">
            Who We Serve
          </span>
          <h2 className="mt-4 text-3xl font-bold sm:text-4xl">Everyone Building Something Locally</h2>
          <p className="mt-3 text-sm leading-relaxed text-brand-foreground/80">
            Gainr is built to serve a diverse community of people, businesses, and organizations.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
          {audience.map((a) => (
            <div key={a.label} className="flex flex-col items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-6 text-center backdrop-blur-sm">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent-orange text-white">
                <a.icon className="h-6 w-6" />
              </div>
              <div className="text-sm font-medium">{a.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Mission() {
  return (
    <section className="py-20 md:py-28">
      <div className="container-page">
        <div className="relative mx-auto max-w-4xl overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-brand-soft to-white p-10 text-center md:p-16">
          <span className="inline-block rounded-full bg-brand px-3 py-1 text-xs font-semibold uppercase tracking-wide text-brand-foreground">
            Our Mission
          </span>
          <p className="mt-6 text-2xl font-semibold leading-snug text-foreground md:text-3xl">
            To build <span className="text-gradient-brand">India's most trusted hyperlocal digital ecosystem</span> where
            technology enables people to earn more, connect better, and grow faster.
          </p>
          <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-accent-orange/15 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-16 -left-16 h-56 w-56 rounded-full bg-brand/15 blur-3xl" />
        </div>
      </div>
    </section>
  );
}

function Company() {
  const items = [
    { label: "Registered Company", value: "EmpowerNet Technologies Private Limited" },
    { label: "CIN", value: "U63119TZ2025PTC037077" },
    { label: "GSTIN", value: "33AAJCE3483F1ZP" },
    { label: "Registered Office", value: "B303, Sriram Vijaya Hyde Park, Peelamedu, Coimbatore – 641004, Tamil Nadu, India" },
  ];
  return (
    <section className="bg-brand-soft/40 py-20 md:py-24">
      <div className="container-page">
        <SectionHead eyebrow="Company Information" title="EmpowerNet Technologies Private Limited" />
        <div className="mx-auto mt-10 grid max-w-4xl gap-4 sm:grid-cols-2">
          {items.map((i) => (
            <div key={i.label} className="rounded-2xl border border-border bg-card p-5">
              <div className="text-xs font-semibold uppercase tracking-wide text-brand">{i.label}</div>
              <div className="mt-1 text-sm text-foreground">{i.value}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const [loading, setLoading] = useState(false);
  const [values, setValues] = useState({ name: "", email: "", phone: "", message: "" });

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = contactSchema.safeParse(values);
    if (!parsed.success) {
      toast.error(parsed.error.issues[0]?.message ?? "Please check your details");
      return;
    }
    setLoading(true);
    // No backend wired; open mail client with prefilled content.
    const subject = encodeURIComponent(`Enquiry from ${parsed.data.name}`);
    const body = encodeURIComponent(
      `Name: ${parsed.data.name}\nEmail: ${parsed.data.email}\nPhone: ${parsed.data.phone}\n\n${parsed.data.message}`
    );
    window.location.href = `mailto:connect@gainr.in?subject=${subject}&body=${body}`;
    setTimeout(() => {
      setLoading(false);
      toast.success("Opening your email client…");
    }, 400);
  };

  return (
    <section id="contact" className="scroll-mt-20 py-20 md:py-28">
      <div className="container-page grid gap-12 lg:grid-cols-2 lg:items-start">
        <div>
          <span className="inline-block rounded-full bg-brand-soft px-3 py-1 text-xs font-semibold uppercase tracking-wide text-brand">
            Contact Us
          </span>
          <h2 className="mt-4 text-3xl font-bold sm:text-4xl md:text-5xl">Let's build something local.</h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            Questions, partnerships or feedback — we'd love to hear from you.
          </p>
          <div className="mt-8 space-y-4">
            <a href="mailto:connect@gainr.in" className="flex items-start gap-4 rounded-2xl border border-border bg-card p-4 transition-colors hover:border-brand/40">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand text-brand-foreground"><Mail className="h-5 w-5" /></span>
              <span><span className="block text-xs font-semibold uppercase tracking-wide text-muted-foreground">Email</span><span className="text-sm font-medium">connect@gainr.in</span></span>
            </a>
            <a href="tel:+919384281014" className="flex items-start gap-4 rounded-2xl border border-border bg-card p-4 transition-colors hover:border-brand/40">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent-orange text-white"><Phone className="h-5 w-5" /></span>
              <span><span className="block text-xs font-semibold uppercase tracking-wide text-muted-foreground">Phone</span><span className="text-sm font-medium">+91 93842 81014</span></span>
            </a>
            <div className="flex items-start gap-4 rounded-2xl border border-border bg-card p-4">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-soft text-brand"><MapPin className="h-5 w-5" /></span>
              <span><span className="block text-xs font-semibold uppercase tracking-wide text-muted-foreground">Address</span><span className="text-sm font-medium">B303, Sriram Vijaya Hyde Park, Peelamedu, Coimbatore – 641004</span></span>
            </div>
          </div>
        </div>
        <Card className="rounded-3xl border-border p-6 shadow-sm md:p-8">
          <form onSubmit={onSubmit} className="space-y-5">
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <Label htmlFor="name">Name</Label>
                <Input id="name" required maxLength={100} value={values.name} onChange={(e) => setValues({ ...values, name: e.target.value })} className="mt-1.5" placeholder="Your full name" />
              </div>
              <div>
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" required maxLength={255} value={values.email} onChange={(e) => setValues({ ...values, email: e.target.value })} className="mt-1.5" placeholder="you@company.com" />
              </div>
            </div>
            <div>
              <Label htmlFor="phone">Phone</Label>
              <Input id="phone" type="tel" required maxLength={20} value={values.phone} onChange={(e) => setValues({ ...values, phone: e.target.value })} className="mt-1.5" placeholder="+91 98765 43210" />
            </div>
            <div>
              <Label htmlFor="message">Message</Label>
              <Textarea id="message" required maxLength={1000} rows={5} value={values.message} onChange={(e) => setValues({ ...values, message: e.target.value })} className="mt-1.5" placeholder="How can we help?" />
            </div>
            <Button type="submit" disabled={loading} size="lg" className="w-full rounded-full bg-brand text-brand-foreground hover:bg-brand/90">
              {loading ? "Sending…" : "Send Message"}
            </Button>
          </form>
        </Card>
      </div>
    </section>
  );
}

function Support() {
  return (
    <section className="border-t border-border bg-brand-soft/50 py-14">
      <div className="container-page">
        <div className="mx-auto max-w-4xl rounded-2xl border border-border bg-card p-6 md:p-8">
          <h3 className="text-xl font-semibold">Customer Support & Grievance Redressal</h3>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            Gainr is committed to providing timely customer support and addressing user concerns. If you have any questions,
            complaints, or require assistance, please contact our support team at{" "}
            <a href="mailto:connect@gainr.in" className="font-medium text-brand hover:underline">connect@gainr.in</a>{" "}
            or call{" "}
            <a href="tel:+919384281014" className="font-medium text-brand hover:underline">+91 93842 81014</a>.
            We strive to respond to all genuine enquiries promptly.
          </p>
        </div>
      </div>
    </section>
  );
}
