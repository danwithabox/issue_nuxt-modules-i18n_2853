<template>
    <div>
        {{ t("GREET") }}
        <div class="flex gap-2">
            <div>
                <USelect v-model="uselect_locale" :options="uselect_localeOptions"></USelect>
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

onMounted(() => {
    console.log(`[Main] onMounted`);
});

onUpdated(() => {
    console.log(`[Main] onUpdated`);
});

const uselect_locale = ref<string>(locale.value);
const uselect_localeOptions = [
    { name: "US", value: i18n_locales["en-US"], },
    { name: "GB", value: i18n_locales["en-GB"], },
] satisfies Array<{ name: string, value: string, disabled?: boolean, }>;

watch(() => uselect_locale.value, (_locale) => {
    setLocale(_locale);
});
</script>

<style scoped lang="scss"></style>
