import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function PinterestBoardNameGeneratorGuide() {
    return (
        <Card className="mt-12">
            <CardHeader>
                <CardTitle>How to Choose the Perfect Pinterest Board Name</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                    <div className="space-y-2">
                        <div className="w-8 h-8 rounded-full bg-red-100 text-red-600 flex items-center justify-center font-bold">1</div>
                        <h3 className="font-semibold">Be Descriptive</h3>
                        <p className="text-sm text-muted-foreground">
                            Avoid cute names. Use specific terms like "Healthy Vegan Dinner Recipes" so Pinterest knows exactly what your board is about.
                        </p>
                    </div>
                    <div className="space-y-2">
                        <div className="w-8 h-8 rounded-full bg-red-100 text-red-600 flex items-center justify-center font-bold">2</div>
                        <h3 className="font-semibold">Use Keywords</h3>
                        <p className="text-sm text-muted-foreground">
                            Think about what people search for. Include keywords like "Modern Living Room" or "Boho Chic" to get found in search results.
                        </p>
                    </div>
                    <div className="space-y-2">
                        <div className="w-8 h-8 rounded-full bg-red-100 text-red-600 flex items-center justify-center font-bold">3</div>
                        <h3 className="font-semibold">Match Your Tone</h3>
                        <p className="text-sm text-muted-foreground">
                            Align your board names with your brand personality. Our tool generates 6 different tones to help you find the perfect fit.
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
            </CardContent>
        </Card>
    );
}
