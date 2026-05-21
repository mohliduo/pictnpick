import { AtSign, Mail, MessageCircle } from 'lucide-react'
import Image from 'next/image'

/* Section 15: Footer — brand info & kontak */

export default function Footer() {
    return (
        <footer className="border-t border-ink/10 bg-ink py-12 text-white">
            <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
                    <div>
                        <Image src="/logo.png" alt="Pict n Pick" width={160} height={40} className="h-10 w-auto" style={{ width: 'auto' }} />
                        <p className="mt-2 text-peach">Take a Pic, Pick a Memory</p>
                        <p className="mt-4 max-w-sm text-sm text-white/70">Photo experience untuk coffee shop — Photobox & Photoreceipt dengan profit sharing dan custom branding.</p>
                    </div>

                    <div className="flex flex-col gap-3 text-sm">
                        <a href="https://instagram.com/pictnpick_" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-white/80 transition hover:text-orange">
                            <AtSign className="h-4 w-4" />
                            @pictnpick_
                        </a>
                        <a href="https://wa.me/628xxxxxxxxxx" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-white/80 transition hover:text-orange">
                            <MessageCircle className="h-4 w-4" />
                            WhatsApp: 08xx-xxxx-xxxx
                        </a>
                        <a href="mailto:hello@pictnpick.com" className="flex items-center gap-2 text-white/80 transition hover:text-orange">
                            <Mail className="h-4 w-4" />
                            hello@pictnpick.com
                        </a>
                    </div>
                </div>

                <div className="mt-10 border-t border-white/10 pt-8">
                    <p className="text-xs font-semibold uppercase tracking-wide text-peach">Identitas Kelompok</p>
                    <ul className="mt-3 space-y-1.5 text-sm text-white/70">
                        <li>23.11.5772 — Muhammad Ridho Ramadhan</li>
                        <li>23.11.5793 — Laily Yudha Mukti</li>
                        <li>23.11.5810 — Muhammad Rafa Athalla Fawwaz</li>
                    </ul>
                </div>

                <p className="mt-8 text-center text-xs text-white/50">© {new Date().getFullYear()} Pict n Pick. Digital Business.</p>
            </div>
        </footer>
    )
}
