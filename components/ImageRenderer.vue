<template>
    <div>
        <span>Image <code>{{ computed_imgSrc }}</code></span>
        <img :src="computed_imgSrc" />
    </div>
</template>

<script setup lang="ts">
onMounted(() => {
    console.log(`[ImageViewer] onMounted`);
});

onUpdated(() => {
    console.log(`[ImageViewer] onUpdated`);
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
