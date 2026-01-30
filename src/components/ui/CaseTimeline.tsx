import { Circle, CheckCircle2 } from 'lucide-react';
import { cn } from '@/lib/utils';

interface TimelineEvent {
    date: string;
    title: string;
    description: string;
    status: 'completed' | 'current' | 'future';
}

interface CaseTimelineProps {
    events: TimelineEvent[];
}

export default function CaseTimeline({ events }: CaseTimelineProps) {
    return (
        <div className="relative border-l-2 border-gray-200 ml-3 space-y-8 my-8">
            {events.map((event, index) => (
                <div key={index} className="relative pl-8">
                    <span className={cn(
                        "absolute -left-[9px] top-1 bg-white",
                        event.status === 'completed' ? "text-green-600" :
                            event.status === 'current' ? "text-secondary" : "text-gray-300"
                    )}>
                        {event.status === 'completed' ? <CheckCircle2 className="w-4 h-4" /> : <Circle className="w-4 h-4 fill-current" />}
                    </span>

                    <div className="flex flex-col sm:flex-row sm:items-baseline gap-2">
                        <span className="text-sm font-bold text-gray-500 min-w-[100px]">{event.date}</span>
                        <div>
                            <h4 className="font-bold text-gray-900">{event.title}</h4>
                            <p className="text-sm text-gray-600 mt-1">{event.description}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
