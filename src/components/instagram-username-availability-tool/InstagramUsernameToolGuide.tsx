import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function InstagramUsernameToolGuide() {
    return (
        <Card className="mt-12">
            <CardHeader>
                <CardTitle>How to Find the Perfect Instagram Username</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                    <div className="space-y-2">
                        <div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold">1</div>
                        <h3 className="font-semibold">Enter Your Desired Name</h3>
                        <p className="text-sm text-muted-foreground">
                            Type the exact username you want. Our AI will use it as a base to generate creative variations.
                        </p>
                    </div>
                    <div className="space-y-2">
                        <div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold">2</div>
                        <h3 className="font-semibold">Check Availability Instantly</h3>
                        <p className="text-sm text-muted-foreground">
                            We check the usernames against Instagram in real time, saving you hours of manual checking.
                        </p>
                    </div>
                    <div className="space-y-2">
                        <div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold">3</div>
                        <h3 className="font-semibold">Pick an Available Username</h3>
                        <p className="text-sm text-muted-foreground">
                            Review the results. Green &ldquo;Available&rdquo; badges mean you can register that handle right now on Instagram.
                        </p>
                    </div>
                    <div className="space-y-2">
                        <div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold">4</div>
                        <h3 className="font-semibold">Claim It Fast</h3>
                        <p className="text-sm text-muted-foreground">
                            Copy your favorite available username and head directly to Instagram to register it before someone else does.
                        </p>
                    </div>
                </div>

                <div className="border-t pt-6 space-y-3">
                    <h3 className="font-semibold">Instagram Username Rules</h3>
                    <ul className="text-sm text-muted-foreground space-y-1.5 list-disc list-inside">
                        <li>Must be between 1 and 30 characters long.</li>
                        <li>Can only contain letters, numbers, periods (.) and underscores (_).</li>
                        <li>Cannot contain spaces or special characters like @, #, or !.</li>
                        <li>Usernames are case-insensitive — @JohnDoe and @johndoe are the same.</li>
                        <li>Cannot be changed more than twice in 14 days.</li>
                    </ul>
                </div>
            </CardContent>
        </Card>
    );
}
