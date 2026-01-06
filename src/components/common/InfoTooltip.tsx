import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
} from "@/components/ui/tooltip"
import { Info } from "lucide-react"

interface InfoTooltipProps {
    text: string
}

export function InfoTooltip({ text }: InfoTooltipProps) {
    return (
        <Tooltip>
            <TooltipTrigger asChild>
                <Info className="h-3.5 w-3.5 text-gray-400 cursor-help hover:text-gray-600 dark:hover:text-gray-300 transition-colors inline-block ml-1.5 align-middle" />
            </TooltipTrigger>
            <TooltipContent className="max-w-[250px] text-xs">
                {text}
            </TooltipContent>
        </Tooltip>
    )
}
