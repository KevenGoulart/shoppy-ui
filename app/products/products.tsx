import getProducts from "./actions/get-products";
import ProductsGrid from "./products-grid";

export default async function Products() {
    const products = await getProducts()

    return (
        // <>
        // <h1>teste</h1></>
        <ProductsGrid products={products} />
    )
}