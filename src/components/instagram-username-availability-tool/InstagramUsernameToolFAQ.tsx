import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const faqs = [
    {
        question: "How does the availability check work?",
        answer: "Our system securely checks directly with Instagram to see if the username is currently registered. If a profile exists, the username is taken.",
    },
    {
        question: "Is the availability check 100% accurate?",
        answer: "It is highly accurate but not guaranteed. Instagram may occasionally return different responses due to rate limiting or network issues. Always verify by visiting Instagram directly before making a decision.",
    },
    {
        question: "How many usernames can I check at once?",
        answer: "The tool checks multiple usernames simultaneously — your original username plus AI-generated variations. You can run as many searches as you need for free.",
    },
    {
        question: "What makes a good Instagram username?",
        answer: "A great Instagram username is short (under 20 characters), easy to spell and remember, relevant to your brand or content, and ideally doesn't use many dots or underscores.",
    },
    {
        question: "Can I change my Instagram username later?",
        answer: "Yes! You can change your Instagram username at any time from your profile settings. However, Instagram limits username changes to twice within 14 days.",
    },
    {
        question: "Is this tool free to use?",
        answer: "Completely free! You can search as many usernames as you need without any limits or account required.",
    },
];

export default function InstagramUsernameToolFAQ() {
    return (
        <Card className="mt-8">
            <CardHeader>
                <CardTitle>Frequently Asked Questions</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="divide-y">
                    {faqs.map((faq, idx) => (
                        <div key={idx} className="py-4 first:pt-0 last:pb-0 space-y-1.5">
                            <h3 className="font-semibold text-sm">{faq.question}</h3>
                            <p className="text-sm text-muted-foreground">{faq.answer}</p>
                        </div>
                    ))}
                </div>
            </CardContent>
        </Card>
    );
}
