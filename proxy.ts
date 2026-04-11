import { NextRequest, NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { checkServerSession } from './lib/api/serverApi';

const privateRoutes = ['/profile', '/notes'];
const publicRoutes = ['/sign-in', '/sign-up'];

function parseCookieAttributes(cookieStr: string) {
  const parts = cookieStr.split(';').map((p) => p.trim());
  const [nameValue, ...attrs] = parts;
  const [name, value] = nameValue.split('=');
  const attributes: Record<string, string> = {};
  for (const attr of attrs) {
    const [key, val] = attr.split('=');
    attributes[key.trim().toLowerCase()] = val?.trim() ?? '';
  }
  return { name: name.trim(), value: value?.trim() ?? '', attributes };
}

export async function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const cookieStore = await cookies();
  const accessToken = cookieStore.get('accessToken')?.value;
  const refreshToken = cookieStore.get('refreshToken')?.value;

  const isPublicRoute = publicRoutes.some((route) => pathname.startsWith(route));
  const isPrivateRoute = privateRoutes.some((route) => pathname.startsWith(route));

  if (!accessToken) {
    if (refreshToken) {
      try {
        const data = await checkServerSession();
        const setCookie = data.headers['set-cookie'];
        if (setCookie) {
          const cookieArray = Array.isArray(setCookie) ? setCookie : [setCookie];
          for (const cookieStr of cookieArray) {
            const { name, value, attributes } = parseCookieAttributes(cookieStr);
            const options = {
              expires: attributes.expires ? new Date(attributes.expires) : undefined,
              path: attributes.path || '/',
              maxAge: attributes['max-age'] ? Number(attributes['max-age']) : undefined,
            };
            if (name === 'accessToken') cookieStore.set('accessToken', value, options);
            if (name === 'refreshToken') cookieStore.set('refreshToken', value, options);
          }
          if (isPublicRoute) {
            return NextResponse.redirect(new URL('/', request.url), {
              headers: { Cookie: cookieStore.toString() },
            });
          }
          if (isPrivateRoute) {
            return NextResponse.next({
              headers: { Cookie: cookieStore.toString() },
            });
          }
        }
      } catch {
      }
    }
    if (isPublicRoute) return NextResponse.next();
    if (isPrivateRoute) return NextResponse.redirect(new URL('/sign-in', request.url));
  }

  if (isPublicRoute) return NextResponse.redirect(new URL('/', request.url));
  if (isPrivateRoute) return NextResponse.next();

  return NextResponse.next();
}

export const config = {
  matcher: ['/profile/:path*', '/notes/:path*', '/sign-in', '/sign-up'],
};
