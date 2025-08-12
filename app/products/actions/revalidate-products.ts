'use server'

import { revalidateTag } from "next/dist/server/web/spec-extension/revalidate"

export default async function revalidateProducts() {
    revalidateTag('products')
}