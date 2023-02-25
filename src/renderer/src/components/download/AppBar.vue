<template>
    <v-app-bar density="comfortable" flat style="border-bottom-width: 1px">
        <v-btn variant="flat" color="primary" class="me-2">Run all</v-btn>
        <v-btn variant="flat" color="secondary" class="me-2">Cancel</v-btn>
        <v-btn variant="flat" color="secondary">Clean</v-btn>
        <v-text-field density="compact" variant="regular" label="Enter URL for download"
            append-inner-icon="mdi-plus" single-line hide-details @click:append-inner="onClick"></v-text-field>
        <DownloadProgress progress=0 class="me-2"></DownloadProgress>
    </v-app-bar>
</template>

<script>
import DownloadProgress from './DownloadProgress.vue';

export default {
    data() {
        return {};
    },
    components: { DownloadProgress }
}
</script>