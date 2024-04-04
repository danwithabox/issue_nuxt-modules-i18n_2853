const kv = <KV extends string>(kv: KV) => ({ [kv]: kv, }) as { [K in KV]: KV; };
export const i18n_locales = {
    ...kv("en-US"),
    ...kv("en-GB"),
} as const;
