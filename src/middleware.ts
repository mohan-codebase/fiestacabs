import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
    const origin = request.headers.get('origin');
    const host = request.headers.get('host');
    const xForwardedHost = request.headers.get('x-forwarded-host');
    const xForwardedProto = request.headers.get('x-forwarded-proto');

    // Create a new Headers object to modify incoming headers
    const requestHeaders = new Headers(request.headers);

    // LiteSpeed concatenates headers on existing requests (e.g. from Cloudflare)
    // Next.js strictly expects standard domain strings avoiding: "example.com, example.com"
    if (origin && origin.includes(',')) {
        requestHeaders.set('origin', origin.split(',')[0].trim());
    }
    if (host && host.includes(',')) {
        requestHeaders.set('host', host.split(',')[0].trim());
    }
    if (xForwardedHost && xForwardedHost.includes(',')) {
        requestHeaders.set('x-forwarded-host', xForwardedHost.split(',')[0].trim());
    }
    if (xForwardedProto && xForwardedProto.includes(',')) {
        requestHeaders.set('x-forwarded-proto', xForwardedProto.split(',')[0].trim());
    }

    return NextResponse.next({
        request: {
            headers: requestHeaders,
        },
    });
}
