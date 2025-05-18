import { useEffect } from 'react';
import { menu_bg } from '../assets';

const PreloadAssets = () => {
    useEffect(() => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = 'image';
        link.href = menu_bg;
        document.head.appendChild(link);

        return () => {
            document.head.removeChild(link);
        };
    }, []);

    return null;
};

export default PreloadAssets; 