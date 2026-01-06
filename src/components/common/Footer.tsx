export default function Footer() {
    return (
        <footer className="border-t border-border bg-background" >
            <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
                <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
                    <div className="flex items-center gap-3">
                        <img
                            src="/free-tools/logo/png/logo_light.png"
                            alt="Design Instantly Logo"
                            className="h-10 w-auto dark:hidden"
                        />
                        <img
                            src="/free-tools/logo/png/logo_dark.png"
                            alt="Design Instantly Logo"
                            className="h-10 w-auto hidden dark:block"
                        />
                        <span className="sr-only">Design Instantly</span>
                    </div>
                    <p className="text-sm text-muted-foreground">&copy; {new Date().getFullYear()} Design Instantly</p>
                </div>
            </div>
        </footer >
    );
}