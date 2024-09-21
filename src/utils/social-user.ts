'use server'
import { getServerSession } from "next-auth";
import { authOptions } from "./authOptions";
import { SocialLogin } from "@/services/actions/social-login";
import { storeUserInfo } from "@/services/auth.service";

export const socialUser = async () => {
    const session = await getServerSession(authOptions);

    const userInfo = await SocialLogin(session?.user);


    return userInfo;
}

