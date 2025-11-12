import Link from 'next/link';
import {Button} from '@/components/ui/button';

export default function Home() {
    return (
        <div className="min-h-screen bg-white dark:bg-zinc-950">
            {/* Hero Section */}
            <section className="container mx-auto px-4 sm:px-6 md:px-8 py-16 md:py-24 lg:py-32">
                <div className="max-w-4xl mx-auto text-center">
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-zinc-900 dark:text-zinc-50 mb-6 animate-[slide-in-from-bottom_0.5s_ease-out]">
                        Build Beautiful Components
                        <span className="block text-zinc-600 dark:text-zinc-400 mt-2">
              Faster Than Ever
            </span>
                    </h1>
                    <p className="text-lg sm:text-xl text-zinc-600 dark:text-zinc-400 mb-8 max-w-2xl mx-auto animate-[slide-in-from-bottom_0.6s_ease-out]">
                        A modern component documentation library with beautiful UI components.
                        Copy, paste, and customize. Built with Next.js, TypeScript, and Tailwind CSS.
                    </p>
                    <div
                        className="flex flex-col sm:flex-row gap-4 justify-center animate-[slide-in-from-bottom_0.7s_ease-out]">
                        <Link href="/docs">
                            <Button className="w-full sm:w-auto">
                                Get Started
                            </Button>
                        </Link>
                        <Link href="/docs/components">
                            <Button variant="outline" className="w-full sm:w-auto">
                                Browse Components
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="container mx-auto px-4 sm:px-6 md:px-8 py-16 md:py-24">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold text-center text-zinc-900 dark:text-zinc-50 mb-12">
                        Why Choose Our Components?
                    </h2>

                    <div className="grid md:grid-cols-3 gap-8">
                        {/* Feature 1 */}
                        <div
                            className="p-6 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 hover:shadow-lg transition-all duration-300 hover:border-zinc-300 dark:hover:border-zinc-700">
                            <div
                                className="w-12 h-12 rounded-lg bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center mb-4">
                                <svg className="w-6 h-6 text-zinc-900 dark:text-zinc-50" fill="none"
                                     stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                          d="M13 10V3L4 14h7v7l9-11h-7z"/>
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50 mb-2">
                                Fast & Performant
                            </h3>
                            <p className="text-zinc-600 dark:text-zinc-400">
                                Built with modern web technologies for optimal performance and speed.
                            </p>
                        </div>

                        {/* Feature 2 */}
                        <div
                            className="p-6 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 hover:shadow-lg transition-all duration-300 hover:border-zinc-300 dark:hover:border-zinc-700">
                            <div
                                className="w-12 h-12 rounded-lg bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center mb-4">
                                <svg className="w-6 h-6 text-zinc-900 dark:text-zinc-50" fill="none"
                                     stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                          d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"/>
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50 mb-2">
                                Fully Customizable
                            </h3>
                            <p className="text-zinc-600 dark:text-zinc-400">
                                Easily customize components to match your brand and design system.
                            </p>
                        </div>

                        {/* Feature 3 */}
                        <div
                            className="p-6 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 hover:shadow-lg transition-all duration-300 hover:border-zinc-300 dark:hover:border-zinc-700">
                            <div
                                className="w-12 h-12 rounded-lg bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center mb-4">
                                <svg className="w-6 h-6 text-zinc-900 dark:text-zinc-50" fill="none"
                                     stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50 mb-2">
                                TypeScript Support
                            </h3>
                            <p className="text-zinc-600 dark:text-zinc-400">
                                Full TypeScript support with comprehensive type definitions.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Code Example Section */}
            <section className="container mx-auto px-4 sm:px-6 md:px-8 py-16 md:py-24 bg-zinc-50 dark:bg-zinc-900/50">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold text-center text-zinc-900 dark:text-zinc-50 mb-4">
                        Simple to Use
                    </h2>
                    <p className="text-center text-zinc-600 dark:text-zinc-400 mb-12">
                        Copy, paste, and start building. It's that easy.
                    </p>

                    <div
                        className="rounded-lg border border-zinc-200 dark:border-zinc-800 overflow-hidden bg-white dark:bg-zinc-950">
                        <div
                            className="bg-zinc-100 dark:bg-zinc-800 px-4 py-2 border-b border-zinc-200 dark:border-zinc-700">
                            <div className="flex items-center space-x-2">
                                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                            </div>
                        </div>
                        <pre className="p-6 overflow-x-auto text-sm">
              <code className="text-zinc-900 dark:text-zinc-50">
{`import { Button } from '@/components/ui/button';

export default function MyComponent() {
  return (
    <Button>Click me</Button>
  );
}`}
              </code>
            </pre>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="container mx-auto px-4 sm:px-6 md:px-8 py-16 md:py-24">
                <div className="max-w-3xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-zinc-50 mb-6">
                        Ready to Get Started?
                    </h2>
                    <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-8">
                        Start building beautiful applications with our component library today.
                    </p>
                    <Link href="/docs">
                        <Button className="w-full sm:w-auto">
                            View Documentation
                        </Button>
                    </Link>
                </div>
            </section>
        </div>
    );
}