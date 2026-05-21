import { Card, PrimaryButton, SectionContainer, SectionHeading, SectionImage } from "./ui";

/* Section 4: Product — Photobox (standalone, tanpa bandingkan Photoreceipt) */

const cocokUntuk = [
  "Kafe dengan area luas",
  "Kafe dengan traffic tinggi",
  "Event komunitas",
  "Anniversary cafe",
  "Experience corner",
];

export default function ProductPhotobox() {
  return (
    <SectionContainer id="produk" className="scroll-mt-24">
      <div className="grid items-start gap-12 lg:grid-cols-2">
        <div>
          <SectionHeading
            label="Produk"
            title="Photobox: Spot Favorit di Sudut Kafe"
            description="Photobox adalah booth foto instan yang memungkinkan pelanggan berfoto mandiri, memilih template, lalu mendapatkan hasil cetak secara langsung."
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
              Diskusikan Penempatan Photobox
            </PrimaryButton>
          </div>
        </div>

        <SectionImage
          src="/images/photobox-corner.png"
          alt="Photobox corner di sudut coffee shop"
          aspect="portrait"
        />
      </div>
    </SectionContainer>
  );
}
