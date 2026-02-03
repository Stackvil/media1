'use client';

import { useState } from 'react';
import { Upload, AlertTriangle, Send } from 'lucide-react';

export default function SubmitCasePage() {
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
        // In a real app, handle form submission logic here
    };

    if (submitted) {
        return (
            <div className="max-w-2xl mx-auto py-20 text-center space-y-6">
                <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto">
                    <Send className="w-10 h-10" />
                </div>
                <h1 className="text-3xl font-serif font-bold text-gray-900">Submission Received</h1>
                <p className="text-gray-600 text-lg">Thank you for submitting your case tip. Our editorial team will review the details and contact you if verification is successful.</p>
                <button onClick={() => setSubmitted(false)} className="text-secondary font-bold hover:underline">Submit another case</button>
            </div>
        );
    }

    return (
        <div className="max-w-3xl mx-auto space-y-8">
            <header className="text-center space-y-4 mb-10">
                <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary">Submit a Case Profile</h1>
                <p className="text-lg text-gray-600">
                    Help us bring important legal matters to light. All submissions are reviewed for authenticity.
                </p>
            </header>

            <div className="bg-orange-50 border-l-4 border-orange-400 p-4 rounded-r-lg flex gap-4">
                <AlertTriangle className="w-6 h-6 text-orange-500 flex-shrink-0" />
                <div className="text-sm text-orange-800">
                    <strong>Important Disclaimer:</strong> By submitting this form, you affirm that the information provided is true to the best of your knowledge. Do not include sensitive personal data of minors or confidential court documents unless authorized.
                </div>
            </div>

            <form onSubmit={handleSubmit} className="bg-white shadow-lg rounded-xl p-8 border border-gray-200 space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <label className="block text-sm font-bold text-gray-700">Your Name <span className="text-red-500">*</span></label>
                        <input type="text" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition-all" placeholder="John Doe" />
                    </div>
                    <div className="space-y-2">
                        <label className="block text-sm font-bold text-gray-700">Email Address <span className="text-red-500">*</span></label>
                        <input type="email" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition-all" placeholder="john@example.com" />
                    </div>
                </div>

                <div className="space-y-2">
                    <label className="block text-sm font-bold text-gray-700">Case Title / Headline <span className="text-red-500">*</span></label>
                    <input type="text" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition-all" placeholder="e.g. Property Dispute in Downtown District" />
                </div>

                <div className="space-y-2">
                    <label className="block text-sm font-bold text-gray-700">Detailed Summary <span className="text-red-500">*</span></label>
                    <textarea required rows={6} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition-all" placeholder="Describe the events, timeline, and current status..." />
                </div>

                <div className="space-y-2">
                    <label className="block text-sm font-bold text-gray-700">Evidence / Documents (PDF, JPG) <span className="text-red-500">*</span></label>
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:bg-gray-50 transition-colors cursor-pointer group">
                        <Upload className="w-10 h-10 text-gray-400 mx-auto mb-4 group-hover:text-secondary" />
                        <p className="text-sm text-gray-600">Drag and drop files here, or <span className="text-secondary font-bold">browse</span></p>
                        <p className="text-xs text-gray-400 mt-2">Max 10MB per file</p>
                    </div>
                </div>

                <div className="pt-4">
                    <button type="submit" className="w-full bg-primary hover:bg-primary-light text-white font-bold py-4 rounded-lg shadow-md transition-all hover:translate-y-[-2px]">
                        Submit Case for Review
                    </button>
                </div>
            </form >
        </div >
    );
}
