import { AlertCircle, CheckCircle2 } from "lucide-react";
import { Card, SectionContainer, SectionHeading, SectionImage } from "./ui";

/* Section 3: Problem & Solution — PAS framework */

const problems = [
  "Banyak kafe punya ambience bagus, tapi belum punya aktivitas tambahan.",
  "Pengunjung sering membuat konten, tapi branding kafe tidak selalu ikut terbawa.",
  "Tidak semua kafe punya ruang besar untuk photobox.",
  "Kafe butuh ide promosi yang tidak mengganggu operasional.",
];

export default function ProblemSolution() {
  return (
    <SectionContainer className="bg-white/50">
      <SectionHeading
        label="Problem & Solution"
        title="Bikin Nongkrong Lebih Berkesan"
      />

      <div className="grid items-start gap-10 lg:grid-cols-2">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
          {problems.map((problem) => (
            <Card key={problem} className="flex gap-4">
              <AlertCircle className="mt-0.5 h-5 w-5 shrink-0 text-orange" />
              <p className="text-ink/80 leading-relaxed">{problem}</p>
            </Card>
          ))}
        </div>

        <SectionImage
          src="/images/cafe-photo-memories.png"
          alt="Momen memorable di kafe dengan foto instan dan kopi"
          aspect="video"
        />
      </div>

      <Card className="mt-8 border-2 border-orange/20 bg-gradient-to-r from-cream to-peach/30">
        <div className="flex gap-4">
          <CheckCircle2 className="mt-0.5 h-6 w-6 shrink-0 text-orange" />
          <div>
            <p className="font-semibold text-ink">Solusinya?</p>
            <p className="mt-2 text-lg text-ink/80 leading-relaxed">
              Pict n Pick menawarkan dua pilihan photo experience:{" "}
              <strong>Photobox</strong> untuk kafe dengan area luas dan{" "}
              <strong>Photoreceipt</strong> untuk kafe yang lebih compact.
            </p>
          </div>
        </div>
      </Card>
    </SectionContainer>
  );
}
