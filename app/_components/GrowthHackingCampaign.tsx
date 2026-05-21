import {
  Eye,
  Heart,
  Megaphone,
  Repeat,
  Share2,
  TrendingUp,
} from "lucide-react";
import { Card, SectionContainer, SectionHeading } from "./ui";

/* Section 10: Growth Hacking — AAARRR framework */

const aaarrr = [
  {
    icon: Eye,
    letter: "A",
    title: "Awareness",
    desc: "Template foto membawa branding kafe — setiap foto jadi iklan gratis.",
  },
  {
    icon: Megaphone,
    letter: "A",
    title: "Acquisition",
    desc: "CTA QR, IG mention, dan campaign di kafe menarik pengunjung baru.",
  },
  {
    icon: Heart,
    letter: "A",
    title: "Activation",
    desc: "Pelanggan langsung mendapat hasil cetak — aha moment dalam hitungan detik.",
  },
  {
    icon: Repeat,
    letter: "R",
    title: "Retention",
    desc: "Template seasonal membuat pelanggan ingin mencoba lagi setiap bulan.",
  },
  {
    icon: Share2,
    letter: "R",
    title: "Referral",
    desc: "Pelanggan upload dan tag kafe — jangkauan organik meluas.",
  },
  {
    icon: TrendingUp,
    letter: "R",
    title: "Revenue",
    desc: "Profit sharing dari setiap transaksi — pendapatan tambahan tanpa effort besar.",
  },
];

export default function GrowthHackingCampaign() {
  return (
    <SectionContainer>
      <SectionHeading
        label="Growth Hacking"
        title="Branding Organik"
        description="Setiap elemen Pict n Pick dirancang untuk mendukung funnel AAARRR di coffee shop kamu."
      />

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {aaarrr.map((item) => (
          <Card key={item.title}>
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-600 text-lg font-bold text-white">
                {item.letter}
              </span>
              <item.icon className="h-5 w-5 text-orange" />
            </div>
            <h3 className="mt-4 font-semibold text-ink">{item.title}</h3>
            <p className="mt-2 text-sm text-ink/60 leading-relaxed">{item.desc}</p>
          </Card>
        ))}
      </div>
    </SectionContainer>
  );
}
