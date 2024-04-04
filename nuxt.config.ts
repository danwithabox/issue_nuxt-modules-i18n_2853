import { createResolver } from "nuxt/kit";
import { i18n_locales } from "./i18n/locales";

const { resolve, } = createResolver(import.meta.url);

export default defineNuxtConfig({
    devtools: { enabled: true },
    modules: [
        "@nuxt/ui",
        "@nuxtjs/i18n"
    ],
    i18n: {
        vueI18n: resolve("./i18n/i18n.config.ts"),

        detectBrowserLanguage: {
            redirectOn: "root",
            useCookie:  true,
            cookieKey:  "i18n_redirected",
        },
        strategy: "prefix_and_default",

        defaultLocale: i18n_locales["en-US"],
        locales:       [
            {
                code: i18n_locales["en-US"],
                name: "English (US)",
            },
            {
                code: i18n_locales["en-GB"],
                name: "English (GB)",
            },
        ],
    },
    typescript: {
        strict:    true,
        shim:      false,
        typeCheck: true,
        tsConfig:  {
            compilerOptions: {
                noUncheckedIndexedAccess: true,
            },
        },
    },
})