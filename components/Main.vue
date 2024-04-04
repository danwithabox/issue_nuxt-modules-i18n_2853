<template>
    <div>
        <div class="my-2">{{ t("GREET") }}</div>
        <hr class="my-2">
        <div class="flex gap-2">
            <div class="flex flex-col gap-4">
                <div>
                    <span>With <code>setLocale()</code></span>
                    <USelect v-model="uselect_setLocale" :options="uselect_localeOptions"></USelect>
                </div>
                <hr>
                <div>
                    <span>With <code>:to="switchLocalePath()"</code></span>
                    <div class="flex flex-col gap-2">
                        <NuxtLink v-for="_locale in i18n_locales"
                            :to="switchLocalePath(_locale)"
                        >
                            🔗 {{ _locale }}
                        </NuxtLink>
                    </div>
                </div>
                <hr>
                <div>
                    <span>With assignment to <code>locale</code></span>
                    <USelect v-model="uselect_assignLocale" :options="uselect_localeOptions"></USelect>
                </div>
            </div>
            <div>
                <WordList></WordList>
            </div>
            <div>
                <ImageRenderer></ImageRenderer>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { i18n_locales } from '~/i18n/locales';

const { t, locale, setLocale, } = useI18n();
const switchLocalePath = useSwitchLocalePath();

const _fmt = `color: lightgreen`;
onMounted(() => {
    console.log(`%c[Main] onMounted`, _fmt);
});
onUpdated(() => {
    console.log(`%c[Main] onUpdated`, _fmt);
});

const uselect_localeOptions = [
    { name: "US", value: i18n_locales["en-US"], },
    { name: "GB", value: i18n_locales["en-GB"], },
] satisfies Array<{ name: string, value: string, disabled?: boolean, }>;

const uselect_setLocale = computed<string>({
    get: () => locale.value,
    set: (_locale) => setLocale(_locale),
});
const uselect_assignLocale = computed<string>({
    get: () => locale.value,
    set: (_locale) => locale.value = _locale,
});

</script>

<style scoped lang="scss"></style>
