import Stack from "@mui/material/Stack"
import getProduct from "./get-product"
import { Typography } from "@mui/material"
import Image from "next/image"
import { getProductImage } from "../product-image"
import Checkout from "@/app/checkout/checkout"
import Grid from "@mui/material/Grid"

interface SingleProductProps {
    params: Promise<{ productId: string }>
}

export default async function SingleProduct({ params }: SingleProductProps) {
    const { productId } = await params
    const product = await getProduct(Number(productId))

    return (
        <Grid container marginBottom={"2rem"} rowGap={3}>
            {product.imageExists && (
            <Grid size={{ sm: 6, lg: 4, xs: 12 }}>
                    <Image
                     src={getProductImage(product.id)}
                     alt="product-image"
                     width={0}
                     height={0}
                     sizes="100vw"
                     className="w-full sm:w-3/4 h-auto" />
            </Grid>
            )}
            <Grid size={{ sm: 6, lg: 4, xs: 12 }}>
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