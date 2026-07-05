/// <reference types="astro/client" />

declare module "*.svg" {
	const component: import("astro/types").SvgComponent;
	export default component;
}
