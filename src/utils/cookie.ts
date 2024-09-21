"use server";
import { cookies } from 'next/headers';

async function removeCookie() {
  cookies().delete('refreshToken');
  cookies().delete('tokenExpiryTime');
}

export default removeCookie;
