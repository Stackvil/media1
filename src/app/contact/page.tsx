import { Mail, Phone, MapPin } from 'lucide-react';

export default function ContactPage() {
    return (
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-8">
                <header>
                    <h1 className="text-4xl font-serif font-bold text-primary mb-4">Contact Us</h1>
                    <p className="text-gray-600 text-lg">
                        Have a question, feedback, or a partnership inquiry? We'd love to hear from you.
                    </p>
                </header>

                <div className="space-y-6">
                    <div className="flex items-start gap-4">
                        <div className="bg-indigo-50 p-3 rounded-lg text-primary">
                            <Mail className="w-6 h-6" />
                        </div>
                        <div>
                            <h3 className="font-bold text-gray-900">Email Us</h3>
                            <p className="text-gray-600">contact@justiceledger.com</p>
                            <p className="text-gray-600">tips@justiceledger.com</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-4">
                        <div className="bg-indigo-50 p-3 rounded-lg text-primary">
                            <Phone className="w-6 h-6" />
                        </div>
                        <div>
                            <h3 className="font-bold text-gray-900">Call Us</h3>
                            <p className="text-gray-600">+91 11-4567-8900</p>
                            <p className="text-sm text-gray-500">Mon-Fri, 9am - 6pm IST</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-4">
                        <div className="bg-indigo-50 p-3 rounded-lg text-primary">
                            <MapPin className="w-6 h-6" />
                        </div>
                        <div>
                            <h3 className="font-bold text-gray-900">Visit Us</h3>
                            <p className="text-gray-600">
                                123 Legal Avenue, Court District<br />
                                New Delhi, India
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-white p-8 shadow-lg rounded-xl border border-gray-100">
                <form className="space-y-6">
                    <div>
                        <label className="block text-sm font-bold text-gray-700 mb-2">Your Name</label>
                        <input type="text" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition-all" />
                    </div>
                    <div>
                        <label className="block text-sm font-bold text-gray-700 mb-2">Email Address</label>
                        <input type="email" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition-all" />
                    </div>
                    <div>
                        <label className="block text-sm font-bold text-gray-700 mb-2">Message</label>
                        <textarea rows={4} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition-all"></textarea>
                    </div>
                    <button type="button" className="w-full bg-primary hover:bg-primary-light text-white font-bold py-3 rounded-lg transition-colors">
                        Send Message
                    </button>
                </form>
            </div>
        </div>
    );
}
