const currency = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
})

/** O TypeORM devolve colunas `numeric` como string ("24.90"). */
export function formatCurrency(value: number | string): string {
  return currency.format(Number(value))
}
