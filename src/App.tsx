import { Navigate, Route, Routes } from "react-router-dom"
import { AppLayout } from "./components/layout/app-layout"
import { ProductPage } from "./pages/products/product-page"

function App() {

  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route index element={<Navigate to="products" replace />} />
        <Route path="products" element={<ProductPage />} />
      </Route>
    </Routes>
  )
}

export default App
