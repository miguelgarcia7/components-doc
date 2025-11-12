import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Introduction",
    description: "Get started with our component library. Learn how to install and use our components in your project.",
};

export default function DocsPage() {
    return (
        <div>
            <h1 className="text-4xl font-bold text-zinc-900 dark:text-zinc-50">
                Introduction
            </h1>
            <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400">
                Welcome to the component documentation. This is built similar to shadcn/ui.
            </p>
        </div>
    );
}