import { useState, useEffect } from "react";

interface UseTypewriterOptions {
    typingSpeed?: number;
    deletingSpeed?: number;
    pauseDuration?: number;
}

export function useTypewriter(texts: string[], options: UseTypewriterOptions = {}) {
    const {
        typingSpeed = 50, // ms per char
        deletingSpeed = 30, // ms per char
        pauseDuration = 2000, // ms to pause after typing
    } = options;

    const [displayText, setDisplayText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);
    const [textIndex, setTextIndex] = useState(0);

    useEffect(() => {
        const currentFullText = texts[textIndex % texts.length];

        const handleType = () => {
            setDisplayText((current) => {
                if (isDeleting) {
                    return currentFullText.substring(0, current.length - 1);
                } else {
                    return currentFullText.substring(0, current.length + 1);
                }
            });
        };

        let timer: NodeJS.Timeout;

        if (!isDeleting && displayText === currentFullText) {
            // Finished typing, pause before deleting
            timer = setTimeout(() => setIsDeleting(true), pauseDuration);
        } else if (isDeleting && displayText === "") {
            // Finished deleting, move to next text
            setIsDeleting(false);
            setTextIndex((prev) => prev + 1);
        } else {
            // Typing or deleting in progress
            timer = setTimeout(handleType, isDeleting ? deletingSpeed : typingSpeed);
        }

        return () => clearTimeout(timer);
    }, [displayText, isDeleting, textIndex, texts, typingSpeed, deletingSpeed, pauseDuration]);

    return displayText;
}
