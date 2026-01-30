import Link from 'next/link';

export default function AboutPage() {
    return (
        <div className="max-w-4xl mx-auto space-y-12">
            <header className="text-center space-y-4">
                <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary">About Us</h1>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                    Dedicated to truth, transparency, and the pursuit of justice.
                </p>
            </header>

            <section className="prose prose-lg max-w-none prose-headings:font-serif">
                <p className="lead text-xl font-medium text-gray-800">
                    The Justice Ledger was founded with a single mission: to demystify the legal system and bring verified, impactful stories to the public eye.
                </p>
                <p>
                    In a world where legal proceedings are often shrouded in complexity and jargon, we strive to be the bridge. We cover everything from landmark Supreme Court rulings to local civil disputes that affect everyday citizens. Our team consists of legal journalists, retired advocates, and civic volunteers committed to ethical reporting.
                </p>

                <h3>Our Mission</h3>
                <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Educate:</strong> Translate complex legalese into clear, understandable language.</li>
                    <li><strong>Empower:</strong> Provide citizens with knowledge about their rights and legal remedies.</li>
                    <li><strong>Advocate:</strong> Highlight systemic issues and ethical advocacy.</li>
                </ul>

                <h3>Our Ethics</h3>
                <p>
                    We adhere to strict journalistic standards. Every case profile we publish is verified against public records or direct sources. We do not engage in sensationalism or prejudice. We respect the privacy of minors and victims of sensitive crimes.
                </p>
            </section>

            <div className="bg-primary text-white rounded-xl p-8 text-center space-y-6">
                <h2 className="text-3xl font-serif font-bold">Join Our Mission</h2>
                <p className="text-gray-300">
                    Whether you are a lawyer, a student, or a concerned citizen, your voice matters.
                </p>
                <div className="flex justify-center gap-4">
                    <Link href="/contact" className="bg-secondary hover:bg-secondary-light text-white font-bold py-3 px-6 rounded-lg transition-colors">
                        Contact Us
                    </Link>
                    <Link href="/submit" className="bg-transparent border border-white hover:bg-white/10 text-white font-bold py-3 px-6 rounded-lg transition-colors">
                        Submit a Tip
                    </Link>
                </div>
            </div>
        </div>
    );
}
