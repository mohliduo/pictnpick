import { BadgeCheck, Coffee, Settings, Sparkles, Wrench } from 'lucide-react'
import { Card, SectionContainer, SectionHeading, SectionImage } from './ui'

/* Section 11: Social Proof & Trust — placeholder jujur (belum ada testimoni asli) */

const trustBadges = [
    { icon: Coffee, text: 'Pilot partnership available' },
    { icon: BadgeCheck, text: 'Designed for coffee shop collaboration' },
    { icon: Sparkles, text: 'Self-service flow' },
    { icon: Settings, text: 'Custom template support' },
    { icon: Wrench, text: 'Maintenance by Pict n Pick' },
]

export default function SocialProofTrust() {
    return (
        <SectionContainer id="partner" className="scroll-mt-24 bg-white/50">
            <SectionHeading label="Trust" title="Ready to Collaborate!" description="Kami sedang membuka pilot partnership — jadilah salah satu kafe partner pertama." />

            <div className="flex flex-wrap justify-center gap-3">
                {trustBadges.map((badge) => (
                    <div key={badge.text} className="flex items-center gap-2 rounded-full border border-ink/10 bg-white px-4 py-2 text-sm font-medium text-ink/80 shadow-sm">
                        <badge.icon className="h-4 w-4 text-orange" />
                        {badge.text}
                    </div>
                ))}
            </div>

            <div className="mt-12 grid items-center gap-8 lg:grid-cols-2">
                <SectionImage src="/images/cafe-photo-memories.png" alt="Partner kafe dan pengalaman foto yang memorable" aspect="video" />

                <Card className="text-center lg:text-left">
                    <p className="text-4xl text-orange/30">&ldquo;</p>
                    <p className="text-lg italic text-ink/80 leading-relaxed">Pict n Pick membantu kafe menghadirkan aktivitas kecil yang memorable tanpa mengganggu operasional.</p>
                    <p className="mt-4 text-sm font-semibold text-ink">— Coffee Shop Partner</p>
                </Card>
            </div>
        </SectionContainer>
    )
}
