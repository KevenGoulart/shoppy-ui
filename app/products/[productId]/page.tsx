import Stack from "@mui/material/Stack"
import getProduct from "./get-product"
import { Grid, Typography } from "@mui/material"
import Image from "next/image"
import { getProductImage } from "../product-image"
import Checkout from "@/app/checkout/checkout"

interface SingleProductProps {
    params: { productId: string }
}

export default async function SingleProduct({ params }: SingleProductProps) {
    const product = await getProduct(+params.productId)

    return (
        <Grid container marginBottom={"2rem"} rowGap={3}>
            {product.imageExists && (
            <Grid>
                    <Image
                     src={getProductImage(product.id)}
                     alt="product-image"
                     width={0}
                     height={0}
                     sizes="100vw"
                     className="w-full sm:w-3/4 h-auto" />
            </Grid>
            )}
            <Grid>
                <Stack gap={3}>
                    <Typography variant="h2">{product.name}</Typography>
                    <Typography>{product.description}</Typography>
                    <Typography variant="h4">${product.price}</Typography>
                    <Checkout productId={product.id} />
                </Stack>
            </Grid>
        </Grid>
    )
}