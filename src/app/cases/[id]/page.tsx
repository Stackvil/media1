import { notFound } from 'next/navigation';
import Image from 'next/image';
import CaseTimeline from '@/components/ui/CaseTimeline';
import { Calendar, Gavel, MapPin, Share2 } from 'lucide-react';

// Mock Data
const caseDatabase: any = {
    "supreme-court-digital-privacy-ruling": {
        title: "Supreme Court Sets New Precedent in Landmark Digital Privacy Case",
        summary: "In a historic ruling today, the Supreme Court declared that digital data privacy is a fundamental right, overturning previous judgments. This decision will have far-reaching implications for tech giants and surveillance laws.",
        content: `
            <p class="mb-4">The Supreme Court Bench, led by the Chief Justice, delivered a unanimous verdict today stating that the right to privacy extends to the digital realm. This ruling comes after months of deliberation on the constitutional validity of mass surveillance programs.</p>
            <p class="mb-4">"Technological progress cannot come at the cost of fundamental dignity," the judgment noted. The court has directed the government to formulate a robust data protection framework within 6 months.</p>
            <h3 class="text-2xl font-bold font-serif my-6 text-gray-800">Impact on Big Tech</h3>
            <p class="mb-4">Major technology companies operating in the region will now have to comply with stricter local storage norms and consent mechanisms. Legal experts argue this is a watershed moment for digital rights advocacy.</p>
        `,
        image: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&q=80&w=1200",
        court: "Supreme Court of India",
        location: "New Delhi",
        date: "Oct 24, 2024",
        status: "Verdict Delivered",
        events: [
            { date: "Jan 10, 2024", title: "Petition Filed", description: "Public Interest Litigation filed by privacy activists.", status: "completed" },
            { date: "Mar 15, 2024", title: "Hearings Begin", description: "A 5-judge constitution bench begins hearing arguments.", status: "completed" },
            { date: "Aug 20, 2024", title: "Judgment Hosted", description: "Court reserves judgment after concluding hearings.", status: "completed" },
            { date: "Oct 24, 2024", title: "Verdict Delivered", description: "Court rules in favor of privacy as a fundamental right.", status: "current" },
        ]
    }
};

type Props = {
    params: Promise<{ id: string }>
}

export default async function CaseDetailPage({ params }: Props) {
    const { id } = await params;
    const caseData = caseDatabase[id];

    if (!caseData) {
        return (
            <div className="container mx-auto py-20 text-center">
                <h1 className="text-4xl font-serif font-bold mb-4">Case File Not Found</h1>
                <p className="text-gray-600">The requested case record does not exist or has been moved.</p>
            </div>
        );
    }

    return (
        <article className="max-w-4xl mx-auto">
            {/* Header */}
            <header className="mb-8">
                <div className="flex gap-2 mb-4">
                    <span className="bg-secondary text-white text-xs font-bold px-3 py-1 uppercase rounded-sm">
                        {caseData.status}
                    </span>
                </div>
                <h1 className="text-3xl md:text-5xl font-serif font-bold text-gray-900 leading-tight mb-6">
                    {caseData.title}
                </h1>
                <div className="flex flex-wrap items-center gap-6 text-sm text-gray-600 border-b border-gray-200 pb-8">
                    <span className="flex items-center gap-2"><Gavel className="w-4 h-4" /> {caseData.court}</span>
                    <span className="flex items-center gap-2"><MapPin className="w-4 h-4" /> {caseData.location}</span>
                    <span className="flex items-center gap-2"><Calendar className="w-4 h-4" /> {caseData.date}</span>
                </div>
            </header>

            {/* Featured Image */}
            <div className="relative h-[400px] w-full rounded-xl overflow-hidden mb-10 shadow-lg">
                <Image src={caseData.image} alt={caseData.title} fill className="object-cover" />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                {/* Main Content */}
                <div className="lg:col-span-8">
                    <div className="prose prose-lg max-w-none prose-headings:font-serif prose-a:text-secondary">
                        <p className="lead text-xl text-gray-700 italic border-l-4 border-secondary pl-4 mb-8">
                            {caseData.summary}
                        </p>
                        <div dangerouslySetInnerHTML={{ __html: caseData.content }} />
                    </div>
                </div>

                {/* Sidebar / Timeline */}
                <div className="lg:col-span-4 space-y-8">
                    <div className="bg-gray-50 p-6 rounded-lg border border-gray-100">
                        <h3 className="font-serif font-bold text-lg mb-4 text-gray-900">Case Timeline</h3>
                        <CaseTimeline events={caseData.events} />
                    </div>

                    <div className="bg-white p-6 rounded-lg border border-gray-200 text-center">
                        <h3 className="font-serif font-bold text-gray-900 mb-2">Share this Case</h3>
                        <div className="flex justify-center gap-4 mt-4">
                            <button className="p-2 bg-gray-100 rounded-full hover:bg-blue-100 hover:text-blue-600 transition-colors"><Share2 className="w-5 h-5" /></button>
                        </div>
                    </div>
                </div>
            </div>
        </article>
    );
}
