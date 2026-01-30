import Link from 'next/link';
import { TrendingUp, ArrowRight } from 'lucide-react';

export default function TrendingWidget() {
    const trendingCases = [
        { id: 1, title: "Supreme Court Rulings on Digital Privacy 2024", category: "Cyber Law" },
        { id: 2, title: "New Real Estate Regulations Explained", category: "Property" },
        { id: 3, title: "High Profile Corporate Fraud Case Verdict", category: "Business" },
        { id: 4, title: "Family Law Amendments: What You Need to Know", category: "Family" },
    ];

    return (
        <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
            <div className="flex items-center gap-2 mb-6 pb-4 border-b border-gray-100">
                <TrendingUp className="w-5 h-5 text-secondary" />
                <h3 className="font-serif text-lg font-bold text-gray-900">Trending Now</h3>
            </div>

            <ul className="space-y-4">
                {trendingCases.map((item, index) => (
                    <li key={item.id} className="group">
                        <Link href="#" className="block">
                            <span className="text-xs text-primary-light font-medium uppercase">{item.category}</span>
                            <h4 className="font-medium text-gray-800 group-hover:text-secondary transition-colors mt-1">
                                {item.title}
                            </h4>
                        </Link>
                        {index !== trendingCases.length - 1 && <div className="h-px bg-gray-50 mt-4" />}
                    </li>
                ))}
            </ul>

            <Link href="/news" className="flex items-center justify-center w-full mt-6 py-2 bg-gray-50 text-xs font-bold text-gray-600 hover:bg-gray-100 rounded transition-colors uppercase tracking-wide">
                View All Trending <ArrowRight className="w-4 h-4 ml-1" />
            </Link>
        </div>
    );
}
