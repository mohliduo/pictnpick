import { Camera, CreditCard, Footprints, Image, Printer, ShoppingBag } from 'lucide-react'
import { SectionContainer, SectionHeading, SectionImage } from './ui'

/* Section 9: How It Works — 6 langkah customer journey */

const steps = [
    { icon: Footprints, title: 'Datang ke area', desc: 'Pelanggan datang ke area Pict n Pick' },
    { icon: ShoppingBag, title: 'Pilih paket', desc: 'Pilih produk/paket foto' },
    { icon: CreditCard, title: 'Bayar', desc: 'Lakukan pembayaran' },
    { icon: Camera, title: 'Ambil foto', desc: 'Ambil foto di booth/receipt station' },
    { icon: Image, title: 'Pilih template', desc: 'Pilih template/filter favorit' },
    { icon: Printer, title: 'Cetak & QR', desc: 'Cetak foto dan scan QR untuk digital copy' },
]

export default function HowItWorks() {
    return (
        <SectionContainer className="bg-white/50">
            <SectionHeading label="Cara Kerja" title="Gampang, Self-Service, Tanpa Ribet" />

            <div className="mb-12 lg:hidden">
                <SectionImage src="/images/how-it-works-kiosk.png" alt="Pelanggan menggunakan kiosk foto self-service di kafe" aspect="video" />
            </div>

            {/* Desktop horizontal stepper */}
            <div className="hidden lg:block">
                <div className="relative flex justify-between">
                    <div className="absolute left-0 right-0 top-8 h-0.5 bg-peach" />
                    {steps.map((step, i) => (
                        <div key={step.title} className="relative z-10 flex w-[14%] flex-col items-center text-center">
                            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-orange-600 text-white shadow-lg">
                                <step.icon className="h-7 w-7" />
                            </div>
                            <span className="mt-3 text-xs font-bold text-orange">Step {i + 1}</span>
                            <p className="mt-1 text-sm font-semibold text-ink">{step.title}</p>
                            <p className="mt-1 text-xs text-ink/60">{step.desc}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Mobile vertical stepper */}
            <div className="space-y-6 lg:hidden">
                {steps.map((step, i) => (
                    <div key={step.title} className="flex gap-4">
                        <div className="flex flex-col items-center">
                            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-orange-600 text-white">
                                <step.icon className="h-5 w-5" />
                            </div>
                            {i < steps.length - 1 && <div className="mt-2 h-full w-0.5 flex-1 bg-peach" />}
                        </div>
                        <div className="pb-6">
                            <span className="text-xs font-bold text-orange">Step {i + 1}</span>
                            <p className="font-semibold text-ink">{step.title}</p>
                            <p className="text-sm text-ink/60">{step.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
        </SectionContainer>
    )
}
