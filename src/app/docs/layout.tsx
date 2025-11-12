import { TableOfContents } from '@/components/toc';
import { Breadcrumb } from '@/components/breadcrumb';

export default function DocsLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    return (
        <div className="flex min-h-[calc(100vh-3.5rem)] bg-white dark:bg-zinc-950">
            {/* Sidebar - hidden on mobile */}
            <aside className="hidden md:block w-64 border-r border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 p-6 flex-shrink-0 overflow-y-auto">
                <h2 className="font-semibold text-sm text-zinc-900 dark:text-zinc-50 mb-4">
                    Getting Started
                </h2>
                <nav className="space-y-1">

                   <a href="/docs"
                    className="block px-3 py-2 text-sm text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-50 rounded-md hover:bg-zinc-100 dark:hover:bg-zinc-800"
                    >
                    Introduction
                </a>

               <a href="/docs/installation"
                className="block px-3 py-2 text-sm text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-50 rounded-md hover:bg-zinc-100 dark:hover:bg-zinc-800"
                >
                Installation
            </a>
        </nav>

    <h2 className="font-semibold text-sm text-zinc-900 dark:text-zinc-50 mb-4 mt-6">
        Components
    </h2>
    <nav className="space-y-1">

        <a href="/docs/components"
        className="block px-3 py-2 text-sm text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-50 rounded-md hover:bg-zinc-100 dark:hover:bg-zinc-800"
        >
        Button
    </a>
</nav>
</aside>

    {/* Main content - full width on mobile, flexible on desktop */}
    <div className="flex-1 flex flex-col lg:flex-row w-full min-w-0">
        <main className="flex-1 w-full min-w-0 p-4 sm:p-6 md:p-8 lg:max-w-4xl">
            <Breadcrumb />
            {children}
        </main>

        {/* Table of Contents - hidden on mobile and tablet */}
        <aside className="hidden xl:block w-64 p-6 flex-shrink-0 overflow-y-auto">
            <TableOfContents />
        </aside>
    </div>
</div>
);
}