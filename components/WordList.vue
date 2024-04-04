<template>
    <div>
        <UCommandPalette
            v-model="selected"
            :groups="[{ key: `words`, commands: computed_wordsLocalized, }]"
            :autoclear="false"
        ></UCommandPalette>
    </div>
</template>

<script setup lang="ts">
import { i18n_locales } from '~/i18n/locales';

const { t, locale, locales, availableLocales, setLocale, } = useI18n();

onMounted(() => {
    console.log(`[WordList] onMounted`);
});

onUpdated(() => {
    console.log(`[WordList] onUpdated`);
});

const { _getId, } = (() => { let curr = 0; return { _getId: () => curr++, }; })();
const wordsSource = ref([
    { id: _getId(), [i18n_locales["en-GB"]]: `Lorry`,      [i18n_locales["en-US"]]: `Truck`     },
    { id: _getId(), [i18n_locales["en-GB"]]: `Flat`,       [i18n_locales["en-US"]]: `Apartment` },
    { id: _getId(), [i18n_locales["en-GB"]]: `Lift`,       [i18n_locales["en-US"]]: `Elevator`  },
    { id: _getId(), [i18n_locales["en-GB"]]: `Biscuit`,    [i18n_locales["en-US"]]: `Cookie`    },
    { id: _getId(), [i18n_locales["en-GB"]]: `Petrol`,     [i18n_locales["en-US"]]: `Gas`       },
    { id: _getId(), [i18n_locales["en-GB"]]: `Bonnet`,     [i18n_locales["en-US"]]: `Hood`      },
    { id: _getId(), [i18n_locales["en-GB"]]: `Boot`,       [i18n_locales["en-US"]]: `Trunk`     },
    { id: _getId(), [i18n_locales["en-GB"]]: `Holiday`,    [i18n_locales["en-US"]]: `Vacation`  },
    { id: _getId(), [i18n_locales["en-GB"]]: `Sleigh`,     [i18n_locales["en-US"]]: `Sled`      },
    { id: _getId(), [i18n_locales["en-GB"]]: `Chips`,      [i18n_locales["en-US"]]: `Fries`     },
]);
const computed_wordsLocalized = computed(() => {
    const commandPaletteData: Array<{ id: number, label: string }> = wordsSource.value.map((entry) => {
        const _locale = locale.value as typeof i18n_locales[keyof typeof i18n_locales];
        const { id, } = entry;
        const label = entry[_locale];
        return { id, label, };
    });
    return commandPaletteData;
});
const selected = ref([computed_wordsLocalized.value[0]]);

</script>

<style scoped lang="scss"></style>
