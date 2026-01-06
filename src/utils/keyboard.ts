import { KeyboardEvent } from "react"

export const handleEnterKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
        e.preventDefault()
        
        // dynamic query to find all focusable elements in order
        const focusableSelectors = [
            "input:not([type='hidden']):not([disabled])",
            "textarea:not([disabled])",
            "select:not([disabled])",
            "[tabindex]:not([tabindex='-1'])",
            "button:not([disabled])" // Include buttons like the Popover trigger
        ].join(",")

        const elements = Array.from(document.querySelectorAll(focusableSelectors)) as HTMLElement[]
        const currentIndex = elements.indexOf(e.currentTarget)

        if (currentIndex !== -1 && currentIndex < elements.length - 1) {
            const nextElement = elements[currentIndex + 1]
            nextElement.focus()
            
            // If the next element is an input, select its content for easier editing
            if (nextElement instanceof HTMLInputElement) {
                nextElement.select()
            }
        }
    }
}
