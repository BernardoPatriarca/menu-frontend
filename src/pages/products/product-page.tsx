import { useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { useCategory } from "@/cases/categories/hooks/use-category";
import { ProductCard } from "@/cases/products/components/product-card";
import { useProducts } from "@/cases/products/hooks/use-products";

export function ProductPage() {
    const [searchParams] = useSearchParams();
    const categoryId = searchParams.get('categoryId')

    const { data: selectedCategory } = useCategory(categoryId ?? '');
    const { data: products = [], isPending, isError, refetch } = useProducts();

    // A API devolve todos os produtos: aqui ficam só os ativos da categoria escolhida.
    const visibleProducts = useMemo(
        () => products.filter(
            (product) => product.active && (!categoryId || product.category?.id === categoryId)
        ),
        [products, categoryId]
    )

    return (
        <div className="flex flex-col gap-6">
            <h2 className="text-2xl font-semibold uppercase">
                {selectedCategory ? selectedCategory.name : 'Cardápio'}
            </h2>

            {isPending && (
                <p className="text-muted-foreground">Carregando produtos...</p>
            )}

            {isError && (
                <div className="flex flex-col items-start gap-2">
                    <p className="text-destructive">Não foi possível carregar os produtos.</p>
                    <button
                        type="button"
                        onClick={() => refetch()}
                        className="cursor-pointer text-sm font-medium underline"
                    >
                        Tentar novamente
                    </button>
                </div>
            )}

            {!isPending && !isError && visibleProducts.length === 0 && (
                <p className="text-muted-foreground">Nenhum produto disponível nesta categoria.</p>
            )}

            <div className="flex flex-col gap-3">
                {visibleProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    )
}
