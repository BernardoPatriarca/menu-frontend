import { Link, useSearchParams } from "react-router-dom"
import { useCategories } from "../hooks/use-category"
import { cn } from "@/lib/utils"
import { Utensils } from "lucide-react"

export function CategoryNav() {
    const [searchParams] = useSearchParams();
    const selectedCategoryId = searchParams.get('categoryId')

    const { data: categories = [] } = useCategories()

    return (
        <nav className="w-fill">
            <ul className="flex flex-col gap-2">

                {categories.map((category) => (
                    <li key={category.id}>
                        <Link
                            to={`/products?categoryId=${category.id}`}
                            className={cn(
                                'flex w-full items-center gap-3 rounded-xl border px-5 py-5',
                                'font-menu text-lg font-semibold uppercase tracking-tight',
                                'transition-colors duration-200',
                                selectedCategoryId === category.id
                                    ? ['border-[#886A2C]', 'bg-primary/5', 'text-[#886A2C]']
                                    : ['border-border', 'text-foreground', 'hover:border-[#b86a2c]/50 hover:text-[#b86a2c]']
                            )}
                        >
                            { category.icon 
                            ? <img src={category.icon} alt="" className="size-10" />
                            : <Utensils className="size-10 text-brand" /> }

                            <span className="leading-tight">{category.name}</span>
                        </Link>
                    </li>
                ))}

            </ul>
        </nav>
    )
}