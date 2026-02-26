import Link from "next/link";

type Crumb = {
  name: string;
  href: string;
};

export function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb" className="text-sm text-slate-500 dark:text-slate-400">
      <ol className="flex flex-wrap items-center gap-2">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;

          return (
            <li key={item.href} className="flex items-center gap-2">
              {isLast ? (
                <span aria-current="page" className="font-medium text-slate-700 dark:text-slate-200">
                  {item.name}
                </span>
              ) : (
                <Link href={item.href} className="hover:text-brand-600">
                  {item.name}
                </Link>
              )}
              {!isLast ? <span>/</span> : null}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}