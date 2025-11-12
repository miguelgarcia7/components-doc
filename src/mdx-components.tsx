import type { MDXComponents } from 'mdx/types';
import { CodeBlock } from './components/code-block';
import { ComponentPreview } from './components/component-preview';

// Helper function to create slug from text
function slugify(text: string): string {
    return text
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/(^-|-$)/g, '');
}

export function useMDXComponents(components: MDXComponents): MDXComponents {
    return {
        h1: ({ children }) => (
            <h1 className="text-4xl font-bold mt-8 mb-4 text-zinc-900 dark:text-zinc-50">
                {children}
            </h1>
        ),
        h2: ({ children }) => (
            <h2 className="text-3xl font-semibold mt-8 mb-4 text-zinc-900 dark:text-zinc-50">
                {children}
            </h2>
        ),
        h3: ({ children }) => (
            <h3 className="text-2xl font-semibold mt-6 mb-3 text-zinc-900 dark:text-zinc-50">
                {children}
            </h3>
        ),
        p: ({ children }) => (
            <p className="text-zinc-600 dark:text-zinc-400 leading-7 mb-4">
                {children}
            </p>
        ),
        code: ({ children, className }) => {
            // Check if it's a code block (has language class) or inline code
            if (className) {
                return <CodeBlock className={className}>{String(children)}</CodeBlock>;
            }
            // Inline code
            return (
                <code className="bg-zinc-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded text-sm font-mono text-zinc-900 dark:text-zinc-50">
                    {children}
                </code>
            );
        },
        pre: ({ children }) => <>{children}</>, // Let CodeBlock handle the pre styling
        ComponentPreview,
        ...components,
    };
}