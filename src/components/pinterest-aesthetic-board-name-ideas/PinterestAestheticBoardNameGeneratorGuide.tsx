import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Sparkles, Heart, Zap, Layout } from "lucide-react";

export default function PinterestAestheticBoardNameGeneratorGuide() {
    return (
        <Card className="mt-12 border-gray-200 dark:border-gray-800">
            <CardHeader>
                <CardTitle className="font-bold">The Art of Aesthetic Board Names</CardTitle>
            </CardHeader>
            <CardContent className="space-y-8">
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                    <div className="space-y-3 p-4 rounded-xl bg-gray-50/50 dark:bg-gray-900/50 border border-gray-100 dark:border-gray-800">
                        <div className="w-10 h-10 rounded-full bg-white dark:bg-gray-800 text-gray-900 dark:text-white shadow-sm flex items-center justify-center">
                            <Sparkles className="w-5 h-5" />
                        </div>
                        <h3 className="font-semibold text-lg">Vibe Check</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                            Aesthetics are all about the *feeling*. Use words like &quot;dreamy&quot; &quot;cozy&quot; &quot;chaos&quot; or &quot;bliss&quot; to set the mood instantly.
                        </p>
                    </div>

                    <div className="space-y-3 p-4 rounded-xl bg-gray-50/50 dark:bg-gray-900/50 border border-gray-100 dark:border-gray-800">
                        <div className="w-10 h-10 rounded-full bg-white dark:bg-gray-800 text-gray-900 dark:text-white shadow-sm flex items-center justify-center">
                            <Heart className="w-5 h-5" />
                        </div>
                        <h3 className="font-semibold text-lg">Use Special Characters</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                            Aesthetic names often use lowercase letters (e.g. &quot;dreamy living&quot;) or spaced out letters (e.g. &quot;d r e a m s&quot;) for visual appeal.
                        </p>
                    </div>

                    <div className="space-y-3 p-4 rounded-xl bg-gray-50/50 dark:bg-gray-900/50 border border-gray-100 dark:border-gray-800">
                        <div className="w-10 h-10 rounded-full bg-white dark:bg-gray-800 text-gray-900 dark:text-white shadow-sm flex items-center justify-center">
                            <Layout className="w-5 h-5" />
                        </div>
                        <h3 className="font-semibold text-lg">Keep it Themes</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                            Group pins by color or specific aesthetic (e.g. &quot;Vanilla Girl&quot; &quot;That Girl&quot;) rather than generic topics.
                        </p>
                    </div>

                    <div className="space-y-3 p-4 rounded-xl bg-gray-50/50 dark:bg-gray-900/50 border border-gray-100 dark:border-gray-800">
                        <div className="w-10 h-10 rounded-full bg-white dark:bg-gray-800 text-gray-900 dark:text-white shadow-sm flex items-center justify-center">
                            <Zap className="w-5 h-5" />
                        </div>
                        <h3 className="font-semibold text-lg">Emojis Matter</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                            A tasteful emoji (☁️, 🦢, 🕯️) acts as a visual icon for your board and makes it stand out in search.
                        </p>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}
