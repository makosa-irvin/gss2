module.exports = [
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[project]/next-app/app/safaris/[slug]/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SafariDetailPage,
    "dynamicParams",
    ()=>dynamicParams,
    "generateMetadata",
    ()=>generateMetadata,
    "generateStaticParams",
    ()=>generateStaticParams,
    "revalidate",
    ()=>revalidate
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/next-app/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/next-app/node_modules/next/image.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/next-app/node_modules/next/dist/client/app-dir/link.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$api$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/next-app/node_modules/next/dist/api/navigation.react-server.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/next-app/node_modules/next/dist/client/components/navigation.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__ = __turbopack_context__.i("[project]/next-app/node_modules/lucide-react/dist/esm/icons/arrow-left.js [app-rsc] (ecmascript) <export default as ArrowLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2d$days$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__CalendarDays$3e$__ = __turbopack_context__.i("[project]/next-app/node_modules/lucide-react/dist/esm/icons/calendar-days.js [app-rsc] (ecmascript) <export default as CalendarDays>");
var __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$camera$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Camera$3e$__ = __turbopack_context__.i("[project]/next-app/node_modules/lucide-react/dist/esm/icons/camera.js [app-rsc] (ecmascript) <export default as Camera>");
var __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/next-app/node_modules/lucide-react/dist/esm/icons/check.js [app-rsc] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$question$2d$mark$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__CircleHelp$3e$__ = __turbopack_context__.i("[project]/next-app/node_modules/lucide-react/dist/esm/icons/circle-question-mark.js [app-rsc] (ecmascript) <export default as CircleHelp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_context__.i("[project]/next-app/node_modules/lucide-react/dist/esm/icons/clock.js [app-rsc] (ecmascript) <export default as Clock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$compass$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Compass$3e$__ = __turbopack_context__.i("[project]/next-app/node_modules/lucide-react/dist/esm/icons/compass.js [app-rsc] (ecmascript) <export default as Compass>");
var __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__ = __turbopack_context__.i("[project]/next-app/node_modules/lucide-react/dist/esm/icons/external-link.js [app-rsc] (ecmascript) <export default as ExternalLink>");
var __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Map$3e$__ = __turbopack_context__.i("[project]/next-app/node_modules/lucide-react/dist/esm/icons/map.js [app-rsc] (ecmascript) <export default as Map>");
var __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__ = __turbopack_context__.i("[project]/next-app/node_modules/lucide-react/dist/esm/icons/map-pin.js [app-rsc] (ecmascript) <export default as MapPin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$circle$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageCircle$3e$__ = __turbopack_context__.i("[project]/next-app/node_modules/lucide-react/dist/esm/icons/message-circle.js [app-rsc] (ecmascript) <export default as MessageCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__ = __turbopack_context__.i("[project]/next-app/node_modules/lucide-react/dist/esm/icons/shield-check.js [app-rsc] (ecmascript) <export default as ShieldCheck>");
var __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__ = __turbopack_context__.i("[project]/next-app/node_modules/lucide-react/dist/esm/icons/sparkles.js [app-rsc] (ecmascript) <export default as Sparkles>");
var __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__ = __turbopack_context__.i("[project]/next-app/node_modules/lucide-react/dist/esm/icons/star.js [app-rsc] (ecmascript) <export default as Star>");
var __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/next-app/node_modules/lucide-react/dist/esm/icons/x.js [app-rsc] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$components$2f$DynamicPricingTable$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/next-app/components/DynamicPricingTable.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$components$2f$EnquiryButton$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/next-app/components/EnquiryButton.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$components$2f$ItineraryTimeline$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/next-app/components/ItineraryTimeline.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$components$2f$ShortlistButton$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/next-app/components/ShortlistButton.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$components$2f$TourDecisionSummary$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/next-app/components/TourDecisionSummary.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$components$2f$TourGallery$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/next-app/components/TourGallery.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$components$2f$TourRouteMap$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/next-app/components/TourRouteMap.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$lib$2f$api$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/next-app/lib/api.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$lib$2f$reviewStories$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/next-app/lib/reviewStories.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$lib$2f$site$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/next-app/lib/site.ts [app-rsc] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
const revalidate = 900;
const dynamicParams = true;
async function generateStaticParams() {
    return (await (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$lib$2f$api$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getTours"])()).map((tour)=>({
            slug: tour.slug
        }));
}
async function generateMetadata({ params }) {
    const { slug } = await params;
    const tour = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$lib$2f$api$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getTourBySlug"])(slug);
    if (!tour) return {};
    return {
        title: tour.seo?.title || tour.title,
        description: tour.seo?.description || tour.shortDescription,
        alternates: {
            canonical: `/safaris/${tour.slug}`
        },
        openGraph: {
            title: tour.title,
            description: tour.shortDescription,
            url: `/safaris/${tour.slug}`,
            images: [
                tour.images?.[0] || '/images/catalog/mara-savannah.jpg'
            ]
        }
    };
}
async function SafariDetailPage({ params }) {
    const { slug } = await params;
    const tour = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$lib$2f$api$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getTourBySlug"])(slug);
    if (!tour) (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["notFound"])();
    const image = tour.images?.[0] || '/images/catalog/mara-savannah.jpg';
    const price = tour.sharingPrice || tour.priceFrom;
    const includedItems = [
        ...tour.includedServices || [],
        ...tour.includedActivities || []
    ];
    const excludedItems = tour.exclusions || [];
    const routeStories = (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$lib$2f$reviewStories$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getRouteReviewStories"])(tour.destinations || []);
    const url = (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$lib$2f$site$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["siteUrl"])(`/safaris/${tour.slug}`);
    const schema = [
        {
            '@context': 'https://schema.org',
            '@type': 'TouristTrip',
            name: tour.title,
            description: tour.shortDescription,
            touristType: tour.travelStyles,
            itinerary: tour.destinations?.join(' → '),
            image: (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$lib$2f$site$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["siteUrl"])(image),
            url
        },
        {
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
                {
                    '@type': 'ListItem',
                    position: 1,
                    name: 'Home',
                    item: (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$lib$2f$site$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["siteUrl"])('/')
                },
                {
                    '@type': 'ListItem',
                    position: 2,
                    name: 'Safaris',
                    item: (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$lib$2f$site$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["siteUrl"])('/safaris')
                },
                {
                    '@type': 'ListItem',
                    position: 3,
                    name: tour.title,
                    item: url
                }
            ]
        }
    ];
    const sectionLinks = [
        [
            'overview',
            'Overview',
            __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$compass$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Compass$3e$__["Compass"]
        ],
        [
            'itinerary',
            'Itinerary',
            __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2d$days$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__CalendarDays$3e$__["CalendarDays"]
        ],
        [
            'route',
            'Route',
            __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Map$3e$__["Map"]
        ],
        [
            'inclusions',
            'Inclusions',
            __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"]
        ],
        [
            'gallery',
            'Gallery',
            __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$camera$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Camera$3e$__["Camera"]
        ],
        [
            'pricing',
            'Pricing',
            __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"]
        ],
        [
            'faqs',
            'FAQs',
            __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$question$2d$mark$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__CircleHelp$3e$__["CircleHelp"]
        ]
    ];
    const sectionOffsetClass = 'scroll-mt-44 sm:scroll-mt-52';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "pb-28 lg:pb-12",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("script", {
                type: "application/ld+json",
                dangerouslySetInnerHTML: {
                    __html: JSON.stringify(schema)
                }
            }, void 0, false, {
                fileName: "[project]/next-app/app/safaris/[slug]/page.tsx",
                lineNumber: 45,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "relative min-h-[440px] sm:min-h-[520px] lg:min-h-[570px] overflow-hidden bg-shell",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                        src: image,
                        alt: `${tour.title} safari`,
                        fill: true,
                        priority: true,
                        className: "object-cover",
                        sizes: "100vw"
                    }, void 0, false, {
                        fileName: "[project]/next-app/app/safaris/[slug]/page.tsx",
                        lineNumber: 46,
                        columnNumber: 108
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 bg-gradient-to-t from-shell/95 via-shell/35 to-black/25"
                    }, void 0, false, {
                        fileName: "[project]/next-app/app/safaris/[slug]/page.tsx",
                        lineNumber: 46,
                        columnNumber: 211
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative max-w-7xl mx-auto px-4 sm:px-8 pt-6 pb-10 min-h-[440px] sm:min-h-[520px] lg:min-h-[570px] flex flex-col justify-between",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/safaris",
                                        className: "min-h-11 inline-flex items-center gap-2 rounded-full bg-black/45 px-4 text-sm font-semibold text-white backdrop-blur-sm border border-white/20 hover:bg-black/60",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__["ArrowLeft"], {
                                                className: "w-4 h-4"
                                            }, void 0, false, {
                                                fileName: "[project]/next-app/app/safaris/[slug]/page.tsx",
                                                lineNumber: 46,
                                                columnNumber: 701
                                            }, this),
                                            "All safaris"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/next-app/app/safaris/[slug]/page.tsx",
                                        lineNumber: 46,
                                        columnNumber: 506
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$components$2f$ShortlistButton$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ShortlistButton"], {
                                        safari: {
                                            id: tour.id,
                                            title: tour.title,
                                            slug: tour.slug,
                                            image,
                                            durationLabel: tour.durationLabel,
                                            country: tour.country,
                                            priceFrom: tour.priceFrom
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/next-app/app/safaris/[slug]/page.tsx",
                                        lineNumber: 46,
                                        columnNumber: 752
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/next-app/app/safaris/[slug]/page.tsx",
                                lineNumber: 46,
                                columnNumber: 449
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "max-w-3xl",
                                children: [
                                    tour.featured || tour.popular ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "inline-flex rounded-full bg-action px-3 py-1.5 text-xs font-bold text-white shadow-sm mb-4",
                                        children: tour.popular ? 'Popular Choice' : 'Featured Safari'
                                    }, void 0, false, {
                                        fileName: "[project]/next-app/app/safaris/[slug]/page.tsx",
                                        lineNumber: 46,
                                        columnNumber: 990
                                    }, this) : null,
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                        className: "font-serif-luxury text-3xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.08] sm:leading-[1.05] break-words",
                                        children: tour.title
                                    }, void 0, false, {
                                        fileName: "[project]/next-app/app/safaris/[slug]/page.tsx",
                                        lineNumber: 46,
                                        columnNumber: 1167
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-5 flex flex-wrap gap-x-5 gap-y-3 text-sm font-semibold text-white/95",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "inline-flex items-center gap-1.5",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                                                        className: "w-4 h-4 text-brand-soft"
                                                    }, void 0, false, {
                                                        fileName: "[project]/next-app/app/safaris/[slug]/page.tsx",
                                                        lineNumber: 46,
                                                        columnNumber: 1457
                                                    }, this),
                                                    tour.durationLabel
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/next-app/app/safaris/[slug]/page.tsx",
                                                lineNumber: 46,
                                                columnNumber: 1406
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "inline-flex items-center gap-1.5",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                                                        className: "w-4 h-4 text-brand-soft"
                                                    }, void 0, false, {
                                                        fileName: "[project]/next-app/app/safaris/[slug]/page.tsx",
                                                        lineNumber: 46,
                                                        columnNumber: 1580
                                                    }, this),
                                                    tour.country
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/next-app/app/safaris/[slug]/page.tsx",
                                                lineNumber: 46,
                                                columnNumber: 1529
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/next-app/app/safaris/[slug]/page.tsx",
                                        lineNumber: 46,
                                        columnNumber: 1317
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/next-app/app/safaris/[slug]/page.tsx",
                                lineNumber: 46,
                                columnNumber: 930
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/next-app/app/safaris/[slug]/page.tsx",
                        lineNumber: 46,
                        columnNumber: 303
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/next-app/app/safaris/[slug]/page.tsx",
                lineNumber: 46,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "sticky top-[68px] sm:top-[112px] z-30 border-y border-border-strong bg-page/98 backdrop-blur-xl shadow-[0_6px_20px_rgba(15,23,18,0.10)]",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-7xl mx-auto px-2 sm:px-5 lg:px-6 flex items-center gap-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                            "aria-label": "Tour sections",
                            className: "min-w-0 flex-1 flex items-center overflow-x-auto scrollbar-hide py-1",
                            children: sectionLinks.map(([id, label, Icon])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: `#${id}`,
                                    className: "group shrink-0 min-h-12 px-3 sm:px-4 inline-flex items-center justify-center gap-2 rounded-lg text-xs sm:text-sm font-semibold text-ink-muted hover:text-brand-deep hover:bg-surface-soft transition-colors",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                            className: "w-[18px] h-[18px] shrink-0 text-ink-muted group-hover:text-brand-deep",
                                            "aria-hidden": "true"
                                        }, void 0, false, {
                                            fileName: "[project]/next-app/app/safaris/[slug]/page.tsx",
                                            lineNumber: 48,
                                            columnNumber: 636
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: label
                                        }, void 0, false, {
                                            fileName: "[project]/next-app/app/safaris/[slug]/page.tsx",
                                            lineNumber: 48,
                                            columnNumber: 745
                                        }, this)
                                    ]
                                }, id, true, {
                                    fileName: "[project]/next-app/app/safaris/[slug]/page.tsx",
                                    lineNumber: 48,
                                    columnNumber: 392
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/next-app/app/safaris/[slug]/page.tsx",
                            lineNumber: 48,
                            columnNumber: 238
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                            className: "hidden xl:flex shrink-0 items-center gap-3 my-2 ml-2 rounded-xl border border-border-strong bg-white px-3 py-2 shadow-sm text-ink",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "min-w-[106px] leading-tight",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "block text-[10px] font-bold uppercase tracking-wider text-brand-deep",
                                            children: "From"
                                        }, void 0, false, {
                                            fileName: "[project]/next-app/app/safaris/[slug]/page.tsx",
                                            lineNumber: 48,
                                            columnNumber: 971
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            className: "font-serif-luxury text-lg text-ink-strong",
                                            children: [
                                                tour.currency === 'KES' ? 'KES ' : '$',
                                                Number(price).toLocaleString()
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/next-app/app/safaris/[slug]/page.tsx",
                                            lineNumber: 48,
                                            columnNumber: 1069
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "block text-[10px] text-ink-muted mt-0.5",
                                            children: "Per person sharing"
                                        }, void 0, false, {
                                            fileName: "[project]/next-app/app/safaris/[slug]/page.tsx",
                                            lineNumber: 48,
                                            columnNumber: 1212
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/next-app/app/safaris/[slug]/page.tsx",
                                    lineNumber: 48,
                                    columnNumber: 926
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$components$2f$EnquiryButton$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["EnquiryButton"], {
                                    label: "Request This Safari",
                                    tourTitle: tour.title,
                                    className: "min-h-11 whitespace-nowrap rounded-xl bg-action hover:bg-action-strong px-5 text-sm font-extrabold text-white shadow-sm"
                                }, void 0, false, {
                                    fileName: "[project]/next-app/app/safaris/[slug]/page.tsx",
                                    lineNumber: 48,
                                    columnNumber: 1301
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/next-app/app/safaris/[slug]/page.tsx",
                            lineNumber: 48,
                            columnNumber: 777
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/next-app/app/safaris/[slug]/page.tsx",
                    lineNumber: 48,
                    columnNumber: 158
                }, this)
            }, void 0, false, {
                fileName: "[project]/next-app/app/safaris/[slug]/page.tsx",
                lineNumber: 48,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative z-10 bg-surface-soft border-b border-border-strong",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-7xl mx-auto px-4 sm:px-8 py-3 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 text-ink-strong",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-wrap items-center gap-x-5 gap-y-2 text-sm",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "inline-flex gap-2 items-center font-semibold text-action",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__["ShieldCheck"], {
                                            className: "w-4 h-4"
                                        }, void 0, false, {
                                            fileName: "[project]/next-app/app/safaris/[slug]/page.tsx",
                                            lineNumber: 50,
                                            columnNumber: 362
                                        }, this),
                                        "No payment required to enquire"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/next-app/app/safaris/[slug]/page.tsx",
                                    lineNumber: 50,
                                    columnNumber: 287
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-ink-muted",
                                    children: "This itinerary can be tailored around your dates, pace and stay preferences."
                                }, void 0, false, {
                                    fileName: "[project]/next-app/app/safaris/[slug]/page.tsx",
                                    lineNumber: 50,
                                    columnNumber: 434
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/next-app/app/safaris/[slug]/page.tsx",
                            lineNumber: 50,
                            columnNumber: 218
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-wrap gap-x-4 gap-y-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/reviews",
                                    className: "text-sm font-bold text-brand-deep hover:text-ink-strong",
                                    children: "Reviews of Good Secrets Safaris"
                                }, void 0, false, {
                                    fileName: "[project]/next-app/app/safaris/[slug]/page.tsx",
                                    lineNumber: 50,
                                    columnNumber: 604
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/plan-with-us",
                                    className: "text-sm font-bold text-brand-deep hover:text-ink-strong",
                                    children: "How we plan your safari"
                                }, void 0, false, {
                                    fileName: "[project]/next-app/app/safaris/[slug]/page.tsx",
                                    lineNumber: 50,
                                    columnNumber: 732
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/next-app/app/safaris/[slug]/page.tsx",
                            lineNumber: 50,
                            columnNumber: 556
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/next-app/app/safaris/[slug]/page.tsx",
                    lineNumber: 50,
                    columnNumber: 82
                }, this)
            }, void 0, false, {
                fileName: "[project]/next-app/app/safaris/[slug]/page.tsx",
                lineNumber: 50,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$components$2f$TourDecisionSummary$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["TourDecisionSummary"], {
                tour: tour
            }, void 0, false, {
                fileName: "[project]/next-app/app/safaris/[slug]/page.tsx",
                lineNumber: 52,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "max-w-7xl mx-auto px-4 sm:px-8 py-8 sm:py-12 space-y-14",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        id: "overview",
                        className: `${sectionOffsetClass} grid lg:grid-cols-12 gap-8 lg:gap-12 items-start`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "min-w-0 lg:col-span-5 space-y-5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-xs font-bold uppercase tracking-wider text-brand-soft",
                                                children: "The experience"
                                            }, void 0, false, {
                                                fileName: "[project]/next-app/app/safaris/[slug]/page.tsx",
                                                lineNumber: 55,
                                                columnNumber: 169
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                className: "font-serif-luxury text-2xl sm:text-3xl font-bold text-white mt-1",
                                                children: "Safari overview"
                                            }, void 0, false, {
                                                fileName: "[project]/next-app/app/safaris/[slug]/page.tsx",
                                                lineNumber: 55,
                                                columnNumber: 267
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/next-app/app/safaris/[slug]/page.tsx",
                                        lineNumber: 55,
                                        columnNumber: 164
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-base text-on-shell-muted leading-relaxed whitespace-pre-line break-words",
                                        children: tour.fullDescription || tour.shortDescription
                                    }, void 0, false, {
                                        fileName: "[project]/next-app/app/safaris/[slug]/page.tsx",
                                        lineNumber: 55,
                                        columnNumber: 374
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid grid-cols-2 gap-3 pt-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "rounded-xl border border-white/10 bg-white/5 p-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                                                        className: "w-5 h-5 text-brand-soft mb-2"
                                                    }, void 0, false, {
                                                        fileName: "[project]/next-app/app/safaris/[slug]/page.tsx",
                                                        lineNumber: 55,
                                                        columnNumber: 629
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-xs text-on-shell-subtle block",
                                                        children: "Duration"
                                                    }, void 0, false, {
                                                        fileName: "[project]/next-app/app/safaris/[slug]/page.tsx",
                                                        lineNumber: 55,
                                                        columnNumber: 679
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                        className: "text-sm text-white",
                                                        children: tour.durationLabel
                                                    }, void 0, false, {
                                                        fileName: "[project]/next-app/app/safaris/[slug]/page.tsx",
                                                        lineNumber: 55,
                                                        columnNumber: 747
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/next-app/app/safaris/[slug]/page.tsx",
                                                lineNumber: 55,
                                                columnNumber: 563
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "rounded-xl border border-white/10 bg-white/5 p-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$compass$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Compass$3e$__["Compass"], {
                                                        className: "w-5 h-5 text-brand-soft mb-2"
                                                    }, void 0, false, {
                                                        fileName: "[project]/next-app/app/safaris/[slug]/page.tsx",
                                                        lineNumber: 55,
                                                        columnNumber: 887
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-xs text-on-shell-subtle block",
                                                        children: "Travel style"
                                                    }, void 0, false, {
                                                        fileName: "[project]/next-app/app/safaris/[slug]/page.tsx",
                                                        lineNumber: 55,
                                                        columnNumber: 939
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                        className: "text-sm text-white",
                                                        children: tour.travelStyles?.[0] || 'Tailor-made'
                                                    }, void 0, false, {
                                                        fileName: "[project]/next-app/app/safaris/[slug]/page.tsx",
                                                        lineNumber: 55,
                                                        columnNumber: 1011
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/next-app/app/safaris/[slug]/page.tsx",
                                                lineNumber: 55,
                                                columnNumber: 821
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/next-app/app/safaris/[slug]/page.tsx",
                                        lineNumber: 55,
                                        columnNumber: 518
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/next-app/app/safaris/[slug]/page.tsx",
                                lineNumber: 55,
                                columnNumber: 115
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                id: "gallery",
                                className: `min-w-0 ${sectionOffsetClass} lg:col-span-7`,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$components$2f$TourGallery$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["TourGallery"], {
                                    images: tour.images || [],
                                    title: tour.title
                                }, void 0, false, {
                                    fileName: "[project]/next-app/app/safaris/[slug]/page.tsx",
                                    lineNumber: 55,
                                    columnNumber: 1194
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/next-app/app/safaris/[slug]/page.tsx",
                                lineNumber: 55,
                                columnNumber: 1118
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/next-app/app/safaris/[slug]/page.tsx",
                        lineNumber: 55,
                        columnNumber: 7
                    }, this),
                    routeStories.length ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "space-y-6",
                        "aria-labelledby": "route-stories-heading",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col lg:flex-row lg:items-end lg:justify-between gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-xs font-bold uppercase tracking-widest text-brand-soft",
                                                children: "Independent traveller feedback"
                                            }, void 0, false, {
                                                fileName: "[project]/next-app/app/safaris/[slug]/page.tsx",
                                                lineNumber: 57,
                                                columnNumber: 187
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                id: "route-stories-heading",
                                                className: "font-serif-luxury text-2xl sm:text-3xl font-bold text-white mt-1",
                                                children: "Traveller stories from this route"
                                            }, void 0, false, {
                                                fileName: "[project]/next-app/app/safaris/[slug]/page.tsx",
                                                lineNumber: 57,
                                                columnNumber: 302
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm text-on-shell-muted mt-2 max-w-3xl",
                                                children: "These travelers reviewed Good Secrets Safaris trips that visited one or more places included in this itinerary. They are not reviews of this exact safari package."
                                            }, void 0, false, {
                                                fileName: "[project]/next-app/app/safaris/[slug]/page.tsx",
                                                lineNumber: 57,
                                                columnNumber: 448
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/next-app/app/safaris/[slug]/page.tsx",
                                        lineNumber: 57,
                                        columnNumber: 182
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/reviews",
                                        className: "text-sm font-bold text-brand-soft hover:text-white whitespace-nowrap",
                                        children: "See all independent reviews →"
                                    }, void 0, false, {
                                        fileName: "[project]/next-app/app/safaris/[slug]/page.tsx",
                                        lineNumber: 57,
                                        columnNumber: 678
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/next-app/app/safaris/[slug]/page.tsx",
                                lineNumber: 57,
                                columnNumber: 101
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid gap-4 md:grid-cols-2 xl:grid-cols-3",
                                children: routeStories.map((review, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$lib$2f$reviewStories$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["sourceUrl"])(review.platform),
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        className: "group rounded-2xl border border-white/10 bg-white/5 p-5 transition hover:border-brand-strong hover:bg-white/[0.07]",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center justify-between gap-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-xs font-extrabold uppercase tracking-wider text-brand-soft",
                                                        children: review.platform
                                                    }, void 0, false, {
                                                        fileName: "[project]/next-app/app/safaris/[slug]/page.tsx",
                                                        lineNumber: 57,
                                                        columnNumber: 1236
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__["ExternalLink"], {
                                                        className: "w-4 h-4 text-on-shell-subtle group-hover:text-white"
                                                    }, void 0, false, {
                                                        fileName: "[project]/next-app/app/safaris/[slug]/page.tsx",
                                                        lineNumber: 57,
                                                        columnNumber: 1342
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/next-app/app/safaris/[slug]/page.tsx",
                                                lineNumber: 57,
                                                columnNumber: 1179
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mt-3 flex text-amber-500",
                                                "aria-label": `${review.rating} out of 5 stars`,
                                                children: Array.from({
                                                    length: review.rating
                                                }).map((_, starIndex)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__["Star"], {
                                                        className: "w-4 h-4 fill-current"
                                                    }, starIndex, false, {
                                                        fileName: "[project]/next-app/app/safaris/[slug]/page.tsx",
                                                        lineNumber: 57,
                                                        columnNumber: 1578
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/next-app/app/safaris/[slug]/page.tsx",
                                                lineNumber: 57,
                                                columnNumber: 1428
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "font-serif-luxury text-lg font-bold text-white mt-3",
                                                children: review.title
                                            }, void 0, false, {
                                                fileName: "[project]/next-app/app/safaris/[slug]/page.tsx",
                                                lineNumber: 57,
                                                columnNumber: 1643
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("blockquote", {
                                                className: "text-sm italic text-on-shell-muted leading-relaxed mt-2",
                                                children: [
                                                    "“",
                                                    review.excerpt,
                                                    "”"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/next-app/app/safaris/[slug]/page.tsx",
                                                lineNumber: 57,
                                                columnNumber: 1730
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mt-4 flex flex-wrap gap-1.5",
                                                children: review.destinations.filter((place)=>(tour.destinations || []).some((tourPlace)=>tourPlace.toLowerCase().includes(place.toLowerCase().replace('maasai', 'masai')) || place.toLowerCase().includes(tourPlace.toLowerCase().replace('maasai', 'masai')))).slice(0, 3).map((place)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "rounded-full border border-white/10 bg-black/20 px-2.5 py-1 text-[11px] font-semibold text-on-shell-muted",
                                                        children: place
                                                    }, place, false, {
                                                        fileName: "[project]/next-app/app/safaris/[slug]/page.tsx",
                                                        lineNumber: 57,
                                                        columnNumber: 2159
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/next-app/app/safaris/[slug]/page.tsx",
                                                lineNumber: 57,
                                                columnNumber: 1841
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mt-4 pt-4 border-t border-white/10",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                        className: "text-sm text-white",
                                                        children: review.reviewer
                                                    }, void 0, false, {
                                                        fileName: "[project]/next-app/app/safaris/[slug]/page.tsx",
                                                        lineNumber: 57,
                                                        columnNumber: 2369
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "ml-2 text-xs text-on-shell-subtle",
                                                        children: review.date
                                                    }, void 0, false, {
                                                        fileName: "[project]/next-app/app/safaris/[slug]/page.tsx",
                                                        lineNumber: 57,
                                                        columnNumber: 2434
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "mt-1 block text-xs font-bold text-brand-soft",
                                                        children: "Read the original review →"
                                                    }, void 0, false, {
                                                        fileName: "[project]/next-app/app/safaris/[slug]/page.tsx",
                                                        lineNumber: 57,
                                                        columnNumber: 2506
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/next-app/app/safaris/[slug]/page.tsx",
                                                lineNumber: 57,
                                                columnNumber: 2317
                                            }, this)
                                        ]
                                    }, `${review.platform}-${review.reviewer}-${index}`, true, {
                                        fileName: "[project]/next-app/app/safaris/[slug]/page.tsx",
                                        lineNumber: 57,
                                        columnNumber: 918
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/next-app/app/safaris/[slug]/page.tsx",
                                lineNumber: 57,
                                columnNumber: 823
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/next-app/app/safaris/[slug]/page.tsx",
                        lineNumber: 57,
                        columnNumber: 30
                    }, this) : null,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        id: "itinerary",
                        className: sectionOffsetClass,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$components$2f$ItineraryTimeline$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ItineraryTimeline"], {
                            itinerary: tour.itinerary || []
                        }, void 0, false, {
                            fileName: "[project]/next-app/app/safaris/[slug]/page.tsx",
                            lineNumber: 59,
                            columnNumber: 62
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/next-app/app/safaris/[slug]/page.tsx",
                        lineNumber: 59,
                        columnNumber: 7
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        id: "route",
                        className: `${sectionOffsetClass} space-y-5`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-xs font-bold uppercase tracking-wider text-brand-soft",
                                        children: "Your route"
                                    }, void 0, false, {
                                        fileName: "[project]/next-app/app/safaris/[slug]/page.tsx",
                                        lineNumber: 60,
                                        columnNumber: 78
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "font-serif-luxury text-2xl sm:text-3xl font-bold text-white mt-1",
                                        children: "The journey on the map"
                                    }, void 0, false, {
                                        fileName: "[project]/next-app/app/safaris/[slug]/page.tsx",
                                        lineNumber: 60,
                                        columnNumber: 172
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm text-on-shell-muted mt-2",
                                        children: "A lightweight static map shows the sequence of the journey without loading an interactive mapping library."
                                    }, void 0, false, {
                                        fileName: "[project]/next-app/app/safaris/[slug]/page.tsx",
                                        lineNumber: 60,
                                        columnNumber: 280
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/next-app/app/safaris/[slug]/page.tsx",
                                lineNumber: 60,
                                columnNumber: 73
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$components$2f$TourRouteMap$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["TourRouteMap"], {
                                tour: tour
                            }, void 0, false, {
                                fileName: "[project]/next-app/app/safaris/[slug]/page.tsx",
                                lineNumber: 60,
                                columnNumber: 444
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/next-app/app/safaris/[slug]/page.tsx",
                        lineNumber: 60,
                        columnNumber: 7
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        id: "inclusions",
                        className: `${sectionOffsetClass} grid sm:grid-cols-2 gap-5`,
                        children: [
                            includedItems.length ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "min-w-0 rounded-2xl bg-emerald-50 border border-emerald-200 p-5 sm:p-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "font-serif-luxury text-xl font-bold text-action-strong",
                                        children: "What Is Included"
                                    }, void 0, false, {
                                        fileName: "[project]/next-app/app/safaris/[slug]/page.tsx",
                                        lineNumber: 61,
                                        columnNumber: 206
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                        className: "mt-4 space-y-2.5",
                                        children: includedItems.map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                className: "flex gap-2 text-sm text-action",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                                        className: "w-4 h-4 mt-0.5 shrink-0"
                                                    }, void 0, false, {
                                                        fileName: "[project]/next-app/app/safaris/[slug]/page.tsx",
                                                        lineNumber: 61,
                                                        columnNumber: 426
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: item
                                                    }, void 0, false, {
                                                        fileName: "[project]/next-app/app/safaris/[slug]/page.tsx",
                                                        lineNumber: 61,
                                                        columnNumber: 471
                                                    }, this)
                                                ]
                                            }, index, true, {
                                                fileName: "[project]/next-app/app/safaris/[slug]/page.tsx",
                                                lineNumber: 61,
                                                columnNumber: 367
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/next-app/app/safaris/[slug]/page.tsx",
                                        lineNumber: 61,
                                        columnNumber: 298
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/next-app/app/safaris/[slug]/page.tsx",
                                lineNumber: 61,
                                columnNumber: 118
                            }, this) : null,
                            excludedItems.length ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "min-w-0 rounded-2xl bg-rose-50 border border-rose-200 p-5 sm:p-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "font-serif-luxury text-xl font-bold text-rose-900",
                                        children: "What Is Excluded"
                                    }, void 0, false, {
                                        fileName: "[project]/next-app/app/safaris/[slug]/page.tsx",
                                        lineNumber: 61,
                                        columnNumber: 622
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                        className: "mt-4 space-y-2.5",
                                        children: excludedItems.map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                className: "flex gap-2 text-sm text-rose-900",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                                        className: "w-4 h-4 mt-0.5 shrink-0"
                                                    }, void 0, false, {
                                                        fileName: "[project]/next-app/app/safaris/[slug]/page.tsx",
                                                        lineNumber: 61,
                                                        columnNumber: 839
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: item
                                                    }, void 0, false, {
                                                        fileName: "[project]/next-app/app/safaris/[slug]/page.tsx",
                                                        lineNumber: 61,
                                                        columnNumber: 880
                                                    }, this)
                                                ]
                                            }, index, true, {
                                                fileName: "[project]/next-app/app/safaris/[slug]/page.tsx",
                                                lineNumber: 61,
                                                columnNumber: 778
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/next-app/app/safaris/[slug]/page.tsx",
                                        lineNumber: 61,
                                        columnNumber: 709
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/next-app/app/safaris/[slug]/page.tsx",
                                lineNumber: 61,
                                columnNumber: 540
                            }, this) : null
                        ]
                    }, void 0, true, {
                        fileName: "[project]/next-app/app/safaris/[slug]/page.tsx",
                        lineNumber: 61,
                        columnNumber: 7
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        id: "pricing",
                        className: sectionOffsetClass,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$components$2f$DynamicPricingTable$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["DynamicPricingTable"], {
                            tour: tour
                        }, void 0, false, {
                            fileName: "[project]/next-app/app/safaris/[slug]/page.tsx",
                            lineNumber: 62,
                            columnNumber: 60
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/next-app/app/safaris/[slug]/page.tsx",
                        lineNumber: 62,
                        columnNumber: 7
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        id: "faqs",
                        className: `${sectionOffsetClass} rounded-2xl bg-white border border-border-strong p-5 sm:p-7 text-ink`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "font-serif-luxury text-2xl font-bold text-ink-strong",
                                children: "Safari essentials"
                            }, void 0, false, {
                                fileName: "[project]/next-app/app/safaris/[slug]/page.tsx",
                                lineNumber: 63,
                                columnNumber: 131
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-5 grid md:grid-cols-2 gap-5",
                                children: [
                                    tour.childrenPolicy ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "text-sm font-bold text-ink-strong",
                                                children: "Children policy"
                                            }, void 0, false, {
                                                fileName: "[project]/next-app/app/safaris/[slug]/page.tsx",
                                                lineNumber: 63,
                                                columnNumber: 298
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm text-ink-muted mt-1",
                                                children: tour.childrenPolicy
                                            }, void 0, false, {
                                                fileName: "[project]/next-app/app/safaris/[slug]/page.tsx",
                                                lineNumber: 63,
                                                columnNumber: 368
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/next-app/app/safaris/[slug]/page.tsx",
                                        lineNumber: 63,
                                        columnNumber: 293
                                    }, this) : null,
                                    tour.startingDates ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "text-sm font-bold text-ink-strong",
                                                children: "Starting dates"
                                            }, void 0, false, {
                                                fileName: "[project]/next-app/app/safaris/[slug]/page.tsx",
                                                lineNumber: 63,
                                                columnNumber: 477
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm text-ink-muted mt-1",
                                                children: tour.startingDates
                                            }, void 0, false, {
                                                fileName: "[project]/next-app/app/safaris/[slug]/page.tsx",
                                                lineNumber: 63,
                                                columnNumber: 546
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/next-app/app/safaris/[slug]/page.tsx",
                                        lineNumber: 63,
                                        columnNumber: 472
                                    }, this) : null,
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "text-sm font-bold text-ink-strong",
                                                children: "Availability"
                                            }, void 0, false, {
                                                fileName: "[project]/next-app/app/safaris/[slug]/page.tsx",
                                                lineNumber: 63,
                                                columnNumber: 632
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm text-ink-muted mt-1",
                                                children: tour.bookingAvailability || 'On request'
                                            }, void 0, false, {
                                                fileName: "[project]/next-app/app/safaris/[slug]/page.tsx",
                                                lineNumber: 63,
                                                columnNumber: 699
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/next-app/app/safaris/[slug]/page.tsx",
                                        lineNumber: 63,
                                        columnNumber: 627
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "text-sm font-bold text-ink-strong",
                                                children: "Route"
                                            }, void 0, false, {
                                                fileName: "[project]/next-app/app/safaris/[slug]/page.tsx",
                                                lineNumber: 63,
                                                columnNumber: 799
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm text-ink-muted mt-1",
                                                children: [
                                                    tour.startingLocation,
                                                    " → ",
                                                    tour.destinations?.join(' → '),
                                                    " → ",
                                                    tour.endingLocation
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/next-app/app/safaris/[slug]/page.tsx",
                                                lineNumber: 63,
                                                columnNumber: 859
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/next-app/app/safaris/[slug]/page.tsx",
                                        lineNumber: 63,
                                        columnNumber: 794
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/next-app/app/safaris/[slug]/page.tsx",
                                lineNumber: 63,
                                columnNumber: 222
                            }, this),
                            tour.importantInformation?.length ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-6 pt-5 border-t border-border",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-sm font-bold text-ink-strong",
                                        children: "Important information"
                                    }, void 0, false, {
                                        fileName: "[project]/next-app/app/safaris/[slug]/page.tsx",
                                        lineNumber: 63,
                                        columnNumber: 1087
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                        className: "list-clean mt-3",
                                        children: tour.importantInformation.map((info)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                children: info
                                            }, info, false, {
                                                fileName: "[project]/next-app/app/safaris/[slug]/page.tsx",
                                                lineNumber: 63,
                                                columnNumber: 1234
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/next-app/app/safaris/[slug]/page.tsx",
                                        lineNumber: 63,
                                        columnNumber: 1163
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/next-app/app/safaris/[slug]/page.tsx",
                                lineNumber: 63,
                                columnNumber: 1037
                            }, this) : null
                        ]
                    }, void 0, true, {
                        fileName: "[project]/next-app/app/safaris/[slug]/page.tsx",
                        lineNumber: 63,
                        columnNumber: 7
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "rounded-[2rem] border border-brand-deep bg-shell p-7 sm:p-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-xs font-bold uppercase tracking-widest text-brand-soft",
                                        children: "Make it yours"
                                    }, void 0, false, {
                                        fileName: "[project]/next-app/app/safaris/[slug]/page.tsx",
                                        lineNumber: 64,
                                        columnNumber: 161
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "font-serif-luxury text-3xl font-bold text-white mt-2",
                                        children: "Want this route adjusted around your dates?"
                                    }, void 0, false, {
                                        fileName: "[project]/next-app/app/safaris/[slug]/page.tsx",
                                        lineNumber: 64,
                                        columnNumber: 259
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm text-on-shell-muted mt-2 max-w-2xl",
                                        children: "Share your group, dates and priorities. We can adapt nights, stays and pacing before you decide to proceed."
                                    }, void 0, false, {
                                        fileName: "[project]/next-app/app/safaris/[slug]/page.tsx",
                                        lineNumber: 64,
                                        columnNumber: 376
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/next-app/app/safaris/[slug]/page.tsx",
                                lineNumber: 64,
                                columnNumber: 156
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col sm:flex-row gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$components$2f$EnquiryButton$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["EnquiryButton"], {
                                        label: "Request this safari",
                                        tourTitle: tour.title,
                                        className: "min-h-12 px-6 rounded-xl bg-brand-soft hover:bg-brand-soft text-ink-strong font-extrabold text-sm"
                                    }, void 0, false, {
                                        fileName: "[project]/next-app/app/safaris/[slug]/page.tsx",
                                        lineNumber: 64,
                                        columnNumber: 600
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: `https://wa.me/254729000410?text=${encodeURIComponent(`Hello Good Secrets Safaris, I'd like to ask about ${tour.title}.`)}`,
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        className: "min-h-12 px-6 rounded-xl border border-white/20 text-white font-bold text-sm inline-flex items-center justify-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$circle$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageCircle$3e$__["MessageCircle"], {
                                                className: "w-4 h-4"
                                            }, void 0, false, {
                                                fileName: "[project]/next-app/app/safaris/[slug]/page.tsx",
                                                lineNumber: 64,
                                                columnNumber: 1089
                                            }, this),
                                            "WhatsApp"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/next-app/app/safaris/[slug]/page.tsx",
                                        lineNumber: 64,
                                        columnNumber: 778
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/next-app/app/safaris/[slug]/page.tsx",
                                lineNumber: 64,
                                columnNumber: 551
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/next-app/app/safaris/[slug]/page.tsx",
                        lineNumber: 64,
                        columnNumber: 7
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/next-app/app/safaris/[slug]/page.tsx",
                lineNumber: 54,
                columnNumber: 5
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/next-app/app/safaris/[slug]/page.tsx",
        lineNumber: 44,
        columnNumber: 10
    }, this);
}
}),
"[project]/next-app/app/safaris/[slug]/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", (function(__turbopack_context__){

__turbopack_context__.n(__turbopack_context__.i("[project]/next-app/app/safaris/[slug]/page.tsx [app-rsc] (ecmascript)"));
}),
"[project]/next-app/components/DynamicPricingTable.tsx [app-rsc] (client reference proxy)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DynamicPricingTable",
    ()=>DynamicPricingTable
]);
// This file is generated by next-core EcmascriptClientReferenceModule.
var __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/next-app/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const DynamicPricingTable = (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call DynamicPricingTable() from the server but DynamicPricingTable is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/next-app/components/DynamicPricingTable.tsx", "DynamicPricingTable");
}),
"[project]/next-app/components/DynamicPricingTable.tsx [app-rsc] (client reference proxy) <module evaluation>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DynamicPricingTable",
    ()=>DynamicPricingTable
]);
// This file is generated by next-core EcmascriptClientReferenceModule.
var __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/next-app/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const DynamicPricingTable = (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call DynamicPricingTable() from the server but DynamicPricingTable is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/next-app/components/DynamicPricingTable.tsx <module evaluation>", "DynamicPricingTable");
}),
"[project]/next-app/components/DynamicPricingTable.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$components$2f$DynamicPricingTable$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/next-app/components/DynamicPricingTable.tsx [app-rsc] (client reference proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$components$2f$DynamicPricingTable$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/next-app/components/DynamicPricingTable.tsx [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$components$2f$DynamicPricingTable$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/next-app/components/ItineraryTimeline.tsx [app-rsc] (client reference proxy)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ItineraryTimeline",
    ()=>ItineraryTimeline
]);
// This file is generated by next-core EcmascriptClientReferenceModule.
var __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/next-app/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const ItineraryTimeline = (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call ItineraryTimeline() from the server but ItineraryTimeline is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/next-app/components/ItineraryTimeline.tsx", "ItineraryTimeline");
}),
"[project]/next-app/components/ItineraryTimeline.tsx [app-rsc] (client reference proxy) <module evaluation>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ItineraryTimeline",
    ()=>ItineraryTimeline
]);
// This file is generated by next-core EcmascriptClientReferenceModule.
var __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/next-app/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const ItineraryTimeline = (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call ItineraryTimeline() from the server but ItineraryTimeline is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/next-app/components/ItineraryTimeline.tsx <module evaluation>", "ItineraryTimeline");
}),
"[project]/next-app/components/ItineraryTimeline.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$components$2f$ItineraryTimeline$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/next-app/components/ItineraryTimeline.tsx [app-rsc] (client reference proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$components$2f$ItineraryTimeline$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/next-app/components/ItineraryTimeline.tsx [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$components$2f$ItineraryTimeline$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/next-app/components/ShortlistButton.tsx [app-rsc] (client reference proxy)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "HotelShortlistButton",
    ()=>HotelShortlistButton,
    "ShortlistButton",
    ()=>ShortlistButton,
    "readShortlist",
    ()=>readShortlist,
    "writeShortlist",
    ()=>writeShortlist
]);
// This file is generated by next-core EcmascriptClientReferenceModule.
var __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/next-app/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const HotelShortlistButton = (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call HotelShortlistButton() from the server but HotelShortlistButton is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/next-app/components/ShortlistButton.tsx", "HotelShortlistButton");
const ShortlistButton = (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call ShortlistButton() from the server but ShortlistButton is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/next-app/components/ShortlistButton.tsx", "ShortlistButton");
const readShortlist = (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call readShortlist() from the server but readShortlist is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/next-app/components/ShortlistButton.tsx", "readShortlist");
const writeShortlist = (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call writeShortlist() from the server but writeShortlist is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/next-app/components/ShortlistButton.tsx", "writeShortlist");
}),
"[project]/next-app/components/ShortlistButton.tsx [app-rsc] (client reference proxy) <module evaluation>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "HotelShortlistButton",
    ()=>HotelShortlistButton,
    "ShortlistButton",
    ()=>ShortlistButton,
    "readShortlist",
    ()=>readShortlist,
    "writeShortlist",
    ()=>writeShortlist
]);
// This file is generated by next-core EcmascriptClientReferenceModule.
var __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/next-app/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const HotelShortlistButton = (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call HotelShortlistButton() from the server but HotelShortlistButton is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/next-app/components/ShortlistButton.tsx <module evaluation>", "HotelShortlistButton");
const ShortlistButton = (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call ShortlistButton() from the server but ShortlistButton is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/next-app/components/ShortlistButton.tsx <module evaluation>", "ShortlistButton");
const readShortlist = (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call readShortlist() from the server but readShortlist is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/next-app/components/ShortlistButton.tsx <module evaluation>", "readShortlist");
const writeShortlist = (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call writeShortlist() from the server but writeShortlist is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/next-app/components/ShortlistButton.tsx <module evaluation>", "writeShortlist");
}),
"[project]/next-app/components/ShortlistButton.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$components$2f$ShortlistButton$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/next-app/components/ShortlistButton.tsx [app-rsc] (client reference proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$components$2f$ShortlistButton$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/next-app/components/ShortlistButton.tsx [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$components$2f$ShortlistButton$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/next-app/components/TourDecisionSummary.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TourDecisionSummary",
    ()=>TourDecisionSummary
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/next-app/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_context__.i("[project]/next-app/node_modules/lucide-react/dist/esm/icons/clock.js [app-rsc] (ecmascript) <export default as Clock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$compass$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Compass$3e$__ = __turbopack_context__.i("[project]/next-app/node_modules/lucide-react/dist/esm/icons/compass.js [app-rsc] (ecmascript) <export default as Compass>");
var __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$hotel$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Hotel$3e$__ = __turbopack_context__.i("[project]/next-app/node_modules/lucide-react/dist/esm/icons/hotel.js [app-rsc] (ecmascript) <export default as Hotel>");
var __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__ = __turbopack_context__.i("[project]/next-app/node_modules/lucide-react/dist/esm/icons/map-pin.js [app-rsc] (ecmascript) <export default as MapPin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$route$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Route$3e$__ = __turbopack_context__.i("[project]/next-app/node_modules/lucide-react/dist/esm/icons/route.js [app-rsc] (ecmascript) <export default as Route>");
var __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__ = __turbopack_context__.i("[project]/next-app/node_modules/lucide-react/dist/esm/icons/users.js [app-rsc] (ecmascript) <export default as Users>");
;
;
function TourDecisionSummary({ tour }) {
    const bestFor = tour.travelerTypes?.length ? tour.travelerTypes.join(', ') : 'Travelers looking for a tailor-made safari';
    const styles = tour.travelStyles?.length ? tour.travelStyles.join(', ') : 'Tailor-made';
    const route = tour.destinations?.length ? tour.destinations.join(' → ') : tour.country;
    const startEnd = tour.startingLocation && tour.endingLocation ? `${tour.startingLocation} → ${tour.endingLocation}` : tour.startingLocation || tour.endingLocation || 'Confirm with your safari planner';
    const facts = [
        {
            label: 'Best for',
            value: bestFor,
            Icon: __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"]
        },
        {
            label: 'Safari style',
            value: styles,
            Icon: __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$compass$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Compass$3e$__["Compass"]
        },
        {
            label: 'Comfort',
            value: tour.comfortLevel,
            Icon: __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$hotel$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Hotel$3e$__["Hotel"]
        },
        {
            label: 'Duration',
            value: tour.durationLabel,
            Icon: __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"]
        },
        {
            label: 'Route',
            value: route,
            Icon: __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$route$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Route$3e$__["Route"]
        },
        {
            label: 'Starts / ends',
            value: startEnd,
            Icon: __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"]
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        "aria-labelledby": "decision-summary-heading",
        className: "border-y border-border-strong bg-page text-ink",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-7xl mx-auto px-4 sm:px-8 py-8 sm:py-10",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-3xl",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-xs font-extrabold uppercase tracking-widest text-brand-deep",
                            children: "At a glance"
                        }, void 0, false, {
                            fileName: "[project]/next-app/components/TourDecisionSummary.tsx",
                            lineNumber: 20,
                            columnNumber: 34
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            id: "decision-summary-heading",
                            className: "font-serif-luxury text-2xl sm:text-3xl font-bold text-ink-strong mt-1",
                            children: "Is this safari right for you?"
                        }, void 0, false, {
                            fileName: "[project]/next-app/components/TourDecisionSummary.tsx",
                            lineNumber: 20,
                            columnNumber: 135
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sm text-ink-muted mt-2 leading-relaxed",
                            children: "Compare the practical shape of this itinerary before getting into the day-by-day detail. These facts come directly from the safari itinerary and can be tailored when you request a quote."
                        }, void 0, false, {
                            fileName: "[project]/next-app/components/TourDecisionSummary.tsx",
                            lineNumber: 20,
                            columnNumber: 285
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/next-app/components/TourDecisionSummary.tsx",
                    lineNumber: 20,
                    columnNumber: 7
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("dl", {
                    className: "mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-3",
                    children: facts.map(({ label, value, Icon })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "rounded-2xl border border-border-strong bg-white p-4 min-w-0",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("dt", {
                                    className: "flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brand-deep",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                            className: "w-4 h-4 shrink-0",
                                            "aria-hidden": "true"
                                        }, void 0, false, {
                                            fileName: "[project]/next-app/components/TourDecisionSummary.tsx",
                                            lineNumber: 21,
                                            columnNumber: 297
                                        }, this),
                                        label
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/next-app/components/TourDecisionSummary.tsx",
                                    lineNumber: 21,
                                    columnNumber: 198
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("dd", {
                                    className: "mt-2 text-sm font-semibold text-ink-strong leading-relaxed break-words",
                                    children: value
                                }, void 0, false, {
                                    fileName: "[project]/next-app/components/TourDecisionSummary.tsx",
                                    lineNumber: 21,
                                    columnNumber: 365
                                }, this)
                            ]
                        }, label, true, {
                            fileName: "[project]/next-app/components/TourDecisionSummary.tsx",
                            lineNumber: 21,
                            columnNumber: 108
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/next-app/components/TourDecisionSummary.tsx",
                    lineNumber: 21,
                    columnNumber: 7
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/next-app/components/TourDecisionSummary.tsx",
            lineNumber: 19,
            columnNumber: 5
        }, this)
    }, void 0, false, {
        fileName: "[project]/next-app/components/TourDecisionSummary.tsx",
        lineNumber: 18,
        columnNumber: 10
    }, this);
}
}),
"[project]/next-app/components/TourGallery.tsx [app-rsc] (client reference proxy)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TourGallery",
    ()=>TourGallery
]);
// This file is generated by next-core EcmascriptClientReferenceModule.
var __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/next-app/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const TourGallery = (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call TourGallery() from the server but TourGallery is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/next-app/components/TourGallery.tsx", "TourGallery");
}),
"[project]/next-app/components/TourGallery.tsx [app-rsc] (client reference proxy) <module evaluation>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TourGallery",
    ()=>TourGallery
]);
// This file is generated by next-core EcmascriptClientReferenceModule.
var __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/next-app/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const TourGallery = (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call TourGallery() from the server but TourGallery is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/next-app/components/TourGallery.tsx <module evaluation>", "TourGallery");
}),
"[project]/next-app/components/TourGallery.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$components$2f$TourGallery$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/next-app/components/TourGallery.tsx [app-rsc] (client reference proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$components$2f$TourGallery$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/next-app/components/TourGallery.tsx [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$components$2f$TourGallery$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/next-app/components/TourRouteMap.tsx [app-rsc] (client reference proxy)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TourRouteMap",
    ()=>TourRouteMap
]);
// This file is generated by next-core EcmascriptClientReferenceModule.
var __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/next-app/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const TourRouteMap = (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call TourRouteMap() from the server but TourRouteMap is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/next-app/components/TourRouteMap.tsx", "TourRouteMap");
}),
"[project]/next-app/components/TourRouteMap.tsx [app-rsc] (client reference proxy) <module evaluation>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TourRouteMap",
    ()=>TourRouteMap
]);
// This file is generated by next-core EcmascriptClientReferenceModule.
var __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/next-app/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const TourRouteMap = (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call TourRouteMap() from the server but TourRouteMap is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/next-app/components/TourRouteMap.tsx <module evaluation>", "TourRouteMap");
}),
"[project]/next-app/components/TourRouteMap.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$components$2f$TourRouteMap$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/next-app/components/TourRouteMap.tsx [app-rsc] (client reference proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$components$2f$TourRouteMap$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/next-app/components/TourRouteMap.tsx [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$components$2f$TourRouteMap$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/next-app/lib/reviewStories.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SAFARI_BOOKINGS_URL",
    ()=>SAFARI_BOOKINGS_URL,
    "TRIPADVISOR_URL",
    ()=>TRIPADVISOR_URL,
    "featuredReviews",
    ()=>featuredReviews,
    "getRouteReviewStories",
    ()=>getRouteReviewStories,
    "sourceUrl",
    ()=>sourceUrl
]);
const SAFARI_BOOKINGS_URL = 'https://www.safaribookings.com/p7127';
const TRIPADVISOR_URL = 'https://www.tripadvisor.com/Attraction_Review-g294207-d25284334-Reviews-Good_Secrets_Safaris-Nairobi.html';
const featuredReviews = [
    {
        platform: 'SafariBookings',
        reviewer: 'Jordan Pope',
        title: 'Brilliant Team, incredible experience',
        date: '17 Aug 2026',
        rating: 5,
        excerpt: 'Everything was organised seamlessly.',
        destinations: []
    },
    {
        platform: 'SafariBookings',
        reviewer: 'Pritesh',
        title: 'Very professional and knowledgeable Tour Guide',
        date: '16 Jun 2026',
        rating: 5,
        excerpt: 'Extremely friendly and professional.',
        destinations: []
    },
    {
        platform: 'Tripadvisor',
        reviewer: 'Martin',
        title: 'Private safari in Kenya',
        date: '14 Jul 2026',
        rating: 5,
        excerpt: 'Professional and highly skilled.',
        destinations: []
    },
    {
        platform: 'Tripadvisor',
        reviewer: 'Sondra M',
        title: 'Perfect 9-Day Safari',
        date: '17 Nov 2025',
        rating: 5,
        excerpt: 'Felt safe and cared for from start to finish.',
        destinations: [
            'Ol Pejeta',
            'Maasai Mara',
            'Lake Nakuru',
            'Lake Naivasha',
            'Hell’s Gate',
            'Mount Longonot',
            'Crescent Island',
            'Amboseli',
            'Nairobi National Park'
        ]
    },
    {
        platform: 'Tripadvisor',
        reviewer: 'Kris K',
        title: 'Super safari company in Kenya',
        date: '1 Nov 2025',
        rating: 5,
        excerpt: 'Wonderful from start to finish.',
        destinations: [
            'Ol Pejeta',
            'Amboseli'
        ]
    },
    {
        platform: 'Tripadvisor',
        reviewer: 'Davide Conti',
        title: 'Unforgettable Safari with Excellent Guides and Service',
        date: '25 Aug 2025',
        rating: 5,
        excerpt: 'Truly outstanding.',
        destinations: []
    },
    {
        platform: 'Tripadvisor',
        reviewer: 'Brian S',
        title: 'Exceptional',
        date: '8 Aug 2025',
        rating: 5,
        excerpt: 'The best trip we have ever been on.',
        destinations: [
            'Maasai Mara',
            'Lake Nakuru',
            'Lake Naivasha'
        ]
    },
    {
        platform: 'Tripadvisor',
        reviewer: 'Clare K',
        title: 'Exceptional and professional',
        date: '10 Aug 2025',
        rating: 5,
        excerpt: 'Everything ran smoothly and felt so well organized.',
        destinations: []
    },
    {
        platform: 'Tripadvisor',
        reviewer: 'Lucia M',
        title: 'Wonderful experience',
        date: '28 Mar 2025',
        rating: 5,
        excerpt: 'A wonderful experience with this tour operator.',
        destinations: []
    },
    {
        platform: 'Tripadvisor',
        reviewer: 'Hua Z',
        title: 'The best experience we ever had in Kenya',
        date: '6 Feb 2025',
        rating: 5,
        excerpt: 'Very professional and open to communication.',
        destinations: [
            'Maasai Mara',
            'Amboseli'
        ]
    }
];
const sourceUrl = (platform)=>platform === 'SafariBookings' ? SAFARI_BOOKINGS_URL : TRIPADVISOR_URL;
const normalize = (value)=>value.toLowerCase().replace(/[’']/g, "'").replace('masai', 'maasai').trim();
function getRouteReviewStories(tourDestinations = [], limit = 3) {
    return featuredReviews.filter((review)=>review.destinations.some((reviewPlace)=>tourDestinations.some((tourPlace)=>{
                const a = normalize(tourPlace);
                const b = normalize(reviewPlace);
                return a.includes(b) || b.includes(a) || a.split(' ').some((part)=>part.length > 4 && b.includes(part));
            }))).slice(0, limit);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__0x6srjc._.js.map