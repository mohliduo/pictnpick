import { SectionContainer, SectionHeading } from "./ui";

/* Section 14: FAQ — accordion native details/summary (accessible, no JS) */

const faqs = [
  {
    q: "Apakah kafe perlu membeli alat?",
    a: "Tidak, alat disediakan oleh Pict n Pick.",
  },
  {
    q: "Apakah butuh staf khusus?",
    a: "Tidak, sistem dibuat self-service.",
  },
  {
    q: "Apakah template bisa custom?",
    a: "Bisa, template dapat menyesuaikan logo, warna, campaign, dan akun Instagram kafe.",
  },
  {
    q: "Berapa kebutuhan area?",
    a: "Photobox ±1,5 m x 2 m, Photoreceipt ±1 m x 1 m.",
  },
  {
    q: "Bagaimana sistem pembagian hasil?",
    a: "Menggunakan profit sharing berdasarkan kesepakatan.",
  },
  {
    q: "Apakah cocok untuk kafe kecil?",
    a: "Cocok, terutama menggunakan Photoreceipt.",
  },
];

export default function Faq() {
  return (
    <SectionContainer id="faq" className="scroll-mt-24">
      <SectionHeading label="FAQ" title="Pertanyaan yang Sering Ditanyakan" />

      <div className="mx-auto max-w-2xl space-y-3">
        {faqs.map((faq) => (
          <details
            key={faq.q}
            className="group rounded-2xl border border-ink/10 bg-white shadow-sm"
          >
            <summary className="cursor-pointer list-none px-6 py-4 font-semibold text-ink transition hover:text-orange [&::-webkit-details-marker]:hidden">
              <span className="flex items-center justify-between gap-4">
                {faq.q}
                <span className="text-orange transition group-open:rotate-45">+</span>
              </span>
            </summary>
            <p className="border-t border-ink/5 px-6 pb-4 pt-2 text-ink/70 leading-relaxed">
              {faq.a}
            </p>
          </details>
        ))}
      </div>
    </SectionContainer>
  );
}
