import { NextRequest, NextResponse } from "next/server";
import { jwtDecode, JwtPayload } from "jwt-decode";

// Define route arrays for different user roles
const USER_ROUTES = [
  "/dashboard/publications",
  "/dashboard/user/change-password",
];

const FACULTY_ROUTES = [
  "/dashboard",
  "/dashboard/publications",
  "/dashboard/publications/:id",
  "/dashboard/admin/manage-users",
  "/dashboard/admin/profile",
  "/dashboard/admin/change-password",
];

const ADMIN_ROUTES= [
  ...FACULTY_ROUTES,
  "/dashboard/super-admin/admins",
  "/dashboard/super-admin/add-admin",
];

// Define roles
type Role = 'USER' | 'FACULTY' | 'ADMIN';

interface CustomJwtPayload extends JwtPayload {
  id: string;
  role: Role;
}

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const url = request.nextUrl.clone();
  const cookie = request.cookies.get("refreshToken");
  const token = cookie?.value;

  // Skip middleware for static files and internal Next.js paths
  if (pathname.startsWith('/_next/') || pathname.startsWith('/static/')) {
    return NextResponse.next();
  }


  if (token) {
    let user: CustomJwtPayload;

    try {
      user = jwtDecode<CustomJwtPayload>(token);
    } catch (error) {
      console.error("Error decoding token:", error);
      url.pathname = "/auth/login";
      return NextResponse.redirect(url);
    }

    // Redirect to login if the token is expired or invalid
    if (!user.exp || user.exp < Date.now() / 1000) {
      console.log("Token expired or invalid");
      url.pathname = "/auth/login";
      return NextResponse.redirect(url);
    }

    const { role } = user;

    // Role-based route protection
    const isAdminPath = FACULTY_ROUTES.includes(pathname);
    const isSuperAdminPath = ADMIN_ROUTES.includes(pathname);
    const isUserPath = USER_ROUTES.includes(pathname);

    // console.log("User Role:", role);
    // console.log("Is Admin Path:", isAdminPath);
    // console.log("Is Super Admin Path:", isSuperAdminPath);
    // console.log("Is User Path:", isUserPath);

    // Redirect to not-found page if access is unauthorized
    if ((isAdminPath && role == 'FACULTY')) {
      return NextResponse.next();

    }
    if (isSuperAdminPath && role == 'ADMIN') {
      return NextResponse.next();
    }
    if (isUserPath && role == 'USER') {
      return NextResponse.next();
    }


// Redirect to not-found page if access is unauthorized
if ((isAdminPath && role !== 'FACULTY') || 
(isSuperAdminPath && role !== 'ADMIN') || 
(isUserPath && role !== 'USER')) {
console.log("Access denied for path:", pathname);
url.pathname = '/not-found';
return NextResponse.redirect(url);
}
  }

  
  else {

    const isPublicRoute = !USER_ROUTES.includes(pathname) &&
    !FACULTY_ROUTES.includes(pathname) &&
    !ADMIN_ROUTES.includes(pathname);

if (isPublicRoute) {
return NextResponse.next();
}


    // Redirect to login page if no token is found
    console.log("No token found");
    url.pathname = "/auth/login";
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}
