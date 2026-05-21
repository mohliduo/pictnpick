import {
  BadgeDollarSign,
  Leaf,
  Maximize2,
  Palette,
  Share2,
  Sparkles,
  TrendingUp,
  Users,
} from "lucide-react";
import { Card, SectionContainer, SectionHeading } from "./ui";

/* Section 8: Benefit for Cafe — FAB framework (benefit-focused) */

const benefits = [
  {
    icon: BadgeDollarSign,
    title: "Tanpa investasi alat",
    desc: "Alat disediakan Pict n Pick — kafe fokus ke operasional.",
  },
  {
    icon: Users,
    title: "Tanpa staf tambahan",
    desc: "Sistem self-service, tidak perlu hire operator khusus.",
  },
  {
    icon: TrendingUp,
    title: "Profit sharing bulanan",
    desc: "Dapat bagian dari setiap transaksi foto di kafe kamu.",
  },
  {
    icon: Palette,
    title: "Custom branding",
    desc: "Logo, warna, dan IG kafe ada di setiap hasil foto.",
  },
  {
    icon: Share2,
    title: "Konten organik",
    desc: "Pelanggan share ke sosmed — promosi gratis untuk kafe.",
  },
  {
    icon: Sparkles,
    title: "Campaign seasonal",
    desc: "Template bisa di-update untuk event & hari raya.",
  },
  {
    icon: Leaf,
    title: "Listrik rendah",
    desc: "Mulai Rp35.000/bulan — tidak memberatkan tagihan.",
  },
  {
    icon: Maximize2,
    title: "Area fleksibel",
    desc: "Mulai ±1 m² — cocok corner kecil maupun area luas.",
  },
];

export default function BenefitForCafe() {
  return (
    <SectionContainer id="benefit" className="scroll-mt-24">
      <SectionHeading
        label="Benefit"
        title="Benefit"
        description="Bukan cuma foto — ini customer experience yang bisa jadi sumber pendapatan tambahan."
      />

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {benefits.map((b) => (
          <Card key={b.title} className="transition hover:shadow-lg">
            <b.icon className="h-8 w-8 text-orange" />
            <h3 className="mt-4 font-semibold text-ink">{b.title}</h3>
            <p className="mt-2 text-sm text-ink/60 leading-relaxed">{b.desc}</p>
          </Card>
        ))}
      </div>
    </SectionContainer>
  );
}
