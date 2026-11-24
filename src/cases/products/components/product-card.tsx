import { Utensils } from "lucide-react"
import { formatCurrency } from "@/lib/format"
import type { ProductDTO } from "../dtos/product.dto"

interface ProductCardProps {
  product: ProductDTO
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <article className="flex items-center gap-4 rounded-xl border border-border bg-card p-4">
      <div className="flex size-24 shrink-0 items-center justify-center rounded-lg bg-muted">
        {product.picture ? (
          <img src={product.picture} alt={product.name} className="size-16 object-contain" />
        ) : (
          <Utensils className="size-10 text-brand" />
        )}
      </div>

      <div className="flex min-w-0 flex-1 flex-col gap-1">
        <h3 className="font-menu text-lg font-semibold uppercase leading-tight tracking-tight">
          {product.name}
        </h3>

        {product.description && (
          <p className="line-clamp-2 text-sm text-muted-foreground">{product.description}</p>
        )}

        <span className="mt-1 font-menu text-xl font-bold text-brand">
          {formatCurrency(product.price)}
        </span>
      </div>
    </article>
  )
}
