(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/next-app/components/ShortlistView.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ShortlistView",
    ()=>ShortlistView
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/next-app/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/next-app/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/next-app/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/next-app/node_modules/lucide-react/dist/esm/icons/check.js [app-client] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__ = __turbopack_context__.i("[project]/next-app/node_modules/lucide-react/dist/esm/icons/heart.js [app-client] (ecmascript) <export default as Heart>");
var __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$hotel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Hotel$3e$__ = __turbopack_context__.i("[project]/next-app/node_modules/lucide-react/dist/esm/icons/hotel.js [app-client] (ecmascript) <export default as Hotel>");
var __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__ = __turbopack_context__.i("[project]/next-app/node_modules/lucide-react/dist/esm/icons/map-pin.js [app-client] (ecmascript) <export default as MapPin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__ = __turbopack_context__.i("[project]/next-app/node_modules/lucide-react/dist/esm/icons/sparkles.js [app-client] (ecmascript) <export default as Sparkles>");
var __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__ = __turbopack_context__.i("[project]/next-app/node_modules/lucide-react/dist/esm/icons/trash-2.js [app-client] (ecmascript) <export default as Trash2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/next-app/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$components$2f$ShortlistButton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/next-app/components/ShortlistButton.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$components$2f$ClientProviders$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/next-app/components/ClientProviders.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
'use client';
;
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
                    const current = localStorage.getItem(CURRENCY_KEY);
                    setCurrency(current === 'KES' ? 'KES' : 'USD');
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
_s(usePricingPrefs, "+RPI+z0MoU+uHNnMJbHQ498cv48=");
function formatPrice(item, currency) {
    const usd = Number(item.priceFrom || 0);
    if (currency === 'KES') {
        const kes = item.priceFromKES && item.priceFromKES > 0 ? item.priceFromKES : Math.round(usd * 130);
        return `KSH ${Number(kes).toLocaleString()}`;
    }
    return `$${usd.toLocaleString()}`;
}
function ShortlistView() {
    _s1();
    const [items, setItems] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [selected, setSelected] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const { openEnquiry } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$components$2f$ClientProviders$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEnquiry"])();
    const { currency } = usePricingPrefs();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ShortlistView.useEffect": ()=>{
            const load = {
                "ShortlistView.useEffect.load": ()=>{
                    const next = (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$components$2f$ShortlistButton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["readShortlist"])();
                    setItems(next);
                    setSelected({
                        "ShortlistView.useEffect.load": (current)=>{
                            const valid = current.filter({
                                "ShortlistView.useEffect.load.valid": (k)=>next.some({
                                        "ShortlistView.useEffect.load.valid": (i)=>`${i.kind}:${i.id}` === k
                                    }["ShortlistView.useEffect.load.valid"])
                            }["ShortlistView.useEffect.load.valid"]);
                            return valid.length ? valid : next.map({
                                "ShortlistView.useEffect.load": (i)=>`${i.kind}:${i.id}`
                            }["ShortlistView.useEffect.load"]);
                        }
                    }["ShortlistView.useEffect.load"]);
                }
            }["ShortlistView.useEffect.load"];
            load();
            window.addEventListener('gss-shortlist-changed', load);
            return ({
                "ShortlistView.useEffect": ()=>window.removeEventListener('gss-shortlist-changed', load)
            })["ShortlistView.useEffect"];
        }
    }["ShortlistView.useEffect"], []);
    const key = (i)=>`${i.kind}:${i.id}`;
    const basket = (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "ShortlistView.useMemo[basket]": ()=>items.filter({
                "ShortlistView.useMemo[basket]": (i)=>selected.includes(key(i))
            }["ShortlistView.useMemo[basket]"])
    }["ShortlistView.useMemo[basket]"], [
        items,
        selected
    ]);
    const safaris = items.filter((i)=>i.kind === 'safari');
    const hotels = items.filter((i)=>i.kind === 'hotel');
    const remove = (item)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$components$2f$ShortlistButton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["writeShortlist"])(items.filter((i)=>key(i) !== key(item)));
    const clear = ()=>{
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$components$2f$ShortlistButton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["writeShortlist"])([]);
        setSelected([]);
    };
    const toggleBasket = (item)=>{
        const k = key(item);
        setSelected((v)=>v.includes(k) ? v.filter((x)=>x !== k) : [
                ...v,
                k
            ]);
    };
    if (!items.length) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: "rounded-3xl border border-white/10 bg-white/5 px-6 py-12 sm:p-12 text-center space-y-5",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-14 h-14 rounded-full bg-brand-soft/10 text-brand-soft flex items-center justify-center mx-auto",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__["Heart"], {
                        className: "w-7 h-7"
                    }, void 0, false, {
                        fileName: "[project]/next-app/components/ShortlistView.tsx",
                        lineNumber: 70,
                        columnNumber: 234
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/next-app/components/ShortlistView.tsx",
                    lineNumber: 70,
                    columnNumber: 120
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "font-serif-luxury text-2xl font-bold text-white",
                            children: "Nothing saved yet"
                        }, void 0, false, {
                            fileName: "[project]/next-app/components/ShortlistView.tsx",
                            lineNumber: 70,
                            columnNumber: 274
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sm text-on-shell-muted mt-2 max-w-lg mx-auto",
                            children: "Tap the heart on any safari or hotel to keep it here for later."
                        }, void 0, false, {
                            fileName: "[project]/next-app/components/ShortlistView.tsx",
                            lineNumber: 70,
                            columnNumber: 360
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/next-app/components/ShortlistView.tsx",
                    lineNumber: 70,
                    columnNumber: 269
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col sm:flex-row justify-center gap-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: "/safaris",
                            className: "min-h-11 rounded-xl bg-brand-strong hover:bg-brand-hover px-5 text-sm font-bold text-white inline-flex items-center justify-center",
                            children: "Explore safaris"
                        }, void 0, false, {
                            fileName: "[project]/next-app/components/ShortlistView.tsx",
                            lineNumber: 70,
                            columnNumber: 562
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: "/hotels",
                            className: "min-h-11 rounded-xl border border-white/20 bg-white/5 hover:bg-white/10 px-5 text-sm font-bold text-white inline-flex items-center justify-center",
                            children: "Browse stays"
                        }, void 0, false, {
                            fileName: "[project]/next-app/components/ShortlistView.tsx",
                            lineNumber: 70,
                            columnNumber: 749
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/next-app/components/ShortlistView.tsx",
                    lineNumber: 70,
                    columnNumber: 498
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/next-app/components/ShortlistView.tsx",
            lineNumber: 70,
            columnNumber: 12
        }, this);
    }
    const all = selected.length === items.length;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-10",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 rounded-2xl border border-white/10 bg-white/5 px-5 py-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm text-on-shell-muted",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        className: "text-white",
                                        children: items.length
                                    }, void 0, false, {
                                        fileName: "[project]/next-app/components/ShortlistView.tsx",
                                        lineNumber: 75,
                                        columnNumber: 193
                                    }, this),
                                    " saved · ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        className: "text-brand-soft",
                                        children: basket.length
                                    }, void 0, false, {
                                        fileName: "[project]/next-app/components/ShortlistView.tsx",
                                        lineNumber: 75,
                                        columnNumber: 256
                                    }, this),
                                    " in this quote basket"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/next-app/components/ShortlistView.tsx",
                                lineNumber: 75,
                                columnNumber: 150
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs text-on-shell-subtle mt-1",
                                children: "Selecting an item for the basket does not remove it from your shortlist."
                            }, void 0, false, {
                                fileName: "[project]/next-app/components/ShortlistView.tsx",
                                lineNumber: 75,
                                columnNumber: 341
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/next-app/components/ShortlistView.tsx",
                        lineNumber: 75,
                        columnNumber: 145
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-wrap gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: ()=>setSelected(all ? [] : items.map(key)),
                                className: "min-h-10 px-4 rounded-xl border border-white/15 text-sm font-semibold text-white hover:bg-white/10",
                                children: all ? 'Select none' : 'Select all'
                            }, void 0, false, {
                                fileName: "[project]/next-app/components/ShortlistView.tsx",
                                lineNumber: 75,
                                columnNumber: 510
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: clear,
                                className: "min-h-10 px-4 inline-flex items-center gap-2 text-sm font-semibold text-on-shell-muted hover:text-white",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                        className: "w-4 h-4"
                                    }, void 0, false, {
                                        fileName: "[project]/next-app/components/ShortlistView.tsx",
                                        lineNumber: 75,
                                        columnNumber: 897
                                    }, this),
                                    "Clear saved list"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/next-app/components/ShortlistView.tsx",
                                lineNumber: 75,
                                columnNumber: 743
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/next-app/components/ShortlistView.tsx",
                        lineNumber: 75,
                        columnNumber: 472
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/next-app/components/ShortlistView.tsx",
                lineNumber: 75,
                columnNumber: 5
            }, this),
            safaris.length ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SavedSection, {
                title: "Safari ideas",
                eyebrow: "Saved safaris",
                items: safaris,
                selected: selected,
                toggleBasket: toggleBasket,
                remove: remove,
                currency: currency
            }, void 0, false, {
                fileName: "[project]/next-app/components/ShortlistView.tsx",
                lineNumber: 76,
                columnNumber: 23
            }, this) : null,
            hotels.length ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SavedSection, {
                title: "Hotels & lodges",
                eyebrow: "Saved stays",
                items: hotels,
                selected: selected,
                toggleBasket: toggleBasket,
                remove: remove,
                currency: currency
            }, void 0, false, {
                fileName: "[project]/next-app/components/ShortlistView.tsx",
                lineNumber: 77,
                columnNumber: 22
            }, this) : null,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "rounded-3xl border border-brand-deep bg-shell p-6 sm:p-9 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "max-w-2xl",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-xs font-bold uppercase tracking-widest text-brand-soft",
                                children: "Your quote basket"
                            }, void 0, false, {
                                fileName: "[project]/next-app/components/ShortlistView.tsx",
                                lineNumber: 78,
                                columnNumber: 177
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "font-serif-luxury text-2xl sm:text-3xl font-bold text-white mt-1",
                                children: [
                                    "Compare ",
                                    basket.length || 'your',
                                    " selected option",
                                    basket.length === 1 ? '' : 's',
                                    " in one conversation."
                                ]
                            }, void 0, true, {
                                fileName: "[project]/next-app/components/ShortlistView.tsx",
                                lineNumber: 78,
                                columnNumber: 279
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm text-on-shell-muted mt-2 leading-relaxed",
                                children: "We’ll receive exactly the items you selected, so the safari team can compare routes, stays, timing and combinations without making you submit separate forms."
                            }, void 0, false, {
                                fileName: "[project]/next-app/components/ShortlistView.tsx",
                                lineNumber: 78,
                                columnNumber: 467
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/next-app/components/ShortlistView.tsx",
                        lineNumber: 78,
                        columnNumber: 150
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        disabled: !basket.length,
                        onClick: ()=>openEnquiry({
                                type: `Shortlist enquiry · ${basket.map((i)=>`${i.kind === 'safari' ? 'Safari' : 'Stay'}: ${i.title}`).join(' | ')}`
                            }),
                        className: "min-h-12 shrink-0 rounded-xl bg-brand-soft hover:bg-brand-soft disabled:bg-ink-subtle disabled:text-border disabled:cursor-not-allowed px-6 text-sm font-extrabold text-ink-strong inline-flex items-center justify-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
                                className: "w-4 h-4"
                            }, void 0, false, {
                                fileName: "[project]/next-app/components/ShortlistView.tsx",
                                lineNumber: 78,
                                columnNumber: 1119
                            }, this),
                            basket.length ? `Request quote for ${basket.length}` : 'Choose items first'
                        ]
                    }, void 0, true, {
                        fileName: "[project]/next-app/components/ShortlistView.tsx",
                        lineNumber: 78,
                        columnNumber: 698
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/next-app/components/ShortlistView.tsx",
                lineNumber: 78,
                columnNumber: 5
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/next-app/components/ShortlistView.tsx",
        lineNumber: 74,
        columnNumber: 10
    }, this);
}
_s1(ShortlistView, "DuT2TTf3YGUPtEEM85scBITuNsA=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$components$2f$ClientProviders$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEnquiry"],
        usePricingPrefs
    ];
});
_c = ShortlistView;
function SavedSection({ title, eyebrow, items, selected, toggleBasket, remove, currency }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "space-y-5",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-xs font-bold uppercase tracking-widest text-brand-soft",
                        children: eyebrow
                    }, void 0, false, {
                        fileName: "[project]/next-app/components/ShortlistView.tsx",
                        lineNumber: 83,
                        columnNumber: 46
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "font-serif-luxury text-3xl font-bold text-white mt-1",
                        children: title
                    }, void 0, false, {
                        fileName: "[project]/next-app/components/ShortlistView.tsx",
                        lineNumber: 83,
                        columnNumber: 140
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/next-app/components/ShortlistView.tsx",
                lineNumber: 83,
                columnNumber: 41
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid md:grid-cols-2 lg:grid-cols-3 gap-6",
                children: items.map((item)=>{
                    const k = `${item.kind}:${item.id}`;
                    const inBasket = selected.includes(k);
                    const href = item.kind === 'safari' ? `/safaris/${item.slug}` : `/hotels/${item.slug}`;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                        className: `overflow-hidden rounded-2xl bg-white border shadow-sm transition text-ink ${inBasket ? 'border-brand-soft ring-2 ring-brand-soft/25' : 'border-border-strong'}`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative aspect-[16/10] overflow-hidden",
                                children: [
                                    item.image ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        src: item.image,
                                        alt: item.title,
                                        fill: true,
                                        className: "object-cover"
                                    }, void 0, false, {
                                        fileName: "[project]/next-app/components/ShortlistView.tsx",
                                        lineNumber: 87,
                                        columnNumber: 273
                                    }, this) : null,
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: ()=>remove(item),
                                        "aria-label": `Remove ${item.title} from saved shortlist`,
                                        className: "absolute right-3 top-3 min-w-11 min-h-11 rounded-full bg-white/95 text-brand-strong flex items-center justify-center shadow-md",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__["Heart"], {
                                            className: "w-5 h-5 fill-current"
                                        }, void 0, false, {
                                            fileName: "[project]/next-app/components/ShortlistView.tsx",
                                            lineNumber: 87,
                                            columnNumber: 601
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/next-app/components/ShortlistView.tsx",
                                        lineNumber: 87,
                                        columnNumber: 354
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/next-app/components/ShortlistView.tsx",
                                lineNumber: 87,
                                columnNumber: 202
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-5 space-y-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        "aria-pressed": inBasket,
                                        onClick: ()=>toggleBasket(item),
                                        className: `w-full min-h-11 rounded-xl border px-3 text-sm font-bold flex items-center justify-center gap-2 ${inBasket ? 'bg-action border-action text-white' : 'bg-surface-muted border-border-strong text-ink'}`,
                                        children: [
                                            inBasket && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                                className: "w-4 h-4"
                                            }, void 0, false, {
                                                fileName: "[project]/next-app/components/ShortlistView.tsx",
                                                lineNumber: 87,
                                                columnNumber: 995
                                            }, this),
                                            inBasket ? 'Included in quote basket' : 'Add to quote basket'
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/next-app/components/ShortlistView.tsx",
                                        lineNumber: 87,
                                        columnNumber: 689
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "font-serif-luxury text-xl font-bold text-ink-strong",
                                                children: item.title
                                            }, void 0, false, {
                                                fileName: "[project]/next-app/components/ShortlistView.tsx",
                                                lineNumber: 87,
                                                columnNumber: 1102
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "mt-2 flex items-center gap-1.5 text-sm text-ink-muted",
                                                children: [
                                                    item.kind === 'safari' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                                                        className: "w-4 h-4 text-brand-deep"
                                                    }, void 0, false, {
                                                        fileName: "[project]/next-app/components/ShortlistView.tsx",
                                                        lineNumber: 87,
                                                        columnNumber: 1282
                                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$hotel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Hotel$3e$__["Hotel"], {
                                                        className: "w-4 h-4 text-brand-deep"
                                                    }, void 0, false, {
                                                        fileName: "[project]/next-app/components/ShortlistView.tsx",
                                                        lineNumber: 87,
                                                        columnNumber: 1331
                                                    }, this),
                                                    item.kind === 'safari' ? `${item.country || ''} · ${item.durationLabel || ''}` : item.location
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/next-app/components/ShortlistView.tsx",
                                                lineNumber: 87,
                                                columnNumber: 1187
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/next-app/components/ShortlistView.tsx",
                                        lineNumber: 87,
                                        columnNumber: 1097
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-end justify-between gap-3 border-t border-border pt-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-xs text-ink-muted",
                                                        children: "From"
                                                    }, void 0, false, {
                                                        fileName: "[project]/next-app/components/ShortlistView.tsx",
                                                        lineNumber: 87,
                                                        columnNumber: 1574
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                        className: "block font-serif-luxury text-xl text-ink-strong",
                                                        children: formatPrice(item, currency)
                                                    }, void 0, false, {
                                                        fileName: "[project]/next-app/components/ShortlistView.tsx",
                                                        lineNumber: 87,
                                                        columnNumber: 1626
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/next-app/components/ShortlistView.tsx",
                                                lineNumber: 87,
                                                columnNumber: 1569
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                href: href,
                                                className: "min-h-11 rounded-xl bg-action hover:bg-action-strong px-4 text-sm font-bold text-white inline-flex items-center",
                                                children: [
                                                    "View ",
                                                    item.kind === 'safari' ? 'safari' : 'stay'
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/next-app/components/ShortlistView.tsx",
                                                lineNumber: 87,
                                                columnNumber: 1738
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/next-app/components/ShortlistView.tsx",
                                        lineNumber: 87,
                                        columnNumber: 1487
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/next-app/components/ShortlistView.tsx",
                                lineNumber: 87,
                                columnNumber: 658
                            }, this)
                        ]
                    }, k, true, {
                        fileName: "[project]/next-app/components/ShortlistView.tsx",
                        lineNumber: 87,
                        columnNumber: 12
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/next-app/components/ShortlistView.tsx",
                lineNumber: 83,
                columnNumber: 227
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/next-app/components/ShortlistView.tsx",
        lineNumber: 83,
        columnNumber: 10
    }, this);
}
_c1 = SavedSection;
var _c, _c1;
__turbopack_context__.k.register(_c, "ShortlistView");
__turbopack_context__.k.register(_c1, "SavedSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/next-app/node_modules/lucide-react/dist/esm/icons/hotel.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>Hotel
]);
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/next-app/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M10 22v-6.57",
            key: "1wmca3"
        }
    ],
    [
        "path",
        {
            d: "M12 11h.01",
            key: "z322tv"
        }
    ],
    [
        "path",
        {
            d: "M12 7h.01",
            key: "1ivr5q"
        }
    ],
    [
        "path",
        {
            d: "M14 15.43V22",
            key: "1q2vjd"
        }
    ],
    [
        "path",
        {
            d: "M15 16a5 5 0 0 0-6 0",
            key: "o9wqvi"
        }
    ],
    [
        "path",
        {
            d: "M16 11h.01",
            key: "xkw8gn"
        }
    ],
    [
        "path",
        {
            d: "M16 7h.01",
            key: "1kdx03"
        }
    ],
    [
        "path",
        {
            d: "M8 11h.01",
            key: "1dfujw"
        }
    ],
    [
        "path",
        {
            d: "M8 7h.01",
            key: "1vti4s"
        }
    ],
    [
        "rect",
        {
            x: "4",
            y: "2",
            width: "16",
            height: "20",
            rx: "2",
            key: "1uxh74"
        }
    ]
];
const Hotel = (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("hotel", __iconNode);
;
}),
"[project]/next-app/node_modules/lucide-react/dist/esm/icons/hotel.js [app-client] (ecmascript) <export default as Hotel>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Hotel",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$hotel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$hotel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/next-app/node_modules/lucide-react/dist/esm/icons/hotel.js [app-client] (ecmascript)");
}),
"[project]/next-app/node_modules/lucide-react/dist/esm/icons/trash-2.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>Trash2
]);
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/next-app/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M10 11v6",
            key: "nco0om"
        }
    ],
    [
        "path",
        {
            d: "M14 11v6",
            key: "outv1u"
        }
    ],
    [
        "path",
        {
            d: "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6",
            key: "miytrc"
        }
    ],
    [
        "path",
        {
            d: "M3 6h18",
            key: "d0wm0j"
        }
    ],
    [
        "path",
        {
            d: "M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",
            key: "e791ji"
        }
    ]
];
const Trash2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("trash-2", __iconNode);
;
}),
"[project]/next-app/node_modules/lucide-react/dist/esm/icons/trash-2.js [app-client] (ecmascript) <export default as Trash2>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Trash2",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/next-app/node_modules/lucide-react/dist/esm/icons/trash-2.js [app-client] (ecmascript)");
}),
]);

//# sourceMappingURL=next-app_0a_6na2._.js.map