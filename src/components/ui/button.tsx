interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'default' | 'outline';
    children: React.ReactNode;
}

export function Button({
                           variant = 'default',
                           children,
                           className = '',
                           ...props
                       }: ButtonProps) {
    const baseStyles = 'px-4 py-2 rounded-md font-medium transition-all duration-200 active:scale-95';
    const variants = {
        default: 'bg-zinc-900 text-zinc-50 hover:bg-zinc-800 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-200 shadow-sm hover:shadow-md',
        outline: 'border border-zinc-300 dark:border-zinc-700 hover:bg-zinc-100 dark:hover:bg-zinc-800 hover:border-zinc-400 dark:hover:border-zinc-600',
    };

    return (
        <button
            className={`${baseStyles} ${variants[variant]} ${className}`}
            {...props}
        >
            {children}
        </button>
    );
}