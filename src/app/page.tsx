import BreakingNewsBanner from '@/components/ui/BreakingNewsBanner';
import NewsCard from '@/components/ui/NewsCard';
import TrendingWidget from '@/components/widgets/TrendingWidget';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

// Mock Data
const featuredNews = {
  title: "Supreme Court Sets New Precedent in Landmark Digital Privacy Case",
  summary: "In a historic ruling today, the Supreme Court declared that digital data privacy is a fundamental right, overturning previous judgments. This decision will have far-reaching implications for tech giants and surveillance laws.",
  category: "Cyber Law",
  date: "Oct 24, 2024",
  slug: "supreme-court-digital-privacy-ruling",
  imageUrl: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&q=80&w=1200", // Licensed placeholder
};

const recentNews = [
  {
    title: "New Tenancy Act 2024: Rights for Landlords and Tenants",
    summary: "The Ministry of Housing has released the final draft of the new Tenancy Act, aiming to balance the rights of property owners and renters.",
    category: "Property",
    date: "Oct 23, 2024",
    slug: "new-tenancy-act-2024",
    imageUrl: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Corporate Fraud: CEO of TechGiant Indicted",
    summary: "Investigators have uncovered a massive detailed schema of financial irregularities amounting to over $500 million.",
    category: "Business",
    date: "Oct 22, 2024",
    slug: "corporate-fraud-ceo-indicted",
    imageUrl: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Family Court Simplifies Divorce Proceedings for Mutual Consent",
    summary: "A new directive aims to reduce the cooling-off period for mutual consent divorce cases to speed up resolution.",
    category: "Family",
    date: "Oct 21, 2024",
    slug: "family-court-divorce-proceedings",
    imageUrl: "https://images.unsplash.com/photo-1479142506502-19b3a3b7ff33?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Cyberbullying Now a Criminal Offense Under New Code",
    summary: "The updated penal code now explicitly defines and penalizes cyberbullying with strict jail terms.",
    category: "Criminal",
    date: "Oct 20, 2024",
    slug: "cyberbullying-criminal-offense",
    imageUrl: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800",
  },
];

export default function Home() {
  return (
    <div className="space-y-12">
      <BreakingNewsBanner />

      {/* Hero Section */}
      <section className="animate-fade-in-up">
        <h2 className="sr-only">Featured Story</h2>
        <NewsCard {...featuredNews} featured={true} />
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Main Feed */}
        <div className="lg:col-span-8 space-y-12">
          <section>
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-serif font-bold text-gray-900 relative pl-4 after:content-[''] after:absolute after:left-0 after:top-1 after:bottom-1 after:w-1 after:bg-secondary">
                Latest Insights
              </h2>
              <Link href="/news" className="text-secondary font-bold text-sm hover:underline flex items-center">
                View All <ChevronRight className="w-4 h-4 ml-1" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {recentNews.map((news) => (
                <NewsCard key={news.slug} {...news} />
              ))}
            </div>
          </section>

          {/* CTA Section */}
          <section className="bg-primary rounded-2xl p-8 md:p-12 text-center text-white relative overflow-hidden">
            <div className="relative z-10 max-w-2xl mx-auto space-y-6">
              <h2 className="text-3xl md:text-4xl font-serif font-bold">Have a Legal Story to Share?</h2>
              <p className="text-gray-300 text-lg">
                We believe in the power of public awareness. If you have verified information about a case or a legal tip, submit it securely to our editorial team.
              </p>
              <Link href="/submit" className="inline-block bg-secondary hover:bg-secondary-light text-white font-bold py-4 px-8 rounded-lg transition-transform hover:-translate-y-1 shadow-lg border border-white/10">
                Submit a Case Profile
              </Link>
            </div>
            <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none">
              <svg className="w-64 h-64 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2L2 22h20L12 2zm0 3.8L18.4 19H5.6L12 5.8zM11 16h2v2h-2v-2zm0-6h2v4h-2v-4z" /></svg>
            </div>
          </section>
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-4 space-y-8">
          <TrendingWidget />

          {/* Newsletter Stand-in */}
          <div className="bg-gray-50 border border-gray-200 p-6 rounded-lg text-center">
            <h3 className="font-serif font-bold text-xl mb-2">Stay Informed</h3>
            <p className="text-sm text-gray-600 mb-4">Get the latest legal updates directly to your inbox.</p>
            <div className="space-y-2">
              <input type="email" placeholder="Your email address" className="w-full px-4 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-secondary focus:border-secondary outline-none transition-shadow" />
              <button className="w-full bg-primary text-white font-bold py-2 rounded hover:bg-primary-light transition-colors">
                Subscribe
              </button>
              <p className="text-xs text-gray-400 mt-2">No spam, unsubscribe anytime.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
