(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/next-app/components/ClientProviders.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ClientProviders",
    ()=>ClientProviders,
    "useEnquiry",
    ()=>useEnquiry
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/next-app/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/next-app/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/next-app/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__ = __turbopack_context__.i("[project]/next-app/node_modules/lucide-react/dist/esm/icons/circle-check.js [app-client] (ecmascript) <export default as CheckCircle2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__ = __turbopack_context__.i("[project]/next-app/node_modules/lucide-react/dist/esm/icons/map-pin.js [app-client] (ecmascript) <export default as MapPin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageCircle$3e$__ = __turbopack_context__.i("[project]/next-app/node_modules/lucide-react/dist/esm/icons/message-circle.js [app-client] (ecmascript) <export default as MessageCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Send$3e$__ = __turbopack_context__.i("[project]/next-app/node_modules/lucide-react/dist/esm/icons/send.js [app-client] (ecmascript) <export default as Send>");
var __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__ = __turbopack_context__.i("[project]/next-app/node_modules/lucide-react/dist/esm/icons/shield-check.js [app-client] (ecmascript) <export default as ShieldCheck>");
var __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/next-app/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature(), _s3 = __turbopack_context__.k.signature();
'use client';
;
;
;
const EnquiryContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(null);
function useEnquiry() {
    _s();
    const value = (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(EnquiryContext);
    if (!value) throw new Error('useEnquiry must be used inside ClientProviders');
    return value;
}
_s(useEnquiry, "ksutO2/Ix3UeCrGnhyM+QEP505Y=");
function AnalyticsTracker({ consent }) {
    _s1();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AnalyticsTracker.useEffect": ()=>{
            if (!consent || !pathname) return;
            const key = 'gss-next-session-v1';
            let sessionId = sessionStorage.getItem(key);
            if (!sessionId) {
                sessionId = crypto.randomUUID();
                sessionStorage.setItem(key, sessionId);
            }
            const params = new URLSearchParams(window.location.search);
            const source = params.get('utm_source') || (document.referrer.includes('google.') ? 'google' : document.referrer ? 'referral' : 'direct');
            const medium = params.get('utm_medium') || (source === 'google' ? 'organic' : source === 'direct' ? '(none)' : 'referral');
            const query = params.toString();
            const campaign = params.get('utm_campaign') || undefined;
            fetch('/api/backend/api/analytics/events', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    sessionId,
                    eventName: 'page_view',
                    pagePath: `${pathname}${query ? `?${query}` : ''}`,
                    source,
                    medium,
                    ...campaign ? {
                        campaign
                    } : {},
                    metadata: {}
                })
            }).catch({
                "AnalyticsTracker.useEffect": ()=>undefined
            }["AnalyticsTracker.useEffect"]);
        }
    }["AnalyticsTracker.useEffect"], [
        consent,
        pathname
    ]);
    return null;
}
_s1(AnalyticsTracker, "V/ldUoOTYUs0Cb2F6bbxKSn7KxI=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"]
    ];
});
_c = AnalyticsTracker;
const inputClass = 'w-full min-h-11 px-3.5 py-2.5 rounded-xl bg-surface-muted border border-border-strong text-sm text-ink-strong focus:border-brand-strong focus:ring-2 focus:ring-brand-strong/20 focus:outline-none';
const labelClass = 'text-sm font-semibold text-ink block mb-1.5';
function EnquiryModal({ context, onClose }) {
    _s2();
    const [status, setStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('idle');
    const dialogRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const closeButtonRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const previouslyFocusedRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "EnquiryModal.useEffect": ()=>{
            if (!context) return;
            setStatus('idle');
            previouslyFocusedRef.current = document.activeElement instanceof HTMLElement ? document.activeElement : null;
            const previousOverflow = document.body.style.overflow;
            document.body.style.overflow = 'hidden';
            const timer = window.setTimeout({
                "EnquiryModal.useEffect.timer": ()=>closeButtonRef.current?.focus()
            }["EnquiryModal.useEffect.timer"], 0);
            const onKeyDown = {
                "EnquiryModal.useEffect.onKeyDown": (event)=>{
                    if (event.key === 'Escape') {
                        event.preventDefault();
                        onClose();
                        return;
                    }
                    if (event.key !== 'Tab' || !dialogRef.current) return;
                    const focusable = Array.from(dialogRef.current.querySelectorAll('a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'));
                    if (!focusable.length) return;
                    const first = focusable[0];
                    const last = focusable[focusable.length - 1];
                    if (event.shiftKey && document.activeElement === first) {
                        event.preventDefault();
                        last.focus();
                    } else if (!event.shiftKey && document.activeElement === last) {
                        event.preventDefault();
                        first.focus();
                    }
                }
            }["EnquiryModal.useEffect.onKeyDown"];
            document.addEventListener('keydown', onKeyDown);
            return ({
                "EnquiryModal.useEffect": ()=>{
                    window.clearTimeout(timer);
                    document.body.style.overflow = previousOverflow;
                    document.removeEventListener('keydown', onKeyDown);
                    previouslyFocusedRef.current?.focus();
                }
            })["EnquiryModal.useEffect"];
        }
    }["EnquiryModal.useEffect"], [
        context,
        onClose
    ]);
    if (!context) return null;
    const enquiryContext = context;
    const enquiryItems = [
        enquiryContext.tourTitle,
        enquiryContext.hotelTitle,
        enquiryContext.destination
    ].filter(Boolean);
    const title = enquiryContext.tourTitle || enquiryContext.hotelTitle || enquiryContext.type || (enquiryContext.destination ? `Plan a ${enquiryContext.destination} safari` : 'Tell us about your ideal trip');
    async function submit(formData) {
        setStatus('sending');
        const payload = {
            fullName: formData.get('fullName'),
            email: formData.get('email'),
            phone: formData.get('phone') || '',
            country: formData.get('country') || '',
            travelDates: formData.get('travelDates') || 'Flexible',
            adults: Number(formData.get('adults') || 2),
            children: Number(formData.get('children') || 0),
            tourTitle: enquiryContext.tourTitle || undefined,
            hotelTitle: enquiryContext.hotelTitle || undefined,
            preferredDestination: enquiryContext.destination || '',
            safariType: enquiryContext.type || enquiryContext.tourTitle || enquiryContext.hotelTitle || 'Tailor-made safari',
            budget: formData.get('budget') || 'Not sure yet',
            accommodationPreference: formData.get('accommodationPreference') || 'Open to recommendations',
            specialRequests: formData.get('specialRequests') || '',
            hearAboutUs: 'Website enquiry'
        };
        try {
            const response = await fetch('/api/backend/api/enquiries', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(payload)
            });
            if (!response.ok) throw new Error('Request failed');
            setStatus('sent');
        } catch  {
            setStatus('error');
        }
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 z-[250] flex items-start justify-center bg-black/70 backdrop-blur-sm overflow-hidden p-2 sm:p-4",
        onMouseDown: (event)=>event.target === event.currentTarget && onClose(),
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            ref: dialogRef,
            role: "dialog",
            "aria-modal": "true",
            "aria-labelledby": "enquiry-title",
            "aria-describedby": "enquiry-description",
            className: "relative w-full max-w-2xl max-h-[calc(100dvh-1rem)] sm:max-h-[calc(100dvh-2rem)] overflow-y-auto overscroll-contain rounded-2xl sm:rounded-3xl bg-white border border-border-strong shadow-2xl p-5 sm:p-8 text-left",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    ref: closeButtonRef,
                    type: "button",
                    onClick: onClose,
                    "aria-label": "Close enquiry form",
                    className: "sticky top-0 z-20 float-right -mr-1 -mt-1 min-w-11 min-h-11 flex items-center justify-center rounded-full bg-surface-soft hover:bg-border text-ink border border-border-strong shadow-sm focus:outline-none focus:ring-2 focus:ring-brand-strong",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                        className: "w-5 h-5"
                    }, void 0, false, {
                        fileName: "[project]/next-app/components/ClientProviders.tsx",
                        lineNumber: 135,
                        columnNumber: 355
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/next-app/components/ClientProviders.tsx",
                    lineNumber: 135,
                    columnNumber: 9
                }, this),
                status === 'sent' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "clear-both text-center py-10 space-y-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-16 h-16 rounded-full bg-action text-white flex items-center justify-center mx-auto ring-8 ring-action/15",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                                className: "w-8 h-8"
                            }, void 0, false, {
                                fileName: "[project]/next-app/components/ClientProviders.tsx",
                                lineNumber: 139,
                                columnNumber: 137
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/next-app/components/ClientProviders.tsx",
                            lineNumber: 139,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            id: "enquiry-title",
                            className: "font-serif-luxury text-3xl font-bold text-ink-strong",
                            children: "Thanks — we received your enquiry."
                        }, void 0, false, {
                            fileName: "[project]/next-app/components/ClientProviders.tsx",
                            lineNumber: 140,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            id: "enquiry-description",
                            className: "text-sm text-ink-muted max-w-lg mx-auto leading-relaxed",
                            children: "The safari team can now review your details. No payment has been taken and no booking has been confirmed."
                        }, void 0, false, {
                            fileName: "[project]/next-app/components/ClientProviders.tsx",
                            lineNumber: 141,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            onClick: onClose,
                            className: "min-h-11 px-5 rounded-xl bg-brand-strong hover:bg-brand-hover text-white text-sm font-bold",
                            children: "Close"
                        }, void 0, false, {
                            fileName: "[project]/next-app/components/ClientProviders.tsx",
                            lineNumber: 142,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/next-app/components/ClientProviders.tsx",
                    lineNumber: 138,
                    columnNumber: 11
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "clear-both",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mb-5 -mt-8 pr-12",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-xs font-extrabold uppercase tracking-wider text-brand-deep",
                                    children: "No-obligation enquiry"
                                }, void 0, false, {
                                    fileName: "[project]/next-app/components/ClientProviders.tsx",
                                    lineNumber: 147,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    id: "enquiry-title",
                                    className: "font-serif-luxury text-2xl sm:text-3xl font-bold text-ink-strong mt-1 leading-tight",
                                    children: title
                                }, void 0, false, {
                                    fileName: "[project]/next-app/components/ClientProviders.tsx",
                                    lineNumber: 148,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    id: "enquiry-description",
                                    className: "text-sm text-ink-muted mt-2 leading-relaxed",
                                    children: "We already carry across the safari, destination or shortlist you were viewing. Add only the details needed to shape the right proposal."
                                }, void 0, false, {
                                    fileName: "[project]/next-app/components/ClientProviders.tsx",
                                    lineNumber: 149,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/next-app/components/ClientProviders.tsx",
                            lineNumber: 146,
                            columnNumber: 13
                        }, this),
                        enquiryItems.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mb-5 rounded-2xl border border-action-border bg-action-soft p-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-action",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                                            className: "w-4 h-4"
                                        }, void 0, false, {
                                            fileName: "[project]/next-app/components/ClientProviders.tsx",
                                            lineNumber: 152,
                                            columnNumber: 223
                                        }, this),
                                        "Included in this enquiry"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/next-app/components/ClientProviders.tsx",
                                    lineNumber: 152,
                                    columnNumber: 122
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-2 flex flex-wrap gap-2",
                                    children: enquiryItems.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "rounded-full border border-action-border bg-white px-3 py-1.5 text-xs font-semibold text-ink",
                                            children: item
                                        }, item, false, {
                                            fileName: "[project]/next-app/components/ClientProviders.tsx",
                                            lineNumber: 152,
                                            columnNumber: 352
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/next-app/components/ClientProviders.tsx",
                                    lineNumber: 152,
                                    columnNumber: 283
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/next-app/components/ClientProviders.tsx",
                            lineNumber: 152,
                            columnNumber: 41
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                            action: submit,
                            className: "space-y-5",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-1 sm:grid-cols-2 gap-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    htmlFor: "enquiry-name",
                                                    className: labelClass,
                                                    children: "Full name *"
                                                }, void 0, false, {
                                                    fileName: "[project]/next-app/components/ClientProviders.tsx",
                                                    lineNumber: 156,
                                                    columnNumber: 22
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    id: "enquiry-name",
                                                    name: "fullName",
                                                    autoComplete: "name",
                                                    required: true,
                                                    className: inputClass
                                                }, void 0, false, {
                                                    fileName: "[project]/next-app/components/ClientProviders.tsx",
                                                    lineNumber: 156,
                                                    columnNumber: 94
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/next-app/components/ClientProviders.tsx",
                                            lineNumber: 156,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    htmlFor: "enquiry-email",
                                                    className: labelClass,
                                                    children: "Email *"
                                                }, void 0, false, {
                                                    fileName: "[project]/next-app/components/ClientProviders.tsx",
                                                    lineNumber: 157,
                                                    columnNumber: 22
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    id: "enquiry-email",
                                                    name: "email",
                                                    type: "email",
                                                    autoComplete: "email",
                                                    required: true,
                                                    className: inputClass
                                                }, void 0, false, {
                                                    fileName: "[project]/next-app/components/ClientProviders.tsx",
                                                    lineNumber: 157,
                                                    columnNumber: 91
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/next-app/components/ClientProviders.tsx",
                                            lineNumber: 157,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    htmlFor: "enquiry-phone",
                                                    className: labelClass,
                                                    children: "Phone / WhatsApp *"
                                                }, void 0, false, {
                                                    fileName: "[project]/next-app/components/ClientProviders.tsx",
                                                    lineNumber: 158,
                                                    columnNumber: 22
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    id: "enquiry-phone",
                                                    name: "phone",
                                                    type: "tel",
                                                    autoComplete: "tel",
                                                    required: true,
                                                    minLength: 3,
                                                    className: inputClass
                                                }, void 0, false, {
                                                    fileName: "[project]/next-app/components/ClientProviders.tsx",
                                                    lineNumber: 158,
                                                    columnNumber: 102
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/next-app/components/ClientProviders.tsx",
                                            lineNumber: 158,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    htmlFor: "enquiry-country",
                                                    className: labelClass,
                                                    children: "Country *"
                                                }, void 0, false, {
                                                    fileName: "[project]/next-app/components/ClientProviders.tsx",
                                                    lineNumber: 159,
                                                    columnNumber: 22
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    id: "enquiry-country",
                                                    name: "country",
                                                    autoComplete: "country-name",
                                                    required: true,
                                                    minLength: 2,
                                                    className: inputClass
                                                }, void 0, false, {
                                                    fileName: "[project]/next-app/components/ClientProviders.tsx",
                                                    lineNumber: 159,
                                                    columnNumber: 95
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/next-app/components/ClientProviders.tsx",
                                            lineNumber: 159,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/next-app/components/ClientProviders.tsx",
                                    lineNumber: 155,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-1 sm:grid-cols-3 gap-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    htmlFor: "enquiry-dates",
                                                    className: labelClass,
                                                    children: "Travel dates"
                                                }, void 0, false, {
                                                    fileName: "[project]/next-app/components/ClientProviders.tsx",
                                                    lineNumber: 162,
                                                    columnNumber: 22
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    id: "enquiry-dates",
                                                    name: "travelDates",
                                                    placeholder: "Flexible is fine",
                                                    className: inputClass
                                                }, void 0, false, {
                                                    fileName: "[project]/next-app/components/ClientProviders.tsx",
                                                    lineNumber: 162,
                                                    columnNumber: 96
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/next-app/components/ClientProviders.tsx",
                                            lineNumber: 162,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    htmlFor: "enquiry-adults",
                                                    className: labelClass,
                                                    children: "Adults"
                                                }, void 0, false, {
                                                    fileName: "[project]/next-app/components/ClientProviders.tsx",
                                                    lineNumber: 163,
                                                    columnNumber: 22
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    id: "enquiry-adults",
                                                    name: "adults",
                                                    type: "number",
                                                    min: "1",
                                                    max: "30",
                                                    defaultValue: "2",
                                                    className: inputClass
                                                }, void 0, false, {
                                                    fileName: "[project]/next-app/components/ClientProviders.tsx",
                                                    lineNumber: 163,
                                                    columnNumber: 91
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/next-app/components/ClientProviders.tsx",
                                            lineNumber: 163,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    htmlFor: "enquiry-children",
                                                    className: labelClass,
                                                    children: "Children"
                                                }, void 0, false, {
                                                    fileName: "[project]/next-app/components/ClientProviders.tsx",
                                                    lineNumber: 164,
                                                    columnNumber: 22
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    id: "enquiry-children",
                                                    name: "children",
                                                    type: "number",
                                                    min: "0",
                                                    max: "15",
                                                    defaultValue: "0",
                                                    className: inputClass
                                                }, void 0, false, {
                                                    fileName: "[project]/next-app/components/ClientProviders.tsx",
                                                    lineNumber: 164,
                                                    columnNumber: 95
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/next-app/components/ClientProviders.tsx",
                                            lineNumber: 164,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/next-app/components/ClientProviders.tsx",
                                    lineNumber: 161,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-1 sm:grid-cols-2 gap-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    htmlFor: "enquiry-budget",
                                                    className: labelClass,
                                                    children: "Budget per person"
                                                }, void 0, false, {
                                                    fileName: "[project]/next-app/components/ClientProviders.tsx",
                                                    lineNumber: 167,
                                                    columnNumber: 22
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                    id: "enquiry-budget",
                                                    name: "budget",
                                                    defaultValue: "Not sure yet",
                                                    className: inputClass,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            children: "Not sure yet"
                                                        }, void 0, false, {
                                                            fileName: "[project]/next-app/components/ClientProviders.tsx",
                                                            lineNumber: 167,
                                                            columnNumber: 195
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            children: "Under $1,500 / person"
                                                        }, void 0, false, {
                                                            fileName: "[project]/next-app/components/ClientProviders.tsx",
                                                            lineNumber: 167,
                                                            columnNumber: 224
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            children: "$1,500 - $3,000 / person"
                                                        }, void 0, false, {
                                                            fileName: "[project]/next-app/components/ClientProviders.tsx",
                                                            lineNumber: 167,
                                                            columnNumber: 262
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            children: "$3,000 - $6,000 / person"
                                                        }, void 0, false, {
                                                            fileName: "[project]/next-app/components/ClientProviders.tsx",
                                                            lineNumber: 167,
                                                            columnNumber: 303
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            children: "$6,000 - $10,000+ / person"
                                                        }, void 0, false, {
                                                            fileName: "[project]/next-app/components/ClientProviders.tsx",
                                                            lineNumber: 167,
                                                            columnNumber: 344
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            children: "Kenyan resident rates (KES)"
                                                        }, void 0, false, {
                                                            fileName: "[project]/next-app/components/ClientProviders.tsx",
                                                            lineNumber: 167,
                                                            columnNumber: 387
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/next-app/components/ClientProviders.tsx",
                                                    lineNumber: 167,
                                                    columnNumber: 102
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/next-app/components/ClientProviders.tsx",
                                            lineNumber: 167,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    htmlFor: "enquiry-stay",
                                                    className: labelClass,
                                                    children: "Stay preference"
                                                }, void 0, false, {
                                                    fileName: "[project]/next-app/components/ClientProviders.tsx",
                                                    lineNumber: 168,
                                                    columnNumber: 22
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                    id: "enquiry-stay",
                                                    name: "accommodationPreference",
                                                    defaultValue: "Open to recommendations",
                                                    className: inputClass,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            children: "Open to recommendations"
                                                        }, void 0, false, {
                                                            fileName: "[project]/next-app/components/ClientProviders.tsx",
                                                            lineNumber: 168,
                                                            columnNumber: 217
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            children: "Luxury lodges & camps"
                                                        }, void 0, false, {
                                                            fileName: "[project]/next-app/components/ClientProviders.tsx",
                                                            lineNumber: 168,
                                                            columnNumber: 257
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            children: "Comfortable midrange lodges"
                                                        }, void 0, false, {
                                                            fileName: "[project]/next-app/components/ClientProviders.tsx",
                                                            lineNumber: 168,
                                                            columnNumber: 295
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            children: "Ultra-luxury & private conservancies"
                                                        }, void 0, false, {
                                                            fileName: "[project]/next-app/components/ClientProviders.tsx",
                                                            lineNumber: 168,
                                                            columnNumber: 339
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            children: "Beach resort"
                                                        }, void 0, false, {
                                                            fileName: "[project]/next-app/components/ClientProviders.tsx",
                                                            lineNumber: 168,
                                                            columnNumber: 392
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/next-app/components/ClientProviders.tsx",
                                                    lineNumber: 168,
                                                    columnNumber: 98
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/next-app/components/ClientProviders.tsx",
                                            lineNumber: 168,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/next-app/components/ClientProviders.tsx",
                                    lineNumber: 166,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            htmlFor: "enquiry-notes",
                                            className: labelClass,
                                            children: [
                                                "Anything else we should know? ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-normal text-ink-subtle",
                                                    children: "(optional)"
                                                }, void 0, false, {
                                                    fileName: "[project]/next-app/components/ClientProviders.tsx",
                                                    lineNumber: 170,
                                                    columnNumber: 104
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/next-app/components/ClientProviders.tsx",
                                            lineNumber: 170,
                                            columnNumber: 20
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                            id: "enquiry-notes",
                                            name: "specialRequests",
                                            rows: 3,
                                            placeholder: "Celebration, accessibility, dietary needs, wildlife priorities, preferred pace...",
                                            className: `${inputClass} min-h-24`
                                        }, void 0, false, {
                                            fileName: "[project]/next-app/components/ClientProviders.tsx",
                                            lineNumber: 170,
                                            columnNumber: 175
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/next-app/components/ClientProviders.tsx",
                                    lineNumber: 170,
                                    columnNumber: 15
                                }, this),
                                status === 'error' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    role: "alert",
                                    className: "text-sm text-rose-800 bg-rose-50 border border-rose-200 rounded-xl px-3 py-2.5",
                                    children: "Something went wrong sending your enquiry. Please try again or reach us on WhatsApp."
                                }, void 0, false, {
                                    fileName: "[project]/next-app/components/ClientProviders.tsx",
                                    lineNumber: 171,
                                    columnNumber: 38
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "rounded-xl bg-surface-soft border border-border-strong p-3 flex gap-2 text-xs text-ink-muted",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__["ShieldCheck"], {
                                            className: "w-4 h-4 text-brand-deep shrink-0 mt-0.5"
                                        }, void 0, false, {
                                            fileName: "[project]/next-app/components/ClientProviders.tsx",
                                            lineNumber: 172,
                                            columnNumber: 125
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "Submitting is an enquiry only. No payment is taken and no booking is confirmed."
                                        }, void 0, false, {
                                            fileName: "[project]/next-app/components/ClientProviders.tsx",
                                            lineNumber: 172,
                                            columnNumber: 192
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/next-app/components/ClientProviders.tsx",
                                    lineNumber: 172,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col-reverse sm:flex-row sm:items-center sm:justify-between gap-3 pb-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: "https://wa.me/254729000410",
                                            target: "_blank",
                                            rel: "noopener noreferrer",
                                            className: "min-h-12 inline-flex items-center justify-center gap-2 px-5 rounded-xl bg-action-soft hover:bg-action-soft text-action text-sm font-bold border border-action-border",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageCircle$3e$__["MessageCircle"], {
                                                    className: "w-4 h-4"
                                                }, void 0, false, {
                                                    fileName: "[project]/next-app/components/ClientProviders.tsx",
                                                    lineNumber: 174,
                                                    columnNumber: 273
                                                }, this),
                                                "Ask on WhatsApp"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/next-app/components/ClientProviders.tsx",
                                            lineNumber: 174,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "submit",
                                            disabled: status === 'sending',
                                            className: "min-h-12 inline-flex items-center justify-center gap-2 px-7 rounded-xl bg-brand-strong hover:bg-brand-hover disabled:opacity-60 disabled:cursor-wait text-white font-extrabold text-sm shadow-md",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: status === 'sending' ? 'Sending…' : 'Request my safari quote'
                                                }, void 0, false, {
                                                    fileName: "[project]/next-app/components/ClientProviders.tsx",
                                                    lineNumber: 175,
                                                    columnNumber: 276
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Send$3e$__["Send"], {
                                                    className: "w-4 h-4"
                                                }, void 0, false, {
                                                    fileName: "[project]/next-app/components/ClientProviders.tsx",
                                                    lineNumber: 175,
                                                    columnNumber: 352
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/next-app/components/ClientProviders.tsx",
                                            lineNumber: 175,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/next-app/components/ClientProviders.tsx",
                                    lineNumber: 173,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/next-app/components/ClientProviders.tsx",
                            lineNumber: 154,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/next-app/components/ClientProviders.tsx",
                    lineNumber: 145,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/next-app/components/ClientProviders.tsx",
            lineNumber: 134,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/next-app/components/ClientProviders.tsx",
        lineNumber: 133,
        columnNumber: 5
    }, this);
}
_s2(EnquiryModal, "hItG1QE+NpeJkfDgwrERzEbMd/U=");
_c1 = EnquiryModal;
function ClientProviders({ children }) {
    _s3();
    const [context, setContext] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [consent, setConsent] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ClientProviders.useEffect": ()=>{
            const saved = localStorage.getItem('gss-analytics-consent-v1');
            setConsent(saved === 'granted' ? true : saved === 'declined' ? false : null);
        }
    }["ClientProviders.useEffect"], []);
    const value = (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "ClientProviders.useMemo[value]": ()=>({
                openEnquiry: ({
                    "ClientProviders.useMemo[value]": (next)=>setContext(next || {})
                })["ClientProviders.useMemo[value]"]
            })
    }["ClientProviders.useMemo[value]"], []);
    const decide = (allowed)=>{
        localStorage.setItem('gss-analytics-consent-v1', allowed ? 'granted' : 'declined');
        setConsent(allowed);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(EnquiryContext.Provider, {
        value: value,
        children: [
            children,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(EnquiryModal, {
                context: context,
                onClose: ()=>setContext(null)
            }, void 0, false, {
                fileName: "[project]/next-app/components/ClientProviders.tsx",
                lineNumber: 201,
                columnNumber: 7
            }, this),
            consent === null && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-x-3 bottom-3 z-[60] mx-auto max-w-3xl rounded-2xl border border-border-strong bg-white p-4 shadow-2xl sm:p-5 text-ink-strong",
                role: "region",
                "aria-label": "Analytics preferences",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "max-w-2xl",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    className: "text-sm",
                                    children: "Help us improve safari planning"
                                }, void 0, false, {
                                    fileName: "[project]/next-app/components/ClientProviders.tsx",
                                    lineNumber: 205,
                                    columnNumber: 40
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mt-1 text-xs leading-relaxed text-ink-muted",
                                    children: "With your permission, anonymous website analytics help us understand which guides, safari ideas and planning tools are useful. Marketing attribution is stored with an enquiry so we can measure which channels produce real leads."
                                }, void 0, false, {
                                    fileName: "[project]/next-app/components/ClientProviders.tsx",
                                    lineNumber: 205,
                                    columnNumber: 108
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/next-app/components/ClientProviders.tsx",
                            lineNumber: 205,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex shrink-0 gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: ()=>decide(false),
                                    className: "min-h-11 rounded-xl border border-border-strong px-4 text-sm font-bold text-ink-muted hover:text-ink-strong",
                                    children: "Decline"
                                }, void 0, false, {
                                    fileName: "[project]/next-app/components/ClientProviders.tsx",
                                    lineNumber: 206,
                                    columnNumber: 50
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: ()=>decide(true),
                                    className: "min-h-11 rounded-xl bg-brand-strong px-4 text-sm font-extrabold text-white hover:bg-brand-hover",
                                    children: "Allow analytics"
                                }, void 0, false, {
                                    fileName: "[project]/next-app/components/ClientProviders.tsx",
                                    lineNumber: 206,
                                    columnNumber: 238
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/next-app/components/ClientProviders.tsx",
                            lineNumber: 206,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/next-app/components/ClientProviders.tsx",
                    lineNumber: 204,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/next-app/components/ClientProviders.tsx",
                lineNumber: 203,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AnalyticsTracker, {
                consent: consent === true
            }, void 0, false, {
                fileName: "[project]/next-app/components/ClientProviders.tsx",
                lineNumber: 210,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/next-app/components/ClientProviders.tsx",
        lineNumber: 199,
        columnNumber: 5
    }, this);
}
_s3(ClientProviders, "/dwJboOodmErB2vgLy2DYpRStH0=");
_c2 = ClientProviders;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "AnalyticsTracker");
__turbopack_context__.k.register(_c1, "EnquiryModal");
__turbopack_context__.k.register(_c2, "ClientProviders");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/next-app/components/EnquiryButton.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "EnquiryButton",
    ()=>EnquiryButton
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/next-app/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__ = __turbopack_context__.i("[project]/next-app/node_modules/lucide-react/dist/esm/icons/sparkles.js [app-client] (ecmascript) <export default as Sparkles>");
var __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$components$2f$ClientProviders$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/next-app/components/ClientProviders.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
function EnquiryButton({ label = 'Plan my safari', className = 'button primary', type, destination, tourTitle, hotelTitle, showSparkles = false }) {
    _s();
    const { openEnquiry } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$components$2f$ClientProviders$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEnquiry"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        type: "button",
        className: className,
        onClick: ()=>openEnquiry({
                ...type ? {
                    type
                } : {},
                ...destination ? {
                    destination
                } : {},
                ...tourTitle ? {
                    tourTitle
                } : {},
                ...hotelTitle ? {
                    hotelTitle
                } : {}
            }),
        children: [
            showSparkles && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
                className: "w-3.5 h-3.5",
                "aria-hidden": "true"
            }, void 0, false, {
                fileName: "[project]/next-app/components/EnquiryButton.tsx",
                lineNumber: 35,
                columnNumber: 24
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                children: label
            }, void 0, false, {
                fileName: "[project]/next-app/components/EnquiryButton.tsx",
                lineNumber: 36,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/next-app/components/EnquiryButton.tsx",
        lineNumber: 25,
        columnNumber: 5
    }, this);
}
_s(EnquiryButton, "bl2D/Ovr66Mcsl35oUiB0ds1TP0=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$components$2f$ClientProviders$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEnquiry"]
    ];
});
_c = EnquiryButton;
var _c;
__turbopack_context__.k.register(_c, "EnquiryButton");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/next-app/components/FloatingWhatsApp.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FloatingWhatsApp",
    ()=>FloatingWhatsApp
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/next-app/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageCircle$3e$__ = __turbopack_context__.i("[project]/next-app/node_modules/lucide-react/dist/esm/icons/message-circle.js [app-client] (ecmascript) <export default as MessageCircle>");
'use client';
;
;
function FloatingWhatsApp() {
    const href = `https://wa.me/254729000410?text=${encodeURIComponent("Hello Good Secrets Safaris, I'd like to enquire about a safari.")}`;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        id: "floating-whatsapp-container",
        className: "fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
            id: "floating-whatsapp-btn",
            href: href,
            target: "_blank",
            rel: "noopener noreferrer",
            "aria-label": "Ask Good Secrets Safaris on WhatsApp",
            className: "group min-h-12 min-w-12 sm:min-h-14 inline-flex items-center justify-center gap-2.5 px-3.5 sm:px-5 rounded-full bg-[#128c5a] hover:bg-[#0f744b] text-white font-extrabold text-sm shadow-xl transition-transform hover:-translate-y-0.5 ring-4 ring-white/20",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageCircle$3e$__["MessageCircle"], {
                    className: "w-5 h-5",
                    "aria-hidden": "true"
                }, void 0, false, {
                    fileName: "[project]/next-app/components/FloatingWhatsApp.tsx",
                    lineNumber: 7,
                    columnNumber: 510
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "hidden sm:inline",
                    children: "Ask on WhatsApp"
                }, void 0, false, {
                    fileName: "[project]/next-app/components/FloatingWhatsApp.tsx",
                    lineNumber: 7,
                    columnNumber: 565
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/next-app/components/FloatingWhatsApp.tsx",
            lineNumber: 7,
            columnNumber: 111
        }, this)
    }, void 0, false, {
        fileName: "[project]/next-app/components/FloatingWhatsApp.tsx",
        lineNumber: 7,
        columnNumber: 10
    }, this);
}
_c = FloatingWhatsApp;
var _c;
__turbopack_context__.k.register(_c, "FloatingWhatsApp");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/next-app/components/ShortlistButton.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/next-app/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__ = __turbopack_context__.i("[project]/next-app/node_modules/lucide-react/dist/esm/icons/heart.js [app-client] (ecmascript) <export default as Heart>");
var __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/next-app/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
const KEY = 'gss-shortlist-v1';
function readShortlist() {
    try {
        const raw = JSON.parse(localStorage.getItem(KEY) || '[]');
        return raw.map((item)=>({
                ...item,
                kind: item.kind || 'safari'
            })).filter((item)=>item.id && item.slug && item.title);
    } catch  {
        return [];
    }
}
function writeShortlist(items) {
    localStorage.setItem(KEY, JSON.stringify(items));
    window.dispatchEvent(new Event('gss-shortlist-changed'));
}
function SaveButton({ item, compact = false, variant = 'default' }) {
    _s();
    const [saved, setSaved] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SaveButton.useEffect": ()=>{
            setSaved(readShortlist().some({
                "SaveButton.useEffect": (x)=>x.kind === item.kind && x.id === item.id
            }["SaveButton.useEffect"]));
        }
    }["SaveButton.useEffect"], [
        item.id,
        item.kind
    ]);
    function toggle(event) {
        event.preventDefault();
        event.stopPropagation();
        const current = readShortlist();
        const exists = current.some((x)=>x.kind === item.kind && x.id === item.id);
        writeShortlist(exists ? current.filter((x)=>!(x.kind === item.kind && x.id === item.id)) : [
            ...current,
            item
        ]);
        setSaved(!exists);
    }
    if (compact) {
        const unsaved = item.kind === 'hotel' ? 'bg-black/55 text-white border-white/35 hover:bg-black/70' : 'bg-black/45 text-white border-white/35 hover:bg-black/65';
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            type: "button",
            onClick: toggle,
            "aria-pressed": saved,
            "aria-label": saved ? `Remove ${item.title} from shortlist` : `Save ${item.title} to shortlist`,
            className: `min-w-11 min-h-11 rounded-full border flex items-center justify-center shadow-md backdrop-blur-md transition-colors ${saved ? 'bg-page text-brand-strong border-white' : unsaved}`,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__["Heart"], {
                className: `w-5 h-5 ${saved ? 'fill-current' : ''}`,
                "aria-hidden": "true"
            }, void 0, false, {
                fileName: "[project]/next-app/components/ShortlistButton.tsx",
                lineNumber: 54,
                columnNumber: 359
            }, this)
        }, void 0, false, {
            fileName: "[project]/next-app/components/ShortlistButton.tsx",
            lineNumber: 54,
            columnNumber: 12
        }, this);
    }
    if (variant === 'sidebar') {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            type: "button",
            onClick: toggle,
            "aria-pressed": saved,
            "aria-label": saved ? `Remove ${item.title} from shortlist` : `Save ${item.title} to shortlist`,
            className: `w-full min-h-12 rounded-xl font-bold text-sm border flex items-center justify-center gap-2 transition-colors ${saved ? 'bg-amber-50 text-brand-deep border-brand-soft' : 'bg-surface-muted text-ink-muted border-border-strong hover:border-brand'}`,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__["Heart"], {
                    className: `w-4 h-4 ${saved ? 'fill-current' : ''}`,
                    "aria-hidden": "true"
                }, void 0, false, {
                    fileName: "[project]/next-app/components/ShortlistButton.tsx",
                    lineNumber: 58,
                    columnNumber: 425
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    children: saved ? 'Saved to shortlist' : 'Save to shortlist'
                }, void 0, false, {
                    fileName: "[project]/next-app/components/ShortlistButton.tsx",
                    lineNumber: 58,
                    columnNumber: 506
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/next-app/components/ShortlistButton.tsx",
            lineNumber: 58,
            columnNumber: 12
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        type: "button",
        onClick: toggle,
        "aria-pressed": saved,
        "aria-label": saved ? `Remove ${item.title} from shortlist` : `Save ${item.title} to shortlist`,
        className: `min-h-11 inline-flex items-center justify-center gap-2 rounded-full px-4 text-sm font-bold border transition-colors ${saved ? 'bg-page text-brand-strong border-white' : 'bg-white/5 text-white border-white/15 hover:bg-white/10'}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__["Heart"], {
                className: `w-4 h-4 ${saved ? 'fill-current' : ''}`,
                "aria-hidden": "true"
            }, void 0, false, {
                fileName: "[project]/next-app/components/ShortlistButton.tsx",
                lineNumber: 61,
                columnNumber: 407
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                children: saved ? 'Saved' : 'Save'
            }, void 0, false, {
                fileName: "[project]/next-app/components/ShortlistButton.tsx",
                lineNumber: 61,
                columnNumber: 488
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/next-app/components/ShortlistButton.tsx",
        lineNumber: 61,
        columnNumber: 10
    }, this);
}
_s(SaveButton, "M48KdlVlabPFOo8SE1/bjqzCdHM=");
_c = SaveButton;
function ShortlistButton({ safari, compact = false, variant = 'default' }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SaveButton, {
        compact: compact,
        variant: variant,
        item: {
            ...safari,
            kind: 'safari'
        }
    }, void 0, false, {
        fileName: "[project]/next-app/components/ShortlistButton.tsx",
        lineNumber: 65,
        columnNumber: 10
    }, this);
}
_c1 = ShortlistButton;
function HotelShortlistButton({ hotel, compact = false, variant = 'default' }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SaveButton, {
        compact: compact,
        variant: variant,
        item: {
            ...hotel,
            kind: 'hotel'
        }
    }, void 0, false, {
        fileName: "[project]/next-app/components/ShortlistButton.tsx",
        lineNumber: 69,
        columnNumber: 10
    }, this);
}
_c2 = HotelShortlistButton;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "SaveButton");
__turbopack_context__.k.register(_c1, "ShortlistButton");
__turbopack_context__.k.register(_c2, "HotelShortlistButton");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/next-app/components/SiteChrome.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SiteChrome",
    ()=>SiteChrome
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/next-app/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/next-app/node_modules/next/navigation.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
function SiteChrome({ children, header, footer, whatsapp }) {
    _s();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    const isAdmin = pathname === '/admin' || pathname?.startsWith('/admin/');
    if (isAdmin) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: children
    }, void 0, false, {
        fileName: "[project]/next-app/components/SiteChrome.tsx",
        lineNumber: 9,
        columnNumber: 23
    }, this);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "site-frame",
                children: [
                    header,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                        className: "main-content",
                        children: children
                    }, void 0, false, {
                        fileName: "[project]/next-app/components/SiteChrome.tsx",
                        lineNumber: 14,
                        columnNumber: 7
                    }, this),
                    footer
                ]
            }, void 0, true, {
                fileName: "[project]/next-app/components/SiteChrome.tsx",
                lineNumber: 12,
                columnNumber: 5
            }, this),
            whatsapp
        ]
    }, void 0, true, {
        fileName: "[project]/next-app/components/SiteChrome.tsx",
        lineNumber: 11,
        columnNumber: 10
    }, this);
}
_s(SiteChrome, "xbyQPtUVMO7MNj7WjJlpdWqRcTo=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"]
    ];
});
_c = SiteChrome;
var _c;
__turbopack_context__.k.register(_c, "SiteChrome");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/next-app/components/SiteHeader.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SiteHeader",
    ()=>SiteHeader
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/next-app/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/next-app/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/next-app/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/next-app/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/next-app/node_modules/lucide-react/dist/esm/icons/check.js [app-client] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/next-app/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-client] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__ = __turbopack_context__.i("[project]/next-app/node_modules/lucide-react/dist/esm/icons/heart.js [app-client] (ecmascript) <export default as Heart>");
var __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__ = __turbopack_context__.i("[project]/next-app/node_modules/lucide-react/dist/esm/icons/menu.js [app-client] (ecmascript) <export default as Menu>");
var __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__ = __turbopack_context__.i("[project]/next-app/node_modules/lucide-react/dist/esm/icons/phone.js [app-client] (ecmascript) <export default as Phone>");
var __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__ = __turbopack_context__.i("[project]/next-app/node_modules/lucide-react/dist/esm/icons/shield-check.js [app-client] (ecmascript) <export default as ShieldCheck>");
var __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/next-app/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$components$2f$EnquiryButton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/next-app/components/EnquiryButton.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$components$2f$ShortlistButton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/next-app/components/ShortlistButton.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
const CURRENCY_KEY = 'gss_currency_v1';
const RESIDENT_KEY = 'gss_resident_mode_v1';
function SiteHeader() {
    _s();
    const [isScrolled, setIsScrolled] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [mobileMenuOpen, setMobileMenuOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [activeDropdown, setActiveDropdown] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [savedCount, setSavedCount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [activeCurrency, setActiveCurrency] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('USD');
    const [isKenyanResidentMode, setIsKenyanResidentMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SiteHeader.useEffect": ()=>{
            const handleScroll = {
                "SiteHeader.useEffect.handleScroll": ()=>setIsScrolled(window.scrollY > 20)
            }["SiteHeader.useEffect.handleScroll"];
            const updateShortlist = {
                "SiteHeader.useEffect.updateShortlist": ()=>setSavedCount((0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$components$2f$ShortlistButton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["readShortlist"])().length)
            }["SiteHeader.useEffect.updateShortlist"];
            const savedCurrency = window.localStorage.getItem(CURRENCY_KEY);
            const savedResident = window.localStorage.getItem(RESIDENT_KEY);
            if (savedCurrency === 'KES' || savedCurrency === 'USD') setActiveCurrency(savedCurrency);
            if (savedResident === 'true') setIsKenyanResidentMode(true);
            handleScroll();
            updateShortlist();
            window.addEventListener('scroll', handleScroll, {
                passive: true
            });
            window.addEventListener('gss-shortlist-changed', updateShortlist);
            return ({
                "SiteHeader.useEffect": ()=>{
                    window.removeEventListener('scroll', handleScroll);
                    window.removeEventListener('gss-shortlist-changed', updateShortlist);
                }
            })["SiteHeader.useEffect"];
        }
    }["SiteHeader.useEffect"], []);
    const toggleDropdown = (name)=>setActiveDropdown((current)=>current === name ? null : name);
    const dropdownButtonClass = 'min-h-11 px-3.5 py-2 text-sm font-semibold text-ink hover:text-brand-deep transition-colors flex items-center gap-1 rounded-lg';
    const dropdownItemClass = 'w-full text-left px-3 py-2.5 rounded-xl text-sm font-medium text-ink hover:bg-surface-soft hover:text-brand-deep transition-colors block';
    const closeMenus = ()=>{
        setActiveDropdown(null);
        setMobileMenuOpen(false);
    };
    const setCurrency = (currency)=>{
        setActiveCurrency(currency);
        window.localStorage.setItem(CURRENCY_KEY, currency);
        window.dispatchEvent(new Event('gss-pricing-preference-changed'));
    };
    const toggleResident = ()=>{
        const next = !isKenyanResidentMode;
        setIsKenyanResidentMode(next);
        window.localStorage.setItem(RESIDENT_KEY, String(next));
        if (next) {
            setActiveCurrency('KES');
            window.localStorage.setItem(CURRENCY_KEY, 'KES');
        }
        window.dispatchEvent(new Event('gss-pricing-preference-changed'));
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        className: "sticky top-0 z-[100] w-full overflow-visible transition-all duration-300",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `bg-surface-soft border-b border-border px-4 sm:px-8 text-xs text-ink-muted overflow-hidden transition-[max-height,opacity,padding] duration-200 ${isScrolled ? 'max-h-0 opacity-0 py-0 sm:max-h-20 sm:opacity-100 sm:py-1.5' : 'max-h-20 opacity-100 py-1.5'}`,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-7xl mx-auto flex items-center justify-between gap-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "hidden sm:inline-flex items-center gap-1.5 text-ink font-medium",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "w-2 h-2 rounded-full bg-emerald-700",
                                            "aria-hidden": "true"
                                        }, void 0, false, {
                                            fileName: "[project]/next-app/components/SiteHeader.tsx",
                                            lineNumber: 64,
                                            columnNumber: 95
                                        }, this),
                                        "East Africa-based safari planning"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/next-app/components/SiteHeader.tsx",
                                    lineNumber: 64,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "hidden md:inline text-border-strong",
                                    "aria-hidden": "true",
                                    children: "|"
                                }, void 0, false, {
                                    fileName: "[project]/next-app/components/SiteHeader.tsx",
                                    lineNumber: 65,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: "tel:+254729000410",
                                    className: "hidden md:flex items-center gap-1 min-h-8 text-ink-muted hover:text-brand-deep font-semibold transition-colors",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__["Phone"], {
                                            className: "w-3 h-3 text-brand-deep"
                                        }, void 0, false, {
                                            fileName: "[project]/next-app/components/SiteHeader.tsx",
                                            lineNumber: 66,
                                            columnNumber: 164
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "+254 729 000 410"
                                        }, void 0, false, {
                                            fileName: "[project]/next-app/components/SiteHeader.tsx",
                                            lineNumber: 66,
                                            columnNumber: 209
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/next-app/components/SiteHeader.tsx",
                                    lineNumber: 66,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/next-app/components/SiteHeader.tsx",
                            lineNumber: 63,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-2 sm:gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    "aria-pressed": isKenyanResidentMode,
                                    onClick: toggleResident,
                                    className: `min-h-8 px-2.5 py-1 rounded-full text-[11px] font-semibold border transition-all flex items-center gap-1 ${isKenyanResidentMode ? 'bg-action text-white border-action shadow-sm' : 'bg-white text-ink-muted border-border-strong hover:border-brand'}`,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "hidden sm:inline",
                                            children: "Kenyan Resident Rates"
                                        }, void 0, false, {
                                            fileName: "[project]/next-app/components/SiteHeader.tsx",
                                            lineNumber: 69,
                                            columnNumber: 356
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "sm:hidden",
                                            children: "Resident Rates"
                                        }, void 0, false, {
                                            fileName: "[project]/next-app/components/SiteHeader.tsx",
                                            lineNumber: 69,
                                            columnNumber: 419
                                        }, this),
                                        isKenyanResidentMode && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                            className: "w-3 h-3"
                                        }, void 0, false, {
                                            fileName: "[project]/next-app/components/SiteHeader.tsx",
                                            lineNumber: 69,
                                            columnNumber: 493
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/next-app/components/SiteHeader.tsx",
                                    lineNumber: 69,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center rounded-lg bg-white border border-border-strong p-0.5 text-[11px] font-bold shadow-xs",
                                    "aria-label": "Currency selector",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            "aria-pressed": activeCurrency === 'USD',
                                            onClick: ()=>setCurrency('USD'),
                                            className: `min-h-7 px-2 py-0.5 rounded-md transition-colors ${activeCurrency === 'USD' ? 'bg-brand-strong text-white' : 'text-ink-muted hover:text-black'}`,
                                            children: "USD"
                                        }, void 0, false, {
                                            fileName: "[project]/next-app/components/SiteHeader.tsx",
                                            lineNumber: 71,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            "aria-pressed": activeCurrency === 'KES',
                                            onClick: ()=>setCurrency('KES'),
                                            className: `min-h-7 px-2 py-0.5 rounded-md transition-colors ${activeCurrency === 'KES' ? 'bg-brand-strong text-white' : 'text-ink-muted hover:text-black'}`,
                                            children: "KES"
                                        }, void 0, false, {
                                            fileName: "[project]/next-app/components/SiteHeader.tsx",
                                            lineNumber: 72,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/next-app/components/SiteHeader.tsx",
                                    lineNumber: 70,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/next-app/components/SiteHeader.tsx",
                            lineNumber: 68,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/next-app/components/SiteHeader.tsx",
                    lineNumber: 62,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/next-app/components/SiteHeader.tsx",
                lineNumber: 61,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                "aria-label": "Main navigation",
                className: `relative z-[110] w-full overflow-visible transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-xl border-b border-border shadow-md py-2.5' : 'bg-white/95 backdrop-blur-md border-b border-border py-3.5'}`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "max-w-7xl mx-auto px-4 sm:px-8 flex items-center justify-between gap-4 overflow-visible",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/",
                                "aria-label": "Good Secrets Safaris home",
                                className: "flex items-center select-none group rounded-xl text-left shrink-0",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    src: "/images/brand/logo.png",
                                    alt: "Good Secrets Safaris",
                                    width: 170,
                                    height: 70,
                                    className: "h-11 sm:h-14 w-auto object-contain",
                                    priority: true
                                }, void 0, false, {
                                    fileName: "[project]/next-app/components/SiteHeader.tsx",
                                    lineNumber: 80,
                                    columnNumber: 143
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/next-app/components/SiteHeader.tsx",
                                lineNumber: 80,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "hidden lg:flex items-center gap-0.5 overflow-visible",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative z-[120]",
                                        onMouseEnter: ()=>setActiveDropdown('explore'),
                                        onMouseLeave: ()=>setActiveDropdown(null),
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                onClick: ()=>toggleDropdown('explore'),
                                                "aria-expanded": activeDropdown === 'explore',
                                                className: dropdownButtonClass,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: "Destinations"
                                                    }, void 0, false, {
                                                        fileName: "[project]/next-app/components/SiteHeader.tsx",
                                                        lineNumber: 84,
                                                        columnNumber: 156
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                                        className: "w-3.5 h-3.5 opacity-60"
                                                    }, void 0, false, {
                                                        fileName: "[project]/next-app/components/SiteHeader.tsx",
                                                        lineNumber: 84,
                                                        columnNumber: 181
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/next-app/components/SiteHeader.tsx",
                                                lineNumber: 84,
                                                columnNumber: 15
                                            }, this),
                                            activeDropdown === 'explore' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "absolute top-full left-0 z-[200] w-64 rounded-2xl bg-white border border-border-strong shadow-2xl p-2.5",
                                                children: [
                                                    [
                                                        {
                                                            label: 'Kenya Safaris & Coast',
                                                            value: 'Kenya'
                                                        },
                                                        {
                                                            label: 'Tanzania Wilderness',
                                                            value: 'Tanzania'
                                                        },
                                                        {
                                                            label: 'Zanzibar Spice Archipelago',
                                                            value: 'Zanzibar'
                                                        },
                                                        {
                                                            label: 'Kenya + Tanzania Combined',
                                                            value: 'Kenya + Tanzania'
                                                        },
                                                        {
                                                            label: 'Safari & Beach Combo',
                                                            value: 'Safari + Beach'
                                                        }
                                                    ].map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                            onClick: closeMenus,
                                                            href: `/safaris?country=${encodeURIComponent(item.value)}`,
                                                            className: dropdownItemClass,
                                                            children: item.label
                                                        }, item.value, false, {
                                                            fileName: "[project]/next-app/components/SiteHeader.tsx",
                                                            lineNumber: 85,
                                                            columnNumber: 475
                                                        }, this)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "pt-1.5 mt-1.5 border-t border-border",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                            onClick: closeMenus,
                                                            href: "/destinations",
                                                            className: "w-full text-left px-3 py-2.5 text-sm font-bold text-brand-deep hover:bg-surface-soft rounded-xl block",
                                                            children: "View All Destinations →"
                                                        }, void 0, false, {
                                                            fileName: "[project]/next-app/components/SiteHeader.tsx",
                                                            lineNumber: 85,
                                                            columnNumber: 684
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/next-app/components/SiteHeader.tsx",
                                                        lineNumber: 85,
                                                        columnNumber: 630
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/next-app/components/SiteHeader.tsx",
                                                lineNumber: 85,
                                                columnNumber: 48
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/next-app/components/SiteHeader.tsx",
                                        lineNumber: 83,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative z-[120]",
                                        onMouseEnter: ()=>setActiveDropdown('safaris'),
                                        onMouseLeave: ()=>setActiveDropdown(null),
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                onClick: ()=>toggleDropdown('safaris'),
                                                "aria-expanded": activeDropdown === 'safaris',
                                                className: dropdownButtonClass,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: "Safaris"
                                                    }, void 0, false, {
                                                        fileName: "[project]/next-app/components/SiteHeader.tsx",
                                                        lineNumber: 88,
                                                        columnNumber: 156
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                                        className: "w-3.5 h-3.5 opacity-60"
                                                    }, void 0, false, {
                                                        fileName: "[project]/next-app/components/SiteHeader.tsx",
                                                        lineNumber: 88,
                                                        columnNumber: 176
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/next-app/components/SiteHeader.tsx",
                                                lineNumber: 88,
                                                columnNumber: 15
                                            }, this),
                                            activeDropdown === 'safaris' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "absolute top-full left-0 z-[200] w-72 rounded-2xl bg-white border border-border-strong shadow-2xl p-2.5 grid grid-cols-1 gap-0.5",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        onClick: closeMenus,
                                                        href: "/safaris",
                                                        className: "w-full text-left px-3 py-2.5 rounded-xl text-sm font-bold text-brand-deep bg-surface-muted hover:bg-surface-soft",
                                                        children: "All Safaris & Packages"
                                                    }, void 0, false, {
                                                        fileName: "[project]/next-app/components/SiteHeader.tsx",
                                                        lineNumber: 89,
                                                        columnNumber: 194
                                                    }, this),
                                                    [
                                                        'Big 5',
                                                        'Great Migration',
                                                        'Family',
                                                        'Honeymoon',
                                                        'Senior Friendly',
                                                        'Luxury',
                                                        'Midrange',
                                                        'Budget',
                                                        'Fly-In',
                                                        'Safari & Beach'
                                                    ].map((style)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                            onClick: closeMenus,
                                                            href: `/safaris?travelStyle=${encodeURIComponent(style)}`,
                                                            className: dropdownItemClass,
                                                            children: [
                                                                style,
                                                                " Safaris"
                                                            ]
                                                        }, style, true, {
                                                            fileName: "[project]/next-app/components/SiteHeader.tsx",
                                                            lineNumber: 89,
                                                            columnNumber: 527
                                                        }, this))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/next-app/components/SiteHeader.tsx",
                                                lineNumber: 89,
                                                columnNumber: 48
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/next-app/components/SiteHeader.tsx",
                                        lineNumber: 87,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative z-[120]",
                                        onMouseEnter: ()=>setActiveDropdown('holidays'),
                                        onMouseLeave: ()=>setActiveDropdown(null),
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                onClick: ()=>toggleDropdown('holidays'),
                                                "aria-expanded": activeDropdown === 'holidays',
                                                className: dropdownButtonClass,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: "Beach & Stays"
                                                    }, void 0, false, {
                                                        fileName: "[project]/next-app/components/SiteHeader.tsx",
                                                        lineNumber: 92,
                                                        columnNumber: 158
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                                        className: "w-3.5 h-3.5 opacity-60"
                                                    }, void 0, false, {
                                                        fileName: "[project]/next-app/components/SiteHeader.tsx",
                                                        lineNumber: 92,
                                                        columnNumber: 184
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/next-app/components/SiteHeader.tsx",
                                                lineNumber: 92,
                                                columnNumber: 15
                                            }, this),
                                            activeDropdown === 'holidays' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "absolute top-full left-0 z-[200] w-64 rounded-2xl bg-white border border-border-strong shadow-2xl p-2.5",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        onClick: ()=>{
                                                            setIsKenyanResidentMode(true);
                                                            setActiveCurrency('KES');
                                                            window.localStorage.setItem(RESIDENT_KEY, 'true');
                                                            window.localStorage.setItem(CURRENCY_KEY, 'KES');
                                                            closeMenus();
                                                        },
                                                        href: "/hotels?resident=true",
                                                        className: "w-full text-left px-3 py-2.5 rounded-xl text-sm font-bold text-action bg-action-soft hover:bg-surface-soft mb-1 block",
                                                        children: "Kenyan Resident Beach Deals"
                                                    }, void 0, false, {
                                                        fileName: "[project]/next-app/components/SiteHeader.tsx",
                                                        lineNumber: 93,
                                                        columnNumber: 170
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        onClick: closeMenus,
                                                        href: "/hotels",
                                                        className: dropdownItemClass,
                                                        children: "All Beach Resorts & Spas"
                                                    }, void 0, false, {
                                                        fileName: "[project]/next-app/components/SiteHeader.tsx",
                                                        lineNumber: 93,
                                                        columnNumber: 561
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        onClick: closeMenus,
                                                        href: "/safaris?travelStyle=Safari%20%26%20Beach",
                                                        className: dropdownItemClass,
                                                        children: "Bush & Beach Combos"
                                                    }, void 0, false, {
                                                        fileName: "[project]/next-app/components/SiteHeader.tsx",
                                                        lineNumber: 93,
                                                        columnNumber: 664
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/next-app/components/SiteHeader.tsx",
                                                lineNumber: 93,
                                                columnNumber: 49
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/next-app/components/SiteHeader.tsx",
                                        lineNumber: 91,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative z-[120]",
                                        onMouseEnter: ()=>setActiveDropdown('discover'),
                                        onMouseLeave: ()=>setActiveDropdown(null),
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                onClick: ()=>toggleDropdown('discover'),
                                                "aria-expanded": activeDropdown === 'discover',
                                                className: dropdownButtonClass,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: "Plan Your Safari"
                                                    }, void 0, false, {
                                                        fileName: "[project]/next-app/components/SiteHeader.tsx",
                                                        lineNumber: 96,
                                                        columnNumber: 158
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                                        className: "w-3.5 h-3.5 opacity-60"
                                                    }, void 0, false, {
                                                        fileName: "[project]/next-app/components/SiteHeader.tsx",
                                                        lineNumber: 96,
                                                        columnNumber: 187
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/next-app/components/SiteHeader.tsx",
                                                lineNumber: 96,
                                                columnNumber: 15
                                            }, this),
                                            activeDropdown === 'discover' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "absolute top-full right-0 z-[200] w-64 rounded-2xl bg-white border border-border-strong shadow-2xl p-2.5",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        onClick: closeMenus,
                                                        href: "/safari-builder",
                                                        className: "w-full text-left px-3 py-2.5 rounded-xl text-sm font-bold text-brand-deep bg-surface-muted hover:bg-surface-soft mb-1 block",
                                                        children: "Custom Safari Builder"
                                                    }, void 0, false, {
                                                        fileName: "[project]/next-app/components/SiteHeader.tsx",
                                                        lineNumber: 97,
                                                        columnNumber: 171
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        onClick: closeMenus,
                                                        href: "/plan-with-us",
                                                        className: dropdownItemClass,
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "inline-flex items-center gap-2",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__["ShieldCheck"], {
                                                                    className: "w-4 h-4 text-brand-deep"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/next-app/components/SiteHeader.tsx",
                                                                    lineNumber: 97,
                                                                    columnNumber: 512
                                                                }, this),
                                                                "How we plan your safari"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/next-app/components/SiteHeader.tsx",
                                                            lineNumber: 97,
                                                            columnNumber: 463
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/next-app/components/SiteHeader.tsx",
                                                        lineNumber: 97,
                                                        columnNumber: 385
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        onClick: closeMenus,
                                                        href: "/reviews",
                                                        className: dropdownItemClass,
                                                        children: "Independent Reviews"
                                                    }, void 0, false, {
                                                        fileName: "[project]/next-app/components/SiteHeader.tsx",
                                                        lineNumber: 97,
                                                        columnNumber: 600
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        onClick: closeMenus,
                                                        href: "/guides",
                                                        className: dropdownItemClass,
                                                        children: "Safari Planning Guides"
                                                    }, void 0, false, {
                                                        fileName: "[project]/next-app/components/SiteHeader.tsx",
                                                        lineNumber: 97,
                                                        columnNumber: 699
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        onClick: closeMenus,
                                                        href: "/blog",
                                                        className: dropdownItemClass,
                                                        children: "Travel Magazine & Stories"
                                                    }, void 0, false, {
                                                        fileName: "[project]/next-app/components/SiteHeader.tsx",
                                                        lineNumber: 97,
                                                        columnNumber: 800
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        onClick: closeMenus,
                                                        href: "/about",
                                                        className: dropdownItemClass,
                                                        children: "About Good Secrets"
                                                    }, void 0, false, {
                                                        fileName: "[project]/next-app/components/SiteHeader.tsx",
                                                        lineNumber: 97,
                                                        columnNumber: 902
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        onClick: closeMenus,
                                                        href: "/contact",
                                                        className: dropdownItemClass,
                                                        children: "Contact Us"
                                                    }, void 0, false, {
                                                        fileName: "[project]/next-app/components/SiteHeader.tsx",
                                                        lineNumber: 97,
                                                        columnNumber: 998
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/next-app/components/SiteHeader.tsx",
                                                lineNumber: 97,
                                                columnNumber: 49
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/next-app/components/SiteHeader.tsx",
                                        lineNumber: 95,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/next-app/components/SiteHeader.tsx",
                                lineNumber: 82,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "hidden lg:flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/shortlist",
                                        className: "relative min-h-11 inline-flex items-center gap-2 rounded-xl border border-border-strong bg-surface-muted hover:bg-white px-3.5 text-sm font-bold text-ink transition-colors",
                                        "aria-label": `Open safari shortlist with ${savedCount} saved ${savedCount === 1 ? 'item' : 'items'}`,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__["Heart"], {
                                                className: `w-4 h-4 text-brand-strong ${savedCount > 0 ? 'fill-current' : ''}`
                                            }, void 0, false, {
                                                fileName: "[project]/next-app/components/SiteHeader.tsx",
                                                lineNumber: 102,
                                                columnNumber: 322
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "Shortlist"
                                            }, void 0, false, {
                                                fileName: "[project]/next-app/components/SiteHeader.tsx",
                                                lineNumber: 102,
                                                columnNumber: 411
                                            }, this),
                                            savedCount > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "min-w-5 h-5 px-1 rounded-full bg-action text-white text-[11px] inline-flex items-center justify-center",
                                                children: savedCount
                                            }, void 0, false, {
                                                fileName: "[project]/next-app/components/SiteHeader.tsx",
                                                lineNumber: 102,
                                                columnNumber: 452
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/next-app/components/SiteHeader.tsx",
                                        lineNumber: 102,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$components$2f$EnquiryButton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EnquiryButton"], {
                                        showSparkles: true,
                                        label: "Request a Quote",
                                        className: "inline-flex items-center gap-1.5 min-h-11 px-5 py-2.5 rounded-xl bg-brand-strong hover:bg-brand-hover text-white font-extrabold text-xs uppercase tracking-wider transition-all shadow-md active:scale-[0.98]"
                                    }, void 0, false, {
                                        fileName: "[project]/next-app/components/SiteHeader.tsx",
                                        lineNumber: 103,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/next-app/components/SiteHeader.tsx",
                                lineNumber: 101,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2 lg:hidden",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/shortlist",
                                        "aria-label": `Open safari shortlist with ${savedCount} saved ${savedCount === 1 ? 'item' : 'items'}`,
                                        className: "relative min-w-11 min-h-11 flex items-center justify-center rounded-xl bg-surface-soft text-brand-strong border border-border-strong",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__["Heart"], {
                                                className: `w-5 h-5 ${savedCount > 0 ? 'fill-current' : ''}`
                                            }, void 0, false, {
                                                fileName: "[project]/next-app/components/SiteHeader.tsx",
                                                lineNumber: 106,
                                                columnNumber: 332
                                            }, this),
                                            savedCount > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "absolute -right-1 -top-1 min-w-5 h-5 px-1 rounded-full bg-action text-white text-[10px] inline-flex items-center justify-center border-2 border-white",
                                                children: savedCount
                                            }, void 0, false, {
                                                fileName: "[project]/next-app/components/SiteHeader.tsx",
                                                lineNumber: 106,
                                                columnNumber: 422
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/next-app/components/SiteHeader.tsx",
                                        lineNumber: 106,
                                        columnNumber: 62
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: ()=>setMobileMenuOpen(!mobileMenuOpen),
                                        "aria-expanded": mobileMenuOpen,
                                        "aria-label": mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu',
                                        className: "min-w-11 min-h-11 flex items-center justify-center rounded-xl bg-surface-soft text-ink border border-border-strong",
                                        children: mobileMenuOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                            className: "w-6 h-6"
                                        }, void 0, false, {
                                            fileName: "[project]/next-app/components/SiteHeader.tsx",
                                            lineNumber: 106,
                                            columnNumber: 945
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__["Menu"], {
                                            className: "w-6 h-6"
                                        }, void 0, false, {
                                            fileName: "[project]/next-app/components/SiteHeader.tsx",
                                            lineNumber: 106,
                                            columnNumber: 973
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/next-app/components/SiteHeader.tsx",
                                        lineNumber: 106,
                                        columnNumber: 617
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/next-app/components/SiteHeader.tsx",
                                lineNumber: 106,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/next-app/components/SiteHeader.tsx",
                        lineNumber: 79,
                        columnNumber: 9
                    }, this),
                    mobileMenuOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "lg:hidden bg-white border-b border-border px-4 py-5 space-y-4 max-h-[85vh] overflow-y-auto shadow-2xl",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-1",
                                children: [
                                    [
                                        'Home',
                                        '/'
                                    ],
                                    [
                                        'Safaris & Tours',
                                        '/safaris'
                                    ],
                                    [
                                        'Destinations',
                                        '/destinations'
                                    ],
                                    [
                                        'Beach Resorts & Stays',
                                        '/hotels'
                                    ],
                                    [
                                        `My Shortlist${savedCount ? ` (${savedCount})` : ''}`,
                                        '/shortlist'
                                    ],
                                    [
                                        'How We Plan Your Safari',
                                        '/plan-with-us'
                                    ],
                                    [
                                        'Traveler Reviews',
                                        '/reviews'
                                    ],
                                    [
                                        'Custom Safari Builder',
                                        '/safari-builder'
                                    ],
                                    [
                                        'Safari Planning Guides',
                                        '/guides'
                                    ],
                                    [
                                        'Travel Magazine & Stories',
                                        '/blog'
                                    ],
                                    [
                                        'About Good Secrets Safaris',
                                        '/about'
                                    ],
                                    [
                                        'Contact Us',
                                        '/contact'
                                    ]
                                ].map(([label, href])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: href,
                                        onClick: closeMenus,
                                        className: "w-full min-h-11 text-left py-2.5 px-4 rounded-xl font-bold text-sm text-ink hover:bg-surface-soft block",
                                        children: label
                                    }, href, false, {
                                        fileName: "[project]/next-app/components/SiteHeader.tsx",
                                        lineNumber: 109,
                                        columnNumber: 642
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/next-app/components/SiteHeader.tsx",
                                lineNumber: 109,
                                columnNumber: 147
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "pt-4 border-t border-border space-y-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$components$2f$EnquiryButton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EnquiryButton"], {
                                        label: "Request a Safari Quote",
                                        className: "w-full min-h-12 py-3 rounded-xl bg-brand-strong hover:bg-brand-hover text-white font-extrabold text-sm uppercase tracking-wider text-center shadow-sm"
                                    }, void 0, false, {
                                        fileName: "[project]/next-app/components/SiteHeader.tsx",
                                        lineNumber: 109,
                                        columnNumber: 885
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-center text-xs text-ink-muted",
                                        children: "Tell us your dates and travel style. No payment required."
                                    }, void 0, false, {
                                        fileName: "[project]/next-app/components/SiteHeader.tsx",
                                        lineNumber: 109,
                                        columnNumber: 1095
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/next-app/components/SiteHeader.tsx",
                                lineNumber: 109,
                                columnNumber: 830
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/next-app/components/SiteHeader.tsx",
                        lineNumber: 109,
                        columnNumber: 28
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/next-app/components/SiteHeader.tsx",
                lineNumber: 78,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/next-app/components/SiteHeader.tsx",
        lineNumber: 60,
        columnNumber: 5
    }, this);
}
_s(SiteHeader, "CRdYV93m5giZXMVXMWy90WNMrGc=");
_c = SiteHeader;
var _c;
__turbopack_context__.k.register(_c, "SiteHeader");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=next-app_components_06l0r_7._.js.map