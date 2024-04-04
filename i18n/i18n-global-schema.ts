import type { DefineLocaleMessage, DefineDateTimeFormat, DefineNumberFormat } from "vue-i18n";

export function _i18n_DefineLocaleMessage<T extends DefineLocaleMessage>(schema: T) { return schema; }

declare module "vue-i18n" {
    export interface DefineLocaleMessage {
        GREET: string,
    }
}
