import { Camera, Palette, Sparkles, Wallet } from "lucide-react";
import { PrimaryButton, SecondaryButton, SectionImage } from "./ui";

/* Section 2: Hero — USP, headline, hero visual, highlight cards, dual CTA (AIDA: Attention) */

const highlights = [
  { icon: Sparkles, text: "Self-Service" },
  { icon: Palette, text: "Custom Branding" },
  { icon: Wallet, text: "Profit Sharing" },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-8 pb-20 md:pt-12 md:pb-28">
      <div className="pointer-events-none absolute -right-20 top-0 h-72 w-72 rounded-full bg-peach/60 blur-3xl" />
      <div className="pointer-events-none absolute -left-10 bottom-0 h-64 w-64 rounded-full bg-orange/20 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-peach px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-orange-600">
              <Camera className="h-3.5 w-3.5" />
              Photo Experience untuk Coffee Shop
            </span>

            <h1 className="mt-6 text-4xl font-extrabold leading-tight text-ink md:text-5xl lg:text-6xl">
              Bikin Coffee Shop Lebih{" "}
              <span className="text-orange">Memorable</span> dengan Photo
              Experience Instan
            </h1>

            <p className="mt-6 text-lg leading-relaxed text-ink/70">
              Pict n Pick menghadirkan Photobox dan Photoreceipt untuk membantu
              kafe meningkatkan customer experience, promosi organik, dan
              potensi pendapatan tambahan tanpa investasi alat.
            </p>

            <div className="mt-8 grid grid-cols-3 gap-3">
              {highlights.map((item) => (
                <div
                  key={item.text}
                  className="flex flex-col items-center gap-2 rounded-2xl bg-white p-4 text-center shadow-[0_4px_20px_rgba(31,26,23,0.05)]"
                >
                  <item.icon className="h-5 w-5 text-orange" />
                  <span className="text-xs font-semibold text-ink sm:text-sm">
                    {item.text}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <PrimaryButton href="#lead-form">Ajukan Kerja Sama</PrimaryButton>
              <SecondaryButton href="#data">
                Lihat Simulasi Revenue
              </SecondaryButton>
            </div>

            <p className="mt-6 text-sm text-ink/60">
              Cocok untuk coffee shop, community space, event corner, dan
              campaign seasonal.
            </p>
          </div>

          <SectionImage
            src="/images/hero-cafe-experience.png"
            alt="Pelanggan menikmati photo experience di coffee shop"
            aspect="portrait"
            priority
            className="ring-4 ring-peach/50"
          />
        </div>
      </div>
    </section>
  );
}
