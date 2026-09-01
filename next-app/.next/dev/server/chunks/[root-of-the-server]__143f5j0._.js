module.exports = [
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/runtime-reacts.external.js [external] (next/dist/server/runtime-reacts.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/runtime-reacts.external.js", () => require("next/dist/server/runtime-reacts.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[externals]/node:stream [external] (node:stream, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("node:stream", () => require("node:stream"));

module.exports = mod;
}),
"[project]/next-app/app/api/backend/[...path]/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DELETE",
    ()=>DELETE,
    "GET",
    ()=>GET,
    "OPTIONS",
    ()=>OPTIONS,
    "PATCH",
    ()=>PATCH,
    "POST",
    ()=>POST,
    "PUT",
    ()=>PUT
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$lib$2f$api$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/next-app/lib/api.ts [app-route] (ecmascript)");
;
async function proxy(request, context) {
    const { path } = await context.params;
    const target = new URL(`/${path.join('/')}`, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$lib$2f$api$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["apiOrigin"]);
    request.nextUrl.searchParams.forEach((value, key)=>target.searchParams.append(key, value));
    const headers = new Headers();
    for (const name of [
        'accept',
        'content-type',
        'cookie',
        'user-agent'
    ]){
        const value = request.headers.get(name);
        if (value) headers.set(name, value);
    }
    const init = {
        method: request.method,
        headers,
        redirect: 'manual'
    };
    if (![
        'GET',
        'HEAD'
    ].includes(request.method)) init.body = await request.arrayBuffer();
    let response;
    try {
        response = await fetch(target, init);
    } catch  {
        return Response.json({
            error: 'Could not reach the safari backend.'
        }, {
            status: 502
        });
    }
    const outgoing = new Headers();
    response.headers.forEach((value, key)=>{
        if (![
            'content-encoding',
            'content-length',
            'transfer-encoding',
            'connection'
        ].includes(key.toLowerCase())) outgoing.append(key, value);
    });
    return new Response(response.body, {
        status: response.status,
        statusText: response.statusText,
        headers: outgoing
    });
}
const GET = proxy;
const POST = proxy;
const PUT = proxy;
const PATCH = proxy;
const DELETE = proxy;
const OPTIONS = proxy;
}),
"[project]/next-app/lib/api.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "apiOrigin",
    ()=>apiOrigin,
    "getBlogPostBySlug",
    ()=>getBlogPostBySlug,
    "getBlogPosts",
    ()=>getBlogPosts,
    "getDestinationBySlug",
    ()=>getDestinationBySlug,
    "getDestinations",
    ()=>getDestinations,
    "getHotelBySlug",
    ()=>getHotelBySlug,
    "getHotels",
    ()=>getHotels,
    "getSettings",
    ()=>getSettings,
    "getTestimonials",
    ()=>getTestimonials,
    "getTourBySlug",
    ()=>getTourBySlug,
    "getTours",
    ()=>getTours
]);
const API_URL = (process.env.API_URL || process.env.NEXT_PUBLIC_API_URL || process.env.VITE_API_URL || 'http://localhost:4000').replace(/\/$/, '');
const REVALIDATE_SECONDS = Number(process.env.CATALOG_REVALIDATE_SECONDS || 900);
async function publicGet(path, fallback) {
    try {
        const response = await fetch(`${API_URL}${path}`, {
            next: {
                revalidate: REVALIDATE_SECONDS
            },
            headers: {
                Accept: 'application/json'
            }
        });
        if (!response.ok) return fallback;
        return await response.json();
    } catch  {
        // Builds and previews must remain deployable even when the external API
        // is temporarily unavailable. Runtime ISR will repopulate when it returns.
        return fallback;
    }
}
const getTours = ()=>publicGet('/api/tours', []);
const getDestinations = ()=>publicGet('/api/destinations', []);
const getHotels = ()=>publicGet('/api/hotels', []);
const getBlogPosts = ()=>publicGet('/api/blog', []);
const getTestimonials = ()=>publicGet('/api/testimonials', []);
const getSettings = ()=>publicGet('/api/settings', null);
async function getTourBySlug(slug) {
    return (await getTours()).find((item)=>item.slug === slug) ?? null;
}
async function getDestinationBySlug(slug) {
    return (await getDestinations()).find((item)=>item.slug === slug) ?? null;
}
async function getHotelBySlug(slug) {
    return (await getHotels()).find((item)=>item.slug === slug) ?? null;
}
async function getBlogPostBySlug(slug) {
    return (await getBlogPosts()).find((item)=>item.slug === slug) ?? null;
}
const apiOrigin = API_URL;
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__143f5j0._.js.map