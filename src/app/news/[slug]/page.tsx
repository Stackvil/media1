import Image from 'next/image';
import { notFound } from 'next/navigation';
import { Calendar, Clock, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

// Mock data - in a real app, this would come from a database or CMS
const allNewsArticles = [
    {
        slug: "supreme-court-digital-privacy-ruling",
        title: "Supreme Court Sets New Precedent in Landmark Digital Privacy Case",
        summary: "In a historic ruling today, the Supreme Court declared that digital data privacy is a fundamental right, overturning previous judgments. This decision will have far-reaching implications for tech giants and surveillance laws.",
        category: "Cyber Law",
        date: "Oct 24, 2024",
        imageUrl: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&q=80&w=1200",
        content: `
            <p>In a landmark decision that will reshape the digital landscape, the Supreme Court today declared that digital data privacy is a fundamental right under Article 21 of the Constitution. This historic ruling overturns several previous judgments and sets a new precedent for how personal data is handled in the digital age.</p>
            
            <h2>Key Highlights of the Judgment</h2>
            <p>The bench, led by Chief Justice, unanimously held that the right to privacy extends to all forms of digital data, including metadata, browsing history, and location information. The court emphasized that in an increasingly digital world, the protection of personal data is essential to preserve individual autonomy and dignity.</p>
            
            <h2>Implications for Tech Companies</h2>
            <p>This decision will have far-reaching implications for technology companies operating in the country. Companies will now be required to obtain explicit consent before collecting, processing, or sharing user data. The court has given the government six months to frame comprehensive data protection legislation.</p>
            
            <h2>Impact on Surveillance Laws</h2>
            <p>The ruling also impacts existing surveillance laws, requiring law enforcement agencies to obtain judicial warrants before accessing digital communications. This marks a significant shift in the balance between national security and individual privacy rights.</p>
            
            <h2>Expert Reactions</h2>
            <p>Legal experts have hailed the decision as a watershed moment in Indian jurisprudence. "This judgment recognizes that privacy is not a luxury but a fundamental right in the digital age," said a prominent constitutional lawyer.</p>
            
            <p>The decision is expected to influence similar cases across the globe and may serve as a model for other jurisdictions grappling with digital privacy issues.</p>
        `
    },
    {
        slug: "new-tenancy-act-2024",
        title: "New Tenancy Act 2024: Rights for Landlords and Tenants",
        summary: "The Ministry of Housing has released the final draft of the new Tenancy Act, aiming to balance the rights of property owners and renters.",
        category: "Property",
        date: "Oct 23, 2024",
        imageUrl: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=800",
        content: `
            <p>The Ministry of Housing and Urban Affairs has released the final draft of the New Tenancy Act 2024, marking a significant overhaul of rental laws in the country. The legislation aims to create a balanced framework that protects both landlords and tenants while promoting transparency in the rental market.</p>
            
            <h2>Major Provisions</h2>
            <p>The new act introduces several key provisions including mandatory written rental agreements, standardized security deposit limits (not exceeding three months' rent), and clear guidelines for rent increases. The act also establishes a dispute resolution mechanism to handle conflicts between landlords and tenants.</p>
            
            <h2>Tenant Protections</h2>
            <p>Tenants will benefit from enhanced protections against arbitrary eviction, with landlords required to provide at least 60 days' notice. The act also mandates that rental properties meet minimum habitability standards and prohibits discrimination based on religion, caste, or occupation.</p>
            
            <h2>Landlord Rights</h2>
            <p>For property owners, the act streamlines the eviction process in cases of non-payment or property damage, while ensuring fair compensation. Landlords will also have the right to verify tenant credentials through a centralized database.</p>
            
            <h2>Implementation Timeline</h2>
            <p>The act is expected to come into effect from next month, with a six-month transition period for existing rental agreements to comply with the new provisions.</p>
        `
    },
    {
        slug: "corporate-fraud-ceo-indicted",
        title: "Corporate Fraud: CEO of TechGiant Indicted",
        summary: "Investigators have uncovered a massive detailed schema of financial irregularities amounting to over $500 million.",
        category: "Business",
        date: "Oct 22, 2024",
        imageUrl: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800",
        content: `
            <p>In a shocking development, the CEO of TechGiant Corporation has been indicted on multiple charges of corporate fraud, following a year-long investigation by federal authorities. The investigation has uncovered a sophisticated scheme of financial irregularities totaling over $500 million.</p>
            
            <h2>The Allegations</h2>
            <p>According to the indictment, the CEO allegedly orchestrated a complex fraud scheme involving inflated revenue figures, hidden liabilities, and misappropriation of company funds. The scheme reportedly began in 2019 and continued until early this year.</p>
            
            <h2>Investigation Details</h2>
            <p>Federal investigators worked in collaboration with forensic accountants to uncover the fraud. The investigation revealed that the company had been using shell companies to hide losses and inflate profits, misleading investors and regulators.</p>
            
            <h2>Market Impact</h2>
            <p>Following the announcement, TechGiant's stock plummeted by 45%, wiping out billions in market capitalization. Several institutional investors have filed lawsuits seeking damages.</p>
            
            <h2>Legal Proceedings</h2>
            <p>The CEO faces up to 20 years in prison if convicted on all charges. The trial is expected to begin next quarter, with prosecutors indicating they have substantial evidence including emails, financial records, and witness testimony.</p>
        `
    },
    {
        slug: "family-court-divorce-proceedings",
        title: "Family Court Simplifies Divorce Proceedings for Mutual Consent",
        summary: "A new directive aims to reduce the cooling-off period for mutual consent divorce cases to speed up resolution.",
        category: "Family",
        date: "Oct 21, 2024",
        imageUrl: "https://images.unsplash.com/photo-1479142506502-19b3a3b7ff33?auto=format&fit=crop&q=80&w=800",
        content: `
            <p>In a progressive move aimed at reducing the emotional and financial burden on separating couples, family courts across the country have issued a new directive to streamline mutual consent divorce proceedings. The directive significantly reduces the mandatory cooling-off period and introduces digital filing options.</p>
            
            <h2>Reduced Waiting Period</h2>
            <p>The most significant change is the reduction of the cooling-off period from six months to three months for couples seeking divorce by mutual consent. In exceptional circumstances, courts may waive this period entirely if both parties demonstrate genuine consent and have settled all matters amicably.</p>
            
            <h2>Digital Filing System</h2>
            <p>The directive also introduces a comprehensive digital filing system, allowing couples to submit divorce petitions and related documents online. This eliminates the need for multiple court appearances and reduces processing time.</p>
            
            <h2>Mediation Services</h2>
            <p>Courts will now provide mandatory mediation services to help couples resolve issues related to child custody, alimony, and property division. These sessions will be conducted by trained mediators and will be confidential.</p>
            
            <h2>Expert Opinions</h2>
            <p>Family law experts have welcomed the directive, noting that it acknowledges the emotional toll of prolonged divorce proceedings. "This is a much-needed reform that respects the autonomy of consenting adults while ensuring proper safeguards," said a senior family court judge.</p>
        `
    },
    {
        slug: "cyberbullying-criminal-offense",
        title: "Cyberbullying Now a Criminal Offense Under New Code",
        summary: "The updated penal code now explicitly defines and penalizes cyberbullying with strict jail terms.",
        category: "Criminal",
        date: "Oct 20, 2024",
        imageUrl: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800",
        content: `
            <p>In a significant update to the penal code, cyberbullying has been explicitly defined as a criminal offense, with perpetrators facing strict penalties including imprisonment. The amendment recognizes the severe psychological impact of online harassment and provides victims with stronger legal recourse.</p>
            
            <h2>Definition and Scope</h2>
            <p>The new law defines cyberbullying as any repeated, intentional act of harassment, intimidation, or humiliation conducted through digital platforms. This includes social media harassment, revenge porn, doxing, and coordinated online attacks.</p>
            
            <h2>Penalties</h2>
            <p>Offenders can face imprisonment of up to three years and fines up to ₹5 lakhs for first-time offenses. In cases involving minors or vulnerable individuals, penalties can be enhanced to five years imprisonment. The law also holds platform administrators accountable if they fail to remove reported content within 48 hours.</p>
            
            <h2>Victim Protection</h2>
            <p>The amendment includes provisions for victim protection, including expedited court proceedings and the option for victims to testify via video conferencing. Courts can also issue restraining orders preventing perpetrators from contacting victims online.</p>
            
            <h2>Implementation Challenges</h2>
            <p>While the law has been widely praised, experts note challenges in implementation, particularly in establishing jurisdiction for offenses committed across state or national boundaries. Law enforcement agencies are being trained to handle cyberbullying cases effectively.</p>
        `
    },
    {
        slug: "landmark-civil-rights-judgment",
        title: "Landmark Civil Rights Judgment",
        summary: "The High Court delivered a significant verdict today reinforcing the civil liberties of citizens in public spaces.",
        category: "Civil Law",
        date: "Oct 18, 2024",
        imageUrl: "https://images.unsplash.com/photo-1589578527966-fdac0f44566c?auto=format&fit=crop&q=80&w=800",
        content: `
            <p>In a landmark judgment that reinforces civil liberties, the High Court has ruled that citizens have an inalienable right to peaceful assembly and expression in public spaces, subject only to reasonable restrictions. The verdict strikes down several municipal regulations that had severely curtailed these fundamental rights.</p>
            
            <h2>Case Background</h2>
            <p>The case was filed by a coalition of civil rights organizations challenging municipal regulations that required prior permission for any gathering of more than five people in public parks and squares. The petitioners argued that these regulations violated constitutional guarantees of freedom of speech and assembly.</p>
            
            <h2>Court's Reasoning</h2>
            <p>The court held that while the state has a legitimate interest in maintaining public order, blanket restrictions on peaceful assembly are unconstitutional. The judgment emphasizes that any restrictions must be narrowly tailored and proportionate to specific security concerns.</p>
            
            <h2>Impact on Public Spaces</h2>
            <p>The ruling will have significant implications for how public spaces are managed across the country. Municipal authorities will need to revise their regulations to ensure they comply with constitutional standards while maintaining public safety.</p>
            
            <h2>Broader Implications</h2>
            <p>Legal scholars view this judgment as a reaffirmation of democratic values in an era of increasing restrictions on civil liberties. The decision is expected to influence similar cases pending in other jurisdictions.</p>
        `
    },
    {
        slug: "new-consumer-protection-guidelines",
        title: "New Consumer Protection Guidelines",
        summary: "Updated guidelines for e-commerce platforms to ensure fair trade practices and better consumer grievance redressal.",
        category: "Civil Law",
        date: "Oct 15, 2024",
        imageUrl: "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?auto=format&fit=crop&q=80&w=800",
        content: `
            <p>The Consumer Affairs Ministry has issued comprehensive new guidelines for e-commerce platforms, aimed at ensuring fair trade practices and providing better protection to online shoppers. The guidelines address long-standing concerns about misleading advertisements, fake reviews, and inadequate grievance redressal mechanisms.</p>
            
            <h2>Key Provisions</h2>
            <p>E-commerce platforms must now clearly display the country of origin for all products, provide accurate product descriptions, and ensure transparent pricing including all applicable charges. The guidelines also mandate that platforms verify seller credentials and maintain a registry of sellers.</p>
            
            <h2>Review Authenticity</h2>
            <p>One of the most significant provisions requires platforms to implement robust systems to prevent fake reviews and ratings. Platforms must ensure that only verified purchasers can leave reviews and must take action against sellers who manipulate ratings.</p>
            
            <h2>Grievance Redressal</h2>
            <p>The guidelines establish strict timelines for addressing consumer complaints. Platforms must acknowledge complaints within 48 hours and resolve them within 30 days. Failure to comply can result in penalties and potential suspension of operations.</p>
            
            <h2>Industry Response</h2>
            <p>While major e-commerce platforms have committed to implementing the guidelines, industry associations have raised concerns about the compliance burden, particularly for smaller platforms. The ministry has indicated it will provide technical support to help platforms adapt to the new requirements.</p>
        `
    }
];

type Props = {
    params: Promise<{ slug: string }>
}

export default async function NewsDetailPage({ params }: Props) {
    const { slug } = await params;
    const article = allNewsArticles.find(a => a.slug === slug);

    if (!article) {
        notFound();
    }

    return (
        <div className="w-full">
            {/* Back Navigation */}
            <Link
                href="/news"
                className="inline-flex items-center gap-2 text-secondary hover:text-secondary-dark font-semibold mb-6 hover-recoil"
            >
                <ArrowLeft className="w-4 h-4" />
                Back to News
            </Link>

            {/* Split Screen Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 min-h-screen">
                {/* Left Side - Sticky Image */}
                <div className="lg:sticky lg:top-0 lg:h-screen">
                    <div className="relative w-full h-[400px] lg:h-full">
                        <Image
                            src={article.imageUrl}
                            alt={article.title}
                            fill
                            className="object-cover"
                            priority
                        />
                        {/* Category Badge Overlay */}
                        <span className="absolute top-8 left-8 bg-secondary text-white text-sm font-bold px-4 py-2 uppercase tracking-wider rounded-sm shadow-lg">
                            {article.category}
                        </span>
                    </div>
                </div>

                {/* Right Side - Scrollable Content */}
                <div className="bg-white p-8 lg:p-12">
                    <article>
                        {/* Article Header */}
                        <header className="mb-8">
                            <div className="flex items-center text-sm text-gray-500 gap-4 mb-4">
                                <span className="flex items-center gap-1">
                                    <Calendar className="w-4 h-4" />
                                    {article.date}
                                </span>
                                <span className="flex items-center gap-1">
                                    <Clock className="w-4 h-4" />
                                    5 min read
                                </span>
                            </div>

                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-primary mb-6">
                                {article.title}
                            </h1>

                            <p className="text-lg md:text-xl text-gray-600 leading-relaxed border-l-4 border-secondary pl-6">
                                {article.summary}
                            </p>
                        </header>

                        {/* Article Content */}
                        <div
                            className="prose prose-lg max-w-none prose-headings:font-serif prose-headings:text-primary prose-p:text-gray-700 prose-p:leading-relaxed prose-a:text-secondary prose-a:no-underline hover:prose-a:underline mb-12"
                            dangerouslySetInnerHTML={{ __html: article.content }}
                        />

                        {/* Share Section */}
                        <div className="pt-8 border-t border-gray-200 mb-12">
                            <h3 className="font-serif font-bold text-xl mb-4">Share this article</h3>
                            <div className="flex flex-wrap gap-4">
                                <button className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary-light transition-colors hover-recoil font-semibold">
                                    Share on Twitter
                                </button>
                                <button className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary-light transition-colors hover-recoil font-semibold">
                                    Share on Facebook
                                </button>
                                <button className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary-light transition-colors hover-recoil font-semibold">
                                    Copy Link
                                </button>
                            </div>
                        </div>

                        {/* Related Articles */}
                        <div className="pt-8 border-t border-gray-200">
                            <h3 className="font-serif font-bold text-2xl mb-6">Related Articles</h3>
                            <div className="grid grid-cols-1 gap-6">
                                {allNewsArticles
                                    .filter(a => a.category === article.category && a.slug !== article.slug)
                                    .slice(0, 2)
                                    .map(related => (
                                        <Link
                                            key={related.slug}
                                            href={`/news/${related.slug}`}
                                            className="group block bg-gray-50 border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-all hover-target"
                                        >
                                            <div className="flex flex-col sm:flex-row">
                                                <div className="relative h-48 sm:h-auto sm:w-48 flex-shrink-0">
                                                    <Image
                                                        src={related.imageUrl}
                                                        alt={related.title}
                                                        fill
                                                        className="object-cover group-hover:scale-105 transition-transform"
                                                    />
                                                </div>
                                                <div className="p-4 flex-1">
                                                    <h4 className="font-serif font-bold text-lg text-gray-900 group-hover:text-secondary transition-colors mb-2">
                                                        {related.title}
                                                    </h4>
                                                    <p className="text-sm text-gray-600 line-clamp-2">
                                                        {related.summary}
                                                    </p>
                                                </div>
                                            </div>
                                        </Link>
                                    ))
                                }
                            </div>
                        </div>
                    </article>
                </div>
            </div>
        </div>
    );
}
