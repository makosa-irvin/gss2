(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/next-app/components/CatalogCards.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BlogCard",
    ()=>BlogCard,
    "DestinationCard",
    ()=>DestinationCard,
    "HotelCard",
    ()=>HotelCard,
    "ReviewCard",
    ()=>ReviewCard,
    "TourCard",
    ()=>TourCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/next-app/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/next-app/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/next-app/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/next-app/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/next-app/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-client] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/next-app/node_modules/lucide-react/dist/esm/icons/check.js [app-client] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_context__.i("[project]/next-app/node_modules/lucide-react/dist/esm/icons/clock.js [app-client] (ecmascript) <export default as Clock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$compass$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Compass$3e$__ = __turbopack_context__.i("[project]/next-app/node_modules/lucide-react/dist/esm/icons/compass.js [app-client] (ecmascript) <export default as Compass>");
var __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__ = __turbopack_context__.i("[project]/next-app/node_modules/lucide-react/dist/esm/icons/map-pin.js [app-client] (ecmascript) <export default as MapPin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageCircle$3e$__ = __turbopack_context__.i("[project]/next-app/node_modules/lucide-react/dist/esm/icons/message-circle.js [app-client] (ecmascript) <export default as MessageCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__ = __turbopack_context__.i("[project]/next-app/node_modules/lucide-react/dist/esm/icons/sparkles.js [app-client] (ecmascript) <export default as Sparkles>");
var __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__ = __turbopack_context__.i("[project]/next-app/node_modules/lucide-react/dist/esm/icons/star.js [app-client] (ecmascript) <export default as Star>");
var __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$components$2f$ShortlistButton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/next-app/components/ShortlistButton.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
const CURRENCY_KEY = 'gss_currency_v1';
const RESIDENT_KEY = 'gss_resident_mode_v1';
function usePricingPrefs() {
    _s();
    const [currency, setCurrency] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('USD');
    const [resident, setResident] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "usePricingPrefs.useEffect": ()=>{
            const load = {
                "usePricingPrefs.useEffect.load": ()=>{
                    const c = localStorage.getItem(CURRENCY_KEY);
                    setCurrency(c === 'KES' ? 'KES' : 'USD');
                    setResident(localStorage.getItem(RESIDENT_KEY) === 'true');
                }
            }["usePricingPrefs.useEffect.load"];
            load();
            window.addEventListener('gss-pricing-preference-changed', load);
            return ({
                "usePricingPrefs.useEffect": ()=>window.removeEventListener('gss-pricing-preference-changed', load)
            })["usePricingPrefs.useEffect"];
        }
    }["usePricingPrefs.useEffect"], []);
    return {
        currency,
        resident
    };
}
_s(usePricingPrefs, "AKUL+tZp5q4zNNowbErB47wTfZs=");
function formatPrice(usd, kes, currency) {
    if (currency === 'KES') return `KSH ${Number(kes && kes > 0 ? kes : Math.round(usd * 130)).toLocaleString()}`;
    return `$${Number(usd || 0).toLocaleString()}`;
}
function safeImage(src, fallback = '/images/catalog/mara-savannah.jpg') {
    return src || fallback;
}
function TourCard({ tour }) {
    _s1();
    const image = safeImage(tour.images?.[0]);
    const { currency, resident } = usePricingPrefs();
    const formattedPrice = formatPrice(tour.priceFrom, tour.residentPriceKES, currency);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
        id: `tour-card-${tour.id}`,
        className: "group relative min-h-[470px] sm:min-h-[500px] overflow-hidden rounded-2xl border border-white/10 bg-shell shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl focus-within:ring-2 focus-within:ring-brand-soft",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                src: image,
                alt: tour.title,
                fill: true,
                sizes: "(max-width:720px) 100vw,33vw",
                className: "object-cover transition-transform duration-700 group-hover:scale-[1.03]"
            }, void 0, false, {
                fileName: "[project]/next-app/components/CatalogCards.tsx",
                lineNumber: 19,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 bg-gradient-to-t from-shell via-shell/45 to-black/5"
            }, void 0, false, {
                fileName: "[project]/next-app/components/CatalogCards.tsx",
                lineNumber: 20,
                columnNumber: 5
            }, this),
            (tour.featured || tour.popular) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "absolute left-4 top-4 z-20 inline-flex items-center gap-1.5 rounded-full bg-action/95 px-3 py-1.5 text-xs font-bold text-white shadow-md backdrop-blur-sm",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
                        className: "h-3.5 w-3.5 text-brand-soft"
                    }, void 0, false, {
                        fileName: "[project]/next-app/components/CatalogCards.tsx",
                        lineNumber: 21,
                        columnNumber: 209
                    }, this),
                    tour.popular ? 'Popular Choice' : 'Featured Safari'
                ]
            }, void 0, true, {
                fileName: "[project]/next-app/components/CatalogCards.tsx",
                lineNumber: 21,
                columnNumber: 37
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute right-4 top-4 z-30",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$components$2f$ShortlistButton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ShortlistButton"], {
                    compact: true,
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
                    fileName: "[project]/next-app/components/CatalogCards.tsx",
                    lineNumber: 22,
                    columnNumber: 50
                }, this)
            }, void 0, false, {
                fileName: "[project]/next-app/components/CatalogCards.tsx",
                lineNumber: 22,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                href: `/safaris/${tour.slug}`,
                "aria-label": `Explore ${tour.title}`,
                className: "absolute inset-0 z-10 rounded-2xl"
            }, void 0, false, {
                fileName: "[project]/next-app/components/CatalogCards.tsx",
                lineNumber: 23,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "pointer-events-none absolute inset-x-0 bottom-0 z-20 p-5 sm:p-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "font-serif-luxury text-2xl sm:text-[1.75rem] font-bold leading-tight text-white max-w-[90%]",
                        children: tour.title
                    }, void 0, false, {
                        fileName: "[project]/next-app/components/CatalogCards.tsx",
                        lineNumber: 24,
                        columnNumber: 86
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-4 flex flex-wrap items-center gap-3 text-sm font-semibold text-white/95",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "inline-flex items-center gap-1.5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                                        className: "h-4 w-4 text-brand-soft"
                                    }, void 0, false, {
                                        fileName: "[project]/next-app/components/CatalogCards.tsx",
                                        lineNumber: 24,
                                        columnNumber: 354
                                    }, this),
                                    tour.durationLabel || `${tour.durationDays} Days`
                                ]
                            }, void 0, true, {
                                fileName: "[project]/next-app/components/CatalogCards.tsx",
                                lineNumber: 24,
                                columnNumber: 303
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "h-4 w-px bg-white/35"
                            }, void 0, false, {
                                fileName: "[project]/next-app/components/CatalogCards.tsx",
                                lineNumber: 24,
                                columnNumber: 454
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "inline-flex items-center gap-1.5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                                        className: "h-4 w-4 text-brand-soft"
                                    }, void 0, false, {
                                        fileName: "[project]/next-app/components/CatalogCards.tsx",
                                        lineNumber: 24,
                                        columnNumber: 545
                                    }, this),
                                    tour.country
                                ]
                            }, void 0, true, {
                                fileName: "[project]/next-app/components/CatalogCards.tsx",
                                lineNumber: 24,
                                columnNumber: 494
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/next-app/components/CatalogCards.tsx",
                        lineNumber: 24,
                        columnNumber: 211
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-5 flex items-end justify-between gap-4 border-t border-white/15 pt-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "block text-sm font-medium text-brand-soft",
                                        children: resident ? 'Resident rate from' : 'From'
                                    }, void 0, false, {
                                        fileName: "[project]/next-app/components/CatalogCards.tsx",
                                        lineNumber: 24,
                                        columnNumber: 711
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        className: "mt-0.5 block font-serif-luxury text-2xl font-extrabold text-brand-soft",
                                        children: formattedPrice
                                    }, void 0, false, {
                                        fileName: "[project]/next-app/components/CatalogCards.tsx",
                                        lineNumber: 24,
                                        columnNumber: 816
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/next-app/components/CatalogCards.tsx",
                                lineNumber: 24,
                                columnNumber: 706
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "min-h-12 inline-flex items-center justify-center gap-2 rounded-xl bg-brand-strong px-4 text-sm font-bold text-white shadow-md",
                                children: [
                                    "Explore Safari",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                        className: "h-4 w-4"
                                    }, void 0, false, {
                                        fileName: "[project]/next-app/components/CatalogCards.tsx",
                                        lineNumber: 24,
                                        columnNumber: 1096
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/next-app/components/CatalogCards.tsx",
                                lineNumber: 24,
                                columnNumber: 938
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/next-app/components/CatalogCards.tsx",
                        lineNumber: 24,
                        columnNumber: 617
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/next-app/components/CatalogCards.tsx",
                lineNumber: 24,
                columnNumber: 5
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/next-app/components/CatalogCards.tsx",
        lineNumber: 18,
        columnNumber: 10
    }, this);
}
_s1(TourCard, "Y7x/cjtWvS8X0E1PHU46s/A38ME=", false, function() {
    return [
        usePricingPrefs
    ];
});
_c = TourCard;
function DestinationCard({ destination }) {
    const image = safeImage(destination.heroImage);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
        id: `dest-card-${destination.id}`,
        className: "group relative overflow-hidden rounded-2xl bg-white border border-border-strong transition-all duration-500 hover:-translate-y-1 hover:border-brand hover:shadow-xl focus-within:border-brand focus-within:shadow-xl shadow-sm",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            href: `/destinations/${destination.slug}`,
            "aria-label": `Explore ${destination.name}, ${destination.country}`,
            className: "block w-full text-left rounded-2xl",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative aspect-[4/3] sm:aspect-[16/11] w-full overflow-hidden bg-shell",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        src: image,
                        alt: `${destination.name}, ${destination.country}`,
                        fill: true,
                        sizes: "(max-width:720px) 100vw,33vw",
                        className: "object-cover transition-transform duration-700 group-hover:scale-105"
                    }, void 0, false, {
                        fileName: "[project]/next-app/components/CatalogCards.tsx",
                        lineNumber: 28,
                        columnNumber: 657
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 bg-gradient-to-t from-black via-black/55 to-black/10"
                    }, void 0, false, {
                        fileName: "[project]/next-app/components/CatalogCards.tsx",
                        lineNumber: 28,
                        columnNumber: 852
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute top-3 left-3",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "rounded-full bg-black/75 backdrop-blur-md px-3 py-1 text-xs font-bold text-white border border-white/30 uppercase tracking-wider",
                            children: destination.country
                        }, void 0, false, {
                            fileName: "[project]/next-app/components/CatalogCards.tsx",
                            lineNumber: 28,
                            columnNumber: 979
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/next-app/components/CatalogCards.tsx",
                        lineNumber: 28,
                        columnNumber: 940
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-x-0 bottom-0 p-5 flex flex-col justify-end",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-1.5 text-xs text-brand-soft font-bold mb-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$compass$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Compass$3e$__["Compass"], {
                                        className: "w-3.5 h-3.5"
                                    }, void 0, false, {
                                        fileName: "[project]/next-app/components/CatalogCards.tsx",
                                        lineNumber: 28,
                                        columnNumber: 1317
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: destination.recommendedDuration || '2 - 4 Days'
                                    }, void 0, false, {
                                        fileName: "[project]/next-app/components/CatalogCards.tsx",
                                        lineNumber: 28,
                                        columnNumber: 1351
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/next-app/components/CatalogCards.tsx",
                                lineNumber: 28,
                                columnNumber: 1235
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "font-serif-luxury text-xl font-bold text-white group-hover:text-brand-soft transition-colors leading-snug",
                                children: destination.name
                            }, void 0, false, {
                                fileName: "[project]/next-app/components/CatalogCards.tsx",
                                lineNumber: 28,
                                columnNumber: 1417
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-1 text-sm text-white/95 line-clamp-2 leading-relaxed font-medium",
                                children: destination.subtitle || destination.description
                            }, void 0, false, {
                                fileName: "[project]/next-app/components/CatalogCards.tsx",
                                lineNumber: 28,
                                columnNumber: 1562
                            }, this),
                            destination.wildlife?.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-3 flex flex-wrap gap-1.5",
                                children: [
                                    destination.wildlife.slice(0, 3).map((animal)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "rounded-md bg-black/70 backdrop-blur-sm px-2 py-1 text-xs font-medium text-white border border-white/25",
                                            children: animal
                                        }, animal, false, {
                                            fileName: "[project]/next-app/components/CatalogCards.tsx",
                                            lineNumber: 28,
                                            columnNumber: 1819
                                        }, this)),
                                    destination.wildlife.length > 3 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-xs text-brand-soft font-bold self-center ml-1",
                                        children: [
                                            "+",
                                            destination.wildlife.length - 3,
                                            " more"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/next-app/components/CatalogCards.tsx",
                                        lineNumber: 28,
                                        columnNumber: 2003
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/next-app/components/CatalogCards.tsx",
                                lineNumber: 28,
                                columnNumber: 1729
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-4 flex items-center justify-between pt-3 border-t border-white/30",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-sm font-bold text-brand-soft group-hover:underline flex items-center gap-1",
                                    children: [
                                        "Explore destination ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                            className: "w-4 h-4 transition-transform group-hover:translate-x-1"
                                        }, void 0, false, {
                                            fileName: "[project]/next-app/components/CatalogCards.tsx",
                                            lineNumber: 28,
                                            columnNumber: 2328
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/next-app/components/CatalogCards.tsx",
                                    lineNumber: 28,
                                    columnNumber: 2210
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/next-app/components/CatalogCards.tsx",
                                lineNumber: 28,
                                columnNumber: 2124
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/next-app/components/CatalogCards.tsx",
                        lineNumber: 28,
                        columnNumber: 1160
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/next-app/components/CatalogCards.tsx",
                lineNumber: 28,
                columnNumber: 568
            }, this)
        }, void 0, false, {
            fileName: "[project]/next-app/components/CatalogCards.tsx",
            lineNumber: 28,
            columnNumber: 405
        }, this)
    }, void 0, false, {
        fileName: "[project]/next-app/components/CatalogCards.tsx",
        lineNumber: 28,
        columnNumber: 126
    }, this);
}
_c1 = DestinationCard;
function HotelCard({ hotel }) {
    _s2();
    const image = safeImage(hotel.images?.[0], '/images/catalog/baobab-beach-resort-spa.jpg');
    const { currency, resident } = usePricingPrefs();
    const formattedPrice = formatPrice(hotel.priceFromUSD, hotel.priceFromKES, currency);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
        id: `hotel-card-${hotel.id}`,
        className: "group relative flex flex-col rounded-2xl bg-white border border-border-strong overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-brand hover:shadow-xl focus-within:border-brand focus-within:shadow-xl shadow-sm",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative aspect-[16/10] w-full overflow-hidden bg-surface-soft",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        src: image,
                        alt: hotel.name,
                        fill: true,
                        sizes: "(max-width:720px) 100vw,25vw",
                        className: "object-cover transition-transform duration-700 group-hover:scale-105"
                    }, void 0, false, {
                        fileName: "[project]/next-app/components/CatalogCards.tsx",
                        lineNumber: 30,
                        columnNumber: 636
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"
                    }, void 0, false, {
                        fileName: "[project]/next-app/components/CatalogCards.tsx",
                        lineNumber: 30,
                        columnNumber: 796
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-wrap gap-1.5",
                                children: [
                                    hotel.isKenyanResidentOffer && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "rounded-full bg-action text-white font-bold px-2.5 py-1 text-xs shadow-sm",
                                        children: "Resident Rate"
                                    }, void 0, false, {
                                        fileName: "[project]/next-app/components/CatalogCards.tsx",
                                        lineNumber: 30,
                                        columnNumber: 1064
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "rounded-full bg-black/70 backdrop-blur-md text-white font-semibold px-2.5 py-1 text-xs border border-white/30",
                                        children: hotel.category
                                    }, void 0, false, {
                                        fileName: "[project]/next-app/components/CatalogCards.tsx",
                                        lineNumber: 30,
                                        columnNumber: 1177
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/next-app/components/CatalogCards.tsx",
                                lineNumber: 30,
                                columnNumber: 994
                            }, this),
                            hotel.rating && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-1 rounded-full bg-black/75 backdrop-blur-md px-2.5 py-1 text-xs font-bold text-yellow-400 border border-white/30",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__["Star"], {
                                        className: "w-3.5 h-3.5 fill-current"
                                    }, void 0, false, {
                                        fileName: "[project]/next-app/components/CatalogCards.tsx",
                                        lineNumber: 30,
                                        columnNumber: 1501
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: hotel.rating
                                    }, void 0, false, {
                                        fileName: "[project]/next-app/components/CatalogCards.tsx",
                                        lineNumber: 30,
                                        columnNumber: 1545
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/next-app/components/CatalogCards.tsx",
                                lineNumber: 30,
                                columnNumber: 1349
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/next-app/components/CatalogCards.tsx",
                        lineNumber: 30,
                        columnNumber: 893
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute right-3 bottom-3 z-20",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$components$2f$ShortlistButton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HotelShortlistButton"], {
                            compact: true,
                            hotel: {
                                id: hotel.id,
                                title: hotel.name,
                                slug: hotel.slug,
                                image,
                                location: hotel.location,
                                country: hotel.country,
                                priceFrom: hotel.priceFromUSD,
                                priceFromKES: hotel.priceFromKES
                            }
                        }, void 0, false, {
                            fileName: "[project]/next-app/components/CatalogCards.tsx",
                            lineNumber: 30,
                            columnNumber: 1633
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/next-app/components/CatalogCards.tsx",
                        lineNumber: 30,
                        columnNumber: 1585
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/next-app/components/CatalogCards.tsx",
                lineNumber: 30,
                columnNumber: 556
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-1 flex-col p-5 justify-between bg-white",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-1 text-xs font-bold text-brand-deep mb-1.5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                                        className: "w-3.5 h-3.5 shrink-0"
                                    }, void 0, false, {
                                        fileName: "[project]/next-app/components/CatalogCards.tsx",
                                        lineNumber: 30,
                                        columnNumber: 1998
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: hotel.location
                                    }, void 0, false, {
                                        fileName: "[project]/next-app/components/CatalogCards.tsx",
                                        lineNumber: 30,
                                        columnNumber: 2040
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/next-app/components/CatalogCards.tsx",
                                lineNumber: 30,
                                columnNumber: 1916
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "font-serif-luxury text-lg font-bold text-ink-strong leading-snug",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: `/hotels/${hotel.slug}`,
                                    className: "transition-colors hover:text-brand-deep rounded-sm",
                                    children: hotel.name
                                }, void 0, false, {
                                    fileName: "[project]/next-app/components/CatalogCards.tsx",
                                    lineNumber: 30,
                                    columnNumber: 2156
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/next-app/components/CatalogCards.tsx",
                                lineNumber: 30,
                                columnNumber: 2075
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-2 text-sm text-ink-muted line-clamp-2 leading-relaxed",
                                children: hotel.description
                            }, void 0, false, {
                                fileName: "[project]/next-app/components/CatalogCards.tsx",
                                lineNumber: 30,
                                columnNumber: 2280
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-3 flex flex-wrap gap-1.5",
                                children: [
                                    hotel.isFamilyFriendly && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "rounded-md bg-action-soft px-2 py-0.5 text-xs font-semibold text-action border border-action-border",
                                        children: "Family Friendly"
                                    }, void 0, false, {
                                        fileName: "[project]/next-app/components/CatalogCards.tsx",
                                        lineNumber: 30,
                                        columnNumber: 2445
                                    }, this),
                                    hotel.isHoneymoonFriendly && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "rounded-md bg-pink-50 px-2 py-0.5 text-xs font-semibold text-pink-800 border border-pink-200",
                                        children: "Honeymoon"
                                    }, void 0, false, {
                                        fileName: "[project]/next-app/components/CatalogCards.tsx",
                                        lineNumber: 30,
                                        columnNumber: 2614
                                    }, this),
                                    hotel.isSeniorFriendly && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "rounded-md bg-blue-50 px-2 py-0.5 text-xs font-semibold text-blue-800 border border-blue-200",
                                        children: "Senior Friendly"
                                    }, void 0, false, {
                                        fileName: "[project]/next-app/components/CatalogCards.tsx",
                                        lineNumber: 30,
                                        columnNumber: 2767
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/next-app/components/CatalogCards.tsx",
                                lineNumber: 30,
                                columnNumber: 2375
                            }, this),
                            hotel.facilities?.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-3 space-y-1.5",
                                children: hotel.facilities.slice(0, 2).map((fac)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-1.5 text-xs text-ink-muted",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                                className: "w-3.5 h-3.5 text-brand-deep shrink-0"
                                            }, void 0, false, {
                                                fileName: "[project]/next-app/components/CatalogCards.tsx",
                                                lineNumber: 30,
                                                columnNumber: 3084
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "truncate",
                                                children: fac
                                            }, void 0, false, {
                                                fileName: "[project]/next-app/components/CatalogCards.tsx",
                                                lineNumber: 30,
                                                columnNumber: 3141
                                            }, this)
                                        ]
                                    }, fac, true, {
                                        fileName: "[project]/next-app/components/CatalogCards.tsx",
                                        lineNumber: 30,
                                        columnNumber: 3008
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/next-app/components/CatalogCards.tsx",
                                lineNumber: 30,
                                columnNumber: 2936
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/next-app/components/CatalogCards.tsx",
                        lineNumber: 30,
                        columnNumber: 1911
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-5 pt-4 border-t border-border flex items-end justify-between gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "block text-xs uppercase tracking-wider text-ink-muted font-semibold",
                                        children: resident ? 'Resident rate from' : 'Guide rate from'
                                    }, void 0, false, {
                                        fileName: "[project]/next-app/components/CatalogCards.tsx",
                                        lineNumber: 30,
                                        columnNumber: 3293
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-baseline gap-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-xl font-extrabold text-ink-strong font-serif-luxury",
                                                children: formattedPrice
                                            }, void 0, false, {
                                                fileName: "[project]/next-app/components/CatalogCards.tsx",
                                                lineNumber: 30,
                                                columnNumber: 3478
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-xs text-ink-muted",
                                                children: "/ night"
                                            }, void 0, false, {
                                                fileName: "[project]/next-app/components/CatalogCards.tsx",
                                                lineNumber: 30,
                                                columnNumber: 3576
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/next-app/components/CatalogCards.tsx",
                                        lineNumber: 30,
                                        columnNumber: 3435
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/next-app/components/CatalogCards.tsx",
                                lineNumber: 30,
                                columnNumber: 3288
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: `https://wa.me/254729000410?text=${encodeURIComponent(`Hi Good Secrets Safaris, I'm interested in booking ${hotel.name}. Please share the current seasonal rates and availability.`)}`,
                                        target: "_blank",
                                        rel: "noreferrer",
                                        "aria-label": `Ask on WhatsApp about ${hotel.name}`,
                                        className: "min-w-11 min-h-11 p-2 rounded-xl bg-action-soft text-action border border-action-border flex items-center justify-center",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageCircle$3e$__["MessageCircle"], {
                                            className: "w-5 h-5 text-emerald-700"
                                        }, void 0, false, {
                                            fileName: "[project]/next-app/components/CatalogCards.tsx",
                                            lineNumber: 30,
                                            columnNumber: 4094
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/next-app/components/CatalogCards.tsx",
                                        lineNumber: 30,
                                        columnNumber: 3684
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: `/hotels/${hotel.slug}`,
                                        "aria-label": `View ${hotel.name}`,
                                        className: "min-h-11 inline-flex items-center gap-1 px-4 py-2 rounded-xl bg-brand-strong hover:bg-brand-hover text-white text-sm font-bold transition-all shadow-sm",
                                        children: [
                                            "View Stay",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                                className: "w-4 h-4"
                                            }, void 0, false, {
                                                fileName: "[project]/next-app/components/CatalogCards.tsx",
                                                lineNumber: 30,
                                                columnNumber: 4395
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/next-app/components/CatalogCards.tsx",
                                        lineNumber: 30,
                                        columnNumber: 4151
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/next-app/components/CatalogCards.tsx",
                                lineNumber: 30,
                                columnNumber: 3643
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/next-app/components/CatalogCards.tsx",
                        lineNumber: 30,
                        columnNumber: 3201
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/next-app/components/CatalogCards.tsx",
                lineNumber: 30,
                columnNumber: 1844
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/next-app/components/CatalogCards.tsx",
        lineNumber: 30,
        columnNumber: 268
    }, this);
}
_s2(HotelCard, "Y7x/cjtWvS8X0E1PHU46s/A38ME=", false, function() {
    return [
        usePricingPrefs
    ];
});
_c2 = HotelCard;
function BlogCard({ post }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
        className: "group rounded-2xl bg-white border border-border-strong overflow-hidden hover:border-brand hover:shadow-md transition-all flex flex-col",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            href: `/blog/${post.slug}`,
            className: "text-left flex flex-col flex-1",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative aspect-[16/10] overflow-hidden bg-surface-muted",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        src: safeImage(post.featuredImage),
                        alt: post.title,
                        fill: true,
                        sizes: "(max-width:720px) 100vw,33vw",
                        className: "object-cover group-hover:scale-[1.03] transition-transform duration-500"
                    }, void 0, false, {
                        fileName: "[project]/next-app/components/CatalogCards.tsx",
                        lineNumber: 32,
                        columnNumber: 364
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/next-app/components/CatalogCards.tsx",
                    lineNumber: 32,
                    columnNumber: 290
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "p-6 space-y-3 flex-1",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-2 text-xs font-bold text-brand-deep",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: post.category
                                }, void 0, false, {
                                    fileName: "[project]/next-app/components/CatalogCards.tsx",
                                    lineNumber: 32,
                                    columnNumber: 670
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: "·"
                                }, void 0, false, {
                                    fileName: "[project]/next-app/components/CatalogCards.tsx",
                                    lineNumber: 32,
                                    columnNumber: 698
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-ink-subtle",
                                    children: post.readingTime
                                }, void 0, false, {
                                    fileName: "[project]/next-app/components/CatalogCards.tsx",
                                    lineNumber: 32,
                                    columnNumber: 712
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/next-app/components/CatalogCards.tsx",
                            lineNumber: 32,
                            columnNumber: 595
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "font-serif-luxury text-xl font-bold text-ink-strong group-hover:text-brand-hover transition-colors line-clamp-2",
                            children: post.title
                        }, void 0, false, {
                            fileName: "[project]/next-app/components/CatalogCards.tsx",
                            lineNumber: 32,
                            columnNumber: 777
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sm text-ink-muted line-clamp-3 leading-relaxed",
                            children: post.excerpt
                        }, void 0, false, {
                            fileName: "[project]/next-app/components/CatalogCards.tsx",
                            lineNumber: 32,
                            columnNumber: 922
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/next-app/components/CatalogCards.tsx",
                    lineNumber: 32,
                    columnNumber: 557
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "px-6 pb-6 pt-4 flex items-center justify-between text-sm text-ink-subtle border-t border-border",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: post.author?.name
                        }, void 0, false, {
                            fileName: "[project]/next-app/components/CatalogCards.tsx",
                            lineNumber: 32,
                            columnNumber: 1126
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-brand-deep font-bold flex items-center gap-1",
                            children: [
                                "Read guide ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                    className: "w-4 h-4"
                                }, void 0, false, {
                                    fileName: "[project]/next-app/components/CatalogCards.tsx",
                                    lineNumber: 32,
                                    columnNumber: 1237
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/next-app/components/CatalogCards.tsx",
                            lineNumber: 32,
                            columnNumber: 1158
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/next-app/components/CatalogCards.tsx",
                    lineNumber: 32,
                    columnNumber: 1013
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/next-app/components/CatalogCards.tsx",
            lineNumber: 32,
            columnNumber: 213
        }, this)
    }, void 0, false, {
        fileName: "[project]/next-app/components/CatalogCards.tsx",
        lineNumber: 32,
        columnNumber: 57
    }, this);
}
_c3 = BlogCard;
function ReviewCard({ review }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
        className: "rounded-2xl border border-border-strong bg-white p-6 text-ink-strong shadow-sm",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex text-amber-600",
                "aria-label": `${review.rating} out of 5 stars`,
                children: Array.from({
                    length: Math.max(0, Math.min(5, Math.round(review.rating)))
                }).map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__["Star"], {
                        className: "h-4 w-4 fill-current"
                    }, i, false, {
                        fileName: "[project]/next-app/components/CatalogCards.tsx",
                        lineNumber: 34,
                        columnNumber: 333
                    }, this))
            }, void 0, false, {
                fileName: "[project]/next-app/components/CatalogCards.tsx",
                lineNumber: 34,
                columnNumber: 166
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("blockquote", {
                className: "mt-4 font-serif-luxury text-lg leading-relaxed",
                children: [
                    "“",
                    review.reviewText,
                    "”"
                ]
            }, void 0, true, {
                fileName: "[project]/next-app/components/CatalogCards.tsx",
                lineNumber: 34,
                columnNumber: 389
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
                className: "mt-5 border-t border-border pt-4 text-sm",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                        className: "block",
                        children: review.reviewerName
                    }, void 0, false, {
                        fileName: "[project]/next-app/components/CatalogCards.tsx",
                        lineNumber: 34,
                        columnNumber: 555
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-ink-muted",
                        children: [
                            review.reviewerCountry,
                            " · ",
                            review.platform
                        ]
                    }, void 0, true, {
                        fileName: "[project]/next-app/components/CatalogCards.tsx",
                        lineNumber: 34,
                        columnNumber: 611
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/next-app/components/CatalogCards.tsx",
                lineNumber: 34,
                columnNumber: 494
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/next-app/components/CatalogCards.tsx",
        lineNumber: 34,
        columnNumber: 66
    }, this);
}
_c4 = ReviewCard;
var _c, _c1, _c2, _c3, _c4;
__turbopack_context__.k.register(_c, "TourCard");
__turbopack_context__.k.register(_c1, "DestinationCard");
__turbopack_context__.k.register(_c2, "HotelCard");
__turbopack_context__.k.register(_c3, "BlogCard");
__turbopack_context__.k.register(_c4, "ReviewCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/next-app/components/SafariBuilder.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SafariBuilder",
    ()=>SafariBuilder
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/next-app/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/next-app/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/next-app/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__ = __turbopack_context__.i("[project]/next-app/node_modules/lucide-react/dist/esm/icons/arrow-left.js [app-client] (ecmascript) <export default as ArrowLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/next-app/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-client] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/next-app/node_modules/lucide-react/dist/esm/icons/check.js [app-client] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__ = __turbopack_context__.i("[project]/next-app/node_modules/lucide-react/dist/esm/icons/circle-check.js [app-client] (ecmascript) <export default as CheckCircle2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Send$3e$__ = __turbopack_context__.i("[project]/next-app/node_modules/lucide-react/dist/esm/icons/send.js [app-client] (ecmascript) <export default as Send>");
var __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__ = __turbopack_context__.i("[project]/next-app/node_modules/lucide-react/dist/esm/icons/shield-check.js [app-client] (ecmascript) <export default as ShieldCheck>");
var __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__ = __turbopack_context__.i("[project]/next-app/node_modules/lucide-react/dist/esm/icons/sparkles.js [app-client] (ecmascript) <export default as Sparkles>");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
const destinationChoices = [
    {
        id: 'Kenya',
        title: 'Kenya',
        desc: 'Maasai Mara, Amboseli, Rift Valley and more.'
    },
    {
        id: 'Tanzania',
        title: 'Tanzania',
        desc: 'Serengeti, Ngorongoro, Tarangire and more.'
    },
    {
        id: 'Zanzibar',
        title: 'Zanzibar & Coast',
        desc: 'Beach time, Stone Town and Indian Ocean stays.'
    },
    {
        id: 'Combined',
        title: 'Kenya + Tanzania',
        desc: 'Combine both countries in one route.'
    },
    {
        id: 'BushBeach',
        title: 'Safari + Beach',
        desc: 'Wildlife first, then time on the coast.'
    }
];
const durationChoices = [
    {
        id: '1-3',
        title: '1–3 days',
        label: 'Short escape',
        desc: 'Useful for stopovers, extensions and short breaks.'
    },
    {
        id: '4-7',
        title: '4–7 days',
        label: 'Classic safari',
        desc: 'Enough time for a focused route through two or three areas.'
    },
    {
        id: '8-14',
        title: '8–14 days',
        label: 'In-depth journey',
        desc: 'More variety, slower pacing and easier cross-border combinations.'
    },
    {
        id: '15+',
        title: '15+ days',
        label: 'Extended journey',
        desc: 'For a broad safari, culture and coast itinerary.'
    }
];
const travelerChoices = [
    {
        id: 'Solo',
        title: 'Solo traveler',
        desc: 'Private or shared options can be discussed.'
    },
    {
        id: 'Couple',
        title: 'Couple',
        desc: 'Romantic stays and a flexible private pace.'
    },
    {
        id: 'Family',
        title: 'Family',
        desc: 'Family-friendly stays and practical pacing.'
    },
    {
        id: 'Friends',
        title: 'Friends / small group',
        desc: 'A private vehicle and shared itinerary.'
    },
    {
        id: 'Seniors',
        title: 'Senior travelers',
        desc: 'Comfortable pacing and suitable properties.'
    },
    {
        id: 'Photography',
        title: 'Photography focused',
        desc: 'More time around light, sightings and positioning.'
    }
];
const comfortChoices = [
    {
        id: 'Midrange',
        title: 'Comfortable midrange',
        desc: 'Reliable lodges and camps with good comfort and value.'
    },
    {
        id: 'Luxury',
        title: 'Luxury',
        desc: 'Smaller camps, strong locations and elevated service.'
    },
    {
        id: 'Ultra Luxury',
        title: 'Ultra-luxury',
        desc: 'Top-tier private stays, fly-in options and highly personalized service.'
    }
];
const experienceChoices = [
    'Big 5 Tracking',
    'Wildebeest Migration',
    'Elephants & Kilimanjaro',
    'Maasai & Samburu Culture',
    'Hot Air Balloon Safari',
    'Zanzibar Beach Relaxation',
    'Rhino Sanctuary',
    'Predators & Big Cats',
    'Birdwatching & Rift Lakes',
    'Walking Safaris',
    'Photography',
    'Bush Dining'
];
const budgetChoices = [
    'Not sure yet',
    'Under $1,500',
    '$1,500 – $3,500',
    '$3,500 – $7,000',
    '$7,000+'
];
function SafariBuilder({ tours = [] }) {
    _s();
    const [catalogTours, setCatalogTours] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(tours);
    const [step, setStep] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(1);
    const [destinations, setDestinations] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([
        'Kenya'
    ]);
    const [duration, setDuration] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('4-7');
    const [travelerType, setTravelerType] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('Couple');
    const [comfortLevel, setComfortLevel] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('Luxury');
    const [experiences, setExperiences] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([
        'Big 5 Tracking',
        'Elephants & Kilimanjaro'
    ]);
    const [budgetRange, setBudgetRange] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('Not sure yet');
    const [fullName, setFullName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [email, setEmail] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [phone, setPhone] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [travelMonth, setTravelMonth] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [specialRequests, setSpecialRequests] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [isSubmitted, setIsSubmitted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isSubmitting, setIsSubmitting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [submitError, setSubmitError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SafariBuilder.useEffect": ()=>{
            if (tours.length) {
                setCatalogTours(tours);
                return;
            }
            let cancelled = false;
            fetch('/api/backend/api/tours').then({
                "SafariBuilder.useEffect": (response)=>response.ok ? response.json() : []
            }["SafariBuilder.useEffect"]).then({
                "SafariBuilder.useEffect": (data)=>{
                    if (!cancelled && Array.isArray(data)) setCatalogTours(data);
                }
            }["SafariBuilder.useEffect"]).catch({
                "SafariBuilder.useEffect": ()=>undefined
            }["SafariBuilder.useEffect"]);
            return ({
                "SafariBuilder.useEffect": ()=>{
                    cancelled = true;
                }
            })["SafariBuilder.useEffect"];
        }
    }["SafariBuilder.useEffect"], [
        tours.length
    ]);
    const matchingTours = catalogTours.filter((tour)=>{
        const matchesDest = destinations.some((destination)=>tour.country.toLowerCase().includes(destination.toLowerCase()) || tour.destinations.some((tourDestination)=>tourDestination.toLowerCase().includes(destination.toLowerCase())));
        const matchesStyle = experiences.some((experience)=>tour.travelStyles.some((style)=>style.toLowerCase().includes(experience.toLowerCase())) || tour.title.toLowerCase().includes(experience.toLowerCase()));
        return matchesDest || matchesStyle;
    }).slice(0, 3);
    const choiceClass = (selected)=>`min-h-24 w-full p-4 sm:p-5 rounded-2xl border text-left transition-all ${selected ? 'bg-[#fdfaf2] border-[#8a611d] shadow-sm' : 'bg-[#faf8f2] border-[#ddd7ca] hover:border-[#8a611d]'}`;
    const navButton = 'min-h-11 inline-flex items-center justify-center gap-2 px-5 rounded-xl text-sm font-bold';
    const inputClass = 'w-full min-h-11 px-3.5 py-2.5 rounded-xl bg-white border border-[#d7d1c4] text-sm text-[#161f19] focus:border-[#8a611d] focus:outline-none';
    const labelClass = 'text-sm font-semibold text-[#303e35] block mb-1.5';
    const toggleDestination = (id)=>setDestinations((previous)=>previous.includes(id) ? previous.length > 1 ? previous.filter((item)=>item !== id) : previous : [
                ...previous,
                id
            ]);
    const toggleExperience = (id)=>setExperiences((previous)=>previous.includes(id) ? previous.filter((item)=>item !== id) : [
                ...previous,
                id
            ]);
    const renderSingleChoice = (items, value, setValue, columns = 'sm:grid-cols-2')=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            role: "radiogroup",
            className: `grid grid-cols-1 ${columns} gap-3`,
            children: items.map((item)=>{
                const selected = value === item.id;
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    type: "button",
                    role: "radio",
                    "aria-checked": selected,
                    onClick: ()=>setValue(item.id),
                    className: choiceClass(selected),
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-start justify-between gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-serif-luxury text-lg font-bold text-[#161f19] block",
                                            children: item.title
                                        }, void 0, false, {
                                            fileName: "[project]/next-app/components/SafariBuilder.tsx",
                                            lineNumber: 79,
                                            columnNumber: 466
                                        }, this),
                                        item.label ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-xs font-bold text-[#76541a] block mt-1",
                                            children: item.label
                                        }, void 0, false, {
                                            fileName: "[project]/next-app/components/SafariBuilder.tsx",
                                            lineNumber: 79,
                                            columnNumber: 574
                                        }, this) : null
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/next-app/components/SafariBuilder.tsx",
                                    lineNumber: 79,
                                    columnNumber: 461
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    "aria-hidden": "true",
                                    className: `mt-0.5 w-5 h-5 shrink-0 rounded-full flex items-center justify-center ${selected ? 'bg-[#8a611d] text-white' : 'border border-[#a9a093]'}`,
                                    children: selected ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                        className: "w-3 h-3 stroke-[3]"
                                    }, void 0, false, {
                                        fileName: "[project]/next-app/components/SafariBuilder.tsx",
                                        lineNumber: 79,
                                        columnNumber: 858
                                    }, this) : null
                                }, void 0, false, {
                                    fileName: "[project]/next-app/components/SafariBuilder.tsx",
                                    lineNumber: 79,
                                    columnNumber: 669
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/next-app/components/SafariBuilder.tsx",
                            lineNumber: 79,
                            columnNumber: 405
                        }, this),
                        item.desc ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-sm text-[#46544b] mt-2 leading-relaxed block",
                            children: item.desc
                        }, void 0, false, {
                            fileName: "[project]/next-app/components/SafariBuilder.tsx",
                            lineNumber: 79,
                            columnNumber: 932
                        }, this) : null
                    ]
                }, item.id, true, {
                    fileName: "[project]/next-app/components/SafariBuilder.tsx",
                    lineNumber: 79,
                    columnNumber: 264
                }, this);
            })
        }, void 0, false, {
            fileName: "[project]/next-app/components/SafariBuilder.tsx",
            lineNumber: 79,
            columnNumber: 129
        }, this);
    async function submit(event) {
        event.preventDefault();
        setSubmitError('');
        setIsSubmitting(true);
        const payload = {
            fullName,
            email,
            phone: phone || 'Not provided',
            country: 'Not specified',
            travelDates: travelMonth || 'Flexible',
            durationDays: duration === '1-3' ? 3 : duration === '4-7' ? 6 : duration === '8-14' ? 10 : 15,
            adults: travelerType === 'Solo' ? 1 : travelerType === 'Couple' ? 2 : 4,
            children: travelerType === 'Family' ? 2 : 0,
            preferredDestination: destinations.join(', '),
            safariType: `Custom ${comfortLevel} Safari: ${experiences.join(', ')}`,
            budget: budgetRange,
            accommodationPreference: comfortLevel,
            specialRequests: `Traveler profile: ${travelerType}. Desired experiences: ${experiences.join(', ')}. ${specialRequests}`,
            hearAboutUs: 'Custom Safari Builder'
        };
        try {
            const response = await fetch('/api/backend/api/enquiries', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(payload)
            });
            if (!response.ok) {
                const body = await response.json().catch(()=>({}));
                throw new Error(body.error || 'Something went wrong sending your enquiry.');
            }
            setIsSubmitted(true);
        } catch (error) {
            setSubmitError(error instanceof Error ? error.message : 'Something went wrong sending your enquiry. Please try again or reach us on WhatsApp.');
        } finally{
            setIsSubmitting(false);
        }
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "custom-safari-builder",
        "aria-labelledby": "builder-title",
        className: "rounded-3xl bg-white border border-[#ded8cb] overflow-hidden shadow-xl p-5 sm:p-10 max-w-4xl mx-auto text-[#303e35]",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-wrap items-center justify-between gap-2 text-sm font-bold text-[#46544b] mb-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-[#76541a]",
                                children: [
                                    "Step ",
                                    step,
                                    " of 6"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/next-app/components/SafariBuilder.tsx",
                                lineNumber: 102,
                                columnNumber: 132
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: [
                                    '',
                                    'Destination',
                                    'Duration',
                                    'Travel party',
                                    'Comfort',
                                    'Experiences',
                                    'Your plan'
                                ][step]
                            }, void 0, false, {
                                fileName: "[project]/next-app/components/SafariBuilder.tsx",
                                lineNumber: 102,
                                columnNumber: 188
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/next-app/components/SafariBuilder.tsx",
                        lineNumber: 102,
                        columnNumber: 27
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "h-2.5 w-full bg-[#f2efe6] rounded-full overflow-hidden",
                        role: "progressbar",
                        "aria-valuemin": 1,
                        "aria-valuemax": 6,
                        "aria-valuenow": step,
                        "aria-label": `Step ${step} of 6`,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "h-full bg-[#8a611d] transition-all duration-300 rounded-full",
                            style: {
                                width: `${step / 6 * 100}%`
                            }
                        }, void 0, false, {
                            fileName: "[project]/next-app/components/SafariBuilder.tsx",
                            lineNumber: 102,
                            columnNumber: 482
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/next-app/components/SafariBuilder.tsx",
                        lineNumber: 102,
                        columnNumber: 301
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/next-app/components/SafariBuilder.tsx",
                lineNumber: 102,
                columnNumber: 5
            }, this),
            step === 1 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                id: "builder-title",
                                className: "font-serif-luxury text-2xl sm:text-3xl font-bold text-[#161f19]",
                                children: "Where would you like to go?"
                            }, void 0, false, {
                                fileName: "[project]/next-app/components/SafariBuilder.tsx",
                                lineNumber: 104,
                                columnNumber: 51
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-base text-[#46544b] mt-2",
                                children: "Choose one or combine several places. You can change this later."
                            }, void 0, false, {
                                fileName: "[project]/next-app/components/SafariBuilder.tsx",
                                lineNumber: 104,
                                columnNumber: 182
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/next-app/components/SafariBuilder.tsx",
                        lineNumber: 104,
                        columnNumber: 46
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 sm:grid-cols-2 gap-3",
                        children: destinationChoices.map((item)=>{
                            const selected = destinations.includes(item.id);
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                "aria-pressed": selected,
                                onClick: ()=>toggleDestination(item.id),
                                className: choiceClass(selected),
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-start justify-between gap-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-serif-luxury text-lg font-bold text-[#161f19]",
                                                children: item.title
                                            }, void 0, false, {
                                                fileName: "[project]/next-app/components/SafariBuilder.tsx",
                                                lineNumber: 104,
                                                columnNumber: 639
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                "aria-hidden": "true",
                                                className: `w-5 h-5 rounded-full flex items-center justify-center ${selected ? 'bg-[#8a611d] text-white' : 'border border-[#a9a093]'}`,
                                                children: selected ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                                    className: "w-3 h-3 stroke-[3]"
                                                }, void 0, false, {
                                                    fileName: "[project]/next-app/components/SafariBuilder.tsx",
                                                    lineNumber: 104,
                                                    columnNumber: 900
                                                }, this) : null
                                            }, void 0, false, {
                                                fileName: "[project]/next-app/components/SafariBuilder.tsx",
                                                lineNumber: 104,
                                                columnNumber: 727
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/next-app/components/SafariBuilder.tsx",
                                        lineNumber: 104,
                                        columnNumber: 583
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-sm text-[#46544b] mt-2 block",
                                        children: item.desc
                                    }, void 0, false, {
                                        fileName: "[project]/next-app/components/SafariBuilder.tsx",
                                        lineNumber: 104,
                                        columnNumber: 961
                                    }, this)
                                ]
                            }, item.id, true, {
                                fileName: "[project]/next-app/components/SafariBuilder.tsx",
                                lineNumber: 104,
                                columnNumber: 446
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/next-app/components/SafariBuilder.tsx",
                        lineNumber: 104,
                        columnNumber: 301
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-end",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            onClick: ()=>setStep(2),
                            className: `${navButton} bg-[#8a611d] hover:bg-[#704d15] text-white`,
                            children: [
                                "Next: trip length ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                    className: "w-4 h-4"
                                }, void 0, false, {
                                    fileName: "[project]/next-app/components/SafariBuilder.tsx",
                                    lineNumber: 104,
                                    columnNumber: 1222
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/next-app/components/SafariBuilder.tsx",
                            lineNumber: 104,
                            columnNumber: 1085
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/next-app/components/SafariBuilder.tsx",
                        lineNumber: 104,
                        columnNumber: 1051
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/next-app/components/SafariBuilder.tsx",
                lineNumber: 104,
                columnNumber: 19
            }, this) : null,
            step === 2 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "font-serif-luxury text-2xl sm:text-3xl font-bold text-[#161f19]",
                                children: "How long would you like to travel?"
                            }, void 0, false, {
                                fileName: "[project]/next-app/components/SafariBuilder.tsx",
                                lineNumber: 105,
                                columnNumber: 51
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-base text-[#46544b] mt-2",
                                children: "Choose the closest range. The final itinerary can be shorter or longer."
                            }, void 0, false, {
                                fileName: "[project]/next-app/components/SafariBuilder.tsx",
                                lineNumber: 105,
                                columnNumber: 170
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/next-app/components/SafariBuilder.tsx",
                        lineNumber: 105,
                        columnNumber: 46
                    }, this),
                    renderSingleChoice(durationChoices, duration, setDuration),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Nav, {
                        back: ()=>setStep(1),
                        next: ()=>setStep(3),
                        nextLabel: "Next: travelers"
                    }, void 0, false, {
                        fileName: "[project]/next-app/components/SafariBuilder.tsx",
                        lineNumber: 105,
                        columnNumber: 356
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/next-app/components/SafariBuilder.tsx",
                lineNumber: 105,
                columnNumber: 19
            }, this) : null,
            step === 3 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "font-serif-luxury text-2xl sm:text-3xl font-bold text-[#161f19]",
                                children: "Who are you traveling with?"
                            }, void 0, false, {
                                fileName: "[project]/next-app/components/SafariBuilder.tsx",
                                lineNumber: 106,
                                columnNumber: 51
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-base text-[#46544b] mt-2",
                                children: "This helps with room setup, vehicle planning and pacing."
                            }, void 0, false, {
                                fileName: "[project]/next-app/components/SafariBuilder.tsx",
                                lineNumber: 106,
                                columnNumber: 163
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/next-app/components/SafariBuilder.tsx",
                        lineNumber: 106,
                        columnNumber: 46
                    }, this),
                    renderSingleChoice(travelerChoices, travelerType, setTravelerType, 'sm:grid-cols-3'),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Nav, {
                        back: ()=>setStep(2),
                        next: ()=>setStep(4),
                        nextLabel: "Next: comfort"
                    }, void 0, false, {
                        fileName: "[project]/next-app/components/SafariBuilder.tsx",
                        lineNumber: 106,
                        columnNumber: 360
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/next-app/components/SafariBuilder.tsx",
                lineNumber: 106,
                columnNumber: 19
            }, this) : null,
            step === 4 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "font-serif-luxury text-2xl sm:text-3xl font-bold text-[#161f19]",
                                children: "What level of comfort suits you?"
                            }, void 0, false, {
                                fileName: "[project]/next-app/components/SafariBuilder.tsx",
                                lineNumber: 107,
                                columnNumber: 51
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-base text-[#46544b] mt-2",
                                children: "This is a starting preference, not a fixed package."
                            }, void 0, false, {
                                fileName: "[project]/next-app/components/SafariBuilder.tsx",
                                lineNumber: 107,
                                columnNumber: 168
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/next-app/components/SafariBuilder.tsx",
                        lineNumber: 107,
                        columnNumber: 46
                    }, this),
                    renderSingleChoice(comfortChoices, comfortLevel, setComfortLevel, 'sm:grid-cols-3'),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Nav, {
                        back: ()=>setStep(3),
                        next: ()=>setStep(5),
                        nextLabel: "Next: experiences"
                    }, void 0, false, {
                        fileName: "[project]/next-app/components/SafariBuilder.tsx",
                        lineNumber: 107,
                        columnNumber: 359
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/next-app/components/SafariBuilder.tsx",
                lineNumber: 107,
                columnNumber: 19
            }, this) : null,
            step === 5 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "font-serif-luxury text-2xl sm:text-3xl font-bold text-[#161f19]",
                                children: "What do you most want to experience?"
                            }, void 0, false, {
                                fileName: "[project]/next-app/components/SafariBuilder.tsx",
                                lineNumber: 108,
                                columnNumber: 51
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-base text-[#46544b] mt-2",
                                children: "Pick as many as you like. These choices help shape recommendations."
                            }, void 0, false, {
                                fileName: "[project]/next-app/components/SafariBuilder.tsx",
                                lineNumber: 108,
                                columnNumber: 172
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/next-app/components/SafariBuilder.tsx",
                        lineNumber: 108,
                        columnNumber: 46
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3",
                        children: experienceChoices.map((experience)=>{
                            const selected = experiences.includes(experience);
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                "aria-pressed": selected,
                                onClick: ()=>toggleExperience(experience),
                                className: `min-h-12 p-3 rounded-xl text-left border text-sm font-semibold transition-all flex items-center justify-between gap-2 ${selected ? 'bg-[#8a611d] text-white border-[#8a611d]' : 'bg-[#faf8f2] text-[#303e35] border-[#ddd7ca] hover:border-[#8a611d]'}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: experience
                                    }, void 0, false, {
                                        fileName: "[project]/next-app/components/SafariBuilder.tsx",
                                        lineNumber: 108,
                                        columnNumber: 830
                                    }, this),
                                    selected ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                        className: "w-4 h-4 shrink-0"
                                    }, void 0, false, {
                                        fileName: "[project]/next-app/components/SafariBuilder.tsx",
                                        lineNumber: 108,
                                        columnNumber: 867
                                    }, this) : null
                                ]
                            }, experience, true, {
                                fileName: "[project]/next-app/components/SafariBuilder.tsx",
                                lineNumber: 108,
                                columnNumber: 461
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/next-app/components/SafariBuilder.tsx",
                        lineNumber: 108,
                        columnNumber: 294
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "pt-4 border-t border-[#e6e0d4]",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm font-bold text-[#303e35] mb-2",
                                children: [
                                    "Approximate budget per person ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-normal text-[#66766b]",
                                        children: "(excluding international flights)"
                                    }, void 0, false, {
                                        fileName: "[project]/next-app/components/SafariBuilder.tsx",
                                        lineNumber: 108,
                                        columnNumber: 1064
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/next-app/components/SafariBuilder.tsx",
                                lineNumber: 108,
                                columnNumber: 981
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                role: "radiogroup",
                                "aria-label": "Approximate budget",
                                className: "grid grid-cols-1 sm:grid-cols-3 md:grid-cols-5 gap-2",
                                children: budgetChoices.map((budget)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        role: "radio",
                                        "aria-checked": budgetRange === budget,
                                        onClick: ()=>setBudgetRange(budget),
                                        className: `min-h-11 p-3 rounded-xl border text-sm font-bold text-center ${budgetRange === budget ? 'bg-[#fdfaf2] border-[#8a611d] text-[#704d15]' : 'bg-[#faf8f2] border-[#ddd7ca] text-[#46544b]'}`,
                                        children: budget
                                    }, budget, false, {
                                        fileName: "[project]/next-app/components/SafariBuilder.tsx",
                                        lineNumber: 108,
                                        columnNumber: 1302
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/next-app/components/SafariBuilder.tsx",
                                lineNumber: 108,
                                columnNumber: 1153
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/next-app/components/SafariBuilder.tsx",
                        lineNumber: 108,
                        columnNumber: 933
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-between gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: ()=>setStep(4),
                                className: `${navButton} bg-[#f4f1e8] text-[#303e35]`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__["ArrowLeft"], {
                                        className: "w-4 h-4"
                                    }, void 0, false, {
                                        fileName: "[project]/next-app/components/SafariBuilder.tsx",
                                        lineNumber: 108,
                                        columnNumber: 1805
                                    }, this),
                                    "Back"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/next-app/components/SafariBuilder.tsx",
                                lineNumber: 108,
                                columnNumber: 1701
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: ()=>setStep(6),
                                className: `${navButton} bg-[#8a611d] hover:bg-[#704d15] text-white`,
                                children: [
                                    "See my starting points ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
                                        className: "w-4 h-4"
                                    }, void 0, false, {
                                        fileName: "[project]/next-app/components/SafariBuilder.tsx",
                                        lineNumber: 108,
                                        columnNumber: 1993
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/next-app/components/SafariBuilder.tsx",
                                lineNumber: 108,
                                columnNumber: 1851
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/next-app/components/SafariBuilder.tsx",
                        lineNumber: 108,
                        columnNumber: 1657
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/next-app/components/SafariBuilder.tsx",
                lineNumber: 108,
                columnNumber: 19
            }, this) : null,
            step === 6 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-8",
                children: !isSubmitted ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-xs font-bold uppercase tracking-wider text-[#76541a]",
                                    children: "Your preferences"
                                }, void 0, false, {
                                    fileName: "[project]/next-app/components/SafariBuilder.tsx",
                                    lineNumber: 109,
                                    columnNumber: 69
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "font-serif-luxury text-2xl sm:text-3xl font-bold text-[#161f19] mt-1",
                                    children: "A few safari ideas to start from"
                                }, void 0, false, {
                                    fileName: "[project]/next-app/components/SafariBuilder.tsx",
                                    lineNumber: 109,
                                    columnNumber: 168
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm text-[#46544b] mt-2",
                                    children: "These are examples based on your choices. Your final route can be adjusted around dates, pace, budget and availability."
                                }, void 0, false, {
                                    fileName: "[project]/next-app/components/SafariBuilder.tsx",
                                    lineNumber: 109,
                                    columnNumber: 290
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/next-app/components/SafariBuilder.tsx",
                            lineNumber: 109,
                            columnNumber: 64
                        }, this),
                        matchingTours.length ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-3",
                            children: matchingTours.map((tour)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                                    className: "p-4 rounded-2xl bg-[#faf8f2] border border-[#e3ddcf] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                    src: tour.images[0],
                                                    alt: "",
                                                    className: "w-16 h-16 rounded-xl object-cover"
                                                }, void 0, false, {
                                                    fileName: "[project]/next-app/components/SafariBuilder.tsx",
                                                    lineNumber: 109,
                                                    columnNumber: 745
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                            className: "font-serif-luxury font-bold text-base text-[#161f19]",
                                                            children: tour.title
                                                        }, void 0, false, {
                                                            fileName: "[project]/next-app/components/SafariBuilder.tsx",
                                                            lineNumber: 109,
                                                            columnNumber: 831
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-sm text-[#76541a] block font-semibold",
                                                            children: [
                                                                tour.durationLabel,
                                                                " · ",
                                                                tour.country
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/next-app/components/SafariBuilder.tsx",
                                                            lineNumber: 109,
                                                            columnNumber: 917
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-sm text-[#46544b]",
                                                            children: [
                                                                "Guide price from $",
                                                                Number(tour.priceFrom).toLocaleString(),
                                                                " / person"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/next-app/components/SafariBuilder.tsx",
                                                            lineNumber: 109,
                                                            columnNumber: 1022
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/next-app/components/SafariBuilder.tsx",
                                                    lineNumber: 109,
                                                    columnNumber: 826
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/next-app/components/SafariBuilder.tsx",
                                            lineNumber: 109,
                                            columnNumber: 704
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            href: `/safaris/${tour.slug}`,
                                            className: "min-h-11 px-4 rounded-lg bg-[#f4f1e8] hover:bg-[#eae5d8] text-[#303e35] text-sm font-bold border border-[#d7d1c4] inline-flex items-center",
                                            children: "View details"
                                        }, void 0, false, {
                                            fileName: "[project]/next-app/components/SafariBuilder.tsx",
                                            lineNumber: 109,
                                            columnNumber: 1150
                                        }, this)
                                    ]
                                }, tour.id, true, {
                                    fileName: "[project]/next-app/components/SafariBuilder.tsx",
                                    lineNumber: 109,
                                    columnNumber: 540
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/next-app/components/SafariBuilder.tsx",
                            lineNumber: 109,
                            columnNumber: 486
                        }, this) : null,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                            onSubmit: submit,
                            className: "p-5 sm:p-6 rounded-2xl bg-[#faf8f2] border border-[#e3ddcf] space-y-5",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "font-serif-luxury text-xl font-bold text-[#161f19]",
                                            children: "Send these preferences to our team"
                                        }, void 0, false, {
                                            fileName: "[project]/next-app/components/SafariBuilder.tsx",
                                            lineNumber: 109,
                                            columnNumber: 1494
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm text-[#46544b] mt-1",
                                            children: "Only your name and email are required. You can keep dates and phone flexible."
                                        }, void 0, false, {
                                            fileName: "[project]/next-app/components/SafariBuilder.tsx",
                                            lineNumber: 109,
                                            columnNumber: 1600
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/next-app/components/SafariBuilder.tsx",
                                    lineNumber: 109,
                                    columnNumber: 1489
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-1 sm:grid-cols-2 gap-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    htmlFor: "builder-name",
                                                    className: labelClass,
                                                    children: "Full name *"
                                                }, void 0, false, {
                                                    fileName: "[project]/next-app/components/SafariBuilder.tsx",
                                                    lineNumber: 109,
                                                    columnNumber: 1790
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    id: "builder-name",
                                                    autoComplete: "name",
                                                    required: true,
                                                    value: fullName,
                                                    onChange: (event)=>setFullName(event.target.value),
                                                    className: inputClass
                                                }, void 0, false, {
                                                    fileName: "[project]/next-app/components/SafariBuilder.tsx",
                                                    lineNumber: 109,
                                                    columnNumber: 1862
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/next-app/components/SafariBuilder.tsx",
                                            lineNumber: 109,
                                            columnNumber: 1785
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    htmlFor: "builder-email",
                                                    className: labelClass,
                                                    children: "Email *"
                                                }, void 0, false, {
                                                    fileName: "[project]/next-app/components/SafariBuilder.tsx",
                                                    lineNumber: 109,
                                                    columnNumber: 2021
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    id: "builder-email",
                                                    type: "email",
                                                    autoComplete: "email",
                                                    required: true,
                                                    value: email,
                                                    onChange: (event)=>setEmail(event.target.value),
                                                    className: inputClass
                                                }, void 0, false, {
                                                    fileName: "[project]/next-app/components/SafariBuilder.tsx",
                                                    lineNumber: 109,
                                                    columnNumber: 2090
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/next-app/components/SafariBuilder.tsx",
                                            lineNumber: 109,
                                            columnNumber: 2016
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    htmlFor: "builder-phone",
                                                    className: labelClass,
                                                    children: [
                                                        "Phone / WhatsApp ",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "font-normal text-[#66766b]",
                                                            children: "(optional)"
                                                        }, void 0, false, {
                                                            fileName: "[project]/next-app/components/SafariBuilder.tsx",
                                                            lineNumber: 109,
                                                            columnNumber: 2329
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/next-app/components/SafariBuilder.tsx",
                                                    lineNumber: 109,
                                                    columnNumber: 2258
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    id: "builder-phone",
                                                    type: "tel",
                                                    autoComplete: "tel",
                                                    value: phone,
                                                    onChange: (event)=>setPhone(event.target.value),
                                                    className: inputClass
                                                }, void 0, false, {
                                                    fileName: "[project]/next-app/components/SafariBuilder.tsx",
                                                    lineNumber: 109,
                                                    columnNumber: 2399
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/next-app/components/SafariBuilder.tsx",
                                            lineNumber: 109,
                                            columnNumber: 2253
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    htmlFor: "builder-dates",
                                                    className: labelClass,
                                                    children: "Travel month or dates"
                                                }, void 0, false, {
                                                    fileName: "[project]/next-app/components/SafariBuilder.tsx",
                                                    lineNumber: 109,
                                                    columnNumber: 2554
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    id: "builder-dates",
                                                    value: travelMonth,
                                                    onChange: (event)=>setTravelMonth(event.target.value),
                                                    placeholder: "Flexible is fine",
                                                    className: inputClass
                                                }, void 0, false, {
                                                    fileName: "[project]/next-app/components/SafariBuilder.tsx",
                                                    lineNumber: 109,
                                                    columnNumber: 2637
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/next-app/components/SafariBuilder.tsx",
                                            lineNumber: 109,
                                            columnNumber: 2549
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/next-app/components/SafariBuilder.tsx",
                                    lineNumber: 109,
                                    columnNumber: 1730
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            htmlFor: "builder-notes",
                                            className: labelClass,
                                            children: [
                                                "Anything else we should know? ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-normal text-[#66766b]",
                                                    children: "(optional)"
                                                }, void 0, false, {
                                                    fileName: "[project]/next-app/components/SafariBuilder.tsx",
                                                    lineNumber: 109,
                                                    columnNumber: 2895
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/next-app/components/SafariBuilder.tsx",
                                            lineNumber: 109,
                                            columnNumber: 2811
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                            id: "builder-notes",
                                            rows: 3,
                                            value: specialRequests,
                                            onChange: (event)=>setSpecialRequests(event.target.value),
                                            className: `${inputClass} min-h-24`
                                        }, void 0, false, {
                                            fileName: "[project]/next-app/components/SafariBuilder.tsx",
                                            lineNumber: 109,
                                            columnNumber: 2965
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/next-app/components/SafariBuilder.tsx",
                                    lineNumber: 109,
                                    columnNumber: 2806
                                }, this),
                                submitError ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    role: "alert",
                                    className: "text-sm text-rose-800 bg-rose-50 border border-rose-200 rounded-xl px-3 py-2.5",
                                    children: submitError
                                }, void 0, false, {
                                    fileName: "[project]/next-app/components/SafariBuilder.tsx",
                                    lineNumber: 109,
                                    columnNumber: 3146
                                }, this) : null,
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "rounded-xl bg-white border border-[#e3ddcf] p-3 flex gap-2 text-xs text-[#46544b]",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__["ShieldCheck"], {
                                            className: "w-4 h-4 text-[#76541a] shrink-0 mt-0.5"
                                        }, void 0, false, {
                                            fileName: "[project]/next-app/components/SafariBuilder.tsx",
                                            lineNumber: 109,
                                            columnNumber: 3377
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "This is a planning enquiry only. No payment is taken and no booking is confirmed."
                                        }, void 0, false, {
                                            fileName: "[project]/next-app/components/SafariBuilder.tsx",
                                            lineNumber: 109,
                                            columnNumber: 3443
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/next-app/components/SafariBuilder.tsx",
                                    lineNumber: 109,
                                    columnNumber: 3278
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col-reverse sm:flex-row sm:items-center sm:justify-between gap-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: ()=>setStep(5),
                                            className: `${navButton} bg-[#f4f1e8] text-[#303e35]`,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__["ArrowLeft"], {
                                                    className: "w-4 h-4"
                                                }, void 0, false, {
                                                    fileName: "[project]/next-app/components/SafariBuilder.tsx",
                                                    lineNumber: 109,
                                                    columnNumber: 3739
                                                }, this),
                                                "Adjust choices"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/next-app/components/SafariBuilder.tsx",
                                            lineNumber: 109,
                                            columnNumber: 3635
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "submit",
                                            disabled: isSubmitting,
                                            className: `${navButton} min-h-12 px-7 bg-[#8a611d] hover:bg-[#704d15] disabled:opacity-60 text-white`,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: isSubmitting ? 'Sending…' : 'Request my safari plan'
                                                }, void 0, false, {
                                                    fileName: "[project]/next-app/components/SafariBuilder.tsx",
                                                    lineNumber: 109,
                                                    columnNumber: 3945
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Send$3e$__["Send"], {
                                                    className: "w-4 h-4"
                                                }, void 0, false, {
                                                    fileName: "[project]/next-app/components/SafariBuilder.tsx",
                                                    lineNumber: 109,
                                                    columnNumber: 4012
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/next-app/components/SafariBuilder.tsx",
                                            lineNumber: 109,
                                            columnNumber: 3795
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/next-app/components/SafariBuilder.tsx",
                                    lineNumber: 109,
                                    columnNumber: 3543
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/next-app/components/SafariBuilder.tsx",
                            lineNumber: 109,
                            columnNumber: 1383
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/next-app/components/SafariBuilder.tsx",
                    lineNumber: 109,
                    columnNumber: 62
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    role: "status",
                    className: "text-center py-10 space-y-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-16 h-16 rounded-full bg-[#1b4332] text-white flex items-center justify-center mx-auto ring-8 ring-[#1b4332]/15",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                                className: "w-8 h-8"
                            }, void 0, false, {
                                fileName: "[project]/next-app/components/SafariBuilder.tsx",
                                lineNumber: 109,
                                columnNumber: 4257
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/next-app/components/SafariBuilder.tsx",
                            lineNumber: 109,
                            columnNumber: 4127
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "font-serif-luxury text-3xl font-bold text-[#161f19]",
                            children: [
                                "Thanks, ",
                                fullName || 'traveler',
                                "."
                            ]
                        }, void 0, true, {
                            fileName: "[project]/next-app/components/SafariBuilder.tsx",
                            lineNumber: 109,
                            columnNumber: 4299
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-base text-[#46544b] max-w-lg mx-auto",
                            children: "We received your safari preferences. Our team can now review them and follow up with suggested next steps."
                        }, void 0, false, {
                            fileName: "[project]/next-app/components/SafariBuilder.tsx",
                            lineNumber: 109,
                            columnNumber: 4405
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "pt-3 flex flex-wrap justify-center gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: `https://wa.me/254729000410?text=${encodeURIComponent(`Hello Good Secrets Safaris, I just completed the Custom Safari Builder for ${destinations.join(', ')}. My name is ${fullName}.`)}`,
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    className: "min-h-11 inline-flex items-center justify-center px-5 rounded-xl bg-[#128c5a] hover:bg-[#0f744b] text-white font-bold text-sm",
                                    children: "Continue on WhatsApp"
                                }, void 0, false, {
                                    fileName: "[project]/next-app/components/SafariBuilder.tsx",
                                    lineNumber: 109,
                                    columnNumber: 4630
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: ()=>{
                                        setIsSubmitted(false);
                                        setStep(1);
                                    },
                                    className: "min-h-11 px-5 rounded-xl bg-[#f4f1e8] text-[#303e35] text-sm font-semibold hover:bg-[#eae5d8]",
                                    children: "Build another safari"
                                }, void 0, false, {
                                    fileName: "[project]/next-app/components/SafariBuilder.tsx",
                                    lineNumber: 109,
                                    columnNumber: 5030
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/next-app/components/SafariBuilder.tsx",
                            lineNumber: 109,
                            columnNumber: 4572
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/next-app/components/SafariBuilder.tsx",
                    lineNumber: 109,
                    columnNumber: 4068
                }, this)
            }, void 0, false, {
                fileName: "[project]/next-app/components/SafariBuilder.tsx",
                lineNumber: 109,
                columnNumber: 19
            }, this) : null
        ]
    }, void 0, true, {
        fileName: "[project]/next-app/components/SafariBuilder.tsx",
        lineNumber: 101,
        columnNumber: 10
    }, this);
}
_s(SafariBuilder, "tzuShsEo+BcObnfSyqfx8fKeRHo=");
_c = SafariBuilder;
function Nav({ back, next, nextLabel }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex justify-between gap-3",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "button",
                onClick: back,
                className: "min-h-11 inline-flex items-center justify-center gap-2 px-5 rounded-xl text-sm font-bold bg-[#f4f1e8] text-[#303e35]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__["ArrowLeft"], {
                        className: "w-4 h-4"
                    }, void 0, false, {
                        fileName: "[project]/next-app/components/SafariBuilder.tsx",
                        lineNumber: 114,
                        columnNumber: 220
                    }, this),
                    "Back"
                ]
            }, void 0, true, {
                fileName: "[project]/next-app/components/SafariBuilder.tsx",
                lineNumber: 114,
                columnNumber: 54
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "button",
                onClick: next,
                className: "min-h-11 inline-flex items-center justify-center gap-2 px-5 rounded-xl text-sm font-bold bg-[#8a611d] hover:bg-[#704d15] text-white",
                children: [
                    nextLabel,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                        className: "w-4 h-4"
                    }, void 0, false, {
                        fileName: "[project]/next-app/components/SafariBuilder.tsx",
                        lineNumber: 114,
                        columnNumber: 458
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/next-app/components/SafariBuilder.tsx",
                lineNumber: 114,
                columnNumber: 266
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/next-app/components/SafariBuilder.tsx",
        lineNumber: 114,
        columnNumber: 10
    }, this);
}
_c1 = Nav;
var _c, _c1;
__turbopack_context__.k.register(_c, "SafariBuilder");
__turbopack_context__.k.register(_c1, "Nav");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/next-app/components/SafariFinderBar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SafariFinderBar",
    ()=>SafariFinderBar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/next-app/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/next-app/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/next-app/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__ = __turbopack_context__.i("[project]/next-app/node_modules/lucide-react/dist/esm/icons/calendar.js [app-client] (ecmascript) <export default as Calendar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$compass$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Compass$3e$__ = __turbopack_context__.i("[project]/next-app/node_modules/lucide-react/dist/esm/icons/compass.js [app-client] (ecmascript) <export default as Compass>");
var __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__ = __turbopack_context__.i("[project]/next-app/node_modules/lucide-react/dist/esm/icons/map-pin.js [app-client] (ecmascript) <export default as MapPin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/next-app/node_modules/lucide-react/dist/esm/icons/search.js [app-client] (ecmascript) <export default as Search>");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
function SafariFinderBar({ destinations = [] }) {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const [destination, setDestination] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('all');
    const [duration, setDuration] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('all');
    const [travelStyle, setTravelStyle] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('all');
    function submit(e) {
        e.preventDefault();
        const p = new URLSearchParams();
        if (destination !== 'all') p.set('destination', destination);
        if (duration !== 'all') p.set('duration', duration);
        if (travelStyle !== 'all') p.set('travelStyle', travelStyle);
        router.push(`/safaris${p.toString() ? `?${p.toString()}` : ''}`);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
        id: "safari-finder-bar",
        onSubmit: submit,
        "aria-label": "Find a safari",
        className: "w-full rounded-2xl bg-white/95 backdrop-blur-xl border border-[#d7d1c4] shadow-2xl p-4 sm:p-5 max-w-5xl mx-auto",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col gap-1 bg-[#fcfbf9] p-3 rounded-xl border border-[#ded8cc] focus-within:border-[#b3822a] focus-within:ring-2 focus-within:ring-[#b3822a]/20 transition-colors",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                            htmlFor: "safari-destination",
                            className: "text-xs font-extrabold uppercase tracking-wider text-[#76541a] flex items-center gap-1.5",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                                    className: "w-3.5 h-3.5"
                                }, void 0, false, {
                                    fileName: "[project]/next-app/components/SafariFinderBar.tsx",
                                    lineNumber: 15,
                                    columnNumber: 330
                                }, this),
                                "Where in Africa?"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/next-app/components/SafariFinderBar.tsx",
                            lineNumber: 15,
                            columnNumber: 193
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                            id: "safari-destination",
                            value: destination,
                            onChange: (e)=>setDestination(e.target.value),
                            className: "bg-transparent text-sm font-bold text-[#161f19] focus:outline-none cursor-pointer min-h-7",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                    value: "all",
                                    children: "All Destinations"
                                }, void 0, false, {
                                    fileName: "[project]/next-app/components/SafariFinderBar.tsx",
                                    lineNumber: 15,
                                    columnNumber: 586
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("optgroup", {
                                    label: "Regions",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: "Kenya",
                                            children: "Kenya (All Parks & Coast)"
                                        }, void 0, false, {
                                            fileName: "[project]/next-app/components/SafariFinderBar.tsx",
                                            lineNumber: 15,
                                            columnNumber: 657
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: "Tanzania",
                                            children: "Tanzania (Serengeti & Parks)"
                                        }, void 0, false, {
                                            fileName: "[project]/next-app/components/SafariFinderBar.tsx",
                                            lineNumber: 15,
                                            columnNumber: 713
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: "Zanzibar",
                                            children: "Zanzibar Spice Island"
                                        }, void 0, false, {
                                            fileName: "[project]/next-app/components/SafariFinderBar.tsx",
                                            lineNumber: 15,
                                            columnNumber: 775
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: "Kenya + Tanzania",
                                            children: "Kenya + Tanzania Combined"
                                        }, void 0, false, {
                                            fileName: "[project]/next-app/components/SafariFinderBar.tsx",
                                            lineNumber: 15,
                                            columnNumber: 830
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: "Safari + Beach",
                                            children: "Bush Safari & Beach Holiday"
                                        }, void 0, false, {
                                            fileName: "[project]/next-app/components/SafariFinderBar.tsx",
                                            lineNumber: 15,
                                            columnNumber: 897
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/next-app/components/SafariFinderBar.tsx",
                                    lineNumber: 15,
                                    columnNumber: 631
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("optgroup", {
                                    label: "Specific Parks",
                                    children: destinations.map((d)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: d.name,
                                            children: d.name
                                        }, d.id, false, {
                                            fileName: "[project]/next-app/components/SafariFinderBar.tsx",
                                            lineNumber: 15,
                                            columnNumber: 1029
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/next-app/components/SafariFinderBar.tsx",
                                    lineNumber: 15,
                                    columnNumber: 975
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/next-app/components/SafariFinderBar.tsx",
                            lineNumber: 15,
                            columnNumber: 387
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/next-app/components/SafariFinderBar.tsx",
                    lineNumber: 15,
                    columnNumber: 5
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col gap-1 bg-[#fcfbf9] p-3 rounded-xl border border-[#ded8cc] focus-within:border-[#b3822a] focus-within:ring-2 focus-within:ring-[#b3822a]/20 transition-colors",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                            htmlFor: "safari-duration",
                            className: "text-xs font-extrabold uppercase tracking-wider text-[#76541a] flex items-center gap-1.5",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"], {
                                    className: "w-3.5 h-3.5"
                                }, void 0, false, {
                                    fileName: "[project]/next-app/components/SafariFinderBar.tsx",
                                    lineNumber: 16,
                                    columnNumber: 327
                                }, this),
                                "Duration"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/next-app/components/SafariFinderBar.tsx",
                            lineNumber: 16,
                            columnNumber: 193
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                            id: "safari-duration",
                            value: duration,
                            onChange: (e)=>setDuration(e.target.value),
                            className: "bg-transparent text-sm font-bold text-[#161f19] focus:outline-none cursor-pointer min-h-7",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                    value: "all",
                                    children: "Any Duration"
                                }, void 0, false, {
                                    fileName: "[project]/next-app/components/SafariFinderBar.tsx",
                                    lineNumber: 16,
                                    columnNumber: 568
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                    value: "1",
                                    children: "1 Day Excursion"
                                }, void 0, false, {
                                    fileName: "[project]/next-app/components/SafariFinderBar.tsx",
                                    lineNumber: 16,
                                    columnNumber: 609
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                    value: "2-3",
                                    children: "2 - 3 Days (Weekend / Quick)"
                                }, void 0, false, {
                                    fileName: "[project]/next-app/components/SafariFinderBar.tsx",
                                    lineNumber: 16,
                                    columnNumber: 651
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                    value: "4-7",
                                    children: "4 - 7 Days (Classic Safari)"
                                }, void 0, false, {
                                    fileName: "[project]/next-app/components/SafariFinderBar.tsx",
                                    lineNumber: 16,
                                    columnNumber: 708
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                    value: "8-14",
                                    children: "8 - 14 Days (Grand Expedition)"
                                }, void 0, false, {
                                    fileName: "[project]/next-app/components/SafariFinderBar.tsx",
                                    lineNumber: 16,
                                    columnNumber: 764
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                    value: "15+",
                                    children: "15+ Days (Bespoke Extended)"
                                }, void 0, false, {
                                    fileName: "[project]/next-app/components/SafariFinderBar.tsx",
                                    lineNumber: 16,
                                    columnNumber: 824
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/next-app/components/SafariFinderBar.tsx",
                            lineNumber: 16,
                            columnNumber: 378
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/next-app/components/SafariFinderBar.tsx",
                    lineNumber: 16,
                    columnNumber: 5
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col gap-1 bg-[#fcfbf9] p-3 rounded-xl border border-[#ded8cc] focus-within:border-[#b3822a] focus-within:ring-2 focus-within:ring-[#b3822a]/20 transition-colors",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                            htmlFor: "safari-style",
                            className: "text-xs font-extrabold uppercase tracking-wider text-[#76541a] flex items-center gap-1.5",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$compass$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Compass$3e$__["Compass"], {
                                    className: "w-3.5 h-3.5"
                                }, void 0, false, {
                                    fileName: "[project]/next-app/components/SafariFinderBar.tsx",
                                    lineNumber: 17,
                                    columnNumber: 324
                                }, this),
                                "Travel Style"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/next-app/components/SafariFinderBar.tsx",
                            lineNumber: 17,
                            columnNumber: 193
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                            id: "safari-style",
                            value: travelStyle,
                            onChange: (e)=>setTravelStyle(e.target.value),
                            className: "bg-transparent text-sm font-bold text-[#161f19] focus:outline-none cursor-pointer min-h-7",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                    value: "all",
                                    children: "All Travel Styles"
                                }, void 0, false, {
                                    fileName: "[project]/next-app/components/SafariFinderBar.tsx",
                                    lineNumber: 17,
                                    columnNumber: 571
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                    value: "Big 5",
                                    children: "Big 5 Wildlife Safari"
                                }, void 0, false, {
                                    fileName: "[project]/next-app/components/SafariFinderBar.tsx",
                                    lineNumber: 17,
                                    columnNumber: 617
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                    value: "Great Migration",
                                    children: "Great Migration Crossings"
                                }, void 0, false, {
                                    fileName: "[project]/next-app/components/SafariFinderBar.tsx",
                                    lineNumber: 17,
                                    columnNumber: 669
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                    value: "Luxury",
                                    children: "Luxury 5-Star Lodge & Camps"
                                }, void 0, false, {
                                    fileName: "[project]/next-app/components/SafariFinderBar.tsx",
                                    lineNumber: 17,
                                    columnNumber: 735
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                    value: "Family",
                                    children: "Family Friendly"
                                }, void 0, false, {
                                    fileName: "[project]/next-app/components/SafariFinderBar.tsx",
                                    lineNumber: 17,
                                    columnNumber: 794
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                    value: "Honeymoon",
                                    children: "Honeymoon & Romance"
                                }, void 0, false, {
                                    fileName: "[project]/next-app/components/SafariFinderBar.tsx",
                                    lineNumber: 17,
                                    columnNumber: 841
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                    value: "Senior Friendly",
                                    children: "Senior Friendly & Gentle Pacing"
                                }, void 0, false, {
                                    fileName: "[project]/next-app/components/SafariFinderBar.tsx",
                                    lineNumber: 17,
                                    columnNumber: 895
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                    value: "Safari & Beach",
                                    children: "Safari & Beach Combo"
                                }, void 0, false, {
                                    fileName: "[project]/next-app/components/SafariFinderBar.tsx",
                                    lineNumber: 17,
                                    columnNumber: 967
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                    value: "Budget",
                                    children: "Value & Midrange Safaris"
                                }, void 0, false, {
                                    fileName: "[project]/next-app/components/SafariFinderBar.tsx",
                                    lineNumber: 17,
                                    columnNumber: 1027
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/next-app/components/SafariFinderBar.tsx",
                            lineNumber: 17,
                            columnNumber: 378
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/next-app/components/SafariFinderBar.tsx",
                    lineNumber: 17,
                    columnNumber: 5
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "submit",
                        id: "hero-find-safari-btn",
                        className: "w-full h-full min-h-[52px] rounded-xl bg-[#8a611d] hover:bg-[#704d15] text-white font-extrabold text-sm uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-md hover:shadow-lg active:scale-[0.98]",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                                className: "w-4 h-4 stroke-[2.5]"
                            }, void 0, false, {
                                fileName: "[project]/next-app/components/SafariFinderBar.tsx",
                                lineNumber: 18,
                                columnNumber: 329
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "Find My Safari"
                            }, void 0, false, {
                                fileName: "[project]/next-app/components/SafariFinderBar.tsx",
                                lineNumber: 18,
                                columnNumber: 371
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/next-app/components/SafariFinderBar.tsx",
                        lineNumber: 18,
                        columnNumber: 40
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/next-app/components/SafariFinderBar.tsx",
                    lineNumber: 18,
                    columnNumber: 5
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/next-app/components/SafariFinderBar.tsx",
            lineNumber: 14,
            columnNumber: 208
        }, this)
    }, void 0, false, {
        fileName: "[project]/next-app/components/SafariFinderBar.tsx",
        lineNumber: 14,
        columnNumber: 10
    }, this);
}
_s(SafariFinderBar, "Qsciqdm40k3uUcWs0Tx2EoYdTKs=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = SafariFinderBar;
var _c;
__turbopack_context__.k.register(_c, "SafariFinderBar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=next-app_components_0_42bqb._.js.map