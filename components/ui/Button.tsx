import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "ghost" | "night";
type ButtonSize = "sm" | "md" | "lg";

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-foreground text-background hover:bg-brand hover:text-white shadow-sm",
  secondary:
    "bg-transparent text-foreground border border-border hover:border-foreground",
  ghost: "bg-transparent text-foreground hover:bg-muted",
  night:
    "bg-white text-night hover:bg-night-foreground shadow-lg shadow-black/10",
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "h-9 px-4 text-sm",
  md: "h-11 px-6 text-sm",
  lg: "h-13 px-8 text-base",
};

const baseClasses =
  "inline-flex items-center justify-center gap-2 rounded-full font-medium transition-all duration-200 ease-out active:scale-[0.98] disabled:opacity-50 disabled:pointer-events-none whitespace-nowrap";

type BaseProps = {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  children: React.ReactNode;
};

type LinkProps = BaseProps &
  Omit<React.ComponentProps<typeof Link>, "href" | "className"> & {
    href: string;
  };

type NativeButtonProps = BaseProps &
  Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "className"> & {
    href?: never;
  };

export function Button({
  variant = "primary",
  size = "md",
  className,
  children,
  ...rest
}: LinkProps | NativeButtonProps) {
  const classes = cn(baseClasses, variantClasses[variant], sizeClasses[size], className);

  if (rest.href) {
    const { href, ...linkProps } = rest as Omit<LinkProps, keyof BaseProps>;
    return (
      <Link href={href} className={classes} {...linkProps}>
        {children}
      </Link>
    );
  }

  const buttonProps = rest as Omit<NativeButtonProps, keyof BaseProps | "href">;
  return (
    <button className={classes} {...buttonProps}>
      {children}
    </button>
  );
}
