/// <reference types="vite/client" />
declare module "*.glb" {
    const src: string;
    export default src;
}

declare module "*.gltf" {
    const src: string;
    export default src;
}

declare module "*.png" {
    const src: string;
    export default src;
}

declare module "*.jpg" {
    const src: string;
    export default src;
}

declare module "*.jpeg" {
    const src: string;
    export default src;
}

declare module "*.webp" {
    const src: string;
    export default src;
}

declare module "*.jsx" {
    import type { ComponentType } from "react";
    const component: ComponentType<Record<string, unknown>>;
    export default component;
}