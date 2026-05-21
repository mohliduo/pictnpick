import { Card, PrimaryButton, SectionContainer, SectionHeading, SectionImage } from "./ui";

/* Section 5: Product — Photoreceipt (standalone) */

const cocokUntuk = [
  "Kafe kecil",
  "Area dekat kasir",
  "Waiting area",
  "Seasonal campaign",
  "Bundling menu",
];

export default function ProductPhotoreceipt() {
  return (
    <SectionContainer className="bg-white/50">
      <div className="grid items-start gap-12 lg:grid-cols-2">
        <SectionImage
          src="/images/photoreceipt-station.png"
          alt="Photoreceipt station compact di counter kafe"
          aspect="portrait"
          className="order-2 lg:order-1"
        />

        <div className="order-1 lg:order-2">
          <SectionHeading
            label="Produk"
            title="Photoreceipt: Kecil Bentuknya, Besar Kenangannya"
            description="Photoreceipt adalah layanan cetak foto berbentuk struk/receipt yang cocok untuk kafe dengan area terbatas. Simple, playful, dan mudah dicoba pelanggan secara spontan."
            align="left"
          />

          <Card>
            <p className="mb-3 font-semibold text-ink">Cocok untuk:</p>
            <ul className="flex flex-wrap gap-2">
              {cocokUntuk.map((item) => (
                <li
                  key={item}
                  className="rounded-full bg-cream px-3 py-1.5 text-sm text-ink/80"
                >
                  {item}
                </li>
              ))}
            </ul>
          </Card>

          <div className="mt-6">
            <PrimaryButton href="#lead-form">
              Diskusikan Penempatan Photoreceipt
            </PrimaryButton>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
}
