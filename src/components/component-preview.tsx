'use client';

import { useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

interface ComponentPreviewProps {
    children: React.ReactNode;
    code?: string;
}

export function ComponentPreview({ children, code }: ComponentPreviewProps) {
    const [showCode, setShowCode] = useState(false);
    const [copied, setCopied] = useState(false);

    const handleCopy = async () => {
        if (code) {
            await navigator.clipboard.writeText(code);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        }
    };

    return (
        <div className="my-6 rounded-lg border border-zinc-200 dark:border-zinc-800 overflow-hidden transition-all duration-300 hover:shadow-lg hover:border-zinc-300 dark:hover:border-zinc-700">
            {/* Preview Area */}
            <div className="p-4 sm:p-6 bg-white dark:bg-zinc-950 transition-colors duration-200">
                <div className="flex items-center justify-center min-h-[150px] sm:min-h-[200px]">
                    {children}
                </div>
            </div>

            {/* Control Bar */}
            {code && (
                <>
                    <div className="border-t border-zinc-200 dark:border-zinc-800 px-3 sm:px-4 py-2 bg-zinc-50 dark:bg-zinc-900 flex items-center justify-between gap-2 transition-colors duration-200">
                        <button
                            onClick={() => setShowCode(!showCode)}
                            className="text-xs sm:text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors duration-150"
                        >
                            {showCode ? 'Hide' : 'Show'} Code
                        </button>

                        <button
                            onClick={handleCopy}
                            className="text-xs sm:text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-50 flex items-center gap-1 sm:gap-2 transition-all duration-150 hover:scale-105"
                        >
                            {copied ? (
                                <>
                                    <svg className="w-3 h-3 sm:w-4 sm:h-4 animate-[spin_0.3s_ease-in-out]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span className="hidden sm:inline">Copied!</span>
                                </>
                            ) : (
                                <>
                                    <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                                    </svg>
                                    <span className="hidden sm:inline">Copy Code</span>
                                </>
                            )}
                        </button>
                    </div>

                    {/* Code Display with Syntax Highlighting - Smooth expand/collapse */}
                    <div
                        className={`border-t border-zinc-200 dark:border-zinc-800 overflow-hidden transition-all duration-300 ease-in-out ${
                            showCode ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'
                        }`}
                    >
                        <div className="overflow-x-auto">
                            <SyntaxHighlighter
                                language="tsx"
                                style={oneDark}
                                customStyle={{
                                    margin: 0,
                                    borderRadius: 0,
                                    fontSize: '0.75rem',
                                }}
                                className="text-xs sm:text-sm"
                            >
                                {code}
                            </SyntaxHighlighter>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
}