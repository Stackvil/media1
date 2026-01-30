import Link from 'next/link';
import { Gavel, Facebook, Twitter, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-primary-dark text-gray-300 mt-auto border-t border-gray-800">
            <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

                    {/* Brand Column */}
                    <div className="space-y-4">
                        <div className="flex items-center gap-2">
                            <Gavel className="h-6 w-6 text-secondary" />
                            <span className="font-serif text-xl font-bold text-white">The Justice Ledger</span>
                        </div>
                        <p className="text-sm leading-relaxed">
                            Trusted legal news, case updates, and public awareness. Bridging the gap between the courtroom and the community.
                        </p>
                        <div className="flex space-x-4">
                            <Link href="#" className="hover:text-secondary"><Facebook className="h-5 w-5" /></Link>
                            <Link href="#" className="hover:text-secondary"><Twitter className="h-5 w-5" /></Link>
                            <Link href="#" className="hover:text-secondary"><Linkedin className="h-5 w-5" /></Link>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="font-serif text-white font-bold mb-4">Categories</h3>
                        <ul className="space-y-2 text-sm">
                            <li><Link href="/categories/civil" className="hover:text-secondary">Civil Law</Link></li>
                            <li><Link href="/categories/criminal" className="hover:text-secondary">Criminal Defense</Link></li>
                            <li><Link href="/categories/family" className="hover:text-secondary">Family Law</Link></li>
                            <li><Link href="/categories/cyber" className="hover:text-secondary">Cybercrime</Link></li>
                        </ul>
                    </div>

                    {/* Support */}
                    <div>
                        <h3 className="font-serif text-white font-bold mb-4">Support & Info</h3>
                        <ul className="space-y-2 text-sm">
                            <li><Link href="/submit" className="hover:text-secondary">Submit a Case</Link></li>
                            <li><Link href="/about" className="hover:text-secondary">About Us</Link></li>
                            <li><Link href="/contact" className="hover:text-secondary">Contact</Link></li>
                            <li><Link href="/disclaimer" className="hover:text-secondary">Legal Disclaimer</Link></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="font-serif text-white font-bold mb-4">Contact Us</h3>
                        <ul className="space-y-2 text-sm">
                            <li className="flex items-center gap-2">
                                <Mail className="h-4 w-4" />
                                <span>tips@justiceledger.com</span>
                            </li>
                            <li>123 Legal Avenue, Court District</li>
                            <li>New Delhi, India</li>
                        </ul>
                    </div>

                </div>
                <div className="border-t border-gray-800 mt-12 pt-8 text-xs text-center">
                    <p>&copy; {new Date().getFullYear()} The Justice Ledger. All rights reserved. Not legal advice.</p>
                </div>
            </div>
        </footer>
    );
}
