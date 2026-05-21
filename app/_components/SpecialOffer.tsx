import { Gift, Layout, Megaphone, BarChart3 } from "lucide-react";
import { Card, PrimaryButton, SectionContainer, SectionHeading } from "./ui";

/* Section 12: Special Offer — Early Partner Program (scarcity + urgency) */

const highlights = [
  { icon: Gift, text: "Free custom template awal" },
  { icon: Layout, text: "Setup signage dasar" },
  { icon: Megaphone, text: "Ide campaign launching" },
  { icon: BarChart3, text: "Evaluasi performa bulanan" },
];

export default function SpecialOffer() {
  return (
    <SectionContainer>
      <div className="rounded-[2rem] border-2 border-orange/20 bg-gradient-to-br from-peach/40 via-cream to-white p-8 md:p-12">
        <SectionHeading
          label="Special Offer"
          title="Early Partner Program"
          description="Untuk 3 kafe partner pertama, Pict n Pick menyediakan free custom template awal dan setup campaign launching."
        />

        <div className="grid gap-4 sm:grid-cols-2">
          {highlights.map((item) => (
            <Card key={item.text} className="flex items-center gap-4 !p-4">
              <item.icon className="h-8 w-8 shrink-0 text-orange" />
              <span className="font-medium text-ink">{item.text}</span>
            </Card>
          ))}
        </div>

        <div className="mt-8 text-center">
          <PrimaryButton href="#lead-form">Daftar Jadi Early Partner</PrimaryButton>
          <p className="mt-3 text-sm text-ink/50">
            Slot terbatas — 3 kafe pertama saja
          </p>
        </div>
      </div>
    </SectionContainer>
  );
}
