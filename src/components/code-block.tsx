'use client';

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

interface CodeBlockProps {
    children: string;
    className?: string;
}

export function CodeBlock({ children, className }: CodeBlockProps) {
    const language = className?.replace('language-', '') || 'text';

    return (
        <SyntaxHighlighter
            language={language}
            style={oneDark}
            customStyle={{
                margin: '1rem 0',
                borderRadius: '0.5rem',
                fontSize: '0.875rem',
            }}
        >
            {children}
        </SyntaxHighlighter>
    );
}