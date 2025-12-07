import { useState, useEffect } from 'react';
import { fetchShopProducts } from '@/services/shop';
import { ShopProduct } from '@/types/shop';

interface UseShopProductsResult {
    data: ShopProduct[];
    isLoading: boolean;
    error: string | null;
}

export function useShopProducts(url: string, platform: 'etsy' | 'shopify') {
    const [result, setResult] = useState<UseShopProductsResult>({
        data: [],
        isLoading: false,
        error: null,
    });

    useEffect(() => {
        if (!url) {
            setResult({ data: [], isLoading: false, error: null });
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

        const fetchProducts = async () => {
            try {
                const data = await fetchShopProducts(url, platform);
                if (isMounted) {
                    setResult({ data, isLoading: false, error: null });
                }
            } catch (err) {
                if (isMounted) {
                    setResult({
                        data: [],
                        isLoading: false,
                        error: "Failed to fetch products. Please check the URL.",
                    });
                }
            }
        };

        // Debounce fetching
        const timeoutId = setTimeout(() => {
            fetchProducts();
        }, 800);

        return () => {
            isMounted = false;
            clearTimeout(timeoutId);
        };
    }, [url, platform]);

    return result;
}

