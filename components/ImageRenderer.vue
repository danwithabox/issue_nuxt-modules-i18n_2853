<template>
    <div>
        <span>Image <code>{{ computed_imgSrc }}</code></span>
        <img :src="computed_imgSrc" />
    </div>
</template>

<script setup lang="ts">
const _fmt = `color: lightcoral`;
onMounted(() => {
    console.log(`%c[ImageViewer] onMounted`, _fmt);
});
onUpdated(() => {
    console.log(`%c[ImageViewer] onUpdated`, _fmt);
});

const reqDate = useState<number>();
function updateDate() { reqDate.value = Date.now(); }
const computed_imgSrc = computed(() => {
    const nuxtApp = useNuxtApp();
    if (!nuxtApp.isHydrating) updateDate();
    return `/img/nuxt.png?date=${reqDate.value}`;
});
</script>

<style scoped lang="scss"></style>
