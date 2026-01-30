export default function BreakingNews() {
    return (
        <div className="bg-primary-dark text-white text-sm py-2 px-4 shadow-sm border-b border-gray-800 overflow-hidden">
            <div className="container mx-auto flex items-center">
                <span className="bg-accent text-white px-2 py-0.5 rounded textxs font-bold uppercase tracking-wider mr-4 animate-pulse">
                    Breaking
                </span>
                <div className="overflow-hidden relative w-full">
                    <p className="whitespace-nowrap animate-marquee">
                        Supreme Court declares new guidelines for digital evidence admissibility • New tenancy laws effect from next month • Corporate tax compliance deadline extended
                    </p>
                </div>
            </div>
        </div>
    );
};
