import Image from 'next/image';
import Link from 'next/link';
import { Calendar, Clock, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface NewsCardProps {
    title: string;
    summary: string;
    category: string;
    date: string;
    imageUrl?: string;
    slug: string;
    featured?: boolean;
}

export default function NewsCard({ title, summary, category, date, imageUrl, slug, featured = false }: NewsCardProps) {
    return (
        <Link href={`/news/${slug}`} className="block">
            <article className={cn(
                "flex flex-col group bg-white rounded-lg overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-shadow hover-target hover-flash relative cursor-pointer",
                featured ? "md:grid md:grid-cols-2 md:gap-8 min-h-[400px]" : ""
            )}>
                {/* Image Section */}
                <div className={cn("relative overflow-hidden", featured ? "md:h-full h-64" : "h-56")}>
                    <div className="absolute inset-0 bg-gray-200 animate-pulse" /> {/* Placeholder */}
                    {imageUrl ? (
                        <Image
                            src={imageUrl}
                            alt={title}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                    ) : (
                        <div className="flex items-center justify-center h-full bg-primary/5 text-primary-light">
                            <span className="font-serif italic">No Image</span>
                        </div>
                    )}
                    <span className="absolute top-4 left-4 bg-secondary text-white text-xs font-bold px-3 py-1 uppercase tracking-wider rounded-sm">
                        {category}
                    </span>
                </div>

                {/* Content Section */}
                <div className="p-6 flex flex-col justify-between">
                    <div className="space-y-4">
                        <div className="flex items-center text-xs text-gray-500 gap-4">
                            <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {date}</span>
                            <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> 5 min read</span>
                        </div>

                        <h3 className={cn("font-serif font-bold text-gray-900 group-hover:text-primary transition-colors", featured ? "text-3xl lg:text-4xl" : "text-xl")}>
                            {title}
                        </h3>

                        <p className={cn("text-gray-600 leading-relaxed", featured ? "text-lg" : "text-sm line-clamp-3")}>
                            {summary}
                        </p>
                    </div>

                    <div className="mt-6">
                        <span className="inline-flex items-center text-secondary font-bold text-sm hover:text-secondary-dark group/link">
                            Read Full Story
                            <ChevronRight className="w-4 h-4 ml-1 group-hover/link:translate-x-1 transition-transform" />
                        </span>
                    </div>
                </div>
            </article>
        </Link>
    );
}
