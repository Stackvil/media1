import Link from 'next/link';
import NewsCard from '@/components/ui/NewsCard';

// Using same mock data as Categories page roughly
const allNews = [
    {
        title: "Supreme Court Sets New Precedent in Landmark Digital Privacy Case",
        summary: "In a historic ruling today, the Supreme Court declared that digital data privacy is a fundamental right...",
        category: "Cyber Law",
        date: "Oct 24, 2024",
        slug: "supreme-court-digital-privacy-ruling",
        imageUrl: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&q=80&w=1200",
    },
    {
        title: "New Tenancy Act 2024: Rights for Landlords and Tenants",
        summary: "The Ministry of Housing has released the final draft of the new Tenancy Act...",
        category: "Property",
        date: "Oct 23, 2024",
        slug: "new-tenancy-act-2024",
        imageUrl: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=800",
    },
    {
        title: "Cyberbullying Now a Criminal Offense Under New Code",
        summary: "The updated penal code now explicitly defines and penalizes cyberbullying with strict jail terms.",
        category: "Criminal",
        date: "Oct 20, 2024",
        slug: "cyberbullying-criminal-offense",
        imageUrl: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800",
    },
    {
        title: "Business Merger Laws Updated",
        summary: "New amendments to the Competition Act have introduced stricter regulations for mergers.",
        category: "Business",
        date: "Oct 19, 2024",
        slug: "business-merger-laws-updated",
        imageUrl: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800",
    },
    {
        title: "Family Court Simplifies Divorce",
        summary: "A new directive aims to reduce the cooling-off period for mutual consent divorce cases.",
        category: "Family",
        date: "Oct 21, 2024",
        slug: "family-court-divorce-proceedings",
        imageUrl: "https://images.unsplash.com/photo-1479142506502-19b3a3b7ff33?auto=format&fit=crop&q=80&w=800",
    },
];

export default function NewsPage() {
    return (
        <div className="space-y-8">
            <header className="border-b border-gray-200 pb-8 text-center md:text-left">
                <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-4">
                    Latest Legal Updates
                </h1>
                <p className="text-lg text-gray-600 max-w-2xl">
                    Stay informed with the most recent developments in civil, criminal, and corporate law.
                </p>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {allNews.map((news) => (
                    <NewsCard key={news.slug} {...news} />
                ))}
            </div>

            {/* Pagination Mock */}
            <div className="flex justify-center pt-8">
                <div className="flex gap-2">
                    <span className="px-4 py-2 bg-primary text-white rounded cursor-pointer">1</span>
                    <span className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded cursor-pointer transition-colors">2</span>
                    <span className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded cursor-pointer transition-colors">3</span>
                </div>
            </div>
        </div>
    );
}
