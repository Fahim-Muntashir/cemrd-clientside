"use server";

import { cookies } from "next/headers";


export const SocialLogin = async (values: any) => {

    const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_API_URL}/auth/social-login`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            credentials: 'include',
        },
        body: JSON.stringify(values),
        cache: "no-store"
    })

    const cookie = res.headers.get('set-cookie') || '0';

    console.log(cookie);

    cookies().set("refreshToken", cookie);


    const userInfo = await res.json();
    console.log(userInfo);
    return userInfo;
}