import { Card, SectionContainer, SectionHeading } from './ui'

/* Section 6: Data & Revenue Simulation — trust element dengan angka finansial */

const photoboxScenarios = [
    {
        tier: 'Konservatif',
        sessions: '10 sesi/hari',
        revenue: 'Rp9.000.000',
        sharing: 'Rp1.440.000',
    },
    {
        tier: 'Moderat',
        sessions: '15 sesi/hari',
        revenue: 'Rp13.500.000',
        sharing: 'Rp2.790.000',
    },
    {
        tier: 'Optimis',
        sessions: '25 sesi/hari',
        revenue: 'Rp22.500.000',
        sharing: 'Rp5.490.000',
    },
]

const photoreceiptScenarios = [
    {
        tier: 'Konservatif',
        sessions: '10 sesi/hari',
        revenue: 'Rp3.000.000',
        sharing: 'Rp802.500',
    },
    {
        tier: 'Moderat',
        sessions: '15 sesi/hari',
        revenue: 'Rp4.500.000',
        sharing: 'Rp1.252.500',
    },
    {
        tier: 'Optimis',
        sessions: '25 sesi/hari',
        revenue: 'Rp7.500.000',
        sharing: 'Rp2.152.500',
    },
]

function ScenarioGroup({ title, scenarios }: { title: string; scenarios: typeof photoboxScenarios }) {
    return (
        <div>
            <h3 className="mb-4 text-xl font-bold text-ink">{title}</h3>
            <div className="grid gap-4 md:grid-cols-3">
                {scenarios.map((s) => (
                    <Card key={s.tier} className={s.tier === 'Optimis' ? 'border-2 border-orange/30 bg-gradient-to-b from-white to-peach/20' : ''}>
                        <span className="rounded-full bg-peach px-3 py-1 text-xs font-semibold text-orange-600">{s.tier}</span>
                        <p className="mt-3 text-sm text-ink/60">{s.sessions}</p>
                        <p className="mt-4 text-sm text-ink/50">Revenue/bulan</p>
                        <p className="text-xl font-bold text-ink">{s.revenue}</p>
                        <p className="mt-3 text-sm text-ink/50">Sharing kafe (30%)</p>
                        <p className="text-lg font-bold text-orange">{s.sharing}</p>
                    </Card>
                ))}
            </div>
        </div>
    )
}

export default function RevenueSimulation() {
    return (
        <SectionContainer id="data" className="scroll-mt-24">
            <SectionHeading label="Data & Revenue" title="Revenue Baru dari Experience Baru" description="Simulasi pendapatan berdasarkan skenario traffic — membantu kamu membayangkan potensi profit sharing bulanan." />

            <div className="space-y-12">
                <ScenarioGroup title="Photobox" scenarios={photoboxScenarios} />
                <ScenarioGroup title="Photoreceipt" scenarios={photoreceiptScenarios} />
            </div>

            <p className="mt-10 rounded-2xl bg-cream px-6 py-4 text-center text-sm text-ink/60">Simulasi bersifat estimasi dan dapat berubah berdasarkan traffic pengunjung, lokasi alat, promosi, dan jam operasional kafe.</p>
        </SectionContainer>
    )
}
