import type { RouteLocationNormalizedLoaded } from "#vue-router";

export function i18n_pageKey(route: RouteLocationNormalizedLoaded) {
    const key: string = useRouteBaseName()(route) ?? route.fullPath;
    return key;
}
