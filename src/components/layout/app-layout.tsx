import { CategoryNav } from "@/cases/categories/components/category-nav";
import { Header } from "./header";
import { Outlet } from "react-router-dom";

export function AppLayout() {
    return (
        <>
            <Header />

            <div className="mx-auto flex w-full max-w-5xl gap-6 py-8 px-6">
                <aside className="flex w-full flex-col">
                    <CategoryNav />
                </aside>

                <main className="flex-1 border-t border-border pt-6 pb-6">
                    <Outlet />
                </main>
            </div>
        </>
    )
}
