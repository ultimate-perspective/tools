import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function PinterestBoardNameGeneratorGuide() {
    return (
        <Card className="mt-12">
            <CardHeader>
                <CardTitle>How to Choose the Perfect Pinterest Board Name</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-8">
                    <div className="space-y-2">
                        <div className="w-8 h-8 rounded-full bg-red-100 text-red-600 flex items-center justify-center font-bold">1</div>
                        <h3 className="font-semibold">Be Descriptive</h3>
                        <p className="text-sm text-muted-foreground">
                            Avoid cute names. Use specific terms like &quot;Healthy Vegan Dinner Recipes&quot; so Pinterest knows exactly what your board is about.
                        </p>
                    </div>
                    <div className="space-y-2">
                        <div className="w-8 h-8 rounded-full bg-red-100 text-red-600 flex items-center justify-center font-bold">2</div>
                        <h3 className="font-semibold">Use Keywords</h3>
                        <p className="text-sm text-muted-foreground">
                            Think about what people search for. Include keywords like &quot;Modern Living Room&quot; or &quot;Boho Chic&quot; to get found in search results.
                        </p>
                    </div>
                    <div className="space-y-2">
                        <div className="w-8 h-8 rounded-full bg-red-100 text-red-600 flex items-center justify-center font-bold">3</div>
                        <h3 className="font-semibold">Match Your Tone</h3>
                        <p className="text-sm text-muted-foreground">
                            Align your board names with your brand personality. Our tool generates 10 different tones to help you find the perfect fit.
                        </p>
                    </div>
                    <div className="space-y-2">
                        <div className="w-8 h-8 rounded-full bg-red-100 text-red-600 flex items-center justify-center font-bold">4</div>
                        <h3 className="font-semibold">Keep it Concise</h3>
                        <p className="text-sm text-muted-foreground">
                            Keep names short (20-50 characters) so they are readable on mobile. Clear and short names perform better.
                        </p>
                    </div>
                </div>

                <div className="bg-slate-50 dark:bg-slate-900 rounded-xl p-6 border">
                    <h3 className="font-bold text-lg mb-4">Explore 10 Unique Naming Styles</h3>
                    <div className="grid grid-cols-2 md:grid-cols-5 gap-4 text-sm">
                        <div className="space-y-1">
                            <span className="font-semibold block text-slate-900 dark:text-slate-100">Neutral</span>
                            <span className="text-muted-foreground text-xs">SEO-optimized & clean</span>
                        </div>
                        <div className="space-y-1">
                            <span className="font-semibold block text-rose-600">Aesthetic</span>
                            <span className="text-muted-foreground text-xs">Dreamy & visual</span>
                        </div>
                        <div className="space-y-1">
                            <span className="font-semibold block text-orange-500">Witty</span>
                            <span className="text-muted-foreground text-xs">Fun & playful</span>
                        </div>
                        <div className="space-y-1">
                            <span className="font-semibold block text-gray-700 dark:text-gray-300">Minimalist</span>
                            <span className="text-muted-foreground text-xs">Short & punchy</span>
                        </div>
                        <div className="space-y-1">
                            <span className="font-semibold block text-blue-600">Educational</span>
                            <span className="text-muted-foreground text-xs">Helpful & informative</span>
                        </div>
                        <div className="space-y-1">
                            <span className="font-semibold block text-amber-600">Luxurious</span>
                            <span className="text-muted-foreground text-xs">High-end & fancy</span>
                        </div>
                        <div className="space-y-1">
                            <span className="font-semibold block text-red-600">Action</span>
                            <span className="text-muted-foreground text-xs">DIY & project focused</span>
                        </div>
                        <div className="space-y-1">
                            <span className="font-semibold block text-purple-600">Poetic</span>
                            <span className="text-muted-foreground text-xs">Nostalgic & deep</span>
                        </div>
                        <div className="space-y-1">
                            <span className="font-semibold block text-pink-600">Trendy</span>
                            <span className="text-muted-foreground text-xs">Modern slang</span>
                        </div>
                        <div className="space-y-1">
                            <span className="font-semibold block text-emerald-600">Motivational</span>
                            <span className="text-muted-foreground text-xs">Inspiring & positive</span>
                        </div>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}
