export default function DisclaimerPage() {
    return (
        <div className="max-w-4xl mx-auto space-y-8">
            <header className="mb-8 border-b border-gray-200 pb-8">
                <h1 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-2">Legal Disclaimer & Privacy Policy</h1>
                <p className="text-gray-500 text-sm">Last Updated: October 26, 2024</p>
            </header>

            <section className="prose prose-blue max-w-none">
                <h3>1. Not Legal Advice</h3>
                <p>
                    The content provided on <strong>The Justice Ledger</strong> is for general informational and educational purposes only. It does not constitute legal advice, professional counsel, or a solicitor-client relationship. While we strive to ensure the accuracy of our information, laws vary by jurisdiction and are subject to change. Readers should consult with a qualified attorney for advice regarding their specific legal situations.
                </p>

                <h3>2. Content Accuracy</h3>
                <p>
                    We make every effort to verify the facts of the cases and news we report. However, we are not liable for any errors, omissions, or the results obtained from the use of this information. All information is provided "as is", with no guarantee of completeness or timeliness.
                </p>

                <h3>3. External Links</h3>
                <p>
                    Our website may contain links to legal resources, government portals, or other external websites. We do not endorse or assume responsibility for the content, privacy policies, or practices of any third-party sites.
                </p>

                <h3>4. Privacy Policy</h3>
                <p>
                    We respect your privacy. When you submit a case or sign up for our newsletter, we collect personal information such as your name and email address. We use this information solely for the purpose of verifying your submission or delivering requested updates. We do not sell, trade, or transfer your personal data to outside parties without your consent, except as required by law.
                </p>

                <h3>5. User-Generated Content</h3>
                <p>
                    Users submitting tips or comments are responsible for their content. We reserve the right to remove any content that is defamatory, hateful, or violates the rights of others.
                </p>
            </section>
        </div>
    );
}
