import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { Info } from "lucide-react";

interface EtsyFieldInfoProps {
    title: string;
    description: string;
    examples: string[];
    tips?: string[];
    warnings?: string[];
}

export function EtsyFieldInfo({ title, description, examples, tips, warnings }: EtsyFieldInfoProps) {
    return (
        <Popover>
            <PopoverTrigger asChild>
                <Button variant="ghost" size="icon" className="h-4 w-4 rounded-full ml-1.5 text-muted-foreground hover:text-foreground">
                    <Info className="h-3.5 w-3.5" />
                    <span className="sr-only">Info</span>
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-80 p-0" align="start">
                <div className="p-4 space-y-4">
                    <div className="space-y-1">
                        <h4 className="font-medium leading-none">{title}</h4>
                        <p className="text-xs text-muted-foreground">
                            {description}
                        </p>
                    </div>

                    {examples.length > 0 && (
                        <div className="space-y-2">
                            <h5 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Examples</h5>
                            <ul className="text-xs space-y-1 text-foreground/90 list-disc list-inside">
                                {examples.map((ex, i) => (
                                    <li key={i}>{ex}</li>
                                ))}
                            </ul>
                        </div>
                    )}

                    {tips && tips.length > 0 && (
                        <div className="space-y-2">
                            <h5 className="text-xs font-semibold text-green-600 dark:text-green-500 uppercase tracking-wider">Best Practices</h5>
                            <ul className="text-xs space-y-1 text-foreground/90 list-disc list-inside">
                                {tips.map((tip, i) => (
                                    <li key={i}>{tip}</li>
                                ))}
                            </ul>
                        </div>
                    )}

                    {warnings && warnings.length > 0 && (
                        <div className="space-y-2">
                            <h5 className="text-xs font-semibold text-red-600 dark:text-red-400 uppercase tracking-wider">Avoid</h5>
                            <ul className="text-xs space-y-1 text-foreground/90 list-disc list-inside">
                                {warnings.map((warn, i) => (
                                    <li key={i}>{warn}</li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>
            </PopoverContent>
        </Popover>
    );
}
