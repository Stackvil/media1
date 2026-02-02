'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Menu, Search, X } from 'lucide-react';
import { useState } from 'react';
import { cn } from '@/lib/utils';

const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Breaking News', href: '/news' },
    { name: 'Criminal', href: '/categories/criminal' },
    { name: 'Civil', href: '/categories/civil' },
    { name: 'Family', href: '/categories/family' },
    { name: 'Business', href: '/categories/business' },
    { name: 'Submit Case', href: '/submit' },
];

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <header className="bg-primary text-white sticky top-0 z-50 shadow-lg border-b-4 border-secondary">
            <nav className="container mx-auto px-4 py-4 flex items-center justify-between" aria-label="Global">
                <div className="flex lg:flex-1">
                    <Link href="/" className="-m-1.5 p-1.5 flex items-center gap-2 group">
                        <span className="sr-only">The Justice Ledger</span>
                        <div className="relative h-12 w-12 overflow-hidden rounded-full bg-white flex items-center justify-center border-2 border-white transition-transform group-hover:scale-105">
                            <Image
                                src="/image/crk logo.jpg"
                                alt="CRK Logo"
                                width={64}
                                height={64}
                                className="h-full w-full object-cover scale-150"
                            />
                        </div>
                        <span className="font-serif text-2xl font-bold tracking-tight text-white">
                            The Justice <span className="text-secondary">Ledger</span>
                        </span>
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <div className="flex lg:hidden">
                    <button
                        type="button"
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-300 hover:text-white"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        <span className="sr-only">Open main menu</span>
                        {mobileMenuOpen ? (
                            <X className="h-6 w-6" aria-hidden="true" />
                        ) : (
                            <Menu className="h-6 w-6" aria-hidden="true" />
                        )}
                    </button>
                </div>

                {/* Desktop Navigation */}
                <div className="hidden lg:flex lg:gap-x-8 items-center">
                    {navigation.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className="text-sm font-semibold leading-6 text-gray-100 hover:text-secondary transition-colors uppercase tracking-wide gun-trigger hover-recoil relative"
                        >
                            {item.name}
                        </Link>
                    ))}
                    <button className="text-gray-300 hover:text-white">
                        <Search className="h-5 w-5" />
                    </button>
                </div>
            </nav>

            {/* Mobile Menu */}
            <div className={cn("lg:hidden", mobileMenuOpen ? "block" : "hidden")}>
                <div className="space-y-1 px-4 pb-3 pt-2 bg-primary-dark">
                    {navigation.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-primary-light hover:text-white"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            {item.name}
                        </Link>
                    ))}
                </div>
            </div>
        </header>
    );
}
