import { Card, CardContent } from "@/components/ui/card";
import { Megaphone, MessageCircle, Sparkles, Zap } from "lucide-react";

export default function EtsyAnnouncementGeneratorGuide() {
    return (
        <div className="mt-16 space-y-8">
            <div>
                <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
                    How to Write the Perfect Etsy Shop Announcement
                </h2>
                <p className="mt-4 text-lg text-gray-600 dark:text-gray-400 max-w-2xl">
                    Your shop announcement is valuable real estate. Use it to build trust, answer questions, and drive sales.
                </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                <Card className="bg-white dark:bg-slate-900 border-none shadow-md">
                    <CardContent className="space-y-4">
                        <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/50 rounded-xl flex items-center justify-center text-blue-600 dark:text-blue-400">
                            <Megaphone className="w-6 h-6" />
                        </div>
                        <h3 className="font-semibold text-lg">Be Clear & Direct</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                            Shoppers scan quickly. Put the most important info first&mdash;whether it&apos;s a sale, delay, or new product drop.
                        </p>
                    </CardContent>
                </Card>

                <Card className="bg-white dark:bg-slate-900 border-none shadow-md">
                    <CardContent className="space-y-4">
                        <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/50 rounded-xl flex items-center justify-center text-purple-600 dark:text-purple-400">
                            <Sparkles className="w-6 h-6" />
                        </div>
                        <h3 className="font-semibold text-lg">Set the Tone</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                            Your announcement sets expectations. A warm, professional tone builds trust before they even browse your items.
                        </p>
                    </CardContent>
                </Card>

                <Card className="bg-white dark:bg-slate-900 border-none shadow-md">
                    <CardContent className="space-y-4">
                        <div className="w-12 h-12 bg-green-100 dark:bg-green-900/50 rounded-xl flex items-center justify-center text-green-600 dark:text-green-400">
                            <MessageCircle className="w-6 h-6" />
                        </div>
                        <h3 className="font-semibold text-lg">Answer FAQs</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                            Getting the same questions repeatedly? Address shipping times or custom requests right in your announcement.
                        </p>
                    </CardContent>
                </Card>

                <Card className="bg-white dark:bg-slate-900 border-none shadow-md">
                    <CardContent className="space-y-4">
                        <div className="w-12 h-12 bg-amber-100 dark:bg-amber-900/50 rounded-xl flex items-center justify-center text-amber-600 dark:text-amber-400">
                            <Zap className="w-6 h-6" />
                        </div>
                        <h3 className="font-semibold text-lg">Drive Action</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                            Always end with a Call to Action (CTA). Tell them exactly what to do next&mdash;&quot;Browse the sale&quot; or &quot;Message for custom orders.&quot;
                        </p>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
