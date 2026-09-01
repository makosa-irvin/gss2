(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/next-app/components/DynamicPricingTable.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DynamicPricingTable",
    ()=>DynamicPricingTable
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/next-app/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/next-app/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__ = __turbopack_context__.i("[project]/next-app/node_modules/lucide-react/dist/esm/icons/calendar.js [app-client] (ecmascript) <export default as Calendar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$info$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Info$3e$__ = __turbopack_context__.i("[project]/next-app/node_modules/lucide-react/dist/esm/icons/info.js [app-client] (ecmascript) <export default as Info>");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
const CURRENCY_KEY = 'gss_currency_v1';
const RESIDENT_KEY = 'gss_resident_mode_v1';
function formatPrice(amount, currency) {
    return currency === 'KES' ? `KSH ${Math.round(amount * 130).toLocaleString()}` : `$${amount.toLocaleString()}`;
}
function DynamicPricingTable({ tour }) {
    _s();
    const [selected, setSelected] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(tour.seasonalPricing?.[0]?.id || '');
    const [currency, setCurrency] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('USD');
    const [resident, setResident] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DynamicPricingTable.useEffect": ()=>{
            const load = {
                "DynamicPricingTable.useEffect.load": ()=>{
                    setCurrency(localStorage.getItem(CURRENCY_KEY) === 'KES' ? 'KES' : 'USD');
                    setResident(localStorage.getItem(RESIDENT_KEY) === 'true');
                }
            }["DynamicPricingTable.useEffect.load"];
            load();
            window.addEventListener('gss-pricing-preference-changed', load);
            return ({
                "DynamicPricingTable.useEffect": ()=>window.removeEventListener('gss-pricing-preference-changed', load)
            })["DynamicPricingTable.useEffect"];
        }
    }["DynamicPricingTable.useEffect"], []);
    const rates = tour.seasonalPricing || [];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        id: "dynamic-pricing-section",
        className: "rounded-2xl bg-white border border-[#e8e4da] p-6 sm:p-8 shadow-xs text-ink",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[#eeebe2]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#9e7120]",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"], {
                                        className: "w-4 h-4 text-[#9e7120]"
                                    }, void 0, false, {
                                        fileName: "[project]/next-app/components/DynamicPricingTable.tsx",
                                        lineNumber: 9,
                                        columnNumber: 919
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "Guaranteed Transparent Rates"
                                    }, void 0, false, {
                                        fileName: "[project]/next-app/components/DynamicPricingTable.tsx",
                                        lineNumber: 9,
                                        columnNumber: 965
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/next-app/components/DynamicPricingTable.tsx",
                                lineNumber: 9,
                                columnNumber: 820
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "font-serif-luxury text-2xl font-bold text-[#161f19] mt-1",
                                children: "Seasonal Rates Per Person"
                            }, void 0, false, {
                                fileName: "[project]/next-app/components/DynamicPricingTable.tsx",
                                lineNumber: 9,
                                columnNumber: 1012
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/next-app/components/DynamicPricingTable.tsx",
                        lineNumber: 9,
                        columnNumber: 815
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2 bg-[#f6f4ee] p-1.5 rounded-xl border border-[#e2ded2] text-xs",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "px-3 py-1 text-[#5d6d62]",
                                children: "Currency:"
                            }, void 0, false, {
                                fileName: "[project]/next-app/components/DynamicPricingTable.tsx",
                                lineNumber: 9,
                                columnNumber: 1224
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "px-3 py-1 font-bold rounded-lg bg-[#b3822a] text-white",
                                children: currency
                            }, void 0, false, {
                                fileName: "[project]/next-app/components/DynamicPricingTable.tsx",
                                lineNumber: 9,
                                columnNumber: 1283
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/next-app/components/DynamicPricingTable.tsx",
                        lineNumber: 9,
                        columnNumber: 1121
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/next-app/components/DynamicPricingTable.tsx",
                lineNumber: 9,
                columnNumber: 703
            }, this),
            rates.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-6 overflow-x-auto",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                    className: "w-full text-left border-collapse",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                className: "border-b border-[#eeebe2] text-xs font-bold text-[#5a6b5f] uppercase tracking-wider",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        className: "py-3 px-4",
                                        children: "Season Period"
                                    }, void 0, false, {
                                        fileName: "[project]/next-app/components/DynamicPricingTable.tsx",
                                        lineNumber: 9,
                                        columnNumber: 1598
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        className: "py-3 px-4 text-right",
                                        children: "Solo Traveler"
                                    }, void 0, false, {
                                        fileName: "[project]/next-app/components/DynamicPricingTable.tsx",
                                        lineNumber: 9,
                                        columnNumber: 1642
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        className: "py-3 px-4 text-right",
                                        children: "2 People Sharing (Per Person)"
                                    }, void 0, false, {
                                        fileName: "[project]/next-app/components/DynamicPricingTable.tsx",
                                        lineNumber: 9,
                                        columnNumber: 1697
                                    }, this),
                                    resident && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        className: "py-3 px-4 text-right text-[#1b4332]",
                                        children: "Resident Rate"
                                    }, void 0, false, {
                                        fileName: "[project]/next-app/components/DynamicPricingTable.tsx",
                                        lineNumber: 9,
                                        columnNumber: 1779
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/next-app/components/DynamicPricingTable.tsx",
                                lineNumber: 9,
                                columnNumber: 1498
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/next-app/components/DynamicPricingTable.tsx",
                            lineNumber: 9,
                            columnNumber: 1491
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                            className: "divide-y divide-[#eeebe2] text-sm",
                            children: rates.map((season)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                    onClick: ()=>setSelected(season.id),
                                    className: `transition-colors cursor-pointer hover:bg-[#faf8f2] ${selected === season.id ? 'bg-[#fdfaf2] font-semibold' : ''}`,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "py-4 px-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "font-bold text-[#161f19]",
                                                    children: season.name
                                                }, void 0, false, {
                                                    fileName: "[project]/next-app/components/DynamicPricingTable.tsx",
                                                    lineNumber: 9,
                                                    columnNumber: 2140
                                                }, this),
                                                season.notes && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-xs text-[#6e7d72] mt-0.5",
                                                    children: season.notes
                                                }, void 0, false, {
                                                    fileName: "[project]/next-app/components/DynamicPricingTable.tsx",
                                                    lineNumber: 9,
                                                    columnNumber: 2216
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/next-app/components/DynamicPricingTable.tsx",
                                            lineNumber: 9,
                                            columnNumber: 2114
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "py-4 px-4 text-right font-serif-luxury text-base text-[#39473e]",
                                            children: formatPrice(season.soloPrice, currency)
                                        }, void 0, false, {
                                            fileName: "[project]/next-app/components/DynamicPricingTable.tsx",
                                            lineNumber: 9,
                                            columnNumber: 2289
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "py-4 px-4 text-right font-serif-luxury text-base font-bold text-[#9e7120]",
                                            children: formatPrice(season.sharingPrice, currency)
                                        }, void 0, false, {
                                            fileName: "[project]/next-app/components/DynamicPricingTable.tsx",
                                            lineNumber: 9,
                                            columnNumber: 2414
                                        }, this),
                                        resident && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "py-4 px-4 text-right font-serif-luxury text-base font-bold text-[#1b4332]",
                                            children: season.residentPriceKES ? `KSH ${season.residentPriceKES.toLocaleString()}` : 'Inquire'
                                        }, void 0, false, {
                                            fileName: "[project]/next-app/components/DynamicPricingTable.tsx",
                                            lineNumber: 9,
                                            columnNumber: 2563
                                        }, this)
                                    ]
                                }, season.id, true, {
                                    fileName: "[project]/next-app/components/DynamicPricingTable.tsx",
                                    lineNumber: 9,
                                    columnNumber: 1935
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/next-app/components/DynamicPricingTable.tsx",
                            lineNumber: 9,
                            columnNumber: 1863
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/next-app/components/DynamicPricingTable.tsx",
                    lineNumber: 9,
                    columnNumber: 1439
                }, this)
            }, void 0, false, {
                fileName: "[project]/next-app/components/DynamicPricingTable.tsx",
                lineNumber: 9,
                columnNumber: 1401
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-4 rounded-xl bg-[#faf8f2] border border-[#eeebe2]",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-xs text-[#6e7d72] uppercase tracking-wider block",
                                children: "Solo Traveler Rate"
                            }, void 0, false, {
                                fileName: "[project]/next-app/components/DynamicPricingTable.tsx",
                                lineNumber: 9,
                                columnNumber: 2903
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-2xl font-bold font-serif-luxury text-[#161f19] mt-1 block",
                                children: formatPrice(tour.soloPrice || tour.priceFrom * 1.4, currency)
                            }, void 0, false, {
                                fileName: "[project]/next-app/components/DynamicPricingTable.tsx",
                                lineNumber: 9,
                                columnNumber: 3000
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/next-app/components/DynamicPricingTable.tsx",
                        lineNumber: 9,
                        columnNumber: 2834
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-4 rounded-xl bg-[#faf8f2] border border-[#eeebe2]",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-xs text-[#6e7d72] uppercase tracking-wider block",
                                children: "2 People Sharing (Per Person)"
                            }, void 0, false, {
                                fileName: "[project]/next-app/components/DynamicPricingTable.tsx",
                                lineNumber: 9,
                                columnNumber: 3221
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-2xl font-bold font-serif-luxury text-[#9e7120] mt-1 block",
                                children: formatPrice(tour.sharingPrice || tour.priceFrom, currency)
                            }, void 0, false, {
                                fileName: "[project]/next-app/components/DynamicPricingTable.tsx",
                                lineNumber: 9,
                                columnNumber: 3329
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/next-app/components/DynamicPricingTable.tsx",
                        lineNumber: 9,
                        columnNumber: 3152
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/next-app/components/DynamicPricingTable.tsx",
                lineNumber: 9,
                columnNumber: 2774
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-6 pt-4 border-t border-[#eeebe2] flex items-start gap-2 text-xs text-[#6e7d72]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$info$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Info$3e$__["Info"], {
                        className: "w-4 h-4 text-[#9e7120] shrink-0 mt-0.5"
                    }, void 0, false, {
                        fileName: "[project]/next-app/components/DynamicPricingTable.tsx",
                        lineNumber: 9,
                        columnNumber: 3586
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: [
                            "Prices are per person in ",
                            currency,
                            " and exclude international flights unless otherwise stated. Custom group discounts (4+ guests) and family interconnecting room rates are calculated automatically upon enquiry."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/next-app/components/DynamicPricingTable.tsx",
                        lineNumber: 9,
                        columnNumber: 3644
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/next-app/components/DynamicPricingTable.tsx",
                lineNumber: 9,
                columnNumber: 3487
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/next-app/components/DynamicPricingTable.tsx",
        lineNumber: 9,
        columnNumber: 582
    }, this);
}
_s(DynamicPricingTable, "gPQ3h91jzKQ939eYkz74F8avmKM=");
_c = DynamicPricingTable;
var _c;
__turbopack_context__.k.register(_c, "DynamicPricingTable");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/next-app/components/TourGallery.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TourGallery",
    ()=>TourGallery
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/next-app/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/next-app/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/next-app/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
function TourGallery({ images, title }) {
    _s();
    const list = images?.length ? images : [
        '/images/catalog/mara-savannah.jpg'
    ];
    const [index, setIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-3",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "aspect-[4/3] sm:aspect-[16/10] w-full rounded-2xl overflow-hidden relative bg-surface-soft border border-white/10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        src: list[index],
                        alt: `${title} gallery image ${index + 1}`,
                        fill: true,
                        className: "object-cover",
                        sizes: "(max-width:1024px) 100vw,60vw"
                    }, void 0, false, {
                        fileName: "[project]/next-app/components/TourGallery.tsx",
                        lineNumber: 6,
                        columnNumber: 346
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "absolute bottom-3 right-3 rounded-full bg-black/70 px-3 py-1.5 text-xs font-semibold text-white",
                        children: [
                            index + 1,
                            " / ",
                            list.length
                        ]
                    }, void 0, true, {
                        fileName: "[project]/next-app/components/TourGallery.tsx",
                        lineNumber: 6,
                        columnNumber: 482
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/next-app/components/TourGallery.tsx",
                lineNumber: 6,
                columnNumber: 215
            }, this),
            list.length > 1 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex gap-2 overflow-x-auto pb-1",
                children: list.map((img, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: ()=>setIndex(i),
                        "aria-pressed": index === i,
                        "aria-label": `View photo ${i + 1}`,
                        className: `relative shrink-0 w-20 h-16 sm:w-28 sm:h-20 rounded-xl overflow-hidden border-2 ${index === i ? 'border-brand-soft' : 'border-transparent opacity-75'}`,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            src: img,
                            alt: "",
                            fill: true,
                            className: "object-cover",
                            sizes: "112px"
                        }, void 0, false, {
                            fileName: "[project]/next-app/components/TourGallery.tsx",
                            lineNumber: 6,
                            columnNumber: 1002
                        }, this)
                    }, `${img}-${i}`, false, {
                        fileName: "[project]/next-app/components/TourGallery.tsx",
                        lineNumber: 6,
                        columnNumber: 717
                    }, this))
            }, void 0, false, {
                fileName: "[project]/next-app/components/TourGallery.tsx",
                lineNumber: 6,
                columnNumber: 649
            }, this) : null
        ]
    }, void 0, true, {
        fileName: "[project]/next-app/components/TourGallery.tsx",
        lineNumber: 6,
        columnNumber: 188
    }, this);
}
_s(TourGallery, "q8IspGHKqGyNAgdTXwWow5CCMaM=");
_c = TourGallery;
var _c;
__turbopack_context__.k.register(_c, "TourGallery");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/next-app/components/TourRouteMap.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TourRouteMap",
    ()=>TourRouteMap
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/next-app/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/next-app/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
const routeImageFiles = {
    '14-day-ultimate-kenya-tanzania-safari': '14-day-ultimate-kenya-tanzania.webp',
    '3-day-amboseli-safari-kilimanjaro-views': '3-day-amboseli-safari.webp',
    '3-day-masai-mara-luxury-big-5-migration-safari': '3-day-maasai-mara-safari.webp',
    '1-day-nairobi-wildlife-cultural-discovery': '1-day-nairobi-safari.webp',
    '1-day-lake-nakuru-lake-naivasha-adventure': '1-day-nakuru-naivasha.webp',
    '3-day-samburu-untamed-beauty-rare-wildlife': '3-day-samburu-safari.webp',
    '8-day-safari-zanzibar-spice-beach-escape': '8-day-zanzibar-combo.webp',
    '2-day-masai-mara-lion-encounters': '3-day-maasai-mara-safari.webp',
    '3-day-midrange-wildlife-safari-samburu': '3-day-samburu-safari.webp',
    '3-day-amboseli-luxury-elephant-kilimanjaro': '3-day-amboseli-safari.webp',
    '3-day-midrange-amboseli-big-elephant-safari': '3-day-amboseli-safari.webp'
};
const correctedTitles = {
    '3-day-amboseli-safari-kilimanjaro-views': '3 DAY AMBOSELI SAFARI',
    '1-day-nairobi-wildlife-cultural-discovery': '1 DAY NAIROBI SAFARI',
    '3-day-masai-mara-luxury-big-5-migration-safari': '3 DAY MAASAI MARA SAFARI',
    '3-day-samburu-untamed-beauty-rare-wildlife': '3 DAY SAMBURU ADVENTURE',
    '2-day-masai-mara-lion-encounters': '2 DAY MAASAI MARA SAFARI',
    '3-day-midrange-wildlife-safari-samburu': '3 DAY SAMBURU SAFARI',
    '3-day-amboseli-luxury-elephant-kilimanjaro': '3 DAY AMBOSELI SAFARI',
    '3-day-midrange-amboseli-big-elephant-safari': '3 DAY AMBOSELI SAFARI'
};
function TourRouteMap({ tour }) {
    _s();
    const [failed, setFailed] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const fileName = routeImageFiles[tour.slug];
    const routeImage = fileName ? `/images/routes/${fileName}` : undefined;
    const correctedTitle = correctedTitles[tour.slug];
    if (routeImage && !failed) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("figure", {
        className: "overflow-hidden rounded-2xl border border-[#d6d1c5] bg-[#fffdf8] shadow-sm",
        "aria-labelledby": `route-map-caption-${tour.id}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative bg-[#eee9dc]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        src: routeImage,
                        alt: `Route map for ${tour.title}`,
                        loading: "lazy",
                        decoding: "async",
                        onError: ()=>setFailed(true),
                        className: "block h-auto w-full object-contain"
                    }, void 0, false, {
                        fileName: "[project]/next-app/components/TourRouteMap.tsx",
                        lineNumber: 22,
                        columnNumber: 458
                    }, this),
                    correctedTitle && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "pointer-events-none absolute left-0 top-0 max-w-[58%] rounded-br-[22px] bg-[#123b2a] px-3 py-2 sm:px-5 sm:py-3 text-white shadow-sm",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                className: "block font-serif-luxury text-[clamp(12px,2.2vw,24px)] leading-tight tracking-wide",
                                children: correctedTitle
                            }, void 0, false, {
                                fileName: "[project]/next-app/components/TourRouteMap.tsx",
                                lineNumber: 22,
                                columnNumber: 792
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "mt-0.5 block text-[clamp(7px,1.15vw,12px)] font-bold tracking-[0.08em]",
                                children: "ROUTE MAP"
                            }, void 0, false, {
                                fileName: "[project]/next-app/components/TourRouteMap.tsx",
                                lineNumber: 22,
                                columnNumber: 919
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/next-app/components/TourRouteMap.tsx",
                        lineNumber: 22,
                        columnNumber: 643
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/next-app/components/TourRouteMap.tsx",
                lineNumber: 22,
                columnNumber: 419
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("figcaption", {
                id: `route-map-caption-${tour.id}`,
                className: "border-t border-[#d6d1c5] bg-[#fffdf8] px-4 py-3 text-xs text-[#536158]",
                children: [
                    "Static itinerary route overview for ",
                    tour.title,
                    "."
                ]
            }, void 0, true, {
                fileName: "[project]/next-app/components/TourRouteMap.tsx",
                lineNumber: 22,
                columnNumber: 1037
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/next-app/components/TourRouteMap.tsx",
        lineNumber: 22,
        columnNumber: 275
    }, this);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "rounded-2xl border border-dashed border-[#b9b1a2] bg-[#f7f3ea] px-5 py-6 text-sm text-[#536158]",
        role: "status",
        children: fileName ? 'The route map image could not be loaded. Please refresh the page or try again shortly.' : 'A dedicated route map has not been added for this safari yet.'
    }, void 0, false, {
        fileName: "[project]/next-app/components/TourRouteMap.tsx",
        lineNumber: 22,
        columnNumber: 1248
    }, this);
}
_s(TourRouteMap, "UVrV75yVidObyTgMyenoosZ++nA=");
_c = TourRouteMap;
var _c;
__turbopack_context__.k.register(_c, "TourRouteMap");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/next-app/node_modules/lucide-react/dist/esm/icons/calendar.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>Calendar
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
            d: "M8 2v4",
            key: "1cmpym"
        }
    ],
    [
        "path",
        {
            d: "M16 2v4",
            key: "4m81vk"
        }
    ],
    [
        "rect",
        {
            width: "18",
            height: "18",
            x: "3",
            y: "4",
            rx: "2",
            key: "1hopcy"
        }
    ],
    [
        "path",
        {
            d: "M3 10h18",
            key: "8toen8"
        }
    ]
];
const Calendar = (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("calendar", __iconNode);
;
}),
"[project]/next-app/node_modules/lucide-react/dist/esm/icons/calendar.js [app-client] (ecmascript) <export default as Calendar>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Calendar",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/next-app/node_modules/lucide-react/dist/esm/icons/calendar.js [app-client] (ecmascript)");
}),
"[project]/next-app/node_modules/lucide-react/dist/esm/icons/info.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>Info
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
        "circle",
        {
            cx: "12",
            cy: "12",
            r: "10",
            key: "1mglay"
        }
    ],
    [
        "path",
        {
            d: "M12 16v-4",
            key: "1dtifu"
        }
    ],
    [
        "path",
        {
            d: "M12 8h.01",
            key: "e9boi3"
        }
    ]
];
const Info = (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("info", __iconNode);
;
}),
"[project]/next-app/node_modules/lucide-react/dist/esm/icons/info.js [app-client] (ecmascript) <export default as Info>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Info",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$info$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$info$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/next-app/node_modules/lucide-react/dist/esm/icons/info.js [app-client] (ecmascript)");
}),
]);

//# sourceMappingURL=next-app_1vsw6p4._.js.map