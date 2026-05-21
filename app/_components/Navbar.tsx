'use client'

import { Menu, X } from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'
import { PrimaryButton } from './ui'

/* Section 1: Navbar — sticky navigation + anchor menu + primary CTA */

const navLinks = [
    { label: 'Product', href: '#produk' },
    { label: 'Benefit', href: '#benefit' },
    { label: 'Data', href: '#data' },
    { label: 'Partner', href: '#partner' },
    { label: 'FAQ', href: '#faq' },
]

export default function Navbar() {
    const [open, setOpen] = useState(false)

    return (
        <header className="sticky top-0 z-50 border-b border-ink/5 bg-cream/80 backdrop-blur-md">
            <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
                <a href="#" className="flex shrink-0 items-center">
                    <Image
                        src="/logo.png"
                        alt="Pict n Pick"
                        width={100}
                        height={36}
                        className="h-9 w-auto"
                        style={{ width: 'auto' }}
                        priority
                    />
                </a>

                {/* Desktop menu */}
                <ul className="hidden items-center gap-8 md:flex">
                    {navLinks.map((link) => (
                        <li key={link.href}>
                            <a href={link.href} className="text-sm font-medium text-ink/70 transition hover:text-orange">
                                {link.label}
                            </a>
                        </li>
                    ))}
                </ul>

                <div className="hidden md:block">
                    <PrimaryButton href="#lead-form">Ajukan Kerja Sama</PrimaryButton>
                </div>

                {/* Mobile toggle */}
                <button type="button" className="rounded-2xl border border-ink/10 bg-white p-2 md:hidden" onClick={() => setOpen(!open)} aria-label={open ? 'Tutup menu' : 'Buka menu'}>
                    {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </button>
            </nav>

            {/* Mobile menu */}
            {open && (
                <div className="border-t border-ink/5 bg-white px-4 py-4 md:hidden">
                    <ul className="flex flex-col gap-4">
                        {navLinks.map((link) => (
                            <li key={link.href}>
                                <a href={link.href} className="block text-base font-medium text-ink/80" onClick={() => setOpen(false)}>
                                    {link.label}
                                </a>
                            </li>
                        ))}
                        <li className="pt-2">
                            <PrimaryButton href="#lead-form" className="w-full" onClick={() => setOpen(false)}>
                                Ajukan Kerja Sama
                            </PrimaryButton>
                        </li>
                    </ul>
                </div>
            )}
        </header>
    )
}
