import { jwtDecode, JwtPayload } from 'jwt-decode';
import { cookies } from 'next/headers'; // For accessing cookies in server components

type Role = 'USER' | 'FACULTY' | 'ADMIN';

interface CustomJwtPayload extends JwtPayload {
    id: string;
    role: Role;
}
  
// Function to decode the token from the 'refreshToken' cookie
export const getProfile = (): CustomJwtPayload | any => {
  const cookieStore = cookies();
  const token = cookieStore.get('refreshToken')?.value;

  if (!token) {
    console.log("No token found");
    return null;
  }

  try {
    const decodedToken = jwtDecode<CustomJwtPayload>(token); // Correct usage of jwtDecode

    // Check if the token is expired
    if (decodedToken.exp && decodedToken.exp < Date.now() / 1000) {
      console.log("Token expired");
      return null;
    }

    return decodedToken;
  } catch (error) {
    console.error("Error decoding token:", error);
    return null;
  }
};
