import getProducts from "./actions/get-products";
import ProductsGrid from "./products-grid";

export default async function Products() {
    const products = await getProducts()
    console.log(products);

    if (!Array.isArray(products) || products.length === 0) {
        return (
            <div className="text-center text-2xl mt-8">
                <h1>Faça login para ver os produtos</h1>
            </div>
        );
    }

    return (
        <div>
            <h1>Olá</h1>
            <ProductsGrid products={products} />
        </div>
    )
}