'use client'

import { Button } from "@mui/material";
import getStripe from "./stripe";
import checkout from "./actions/checkout";

interface CheckoutProps {
    productId: number;
}

export default function Checkout({ productId }: CheckoutProps) {
    const handleCheckout = async () => {
        const session = await checkout(productId);
        const stripe = await getStripe()
        await stripe?.redirectToCheckout({ sessionId: session.data.id })
    }

    return <Button variant="contained" className="max-w-[25%]" onClick={handleCheckout}>Buy Now</Button>
}