import { NextRequest, NextResponse } from "next/server";
import { jwtDecode } from "jwt-decode";

export async function middleware(req: NextRequest, res: NextResponse) {
  const { url, cookies } = req
  const token = cookies.get('token')?.value

  if (url.includes('/admin') && !token) {
    return NextResponse.redirect(new URL('/login', req.url))
  }

  if (token) {
    try {
      const decoded = jwtDecode(token) as any
      if (decoded['user-data'].role.name !== 'admin') {
        return NextResponse.redirect(new URL('/login', req.url))
      }
    } catch (error) {
      return NextResponse.redirect(new URL('/login', req.url))
    }
  }



  if (token) {
    const url = req.nextUrl.clone()
    if (url.pathname === '/login') {
      const decoded = jwtDecode(token) as any
      if (decoded['user-data'].role.name === 'admin') {
        return NextResponse.redirect(new URL('/admin', req.url))
      }
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    "/admin/:path*",
    "/login",
    '/'
  ]
}