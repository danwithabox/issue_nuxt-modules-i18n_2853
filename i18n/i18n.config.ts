import { i18n_locales } from "~/i18n/locales";
import enUS from "~/i18n/locales/en-US";
import enGB from "~/i18n/locales/en-GB";

export default defineI18nConfig(() => {
    return {
        legacy:   false,
        locale:   i18n_locales["en-US"],
        messages: {
            [i18n_locales["en-US"]]: enUS,
            [i18n_locales["en-GB"]]: enGB,
        },
    };
});
