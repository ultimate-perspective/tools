import { useState, useEffect } from 'react';
import { getProductPreview, ProductPreview } from '@/services/shop';

interface UseProductPreviewResult {
    data: ProductPreview | null;
    isLoading: boolean;
    error: string | null;
}

export function useProductPreview(url: string, platform: 'etsy' | 'shopify') {
    const [result, setResult] = useState<UseProductPreviewResult>({
        data: null,
        isLoading: false,
        error: null,
    });

    useEffect(() => {
        if (!url) {
            setResult({ data: null, isLoading: false, error: null });
            return;
        }

        // Simple URL validation
        let isValidUrl = false;
        try {
            const parsedUrl = new URL(url);
            isValidUrl = !!parsedUrl.protocol && !!parsedUrl.host;
        } catch (e) {
            isValidUrl = false;
        }

        if (!isValidUrl) {
            return;
        }

        let isMounted = true;
        setResult((prev) => ({ ...prev, isLoading: true, error: null }));

        const fetchPreview = async () => {
            try {
                const data = await getProductPreview(url, platform);
                if (isMounted) {
                    setResult({ data, isLoading: false, error: null });
                }
            } catch (err) {
                if (isMounted) {
                    setResult({
                        data: null,
                        isLoading: false,
                        error: "Failed to fetch product preview. Please check the URL.",
                    });
                }
            }
        };

        // Debounce fetching
        const timeoutId = setTimeout(() => {
            fetchPreview();
        }, 800);

        return () => {
            isMounted = false;
            clearTimeout(timeoutId);
        };
    }, [url, platform]);

    return result;
}
