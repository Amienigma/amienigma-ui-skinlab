import { i as __toESM } from "../_runtime.mjs";
import { L as require_react, v as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { A as Ellipsis, C as Nfc, D as Lock, E as MapPin, F as Bluetooth, I as BellOff, L as Battery, M as Cast, N as Camera, O as Lamp, P as Calculator, R as BatteryCharging, S as Pause, T as Moon, _ as RotateCw, a as User, b as Plane, c as Tablet, d as SkipForward, f as SkipBack, g as Search, h as Settings, i as Volume2, j as ChevronRight, k as Flashlight, l as Sun, m as Share2, n as WifiOff, p as Signal, r as Watch, s as Timer, t as Wifi, u as Speaker, v as Power, w as Music2, x as Pencil, y as Play } from "../_libs/lucide-react.mjs";
import { t as create } from "../_libs/zustand.mjs";
import { t as clsx } from "../_libs/clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-B7KYdg1z.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var OS_META = {
	harmony: {
		name: "Harmony",
		version: "5.0",
		line: "Glowing spatial cards and Super Device chips"
	},
	oneui: {
		name: "One UI",
		version: "7",
		line: "Circular icons, split panels, Now Bar"
	},
	ios: {
		name: "iOS",
		version: "26",
		line: "Liquid Glass squircles and a floating dock"
	}
};
var SCREENS = [
	{
		id: "lock",
		label: "Lock"
	},
	{
		id: "home",
		label: "Home"
	},
	{
		id: "controls",
		label: "Controls"
	},
	{
		id: "notifications",
		label: "Alerts"
	},
	{
		id: "apps",
		label: "Apps"
	},
	{
		id: "settings",
		label: "Settings"
	}
];
var useDevice = create((set) => ({
	os: "harmony",
	screen: "lock",
	theme: "dark",
	brightness: 78,
	volume: 54,
	wifi: true,
	cellular: true,
	bluetooth: true,
	airplane: false,
	dnd: false,
	flashlight: false,
	rotationLock: false,
	hotspot: false,
	batterySaver: false,
	haptics: true,
	aod: true,
	mediaPlaying: true,
	battery: 74,
	expandedFolder: null,
	dismissedNotifs: [],
	appSearch: "",
	settingsSearch: "",
	openApp: null,
	nearby: {
		lamp: true,
		speaker: false,
		tablet: false,
		watch: true
	},
	setOs: (os) => set({
		os,
		expandedFolder: null,
		openApp: null,
		appSearch: "",
		settingsSearch: ""
	}),
	setScreen: (screen) => set({
		screen,
		expandedFolder: null,
		openApp: null
	}),
	setTheme: (theme) => set({ theme }),
	toggleTheme: () => set((s) => ({ theme: s.theme === "dark" ? "light" : "dark" })),
	setBrightness: (n) => set({ brightness: Math.min(100, Math.max(4, n)) }),
	setVolume: (n) => set({ volume: Math.min(100, Math.max(0, n)) }),
	toggle: (key) => set((s) => {
		if (key === "airplane") {
			if (!s.airplane) return {
				airplane: true,
				wifi: false,
				bluetooth: false,
				cellular: false,
				hotspot: false
			};
			return {
				airplane: false,
				wifi: true,
				cellular: true
			};
		}
		if (key === "wifi" && !s.wifi && s.airplane) return {
			wifi: true,
			airplane: false
		};
		if (key === "cellular" && !s.cellular && s.airplane) return {
			cellular: true,
			airplane: false
		};
		if (key === "bluetooth" && !s.bluetooth && s.airplane) return {
			bluetooth: true,
			airplane: false
		};
		return { [key]: !s[key] };
	}),
	setExpandedFolder: (id) => set({ expandedFolder: id }),
	dismissNotif: (id) => set((s) => ({ dismissedNotifs: [...s.dismissedNotifs, id] })),
	restoreNotifs: () => set({ dismissedNotifs: [] }),
	setAppSearch: (q) => set({ appSearch: q }),
	setSettingsSearch: (q) => set({ settingsSearch: q }),
	setOpenApp: (id) => set({
		openApp: id,
		expandedFolder: null
	}),
	toggleNearby: (id) => set((s) => ({ nearby: {
		...s.nearby,
		[id]: !s.nearby[id]
	} })),
	lock: () => set({
		screen: "lock",
		expandedFolder: null,
		openApp: null
	}),
	unlock: () => set({
		screen: "home",
		expandedFolder: null,
		openApp: null
	})
}));
var APPS = [
	{
		id: "phone",
		name: "Phone",
		glyph: "phone",
		swatch: "phone"
	},
	{
		id: "chat",
		name: "Pulse",
		glyph: "chat",
		swatch: "chat"
	},
	{
		id: "camera",
		name: "Lens",
		glyph: "camera",
		swatch: "camera"
	},
	{
		id: "gallery",
		name: "Lumen",
		glyph: "gallery",
		swatch: "gallery"
	},
	{
		id: "maps",
		name: "Atlas",
		glyph: "maps",
		swatch: "maps"
	},
	{
		id: "music",
		name: "Drift",
		glyph: "music",
		swatch: "music"
	},
	{
		id: "weather",
		name: "Nimbus",
		glyph: "weather",
		swatch: "weather"
	},
	{
		id: "notes",
		name: "Quill",
		glyph: "notes",
		swatch: "notes"
	},
	{
		id: "calendar",
		name: "Orbit",
		glyph: "calendar",
		swatch: "calendar"
	},
	{
		id: "clock",
		name: "Meridian",
		glyph: "clock",
		swatch: "clock"
	},
	{
		id: "files",
		name: "Vault",
		glyph: "files",
		swatch: "files"
	},
	{
		id: "mail",
		name: "Parcel",
		glyph: "mail",
		swatch: "mail"
	},
	{
		id: "browser",
		name: "Harbor",
		glyph: "browser",
		swatch: "browser"
	},
	{
		id: "health",
		name: "Vital",
		glyph: "health",
		swatch: "health"
	},
	{
		id: "wallet",
		name: "Ledger",
		glyph: "wallet",
		swatch: "wallet"
	},
	{
		id: "settings",
		name: "Settings",
		glyph: "settings",
		swatch: "settings"
	},
	{
		id: "calc",
		name: "Sum",
		glyph: "calc",
		swatch: "calc"
	},
	{
		id: "store",
		name: "Bazaar",
		glyph: "store",
		swatch: "store"
	},
	{
		id: "video",
		name: "Reel",
		glyph: "video",
		swatch: "video"
	},
	{
		id: "contacts",
		name: "Folio",
		glyph: "contacts",
		swatch: "contacts"
	}
];
var APP_BY_ID = Object.fromEntries(APPS.map((a) => [a.id, a]));
var FOLDER_BY_ID = Object.fromEntries([{
	id: "daily",
	name: "Daily",
	appIds: [
		"calendar",
		"notes",
		"clock",
		"files"
	]
}, {
	id: "create",
	name: "Create",
	appIds: [
		"camera",
		"gallery",
		"video"
	]
}].map((f) => [f.id, f]));
var NOTIFS = [
	{
		id: "n1",
		appId: "chat",
		title: "Maya Chen",
		body: "Running ten minutes late — start the review without me.",
		time: "2m"
	},
	{
		id: "n2",
		appId: "weather",
		title: "Nimbus",
		body: "Light rain starting at 4:15. Bring a jacket.",
		time: "18m"
	},
	{
		id: "n3",
		appId: "calendar",
		title: "Design review",
		body: "Tomorrow 9:30 · Studio B · 8 invited",
		time: "1h"
	},
	{
		id: "n4",
		appId: "mail",
		title: "Northline Transit",
		body: "Your weekly pass renews Friday. Tap to manage.",
		time: "3h"
	},
	{
		id: "n5",
		appId: "maps",
		title: "Leave by 5:05",
		body: "Atlas: 22 min to Harbor Atelier with light traffic.",
		time: "4h"
	}
];
var NEARBY = [
	{
		id: "lamp",
		name: "Desk Lamp",
		kind: "lamp"
	},
	{
		id: "speaker",
		name: "Studio Spk",
		kind: "speaker"
	},
	{
		id: "tablet",
		name: "Canvas Tab",
		kind: "tablet"
	},
	{
		id: "watch",
		name: "Pulse Watch",
		kind: "watch"
	}
];
var TRACK = {
	title: "Afterimage",
	artist: "Lumen Drift",
	album: "Glass Harbor"
};
var RIDE = {
	title: "Northline",
	subtitle: "Driver 6 min away",
	eta: "6 min"
};
function getApp(id) {
	return APP_BY_ID[id] ?? APPS[0];
}
var HOME_APPS = {
	harmony: [
		"weather",
		"maps",
		"music",
		"mail",
		"browser",
		"health",
		"store",
		"calc"
	],
	oneui: [
		"gallery",
		"maps",
		"mail",
		"weather",
		"calendar",
		"notes",
		"health",
		"video"
	],
	ios: [
		"chat",
		"mail",
		"maps",
		"weather",
		"health",
		"wallet",
		"store",
		"calc"
	]
};
var DOCK_APPS = {
	harmony: [
		"phone",
		"chat",
		"browser",
		"camera"
	],
	oneui: [
		"phone",
		"chat",
		"browser",
		"camera"
	],
	ios: [
		"phone",
		"chat",
		"browser",
		"music"
	]
};
function base(props) {
	return {
		viewBox: "0 0 24 24",
		fill: "none",
		"aria-hidden": true,
		...props
	};
}
function GlyphPhone(props) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
		...base(props),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
			fill: "currentColor",
			d: "M8.2 3.4h7.6c1.2 0 2.2 1 2.2 2.2v12.8c0 1.2-1 2.2-2.2 2.2H8.2c-1.2 0-2.2-1-2.2-2.2V5.6c0-1.2 1-2.2 2.2-2.2Zm3.8 14.2a1.1 1.1 0 1 0 0 2.2 1.1 1.1 0 0 0 0-2.2Z"
		})
	});
}
function GlyphChat(props) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
		...base(props),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
			fill: "currentColor",
			d: "M5 5.2h9.5A3.3 3.3 0 0 1 17.8 8.5v4.2A3.3 3.3 0 0 1 14.5 16H11l-3.4 2.6c-.6.45-1.5 0-1.5-.7V16h-.6A3.3 3.3 0 0 1 2.2 12.7V8.5A3.3 3.3 0 0 1 5.5 5.2H5Zm10.2 12.1h.7v1.6c0 .7.9 1.15 1.5.7L20 18h.5a2.8 2.8 0 0 0 2.8-2.8V12a2.8 2.8 0 0 0-2-2.68V12.7A4.5 4.5 0 0 1 16.8 17.2h-1.6Z"
		})
	});
}
function GlyphCamera(props) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
		...base(props),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
			fill: "currentColor",
			d: "M9.1 5.2 10 4h4l.9 1.2h2.6A2.5 2.5 0 0 1 20 7.7v9.6a2.5 2.5 0 0 1-2.5 2.5h-11A2.5 2.5 0 0 1 4 17.3V7.7a2.5 2.5 0 0 1 2.5-2.5h2.6ZM12 9.2a3.6 3.6 0 1 0 0 7.2 3.6 3.6 0 0 0 0-7.2Zm0 1.7a1.9 1.9 0 1 1 0 3.8 1.9 1.9 0 0 1 0-3.8Z"
		})
	});
}
function GlyphGallery(props) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
		...base(props),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
			fill: "currentColor",
			d: "M5 5.5A2.5 2.5 0 0 1 7.5 3h9A2.5 2.5 0 0 1 19 5.5v13A2.5 2.5 0 0 1 16.5 21h-9A2.5 2.5 0 0 1 5 18.5v-13Zm3.2 2.2a1.4 1.4 0 1 0 0-2.8 1.4 1.4 0 0 0 0 2.8ZM7 17.8l3.3-4.2a1 1 0 0 1 1.6 0L13.2 16l1.3-1.5a1 1 0 0 1 1.5.05L18 17.4v1.1c0 .2-.2.5-.5.5h-9.9c-.4 0-.6-.3-.6-.5v-.7Z"
		})
	});
}
function GlyphMaps(props) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
		...base(props),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
			fill: "currentColor",
			d: "M12 3.2c3.6 0 6.4 2.7 6.4 6.3 0 4.2-5 9.5-6.1 10.6-.2.2-.4.2-.6 0C10.6 19 5.6 13.7 5.6 9.5c0-3.6 2.8-6.3 6.4-6.3Zm0 4.1a2.3 2.3 0 1 0 0 4.6 2.3 2.3 0 0 0 0-4.6Z"
		})
	});
}
function GlyphMusic(props) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
		...base(props),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
			fill: "currentColor",
			d: "M9 5.2v9.05a3.1 3.1 0 1 0 1.8 2.85V8.4l8.2-1.5v7.55a3.1 3.1 0 1 0 1.8 2.85V4.2L9 5.2Z"
		})
	});
}
function GlyphWeather(props) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
		...base(props),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
			fill: "currentColor",
			d: "M8.6 10.2a4.4 4.4 0 0 1 8.4 1.3 3.7 3.7 0 1 1 .5 7.3H8.2a4.4 4.4 0 0 1-.4-8.7 4.6 4.6 0 0 1 .8.1Z"
		})
	});
}
function GlyphNotes(props) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
		...base(props),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
			fill: "currentColor",
			d: "M7 3.4h7.2L19.6 9v11.1A1.5 1.5 0 0 1 18.1 21.6H7A1.5 1.5 0 0 1 5.4 20.1V4.9A1.5 1.5 0 0 1 7 3.4Zm7.4 1.4v4.4h4.3L14.4 4.8ZM8.4 12.2h7.2v1.4H8.4v-1.4Zm0 3.2h7.2v1.4H8.4V15.4Z"
		})
	});
}
function GlyphCalendar(props) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
		...base(props),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
			fill: "currentColor",
			d: "M8 3.2a.9.9 0 0 1 .9.9V5h6.2V4.1a.9.9 0 1 1 1.8 0V5H18.4A2.2 2.2 0 0 1 20.6 7.2v11.2A2.2 2.2 0 0 1 18.4 20.6H5.6A2.2 2.2 0 0 1 3.4 18.4V7.2A2.2 2.2 0 0 1 5.6 5h.9V4.1A.9.9 0 0 1 8 3.2ZM5.2 9.2v9.2c0 .2.2.4.4.4h13c.2 0 .4-.2.4-.4V9.2H5.2Zm3.2 2.4h2.2v2.2H8.4v-2.2Zm4.2 0h2.2v2.2h-2.2v-2.2Z"
		})
	});
}
function GlyphClock(props) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
		...base(props),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
			fill: "currentColor",
			d: "M12 3.2a8.8 8.8 0 1 1 0 17.6 8.8 8.8 0 0 1 0-17.6Zm.7 4.2h-1.6v5.1l3.6 2.2.8-1.3-2.8-1.7V7.4Z"
		})
	});
}
function GlyphFiles(props) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
		...base(props),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
			fill: "currentColor",
			d: "M4.4 6.4A2.2 2.2 0 0 1 6.6 4.2h4.1l1.8 1.8h6.9A2.2 2.2 0 0 1 21.6 8.2v9.6a2.2 2.2 0 0 1-2.2 2.2H6.6A2.2 2.2 0 0 1 4.4 17.8V6.4Z"
		})
	});
}
function GlyphMail(props) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
		...base(props),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
			fill: "currentColor",
			d: "M4.4 6.2h15.2A2.2 2.2 0 0 1 21.8 8.4v9.2a2.2 2.2 0 0 1-2.2 2.2H4.4a2.2 2.2 0 0 1-2.2-2.2V8.4A2.2 2.2 0 0 1 4.4 6.2Zm.4 1.8 7.2 5.2 7.2-5.2H4.8Z"
		})
	});
}
function GlyphBrowser(props) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
		...base(props),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
			fill: "currentColor",
			d: "M12 3.2a8.8 8.8 0 1 1 0 17.6 8.8 8.8 0 0 1 0-17.6Zm0 1.7a7.1 7.1 0 0 0-6.9 5.6h13.8A7.1 7.1 0 0 0 12 4.9Zm-7.1 7.3A7.1 7.1 0 0 0 12 19.1a7.1 7.1 0 0 0 7.1-6.9H4.9Z"
		})
	});
}
function GlyphHealth(props) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
		...base(props),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
			fill: "currentColor",
			d: "M12 20.4 4.7 13a4.8 4.8 0 0 1 6.8-6.8L12 7.7l.5-1.5a4.8 4.8 0 0 1 6.8 6.8L12 20.4Z"
		})
	});
}
function GlyphWallet(props) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
		...base(props),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
			fill: "currentColor",
			d: "M4.6 6.2h14.8A2.2 2.2 0 0 1 21.6 8.4v9.4a2.2 2.2 0 0 1-2.2 2.2H4.6A2.2 2.2 0 0 1 2.4 17.8V8.4A2.2 2.2 0 0 1 4.6 6.2Zm11.6 6.1a1.3 1.3 0 1 0 0 2.6 1.3 1.3 0 0 0 0-2.6Z"
		})
	});
}
function GlyphSettings(props) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
		...base(props),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
			fill: "currentColor",
			d: "M10.4 3.4h3.2l.5 2.1a6.8 6.8 0 0 1 1.7 1l2-.9 1.6 2.8-1.5 1.5c.1.5.2 1 .2 1.5s-.1 1-.2 1.5l1.5 1.5-1.6 2.8-2-.9a6.8 6.8 0 0 1-1.7 1l-.5 2.1h-3.2l-.5-2.1a6.8 6.8 0 0 1-1.7-1l-2 .9-1.6-2.8 1.5-1.5A7 7 0 0 1 6.6 12c0-.5.1-1 .2-1.5L5.3 9l1.6-2.8 2 .9a6.8 6.8 0 0 1 1.7-1l.5-2.1ZM12 9.4A2.6 2.6 0 1 0 12 14.6 2.6 2.6 0 0 0 12 9.4Z"
		})
	});
}
function GlyphCalc(props) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
		...base(props),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
			fill: "currentColor",
			d: "M7 3.4h10A2.2 2.2 0 0 1 19.2 5.6v12.8A2.2 2.2 0 0 1 17 20.6H7a2.2 2.2 0 0 1-2.2-2.2V5.6A2.2 2.2 0 0 1 7 3.4Zm1.6 2.8v3.2h6.8V6.2H8.6ZM8 12.2h2v2H8v-2Zm3.2 0h2v2h-2v-2Zm3.2 0h2v2h-2v-2ZM8 15.6h2v2H8v-2Zm3.2 0h2v2h-2v-2Zm3.2 0h2v2h-2v-2Z"
		})
	});
}
function GlyphStore(props) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
		...base(props),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
			fill: "currentColor",
			d: "M5 6.2 6.4 3.8h11.2L19 6.2h1.2v2.2h-1.1l-.8 11.2A2 2 0 0 1 16.3 21.4H7.7a2 2 0 0 1-2-1.8L4.9 8.4H3.8V6.2H5Zm5.2 4.2v7.2h1.6v-7.2H10.2Zm3.6 0v7.2h1.6v-7.2h-1.6Z"
		})
	});
}
function GlyphVideo(props) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
		...base(props),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
			fill: "currentColor",
			d: "M4.6 6.6h10.2A2.2 2.2 0 0 1 17 8.8v6.4a2.2 2.2 0 0 1-2.2 2.2H4.6A2.2 2.2 0 0 1 2.4 15.2V8.8A2.2 2.2 0 0 1 4.6 6.6Zm13 2.3 4.2-2.2c.6-.3 1.4.1 1.4.8v8.9c0 .7-.8 1.1-1.4.8l-4.2-2.2V8.9Z"
		})
	});
}
function GlyphContacts(props) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
		...base(props),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
			fill: "currentColor",
			d: "M12 3.6a4.1 4.1 0 1 1 0 8.2 4.1 4.1 0 0 1 0-8.2ZM5.2 19.2c.6-3.4 3.4-5.4 6.8-5.4s6.2 2 6.8 5.4c.1.6-.3 1.2-1 1.2H6.2c-.7 0-1.1-.6-1-1.2Z"
		})
	});
}
var MAP = {
	phone: GlyphPhone,
	chat: GlyphChat,
	camera: GlyphCamera,
	gallery: GlyphGallery,
	maps: GlyphMaps,
	music: GlyphMusic,
	weather: GlyphWeather,
	notes: GlyphNotes,
	calendar: GlyphCalendar,
	clock: GlyphClock,
	files: GlyphFiles,
	mail: GlyphMail,
	browser: GlyphBrowser,
	health: GlyphHealth,
	wallet: GlyphWallet,
	settings: GlyphSettings,
	calc: GlyphCalc,
	store: GlyphStore,
	video: GlyphVideo,
	contacts: GlyphContacts
};
function AppGlyph({ id, className }) {
	const Cmp = MAP[id];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Cmp, { className });
}
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
function clamp(n, min, max) {
	return Math.min(max, Math.max(min, n));
}
function formatTime(date, withSeconds = false) {
	const h = date.getHours();
	const m = date.getMinutes();
	const hh = h.toString();
	const mm = m.toString().padStart(2, "0");
	if (!withSeconds) return `${hh}:${mm}`;
	return `${hh}:${mm}:${date.getSeconds().toString().padStart(2, "0")}`;
}
function formatLockTime(date) {
	return `${date.getHours() % 12 || 12}:${date.getMinutes().toString().padStart(2, "0")}`;
}
function lockTimeParts(date) {
	const h = date.getHours() % 12 || 12;
	const m = date.getMinutes().toString().padStart(2, "0");
	return {
		h: String(h),
		m
	};
}
function formatDateLong(date) {
	return date.toLocaleDateString("en-US", {
		weekday: "long",
		month: "long",
		day: "numeric"
	});
}
function formatDateShort(date) {
	return date.toLocaleDateString("en-US", {
		weekday: "short",
		month: "short",
		day: "numeric"
	});
}
var DEMO = new Date(2026, 8, 8, 9, 41, 0);
function useClock() {
	const [now, setNow] = (0, import_react.useState)(DEMO);
	(0, import_react.useEffect)(() => {
		setNow(/* @__PURE__ */ new Date());
		const id = window.setInterval(() => setNow(/* @__PURE__ */ new Date()), 1e3);
		return () => window.clearInterval(id);
	}, []);
	return now;
}
function Wallpaper() {
	const src = `/wallpapers/${useDevice((s) => s.os)}-${useDevice((s) => s.theme)}.jpg`;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "wallpaper",
		style: { backgroundImage: `url(${src})` },
		"aria-hidden": true
	});
}
function Dimmer() {
	const opacity = (1 - useDevice((s) => s.brightness) / 100) * .72;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "dimmer",
		style: { opacity },
		"aria-hidden": true
	});
}
function StatusBar({ showTime = true, light }) {
	const now = useClock();
	const wifi = useDevice((s) => s.wifi);
	const cellular = useDevice((s) => s.cellular);
	const airplane = useDevice((s) => s.airplane);
	const battery = useDevice((s) => s.battery);
	const os = useDevice((s) => s.os);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: cn("absolute inset-x-0 top-0 z-20 flex items-center justify-between px-5 text-status font-medium tabular-nums", light ? "text-black/80" : "text-white", os === "ios" ? "pt-3.5 h-12" : "pt-3 h-11"),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: cn("min-w-10", os === "ios" && "pl-1"),
			children: showTime ? `${now.getHours()}:${now.getMinutes().toString().padStart(2, "0")}` : ""
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-center gap-1",
			children: [
				airplane ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plane, {
					className: "size-3.5",
					strokeWidth: 2.4
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Signal, {
					className: "size-3.5",
					strokeWidth: 2.4
				}),
				wifi ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Wifi, {
					className: "size-3.5",
					strokeWidth: 2.4
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WifiOff, {
					className: "size-3.5",
					strokeWidth: 2.4
				}),
				!airplane && cellular ? null : null,
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "ml-0.5 text-[0.65rem]",
					children: [battery, "%"]
				}),
				battery > 20 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Battery, {
					className: "size-4",
					strokeWidth: 2.2
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BatteryCharging, {
					className: "size-4",
					strokeWidth: 2.2
				})
			]
		})]
	});
}
function HomeBar({ onHome }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		type: "button",
		"aria-label": "Home",
		className: "relative z-20 flex w-full justify-center pb-1 pt-1",
		onClick: onHome,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "home-bar" })
	});
}
function AppIcon({ app, os, size = "md", label, onPress }) {
	const dim = size === "sm" ? "size-8" : size === "lg" ? "size-16" : "h-14 w-14";
	const glyph = size === "sm" ? "size-4" : "size-7";
	const shape = os === "ios" ? "icon-squircle" : os === "oneui" ? "icon-circle" : "icon-harmony";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
		type: "button",
		onClick: () => onPress?.(app),
		className: "app-press flex flex-col items-center gap-1 transition-transform duration-150 ease-out",
		"aria-label": app.name,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: cn("grid place-items-center text-white shadow-sm", dim, shape),
			style: { background: `var(--swatch-${app.swatch})` },
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppGlyph, {
				id: app.glyph,
				className: glyph
			})
		}), label ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "w-14 truncate text-center text-icon-label font-medium leading-tight drop-shadow-sm",
			children: app.name
		}) : null]
	});
}
function FolderIcon({ folderId, os, label = true, onPress }) {
	const folder = FOLDER_BY_ID[folderId];
	if (!folder) return null;
	const apps = folder.appIds.slice(0, 4).map((id) => APP_BY_ID[id]).filter(Boolean);
	const shape = os === "ios" ? "icon-squircle" : os === "oneui" ? "icon-circle" : "icon-harmony";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
		type: "button",
		onClick: onPress,
		className: "app-press flex flex-col items-center gap-1 transition-transform duration-150 ease-out",
		"aria-label": `${folder.name} folder`,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: cn("grid h-14 w-14 grid-cols-2 gap-0.5 p-1.5", shape, os === "harmony" ? "spatial-card" : os === "ios" ? "liquid-glass" : "oneui-sheet"),
			children: apps.map((a) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: cn("grid place-items-center text-white", os === "oneui" ? "rounded-full" : "rounded-[5px]"),
				style: { background: `var(--swatch-${a.swatch})` },
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppGlyph, {
					id: a.glyph,
					className: "size-3"
				})
			}, a.id))
		}), label ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "w-14 truncate text-center text-icon-label font-medium leading-tight drop-shadow-sm",
			children: folder.name
		}) : null]
	});
}
function useAppOpener() {
	const setScreen = useDevice((s) => s.setScreen);
	const setOpenApp = useDevice((s) => s.setOpenApp);
	const toggle = useDevice((s) => s.toggle);
	const setExpandedFolder = useDevice((s) => s.setExpandedFolder);
	return (0, import_react.useCallback)((app) => {
		setExpandedFolder(null);
		if (app.id === "settings") {
			setScreen("settings");
			return;
		}
		if (app.id === "music") {
			toggle("mediaPlaying");
			return;
		}
		setOpenApp(app.id);
	}, [
		setExpandedFolder,
		setOpenApp,
		setScreen,
		toggle
	]);
}
function VerticalSlider({ value, onChange, label, icon, fillClass, className }) {
	const ref = (0, import_react.useRef)(null);
	const apply = (clientY) => {
		const el = ref.current;
		if (!el) return;
		const rect = el.getBoundingClientRect();
		const t = 1 - (clientY - rect.top) / rect.height;
		onChange(Math.round(clamp(t, 0, 1) * 100));
	};
	const onPointerDown = (e) => {
		e.currentTarget.setPointerCapture(e.pointerId);
		apply(e.clientY);
	};
	const onPointerMove = (e) => {
		if (!e.currentTarget.hasPointerCapture(e.pointerId)) return;
		apply(e.clientY);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		ref,
		role: "slider",
		"aria-label": label,
		"aria-valuemin": 0,
		"aria-valuemax": 100,
		"aria-valuenow": value,
		tabIndex: 0,
		className: cn("vslider h-full w-full rounded-[1.6rem]", className),
		onPointerDown,
		onPointerMove,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: cn("vslider-fill", fillClass ?? "bg-white"),
			style: { height: `${value}%` }
		}), icon ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "pointer-events-none absolute bottom-3 left-1/2 z-10 -translate-x-1/2",
			children: icon
		}) : null]
	});
}
function HorizontalSlider({ value, onChange, label, icon, className }) {
	const ref = (0, import_react.useRef)(null);
	const apply = (clientX) => {
		const el = ref.current;
		if (!el) return;
		const rect = el.getBoundingClientRect();
		const t = (clientX - rect.left) / rect.width;
		onChange(Math.round(clamp(t, 0, 1) * 100));
	};
	const onPointerDown = (e) => {
		e.currentTarget.setPointerCapture(e.pointerId);
		apply(e.clientX);
	};
	const onPointerMove = (e) => {
		if (!e.currentTarget.hasPointerCapture(e.pointerId)) return;
		apply(e.clientX);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		ref,
		role: "slider",
		"aria-label": label,
		"aria-valuemin": 0,
		"aria-valuemax": 100,
		"aria-valuenow": value,
		tabIndex: 0,
		className: cn("relative h-12 min-w-0 overflow-hidden rounded-full", className),
		onPointerDown,
		onPointerMove,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "absolute inset-y-0 left-0 bg-white",
			style: { width: `${value}%` }
		}), icon ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "pointer-events-none absolute left-3 top-1/2 z-10 -translate-y-1/2",
			children: icon
		}) : null]
	});
}
function SwipeToUnlock({ onUnlock, hint = true }) {
	const startY = (0, import_react.useRef)(null);
	const lastDy = (0, import_react.useRef)(0);
	const onPointerDown = (e) => {
		startY.current = e.clientY;
		lastDy.current = 0;
		e.currentTarget.setPointerCapture(e.pointerId);
	};
	const onPointerMove = (e) => {
		if (startY.current == null) return;
		lastDy.current = e.clientY - startY.current;
	};
	const onPointerUp = () => {
		if (lastDy.current < -56) onUnlock();
		startY.current = null;
		lastDy.current = 0;
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "absolute inset-x-0 bottom-0 z-30 flex h-16 flex-col items-center justify-end pb-5",
		onPointerDown,
		onPointerMove,
		onPointerUp,
		children: hint ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "unlock-hint text-status font-medium tracking-wide opacity-80",
			children: "Swipe up to open"
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "sr-only",
			children: "Swipe up to open"
		})
	});
}
function FolderOverlay({ os }) {
	const expandedFolder = useDevice((s) => s.expandedFolder);
	const setExpandedFolder = useDevice((s) => s.setExpandedFolder);
	const open = useAppOpener();
	if (!expandedFolder) return null;
	const folder = FOLDER_BY_ID[expandedFolder];
	if (!folder) return null;
	const apps = folder.appIds.map((id) => APP_BY_ID[id]).filter(Boolean);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "folder-scrim absolute inset-0 z-40 flex items-center justify-center px-6",
		onClick: () => setExpandedFolder(null),
		role: "presentation",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: cn("w-full max-w-64 p-5", os === "harmony" && "spatial-card rounded-[2rem]", os === "oneui" && "oneui-sheet rounded-[2.2rem]", os === "ios" && "liquid-glass rounded-[1.75rem]"),
			onClick: (e) => e.stopPropagation(),
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mb-4 text-center text-os-title font-semibold",
				children: folder.name
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid grid-cols-3 gap-x-3 gap-y-4",
				children: apps.map((app) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppIcon, {
					app,
					os,
					label: true,
					onPress: open
				}, app.id))
			})]
		})
	});
}
function MiniAppStage() {
	const openApp = useDevice((s) => s.openApp);
	const setOpenApp = useDevice((s) => s.setOpenApp);
	const os = useDevice((s) => s.os);
	if (!openApp) return null;
	const app = getApp(openApp);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "absolute inset-0 z-40 flex flex-col bg-black/80 backdrop-blur-2xl",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "flex items-end px-5 pb-3 pt-12",
			style: { background: `var(--swatch-${app.swatch})` },
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-3 text-white",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppGlyph, {
					id: app.glyph,
					className: "size-7"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-lg font-semibold",
					children: app.name
				})]
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-1 flex-col items-center justify-center gap-3 px-8 text-center text-white",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "text-os-body text-white/80",
				children: [
					"A preview surface for ",
					app.name,
					". Full apps live outside the lab."
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				onClick: () => setOpenApp(null),
				className: cn("mt-2 px-5 py-2.5 text-sm font-medium text-white app-press", os === "oneui" ? "rounded-full" : "rounded-2xl", os === "ios" ? "liquid-glass" : os === "harmony" ? "spatial-card" : "bg-white/15"),
				children: "Close"
			})]
		})]
	});
}
function TogglePad({ active, onClick, label, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		type: "button",
		"aria-pressed": active,
		"aria-label": label,
		onClick,
		className: cn("grid aspect-square place-items-center rounded-full transition-[background,box-shadow,transform] duration-200 ease-[var(--ease-smooth-out)] app-press", active ? "bg-[var(--skin-accent)] text-[#073033] shadow-[0_0_22px_var(--skin-glow)]" : "spatial-card text-[var(--skin-text)]"),
		children
	});
}
function HarmonySkin() {
	const screen = useDevice((s) => s.screen);
	const unlock = useDevice((s) => s.unlock);
	const setScreen = useDevice((s) => s.setScreen);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Wallpaper, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative z-10 flex h-full flex-col pt-11",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBar, { showTime: screen !== "lock" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative min-h-0 flex-1",
					children: [
						screen === "lock" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HarmonyLock, {}),
						screen === "home" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HarmonyHome, {}),
						screen === "controls" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HarmonyControls, {}),
						screen === "notifications" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HarmonyNotifications, {}),
						screen === "apps" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HarmonyApps, {}),
						screen === "settings" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HarmonySettings, {})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HomeBar, { onHome: () => screen === "lock" ? unlock() : setScreen("home") })
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FolderOverlay, { os: "harmony" }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MiniAppStage, {})
	] });
}
function HarmonyLock() {
	const now = useClock();
	const unlock = useDevice((s) => s.unlock);
	const mediaPlaying = useDevice((s) => s.mediaPlaying);
	const toggle = useDevice((s) => s.toggle);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex h-full flex-col px-5 pt-1",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-center text-status font-medium tracking-wide text-[var(--skin-muted)]",
				children: formatDateLong(now)
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 text-center font-light tabular-nums tracking-tight text-clock leading-none",
				children: formatLockTime(now)
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-8 grid grid-cols-2 gap-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "spatial-card col-span-2 rounded-[1.6rem] p-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-icon-label uppercase tracking-wider text-[var(--skin-muted)]",
								children: "Nimbus"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-2xl font-medium",
								children: "Dallas 72°"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-status text-[var(--skin-muted)]",
								children: "Clear · Light breeze"
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						className: "spatial-card rounded-[1.6rem] p-3 text-left app-press",
						onClick: () => toggle("mediaPlaying"),
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-icon-label uppercase tracking-wider text-[var(--skin-muted)]",
								children: "Drift"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 truncate text-sm font-medium",
								children: TRACK.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "truncate text-icon-label text-[var(--skin-muted)]",
								children: [
									mediaPlaying ? "Playing" : "Paused",
									" · ",
									TRACK.artist
								]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "spatial-card rounded-[1.6rem] p-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-icon-label uppercase tracking-wider text-[var(--skin-muted)]",
								children: "Orbit"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-sm font-medium",
								children: "Review 9:30"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-icon-label text-[var(--skin-muted)]",
								children: "Studio B"
							})
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-3 spatial-card flex items-center gap-3 rounded-full px-4 py-2.5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "grid size-8 place-items-center rounded-full bg-[var(--skin-accent)] text-[#073033]",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Signal, { className: "size-4" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "min-w-0 flex-1",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "truncate text-sm font-medium",
							children: [RIDE.title, " live window"]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "truncate text-icon-label text-[var(--skin-muted)]",
							children: RIDE.subtitle
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-status font-semibold tabular-nums",
						children: RIDE.eta
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SwipeToUnlock, { onUnlock: unlock })
		]
	});
}
function HarmonyHome() {
	const open = useAppOpener();
	const setExpandedFolder = useDevice((s) => s.setExpandedFolder);
	const setScreen = useDevice((s) => s.setScreen);
	const now = useClock();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex h-full flex-col px-5 pt-2",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				type: "button",
				onClick: () => setScreen("controls"),
				className: "spatial-card mb-4 w-full rounded-[1.5rem] p-4 text-left",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-icon-label uppercase tracking-wider text-[var(--skin-muted)]",
					children: "Dallas"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-1 flex items-end justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-3xl font-medium",
						children: "72°"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-status text-[var(--skin-muted)]",
						children: [formatTime(now), " · Clear"]
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid grid-cols-4 gap-x-3 gap-y-4",
				children: [
					HOME_APPS.harmony.map((id) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppIcon, {
						app: APP_BY_ID[id],
						os: "harmony",
						label: true,
						onPress: open
					}, id)),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FolderIcon, {
						folderId: "daily",
						os: "harmony",
						onPress: () => setExpandedFolder("daily")
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FolderIcon, {
						folderId: "create",
						os: "harmony",
						onPress: () => setExpandedFolder("create")
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppIcon, {
						app: APP_BY_ID.settings,
						os: "harmony",
						label: true,
						onPress: open
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-auto mb-2 flex justify-around rounded-[1.8rem] spatial-card px-2 py-3",
				children: DOCK_APPS.harmony.map((id) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppIcon, {
					app: APP_BY_ID[id],
					os: "harmony",
					onPress: open
				}, id))
			})
		]
	});
}
function HarmonyControls() {
	const s = useDevice();
	const t = (key) => () => s.toggle(key);
	const kindIcon = {
		lamp: Lamp,
		speaker: Speaker,
		tablet: Tablet,
		watch: Watch
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex h-full min-h-0 flex-col gap-2.5 px-4 pt-1 pb-2",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "spatial-card flex items-center gap-3 rounded-[1.4rem] px-4 py-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "grid size-9 place-items-center rounded-full bg-[var(--skin-accent)] text-[#073033]",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Signal, { className: "size-4" })
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "min-w-0 flex-1",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm font-medium",
						children: "Live service window"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "truncate text-icon-label text-[var(--skin-muted)]",
						children: [
							RIDE.title,
							" · ",
							RIDE.subtitle
						]
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "spatial-card flex items-center gap-3 rounded-[1.4rem] px-3 py-2.5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "grid size-11 shrink-0 place-items-center rounded-full text-white",
						style: { background: "var(--swatch-music)" },
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppGlyph, {
							id: "music",
							className: "size-5"
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "min-w-0 flex-1",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "truncate text-sm font-medium",
							children: TRACK.title
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "truncate text-icon-label text-[var(--skin-muted)]",
							children: TRACK.artist
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						"aria-label": s.mediaPlaying ? "Pause" : "Play",
						onClick: () => s.toggle("mediaPlaying"),
						className: "grid size-10 place-items-center rounded-full bg-[var(--skin-accent)] text-[#073033]",
						children: s.mediaPlaying ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pause, { className: "size-4" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Play, { className: "size-4" })
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid min-h-0 flex-1 grid-cols-[1fr_4.4rem_4.4rem] gap-2.5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid h-full grid-cols-2 grid-rows-3 gap-2.5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TogglePad, {
								active: s.wifi,
								onClick: t("wifi"),
								label: "Wi-Fi",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Wifi, { className: "size-5" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TogglePad, {
								active: s.bluetooth,
								onClick: t("bluetooth"),
								label: "Bluetooth",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bluetooth, { className: "size-5" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TogglePad, {
								active: s.airplane,
								onClick: t("airplane"),
								label: "Airplane",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plane, { className: "size-5" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TogglePad, {
								active: s.dnd,
								onClick: t("dnd"),
								label: "Do not disturb",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BellOff, { className: "size-5" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TogglePad, {
								active: s.flashlight,
								onClick: t("flashlight"),
								label: "Flashlight",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Flashlight, { className: "size-5" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TogglePad, {
								active: s.rotationLock,
								onClick: t("rotationLock"),
								label: "Rotation lock",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RotateCw, { className: "size-5" })
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "spatial-card overflow-hidden rounded-full",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(VerticalSlider, {
							value: s.brightness,
							onChange: s.setBrightness,
							label: "Brightness",
							fillClass: "bg-[var(--skin-accent)]",
							icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sun, { className: "size-5 text-[#073033]" })
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "spatial-card overflow-hidden rounded-full",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(VerticalSlider, {
							value: s.volume,
							onChange: s.setVolume,
							label: "Volume",
							fillClass: "bg-white",
							icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Volume2, { className: "size-5 text-[#163038]" })
						})
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mb-2 px-1 text-icon-label font-medium uppercase tracking-wider text-[var(--skin-muted)]",
				children: "Super Device"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex gap-2 overflow-x-auto pb-1",
				children: NEARBY.map((d) => {
					const Icon = kindIcon[d.kind];
					const on = s.nearby[d.id];
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: () => s.toggleNearby(d.id),
						className: cn("flex shrink-0 items-center gap-2 rounded-full px-3 py-2 text-icon-label font-medium transition-transform duration-150 app-press", on ? "bg-[var(--skin-accent)] text-[#073033] shadow-[0_0_16px_var(--skin-glow)]" : "spatial-card"),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "size-3.5" }), d.name]
					}, d.id);
				})
			})] })
		]
	});
}
function HarmonyNotifications() {
	const dismissed = useDevice((s) => s.dismissedNotifs);
	const dismiss = useDevice((s) => s.dismissNotif);
	const restore = useDevice((s) => s.restoreNotifs);
	const items = NOTIFS.filter((n) => !dismissed.includes(n.id));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex h-full flex-col px-4 pt-2",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mb-3 flex items-center justify-between px-1",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-os-title font-semibold",
				children: "Notifications"
			}), dismissed.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				className: "text-status text-[var(--skin-accent)]",
				onClick: restore,
				children: "Restore"
			}) : null]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "flex flex-col gap-2.5 overflow-y-auto pb-4",
			children: items.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-10 text-center text-sm text-[var(--skin-muted)]",
				children: "All clear."
			}) : items.map((n) => {
				const app = APP_BY_ID[n.appId];
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					onClick: () => dismiss(n.id),
					className: "spatial-card flex gap-3 rounded-[1.4rem] p-3 text-left",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "icon-harmony mt-0.5 grid size-9 shrink-0 place-items-center text-white",
						style: { background: `var(--swatch-${app.swatch})` },
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppGlyph, {
							id: app.glyph,
							className: "size-4"
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "min-w-0 flex-1",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "flex items-baseline justify-between gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "truncate text-sm font-semibold",
								children: n.title
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-icon-label text-[var(--skin-muted)]",
								children: n.time
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "mt-0.5 block text-status leading-snug text-[var(--skin-muted)]",
							children: n.body
						})]
					})]
				}, n.id);
			})
		})]
	});
}
function HarmonyApps() {
	const q = useDevice((s) => s.appSearch);
	const setQ = useDevice((s) => s.setAppSearch);
	const open = useAppOpener();
	const list = APPS.filter((a) => a.name.toLowerCase().includes(q.toLowerCase()));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex h-full flex-col px-4 pt-1",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "spatial-card mb-3 flex items-center gap-2 rounded-full px-3 py-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "size-4 text-[var(--skin-muted)]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
				value: q,
				onChange: (e) => setQ(e.target.value),
				placeholder: "Search apps",
				className: "w-full bg-transparent text-sm outline-none placeholder:text-[var(--skin-muted)]"
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid grid-cols-4 gap-x-3 gap-y-4 overflow-y-auto pb-4",
			children: list.map((app) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppIcon, {
				app,
				os: "harmony",
				label: true,
				onPress: open
			}, app.id))
		})]
	});
}
function HarmonySettings() {
	const s = useDevice();
	const q = s.settingsSearch;
	const rows = [
		{
			id: "wifi",
			label: "Wi-Fi",
			on: s.wifi,
			key: "wifi"
		},
		{
			id: "bt",
			label: "Bluetooth",
			on: s.bluetooth,
			key: "bluetooth"
		},
		{
			id: "air",
			label: "Airplane mode",
			on: s.airplane,
			key: "airplane"
		},
		{
			id: "dnd",
			label: "Do Not Disturb",
			on: s.dnd,
			key: "dnd"
		},
		{
			id: "aod",
			label: "Always-On Display",
			on: s.aod,
			key: "aod"
		},
		{
			id: "haptics",
			label: "Haptics",
			on: s.haptics,
			key: "haptics"
		}
	].filter((r) => r.label.toLowerCase().includes(q.toLowerCase()));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex h-full flex-col overflow-y-auto px-4 pt-1 pb-3",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mb-3 px-1 text-xl font-semibold",
				children: "Settings"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "spatial-card mb-3 flex items-center gap-2 rounded-full px-3 py-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "size-4 text-[var(--skin-muted)]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					value: q,
					onChange: (e) => s.setSettingsSearch(e.target.value),
					placeholder: "Search settings",
					className: "w-full bg-transparent text-sm outline-none placeholder:text-[var(--skin-muted)]"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "spatial-card mb-3 flex items-center gap-3 rounded-[1.4rem] p-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "grid size-11 place-items-center rounded-full bg-[var(--skin-accent)] text-[#073033]",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(User, { className: "size-5" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex-1",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm font-semibold",
							children: "Ada Voss"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-icon-label text-[var(--skin-muted)]",
							children: "Harmony 5.0 · Nova Pulse"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "size-4 text-[var(--skin-muted)]" })
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "spatial-card divide-y divide-white/10 overflow-hidden rounded-[1.4rem]",
				children: [rows.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-between px-4 py-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-sm",
						children: r.label
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						"aria-pressed": r.on,
						onClick: () => s.toggle(r.key),
						className: cn("h-7 w-12 rounded-full p-0.5 transition-colors duration-200", r.on ? "bg-[var(--skin-accent)]" : "bg-white/20"),
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: cn("block size-6 rounded-full bg-white transition-transform duration-200", r.on ? "translate-x-5" : "translate-x-0") })
					})]
				}, r.id)), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-between px-4 py-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-sm",
						children: "Appearance"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: s.toggleTheme,
						className: "rounded-full bg-white/15 px-3 py-1 text-icon-label font-medium",
						children: s.theme === "dark" ? "Dark" : "Light"
					})]
				})]
			})
		]
	});
}
function OneUiSkin() {
	const screen = useDevice((s) => s.screen);
	const unlock = useDevice((s) => s.unlock);
	const setScreen = useDevice((s) => s.setScreen);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Wallpaper, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative z-10 flex h-full flex-col pt-11",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBar, { showTime: screen !== "lock" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative min-h-0 flex-1",
					children: [
						screen === "lock" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(OneUiLock, {}),
						screen === "home" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(OneUiHome, {}),
						screen === "controls" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(OneUiControls, {}),
						screen === "notifications" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(OneUiNotifications, {}),
						screen === "apps" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(OneUiApps, {}),
						screen === "settings" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(OneUiSettings, {})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HomeBar, { onHome: () => screen === "lock" ? unlock() : setScreen("home") })
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FolderOverlay, { os: "oneui" }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MiniAppStage, {})
	] });
}
function OneUiLock() {
	const now = useClock();
	const unlock = useDevice((s) => s.unlock);
	const playing = useDevice((s) => s.mediaPlaying);
	const toggle = useDevice((s) => s.toggle);
	const setOpenApp = useDevice((s) => s.setOpenApp);
	const { h, m } = lockTimeParts(now);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex h-full flex-col px-5 pt-1",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "text-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "clock-stack",
						children: h
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "clock-stack",
						children: m
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm font-medium text-[var(--skin-muted)]",
						children: formatDateShort(now)
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-auto flex flex-col items-center gap-3 pb-1",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "unlock-hint text-status font-medium tracking-wide opacity-80",
					children: "Swipe to unlock"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative z-40 flex w-full items-center gap-2.5 px-1",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							"aria-label": "Phone",
							onClick: () => setOpenApp("phone"),
							className: "grid size-12 shrink-0 place-items-center rounded-full oneui-soft",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppGlyph, {
								id: "phone",
								className: "size-5"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: () => toggle("mediaPlaying"),
							className: "flex h-12 min-w-0 flex-1 items-center gap-2 rounded-full oneui-soft py-1 pl-1 pr-3",
							"aria-label": "Now Bar",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "grid size-10 shrink-0 place-items-center rounded-full text-white",
									style: { background: "var(--swatch-music)" },
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppGlyph, {
										id: "music",
										className: "size-4"
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "min-w-0 flex-1 text-left",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "block truncate text-status font-semibold",
										children: TRACK.title
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "block truncate text-icon-label text-[var(--skin-muted)]",
										children: TRACK.artist
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SkipBack, { className: "size-3.5 shrink-0" }),
								playing ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pause, { className: "size-4 shrink-0" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Play, { className: "size-4 shrink-0" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SkipForward, { className: "size-3.5 shrink-0" })
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							"aria-label": "Camera",
							onClick: () => setOpenApp("camera"),
							className: "grid size-12 shrink-0 place-items-center rounded-full oneui-soft",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Camera, { className: "size-5" })
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SwipeToUnlock, {
				onUnlock: unlock,
				hint: false
			})
		]
	});
}
function OneUiHome() {
	const open = useAppOpener();
	const setExpandedFolder = useDevice((s) => s.setExpandedFolder);
	const setScreen = useDevice((s) => s.setScreen);
	const now = useClock();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex h-full flex-col px-4 pt-2",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-3 grid grid-cols-2 gap-2.5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					onClick: () => setScreen("notifications"),
					className: "rounded-[1.7rem] p-3.5 text-left text-white",
					style: { background: "var(--swatch-weather)" },
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sun, { className: "mb-2 size-7" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-3xl font-semibold leading-none",
							children: "72°"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-status opacity-90",
							children: "Dallas"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-icon-label opacity-80",
							children: "Clear"
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					onClick: () => setScreen("notifications"),
					className: "rounded-[1.7rem] oneui-soft p-3.5 text-left",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-icon-label text-[var(--skin-muted)]",
							children: formatDateShort(now)
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-2xl font-semibold tabular-nums leading-none",
							children: formatLockTime(now)
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-sm font-medium leading-snug",
							children: "Design review"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-icon-label text-[var(--skin-muted)]",
							children: "Tomorrow 9:30"
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				type: "button",
				onClick: () => setScreen("apps"),
				className: "oneui-soft mb-4 flex w-full items-center gap-2 rounded-full px-4 py-2.5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "size-4 text-[var(--skin-muted)]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-sm text-[var(--skin-muted)]",
					children: "Search"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid grid-cols-4 gap-x-2 gap-y-5",
				children: [
					HOME_APPS.oneui.map((id) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppIcon, {
						app: APP_BY_ID[id],
						os: "oneui",
						label: true,
						onPress: open
					}, id)),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FolderIcon, {
						folderId: "daily",
						os: "oneui",
						onPress: () => setExpandedFolder("daily")
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FolderIcon, {
						folderId: "create",
						os: "oneui",
						onPress: () => setExpandedFolder("create")
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppIcon, {
						app: APP_BY_ID.clock,
						os: "oneui",
						label: true,
						onPress: open
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppIcon, {
						app: APP_BY_ID.settings,
						os: "oneui",
						label: true,
						onPress: open
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-auto flex flex-col items-center gap-2 pb-1",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex gap-1.5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "size-1.5 rounded-full bg-white" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "size-1.5 rounded-full bg-white/35" })]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex w-full justify-around px-1 py-1",
					children: DOCK_APPS.oneui.map((id) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppIcon, {
						app: APP_BY_ID[id],
						os: "oneui",
						onPress: open
					}, id))
				})]
			})
		]
	});
}
function SoftPill({ children, className, onClick, label }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		type: "button",
		"aria-label": label,
		onClick,
		className: cn("oneui-soft flex min-w-0 items-center gap-2 overflow-hidden rounded-full px-2.5 py-2.5 text-left text-status font-medium", className),
		children
	});
}
function DotToggle({ active, onClick, label, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		type: "button",
		"aria-pressed": active,
		"aria-label": label,
		onClick,
		className: cn("grid size-11 place-items-center rounded-full transition-colors duration-200", active ? "oneui-on" : "bg-white/10 text-[var(--skin-text)]"),
		children
	});
}
function OneUiControls() {
	const s = useDevice();
	const t = (key) => () => s.toggle(key);
	const setScreen = useDevice((st) => st.setScreen);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex h-full min-h-0 flex-col gap-2 overflow-x-hidden overflow-y-auto px-3 pt-1 pb-2",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center justify-end gap-2 px-1",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						"aria-label": "Edit",
						className: "grid size-8 place-items-center rounded-full oneui-soft",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pencil, { className: "size-3.5" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						"aria-label": "Power",
						className: "grid size-8 place-items-center rounded-full oneui-soft",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Power, { className: "size-3.5" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						"aria-label": "Settings",
						className: "grid size-8 place-items-center rounded-full oneui-soft",
						onClick: () => setScreen("settings"),
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Settings, { className: "size-3.5" })
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid min-w-0 grid-cols-2 gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					"aria-pressed": s.wifi,
					onClick: t("wifi"),
					className: cn("flex min-w-0 items-center gap-2 rounded-full px-2.5 py-2.5 text-left", s.wifi ? "oneui-on" : "oneui-soft"),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Wifi, { className: "size-5 shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "min-w-0",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "block truncate text-status font-semibold",
							children: "Wi-Fi"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "block truncate text-icon-label opacity-80",
							children: s.wifi ? "Studio" : "Off"
						})]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					"aria-pressed": s.bluetooth,
					onClick: t("bluetooth"),
					className: cn("flex min-w-0 items-center gap-2 rounded-full px-2.5 py-2.5 text-left", s.bluetooth ? "oneui-on" : "oneui-soft"),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bluetooth, { className: "size-5 shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "min-w-0",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "block truncate text-status font-semibold",
							children: "Bluetooth"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "block truncate text-icon-label opacity-80",
							children: s.bluetooth ? "On" : "Off"
						})]
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "oneui-soft grid grid-cols-4 gap-3 rounded-[1.7rem] px-3 py-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DotToggle, {
						active: !s.rotationLock,
						onClick: t("rotationLock"),
						label: "Auto rotate",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RotateCw, { className: "size-4" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DotToggle, {
						active: s.airplane,
						onClick: t("airplane"),
						label: "Airplane",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plane, { className: "size-4" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DotToggle, {
						active: s.flashlight,
						onClick: t("flashlight"),
						label: "Flashlight",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Flashlight, { className: "size-4" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DotToggle, {
						active: s.cellular,
						onClick: t("cellular"),
						label: "Mobile data",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Signal, { className: "size-4" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DotToggle, {
						active: s.haptics,
						onClick: t("haptics"),
						label: "NFC",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Nfc, { className: "size-4" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DotToggle, {
						active: s.batterySaver,
						onClick: t("batterySaver"),
						label: "Power saving",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Battery, { className: "size-4" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DotToggle, {
						active: s.aod,
						onClick: t("aod"),
						label: "Location",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "size-4" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DotToggle, {
						active: s.hotspot,
						onClick: t("hotspot"),
						label: "Hotspot",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Share2, { className: "size-4" })
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "oneui-soft flex min-w-0 flex-col gap-2.5 rounded-[1.7rem] px-3 py-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HorizontalSlider, {
						value: s.brightness,
						onChange: s.setBrightness,
						label: "Brightness",
						className: "h-10 min-w-0 flex-1 bg-white/10",
						icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sun, { className: "size-4 text-black/70" })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						"aria-label": "Dark mode",
						"aria-pressed": s.theme === "dark",
						onClick: s.toggleTheme,
						className: cn("grid size-10 shrink-0 place-items-center rounded-full", s.theme === "dark" ? "oneui-on" : "bg-white/10"),
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Moon, { className: "size-4" })
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HorizontalSlider, {
						value: s.volume,
						onChange: s.setVolume,
						label: "Volume",
						className: "h-10 min-w-0 flex-1 bg-white/10",
						icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Music2, { className: "size-4 text-black/70" })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						"aria-label": "Mute",
						onClick: () => s.setVolume(s.volume > 0 ? 0 : 54),
						className: "grid size-10 shrink-0 place-items-center rounded-full bg-white/10",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Volume2, { className: "size-4" })
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "oneui-soft flex items-center justify-between rounded-full px-3 py-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					className: "flex items-center gap-2 text-status font-medium",
					onClick: () => s.toggle("mediaPlaying"),
					children: [s.mediaPlaying ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pause, { className: "size-3.5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Play, { className: "size-3.5" }), s.mediaPlaying ? TRACK.title : "Play last song"]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "rounded-full bg-white/10 px-2.5 py-1 text-icon-label text-[var(--skin-muted)]",
					children: "Media output"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid min-w-0 grid-cols-2 gap-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SoftPill, {
						label: "Nearby devices",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Share2, { className: "size-4" }), "Nearby devices"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SoftPill, {
						label: "Device control",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Cast, { className: "size-4" }), "Device control"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SoftPill, {
						label: "Smart View",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Cast, { className: "size-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "block",
							children: "Smart View"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "block text-icon-label font-normal text-[var(--skin-muted)]",
							children: "Mirror screen"
						})] })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SoftPill, {
						label: "Modes",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Moon, { className: "size-4" }), "Modes"]
					})
				]
			})
		]
	});
}
function OneUiNotifications() {
	const dismissed = useDevice((s) => s.dismissedNotifs);
	const dismiss = useDevice((s) => s.dismissNotif);
	const restore = useDevice((s) => s.restoreNotifs);
	const now = useClock();
	const items = NOTIFS.filter((n) => !dismissed.includes(n.id));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex h-full flex-col px-4 pt-1",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mb-3 flex items-end justify-between px-1",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-3xl font-semibold tabular-nums leading-none",
				children: formatLockTime(now)
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 text-status text-[var(--skin-muted)]",
				children: formatDateShort(now)
			})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex gap-2",
				children: dismissed.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: "text-status text-[var(--skin-accent)]",
					onClick: restore,
					children: "Restore"
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: "text-status text-[var(--skin-muted)]",
					onClick: restore,
					children: "Clear"
				})
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "flex flex-col gap-2 overflow-y-auto pb-3",
			children: items.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-10 text-center text-sm text-[var(--skin-muted)]",
				children: "No notifications"
			}) : items.map((n) => {
				const app = APP_BY_ID[n.appId];
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					onClick: () => dismiss(n.id),
					className: "oneui-soft flex gap-3 rounded-[1.6rem] p-3.5 text-left",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "mt-0.5 grid size-9 shrink-0 place-items-center rounded-full text-white",
						style: { background: `var(--swatch-${app.swatch})` },
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppGlyph, {
							id: app.glyph,
							className: "size-4"
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "min-w-0 flex-1",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "flex justify-between gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "truncate text-sm font-semibold",
								children: n.title
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-icon-label text-[var(--skin-muted)]",
								children: n.time
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "mt-0.5 block text-status text-[var(--skin-muted)]",
							children: n.body
						})]
					})]
				}, n.id);
			})
		})]
	});
}
function OneUiApps() {
	const q = useDevice((s) => s.appSearch);
	const setQ = useDevice((s) => s.setAppSearch);
	const open = useAppOpener();
	const list = APPS.filter((a) => a.name.toLowerCase().includes(q.toLowerCase())).sort((a, b) => a.name.localeCompare(b.name));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex h-full flex-col px-4 pt-1",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "min-h-0 flex-1 overflow-y-auto pb-2",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid grid-cols-4 gap-x-3 gap-y-5 pt-1",
				children: list.map((app) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppIcon, {
					app,
					os: "oneui",
					label: true,
					onPress: open
				}, app.id))
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "oneui-soft mb-1 flex items-center gap-2 rounded-full px-3 py-2.5",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "size-4 text-[var(--skin-muted)]" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					value: q,
					onChange: (e) => setQ(e.target.value),
					placeholder: "Search",
					className: "w-full bg-transparent text-sm outline-none placeholder:text-[var(--skin-muted)]"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Ellipsis, { className: "size-4 text-[var(--skin-muted)]" })
			]
		})]
	});
}
function OneUiSettings() {
	const s = useDevice();
	const q = s.settingsSearch;
	const rows = [
		{
			label: "Connections",
			sub: s.wifi ? "Wi-Fi · Bluetooth" : "Wi-Fi off",
			swatch: "mail",
			Icon: Wifi
		},
		{
			label: "Notifications",
			sub: s.dnd ? "Do not disturb" : "On",
			swatch: "calendar",
			Icon: Moon
		},
		{
			label: "Display",
			sub: s.theme === "dark" ? "Dark" : "Light",
			swatch: "browser",
			Icon: Sun
		},
		{
			label: "Sounds and vibration",
			sub: s.haptics ? "Haptics on" : "Haptics off",
			swatch: "clock",
			Icon: Volume2
		},
		{
			label: "Battery",
			sub: `${s.battery}%`,
			swatch: "phone",
			Icon: Battery
		},
		{
			label: "Security",
			sub: "Lock screen",
			swatch: "files",
			Icon: Lock
		}
	].filter((r) => r.label.toLowerCase().includes(q.toLowerCase()));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex h-full flex-col overflow-y-auto px-4 pt-1 pb-3",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mb-3 text-2xl font-semibold",
				children: "Settings"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "oneui-soft mb-3 flex items-center gap-2 rounded-full px-3 py-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "size-4 text-[var(--skin-muted)]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					value: q,
					onChange: (e) => s.setSettingsSearch(e.target.value),
					placeholder: "Search",
					className: "w-full bg-transparent text-sm outline-none placeholder:text-[var(--skin-muted)]"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "oneui-soft mb-3 flex items-center gap-3 rounded-[1.4rem] p-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "grid size-12 place-items-center rounded-full bg-[var(--skin-accent)] text-white",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(User, { className: "size-5" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex-1",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm font-semibold",
							children: "Ada Voss"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-icon-label text-[var(--skin-muted)]",
							children: "One UI 7 · Aether 9"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "size-4 text-[var(--skin-muted)]" })
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mb-3 flex justify-around px-1",
				children: [
					{
						label: "Connections",
						Icon: Wifi,
						swatch: "mail"
					},
					{
						label: "Display",
						Icon: Sun,
						swatch: "browser"
					},
					{
						label: "Battery",
						Icon: Battery,
						swatch: "phone"
					},
					{
						label: "Sound",
						Icon: Volume2,
						swatch: "clock"
					}
				].map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "flex flex-col items-center gap-1",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "grid size-12 place-items-center rounded-full text-white",
						style: { background: `var(--swatch-${c.swatch})` },
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(c.Icon, { className: "size-5" })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-[0.6rem] text-[var(--skin-muted)]",
						children: c.label
					})]
				}, c.label))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "oneui-soft overflow-hidden rounded-[1.4rem]",
				children: [rows.map((r, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: cn("flex items-center gap-3 px-3 py-2.5", i > 0 && "border-t border-white/10"),
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "grid size-9 place-items-center rounded-full text-white",
							style: { background: `var(--swatch-${r.swatch})` },
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(r.Icon, { className: "size-4" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "min-w-0 flex-1",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "block text-sm",
								children: r.label
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "block text-icon-label text-[var(--skin-muted)]",
								children: r.sub
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "size-4 text-[var(--skin-muted)]" })
					]
				}, r.label)), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-between border-t border-white/10 px-4 py-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-sm",
						children: "Dark mode"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						"aria-pressed": s.theme === "dark",
						onClick: s.toggleTheme,
						className: cn("h-7 w-12 rounded-full p-0.5 transition-colors duration-200", s.theme === "dark" ? "bg-[var(--skin-on)]" : "bg-black/20"),
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: cn("block size-6 rounded-full bg-white transition-transform duration-200", s.theme === "dark" ? "translate-x-5" : "translate-x-0") })
					})]
				})]
			})
		]
	});
}
function IosSkin() {
	const screen = useDevice((s) => s.screen);
	const unlock = useDevice((s) => s.unlock);
	const setScreen = useDevice((s) => s.setScreen);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Wallpaper, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative z-10 flex h-full flex-col pt-12",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBar, { showTime: screen !== "lock" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative min-h-0 flex-1",
					children: [
						screen === "lock" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(IosLock, {}),
						screen === "home" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(IosHome, {}),
						screen === "controls" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(IosControls, {}),
						screen === "notifications" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(IosNotifications, {}),
						screen === "apps" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(IosApps, {}),
						screen === "settings" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(IosSettings, {})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HomeBar, { onHome: () => screen === "lock" ? unlock() : setScreen("home") })
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FolderOverlay, { os: "ios" }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MiniAppStage, {})
	] });
}
function IosLock() {
	const now = useClock();
	const unlock = useDevice((s) => s.unlock);
	const flashlight = useDevice((s) => s.flashlight);
	const toggle = useDevice((s) => s.toggle);
	const setOpenApp = useDevice((s) => s.setOpenApp);
	const playing = useDevice((s) => s.mediaPlaying);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex h-full flex-col px-6 pt-1",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-center text-os-title font-medium tracking-wide",
				children: formatDateLong(now)
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "ios-clock-glass text-center font-semibold tabular-nums tracking-tighter text-clock leading-none",
				children: formatLockTime(now)
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				onClick: () => toggle("mediaPlaying"),
				className: "liquid-glass mt-6 w-full rounded-[1.6rem] p-3 text-left",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "grid size-11 place-items-center text-white icon-squircle",
							style: { background: "var(--swatch-music)" },
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppGlyph, {
								id: "music",
								className: "size-5"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "min-w-0 flex-1",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "block truncate text-sm font-semibold",
								children: TRACK.title
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "block truncate text-status text-[var(--skin-muted)]",
								children: [
									playing ? "Now Playing" : "Paused",
									" · ",
									TRACK.artist
								]
							})]
						}),
						playing ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pause, { className: "size-5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Play, { className: "size-5" })
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				type: "button",
				className: "liquid-glass mt-2 flex w-full items-center gap-3 rounded-full px-3 py-2 text-left",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "grid size-8 place-items-center rounded-full text-white",
						style: { background: "var(--swatch-maps)" },
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppGlyph, {
							id: "maps",
							className: "size-4"
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "min-w-0 flex-1",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "block truncate text-status font-semibold",
							children: RIDE.title
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "block truncate text-icon-label text-[var(--skin-muted)]",
							children: RIDE.subtitle
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-status font-semibold tabular-nums",
						children: RIDE.eta
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative z-40 mt-auto mb-12 flex items-center justify-between px-1",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					"aria-label": "Flashlight",
					"aria-pressed": flashlight,
					onClick: () => toggle("flashlight"),
					className: cn("grid size-14 place-items-center rounded-full liquid-glass", flashlight && "bg-white text-black"),
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Flashlight, { className: "size-6" })
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					"aria-label": "Camera",
					onClick: () => setOpenApp("camera"),
					className: "grid size-14 place-items-center rounded-full liquid-glass",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Camera, { className: "size-6" })
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SwipeToUnlock, { onUnlock: unlock })
		]
	});
}
function IosHome() {
	const open = useAppOpener();
	const setExpandedFolder = useDevice((s) => s.setExpandedFolder);
	const setScreen = useDevice((s) => s.setScreen);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex h-full flex-col px-5 pt-3",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-4 grid grid-cols-2 gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "liquid-glass rounded-[1.6rem] p-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-icon-label font-medium text-[var(--skin-muted)]",
							children: "Nimbus"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-2xl font-semibold",
							children: "72°"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-icon-label text-[var(--skin-muted)]",
							children: "Dallas · Clear"
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "liquid-glass rounded-[1.6rem] p-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-icon-label font-medium text-[var(--skin-muted)]",
							children: "Orbit"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm font-semibold leading-snug",
							children: "Design review"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-icon-label text-[var(--skin-muted)]",
							children: "Tomorrow 9:30"
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid grid-cols-4 gap-x-3 gap-y-4",
				children: [
					HOME_APPS.ios.map((id) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppIcon, {
						app: APP_BY_ID[id],
						os: "ios",
						label: true,
						onPress: open
					}, id)),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FolderIcon, {
						folderId: "daily",
						os: "ios",
						onPress: () => setExpandedFolder("daily")
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FolderIcon, {
						folderId: "create",
						os: "ios",
						onPress: () => setExpandedFolder("create")
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppIcon, {
						app: APP_BY_ID.settings,
						os: "ios",
						label: true,
						onPress: open
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-auto mb-2 flex flex-col items-center gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					onClick: () => setScreen("apps"),
					className: "liquid-glass flex items-center gap-1.5 rounded-full px-4 py-1.5 text-icon-label font-medium",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "size-3" }), "Search"]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "liquid-glass mx-1 flex w-full justify-around rounded-[2rem] px-2 py-3",
					children: DOCK_APPS.ios.map((id) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppIcon, {
						app: APP_BY_ID[id],
						os: "ios",
						onPress: open
					}, id))
				})]
			})
		]
	});
}
function GlassTile({ active, onClick, label, children, className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		type: "button",
		"aria-label": label,
		"aria-pressed": active,
		onClick,
		className: cn("liquid-glass grid place-items-center rounded-[1.5rem] transition-colors duration-200", active && "bg-white text-black", className),
		children
	});
}
function IosControls() {
	const s = useDevice();
	const t = (key) => () => s.toggle(key);
	const setOpenApp = useDevice((st) => st.setOpenApp);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex h-full min-h-0 flex-col gap-3 px-4 pt-2 pb-2",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid grid-cols-2 gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "liquid-glass grid grid-cols-2 grid-rows-2 gap-2 rounded-[1.7rem] p-2.5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MiniRound, {
							active: s.airplane,
							onClick: t("airplane"),
							label: "Airplane",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plane, { className: "size-4" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MiniRound, {
							active: s.cellular,
							onClick: t("cellular"),
							label: "Cellular",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Signal, { className: "size-4" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MiniRound, {
							active: s.wifi,
							onClick: t("wifi"),
							label: "Wi-Fi",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Wifi, { className: "size-4" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MiniRound, {
							active: s.bluetooth,
							onClick: t("bluetooth"),
							label: "Bluetooth",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bluetooth, { className: "size-4" })
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "liquid-glass flex flex-col justify-between rounded-[1.7rem] p-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-icon-label font-medium text-[var(--skin-muted)]",
							children: "Drift"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "truncate text-sm font-semibold",
							children: TRACK.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "truncate text-icon-label text-[var(--skin-muted)]",
							children: TRACK.artist
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => s.toggle("mediaPlaying"),
							className: "self-end",
							"aria-label": s.mediaPlaying ? "Pause" : "Play",
							children: s.mediaPlaying ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pause, { className: "size-5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Play, { className: "size-5" })
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid h-36 grid-cols-2 gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "liquid-glass overflow-hidden rounded-[1.7rem]",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(VerticalSlider, {
						value: s.brightness,
						onChange: s.setBrightness,
						label: "Brightness",
						fillClass: "bg-white",
						icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sun, { className: "size-4 text-black/70" })
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "liquid-glass overflow-hidden rounded-[1.7rem]",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(VerticalSlider, {
						value: s.volume,
						onChange: s.setVolume,
						label: "Volume",
						fillClass: "bg-white",
						icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Volume2, { className: "size-4 text-black/70" })
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid grid-cols-4 gap-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GlassTile, {
						active: s.flashlight,
						onClick: t("flashlight"),
						label: "Flashlight",
						className: "aspect-square",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Flashlight, { className: "size-5" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GlassTile, {
						label: "Timer",
						className: "aspect-square",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Timer, { className: "size-5" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GlassTile, {
						label: "Calculator",
						className: "aspect-square",
						onClick: () => setOpenApp("calc"),
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Calculator, { className: "size-5" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GlassTile, {
						label: "Camera",
						className: "aspect-square",
						onClick: () => setOpenApp("camera"),
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Camera, { className: "size-5" })
					})
				]
			})
		]
	});
}
function MiniRound({ active, onClick, label, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		type: "button",
		"aria-label": label,
		"aria-pressed": active,
		onClick,
		className: cn("relative grid aspect-square place-items-center rounded-full transition-colors duration-200", active ? "bg-[var(--skin-accent)] text-white" : "bg-white/10"),
		children
	});
}
function IosNotifications() {
	const dismissed = useDevice((s) => s.dismissedNotifs);
	const dismiss = useDevice((s) => s.dismissNotif);
	const restore = useDevice((s) => s.restoreNotifs);
	const items = NOTIFS.filter((n) => !dismissed.includes(n.id));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex h-full flex-col px-4 pt-3",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mb-3 flex items-center justify-between px-1",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm font-semibold text-[var(--skin-muted)]",
				children: "Notification Center"
			}), dismissed.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				className: "text-status text-[var(--skin-accent)]",
				onClick: restore,
				children: "Restore"
			}) : null]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "flex flex-col gap-2 overflow-y-auto pb-4",
			children: items.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-10 text-center text-sm text-[var(--skin-muted)]",
				children: "No Notifications"
			}) : items.map((n) => {
				const app = APP_BY_ID[n.appId];
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					onClick: () => dismiss(n.id),
					className: "liquid-glass flex gap-3 rounded-[1.4rem] p-3 text-left",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "mt-0.5 grid size-8 shrink-0 place-items-center text-white icon-squircle",
						style: { background: `var(--swatch-${app.swatch})` },
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppGlyph, {
							id: app.glyph,
							className: "size-4"
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "min-w-0 flex-1",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "flex justify-between gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "truncate text-sm font-semibold",
								children: n.title
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-icon-label text-[var(--skin-muted)]",
								children: n.time
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "mt-0.5 block text-status leading-snug text-[var(--skin-muted)]",
							children: n.body
						})]
					})]
				}, n.id);
			})
		})]
	});
}
function IosApps() {
	const q = useDevice((s) => s.appSearch);
	const setQ = useDevice((s) => s.setAppSearch);
	const open = useAppOpener();
	const setExpandedFolder = useDevice((s) => s.setExpandedFolder);
	const list = APPS.filter((a) => a.name.toLowerCase().includes(q.toLowerCase()));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex h-full flex-col px-4 pt-2",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "liquid-glass mb-3 flex items-center gap-2 rounded-[0.9rem] px-3 py-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "size-4 text-[var(--skin-muted)]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					value: q,
					onChange: (e) => setQ(e.target.value),
					placeholder: "App Library",
					className: "w-full bg-transparent text-sm outline-none placeholder:text-[var(--skin-muted)]"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid grid-cols-2 gap-3 overflow-y-auto pb-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LibraryCard, {
						title: "Social",
						ids: [
							"chat",
							"mail",
							"contacts",
							"phone"
						],
						onOpen: open
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LibraryCard, {
						title: "Utilities",
						ids: [
							"calc",
							"clock",
							"files",
							"settings"
						],
						onOpen: open
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						className: "liquid-glass rounded-[1.6rem] p-3 text-left",
						onClick: () => setExpandedFolder("daily"),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mb-2 text-sm font-semibold",
							children: "Daily"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid grid-cols-2 gap-2",
							children: [
								"calendar",
								"notes",
								"clock",
								"files"
							].map((id) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "grid aspect-square place-items-center text-white icon-squircle",
								style: { background: `var(--swatch-${APP_BY_ID[id].swatch})` },
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppGlyph, {
									id: APP_BY_ID[id].glyph,
									className: "size-5"
								})
							}, id))
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LibraryCard, {
						title: "Media",
						ids: [
							"music",
							"gallery",
							"video",
							"camera"
						],
						onOpen: open
					})
				]
			}),
			q ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid grid-cols-4 gap-3 pb-3",
				children: list.map((app) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppIcon, {
					app,
					os: "ios",
					label: true,
					onPress: open
				}, app.id))
			}) : null
		]
	});
}
function LibraryCard({ title, ids, onOpen }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "liquid-glass rounded-[1.6rem] p-3",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mb-2 text-sm font-semibold",
			children: title
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid grid-cols-2 gap-2",
			children: ids.map((id) => {
				const app = APP_BY_ID[id];
				return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					"aria-label": app.name,
					onClick: () => onOpen(app),
					className: "grid aspect-square place-items-center text-white icon-squircle",
					style: { background: `var(--swatch-${app.swatch})` },
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppGlyph, {
						id: app.glyph,
						className: "size-5"
					})
				}, id);
			})
		})]
	});
}
function IosSettings() {
	const s = useDevice();
	const q = s.settingsSearch;
	const groups = [[
		{
			label: "Airplane Mode",
			key: "airplane",
			on: s.airplane
		},
		{
			label: "Wi-Fi",
			key: "wifi",
			on: s.wifi
		},
		{
			label: "Bluetooth",
			key: "bluetooth",
			on: s.bluetooth
		}
	], [{
		label: "Focus",
		key: "dnd",
		on: s.dnd
	}, {
		label: "Haptics",
		key: "haptics",
		on: s.haptics
	}]];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex h-full flex-col overflow-y-auto px-4 pt-1 pb-3",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mb-3 text-2xl font-bold",
				children: "Settings"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "liquid-glass mb-3 flex items-center gap-2 rounded-[0.9rem] px-3 py-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "size-4 text-[var(--skin-muted)]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					value: q,
					onChange: (e) => s.setSettingsSearch(e.target.value),
					placeholder: "Search",
					className: "w-full bg-transparent text-sm outline-none placeholder:text-[var(--skin-muted)]"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "liquid-glass mb-3 flex items-center gap-3 rounded-[1.1rem] p-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "grid size-12 place-items-center rounded-full bg-[var(--skin-accent)] text-white",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(User, { className: "size-5" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex-1",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm font-semibold",
							children: "Ada Voss"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-icon-label text-[var(--skin-muted)]",
							children: "Cloud Account · Crystal 16"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "size-4 text-[var(--skin-muted)]" })
				]
			}),
			groups.map((rows, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "liquid-glass mb-3 overflow-hidden rounded-[1.1rem]",
				children: rows.filter((r) => r.label.toLowerCase().includes(q.toLowerCase())).map((r, idx, arr) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: cn("flex items-center justify-between px-4 py-2.5", idx < arr.length - 1 && "border-b border-white/10"),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-sm",
						children: r.label
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						"aria-pressed": r.on,
						onClick: () => s.toggle(r.key),
						className: cn("h-7 w-12 rounded-full p-0.5 transition-colors duration-200", r.on ? "bg-[#34c759]" : "bg-white/20"),
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: cn("block size-6 rounded-full bg-white transition-transform duration-200", r.on ? "translate-x-5" : "translate-x-0") })
					})]
				}, r.label))
			}, i)),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "liquid-glass flex items-center justify-between rounded-[1.1rem] px-4 py-2.5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-sm",
					children: "Appearance"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: s.toggleTheme,
					className: "text-sm font-medium text-[var(--skin-accent)]",
					children: s.theme === "dark" ? "Dark" : "Light"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 text-center text-icon-label text-[var(--skin-muted)]",
				children: "iOS 26 · SkinLab Device"
			})
		]
	});
}
function PhoneFrame() {
	const os = useDevice((s) => s.os);
	const theme = useDevice((s) => s.theme);
	const flashlight = useDevice((s) => s.flashlight);
	const lock = useDevice((s) => s.lock);
	const setVolume = useDevice((s) => s.setVolume);
	const volume = useDevice((s) => s.volume);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "phone-wrap mx-auto",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "phone",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: "phone-btn phone-btn-vol-up",
					"aria-label": "Volume up",
					onClick: () => setVolume(volume + 8)
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: "phone-btn phone-btn-vol-down",
					"aria-label": "Volume down",
					onClick: () => setVolume(volume - 8)
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: "phone-btn phone-btn-power",
					"aria-label": "Lock",
					onClick: lock
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "phone-bezel",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "phone-screen",
						"data-skin": os,
						"data-theme": theme,
						children: [
							os === "ios" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "island",
								"aria-hidden": true
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "punch",
								"aria-hidden": true
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: cn("phone-led", flashlight && "on"),
								"aria-hidden": true
							}),
							os === "harmony" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HarmonySkin, {}),
							os === "oneui" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(OneUiSkin, {}),
							os === "ios" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(IosSkin, {}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dimmer, {})
						]
					})
				})
			]
		})
	});
}
var OS_ORDER = [
	"harmony",
	"oneui",
	"ios"
];
function StudioShell() {
	const os = useDevice((s) => s.os);
	const screen = useDevice((s) => s.screen);
	const theme = useDevice((s) => s.theme);
	const setOs = useDevice((s) => s.setOs);
	const setScreen = useDevice((s) => s.setScreen);
	const toggleTheme = useDevice((s) => s.toggleTheme);
	(0, import_react.useEffect)(() => {
		document.documentElement.dataset.theme = theme;
	}, [theme]);
	const meta = OS_META[os];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
		className: "studio-spot min-h-dvh",
		"data-theme": theme,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex min-h-dvh max-w-5xl flex-col px-3 pb-3 pt-3 md:px-8 md:pb-6 md:pt-5",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
					className: "mb-2.5 flex items-center justify-between gap-2 md:mb-4 md:items-start",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "min-w-0",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-display text-xl font-semibold tracking-tight md:text-3xl",
							children: "SkinLab"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-0.5 hidden max-w-xs text-sm text-muted md:block",
							children: meta.line
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "seg",
							children: OS_ORDER.map((id) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								"data-active": os === id,
								onClick: () => setOs(id),
								children: OS_META[id].name
							}, id))
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: toggleTheme,
							"aria-label": theme === "dark" ? "Switch to light mode" : "Switch to dark mode",
							className: "grid size-10 shrink-0 place-items-center rounded-full border border-border bg-surface text-fg app-press md:size-11",
							children: theme === "dark" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sun, { className: "size-4" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Moon, { className: "size-4" })
						})]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "chip-row mb-3 md:mb-4",
					children: SCREENS.map((sc) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						"data-active": screen === sc.id,
						onClick: () => setScreen(sc.id),
						children: sc.label
					}, sc.id))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-1 flex-col items-center justify-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PhoneFrame, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-3 hidden text-center text-status text-muted md:block",
						children: [
							meta.name,
							" ",
							meta.version,
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "mx-1.5 text-subtle",
								children: "·"
							}),
							meta.line
						]
					})]
				})
			]
		})
	});
}
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StudioShell, {});
}
//#endregion
export { Home as component };
