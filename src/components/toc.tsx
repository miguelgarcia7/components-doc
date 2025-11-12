'use client';

import { useEffect, useState } from 'react';

interface TocItem {
    id: string;
    text: string;
    level: number;
}

export function TableOfContents() {
    const [headings, setHeadings] = useState<TocItem[]>([]);
    const [activeId, setActiveId] = useState<string>('');

    useEffect(() => {
        // Get all h2 and h3 headings from the page
        const elements = Array.from(
            document.querySelectorAll('main h2, main h3')
        );

        const items: TocItem[] = elements
            .map((element, index) => {
                const id = element.id || `heading-${index}`;
                // Set ID if it doesn't exist
                if (!element.id) {
                    element.id = id;
                }
                return {
                    id,
                    text: element.textContent || '',
                    level: parseInt(element.tagName.charAt(1)),
                };
            })
            .filter((item) => item.text); // Only include headings with text

        setHeadings(items);

        // Set up intersection observer for active heading
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveId(entry.target.id);
                    }
                });
            },
            { rootMargin: '-100px 0px -66%' }
        );

        elements.forEach((element) => observer.observe(element));

        return () => observer.disconnect();
    }, []);

    if (headings.length === 0) {
        return null;
    }

    return (
        <div className="hidden xl:block">
            <div className="sticky top-16 -mt-10 pt-10">
                <div className="space-y-2">
                    <p className="font-semibold text-sm mb-4 text-zinc-900 dark:text-zinc-50">On This Page</p>
                    <nav className="space-y-2">
                        {headings.map((heading) => (

                            <a key={heading.id}
                            href={`#${heading.id}`}
                            className={`block text-sm transition-colors hover:text-zinc-900 dark:hover:text-zinc-50 ${
                            heading.level === 3 ? 'pl-4' : ''
                        } ${
                            activeId === heading.id
                            ? 'font-medium text-zinc-900 dark:text-zinc-50'
                            : 'text-zinc-600 dark:text-zinc-400'
                        }`}
                            >
                        {heading.text}
                            </a>
                            ))}
                    </nav>
                </div>
            </div>
        </div>
    );
}