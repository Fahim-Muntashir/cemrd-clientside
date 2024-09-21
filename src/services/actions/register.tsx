"use server";
import * as z from 'zod';

import { RegisterSchema } from '../../../schemas';
import { modifyPayload } from '../../utils/modifyPayload';

export const register = async (values: z.infer<typeof RegisterSchema>) => {
    const validatedFields = RegisterSchema.safeParse(values);
    if (!validatedFields.success) {
        return { error: "Invalid fields!" };
    }
    const data = modifyPayload(values)

    const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_API_URL}/auth/register`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: data,
        cache: "no-store"
    })

    const userInfo = await res.json();


    return userInfo;
}