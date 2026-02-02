'use client';

import { useRouter, usePathname } from 'next/navigation';
import { Home, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function NavigationButtons() {
    const router = useRouter();
    const pathname = usePathname();

    // Don't show back button on home page
    const isHomePage = pathname === '/';

    return (
        <div className="fixed bottom-8 right-8 flex flex-col gap-4 z-[10000]">
            {!isHomePage && (
                <button
                    onClick={() => router.back()}
                    className="flex items-center justify-center w-14 h-14 bg-accent text-white rounded-full shadow-2xl hover:scale-110 transition-transform active:scale-95 group relative hover-recoil"
                    title="Go Back"
                >
                    <ArrowLeft className="w-6 h-6" />
                    <span className="absolute right-full mr-4 bg-primary text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                        Back to Previous
                    </span>
                </button>
            )}

            <Link
                href="/"
                className="flex items-center justify-center w-14 h-14 bg-secondary text-white rounded-full shadow-2xl hover:scale-110 transition-transform active:scale-95 group relative hover-recoil"
                title="Go Home"
            >
                <Home className="w-6 h-6" />
                <span className="absolute right-full mr-4 bg-primary text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                    Back to Home
                </span>
            </Link>
        </div>
    );
}
