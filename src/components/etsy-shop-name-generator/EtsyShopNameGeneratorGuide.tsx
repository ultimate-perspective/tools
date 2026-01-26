import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function EtsyShopNameGeneratorGuide() {
    return (
        <Card className="mt-12">
            <CardHeader>
                <CardTitle>How to Choose the Perfect Etsy Shop Name</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                    <div className="space-y-2">
                        <div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold">1</div>
                        <h3 className="font-semibold">Describe Your Brand</h3>
                        <p className="text-sm text-muted-foreground">
                            Start by describing what you sell and your unique style. Be specific about materials, vibe, and target audience.
                        </p>
                    </div>
                    <div className="space-y-2">
                        <div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold">2</div>
                        <h3 className="font-semibold">Review Options</h3>
                        <p className="text-sm text-muted-foreground">
                            Our AI generates both descriptive names (that say what you sell) and abstract names (that build a unique brand).
                        </p>
                    </div>
                    <div className="space-y-2">
                        <div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold">3</div>
                        <h3 className="font-semibold">Check Availability</h3>
                        <p className="text-sm text-muted-foreground">
                            Once you find a name you like, search for it on Etsy to ensure it&apos;s not already taken.
                        </p>
                    </div>
                    <div className="space-y-2">
                        <div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold">4</div>
                        <h3 className="font-semibold">Claim It</h3>
                        <p className="text-sm text-muted-foreground">
                            Register your shop name quickly! Remember, once a name is used on Etsy, it can never be used again.
                        </p>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}
