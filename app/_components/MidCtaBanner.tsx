import { PrimaryButton } from './ui'

/* Mid-page CTA — konsisten dengan primary CTA campaign */

export default function MidCtaBanner() {
    return (
        <section className="py-12 md:py-16">
            <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
                <div className="rounded-4xl bg-linear-to-r from-orange to-orange-600 px-8 py-12 text-center text-white shadow-[0_20px_60px_rgba(160,193,237,0.4)] md:px-16">
                    <p className="text-sm font-semibold uppercase tracking-wide text-white/80">Siap tingkatkan experience kafe kamu?</p>
                    <h2 className="mt-3 text-2xl font-bold md:text-4xl">Mulai diskusi kerja sama hari ini — tanpa investasi alat</h2>
                    <p className="mx-auto mt-4 max-w-xl text-white/80">Photobox atau Photoreceipt, kami bantu pilih yang paling cocok dengan area dan traffic kafe kamu.</p>
                    <div className="mt-8">
                        <PrimaryButton href="#lead-form" className="bg-white text-orange-600! hover:bg-cream hover:text-white!">
                            Ajukan Kerja Sama
                        </PrimaryButton>
                    </div>
                </div>
            </div>
        </section>
    )
}
