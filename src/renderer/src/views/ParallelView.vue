<template>
    <v-app-bar density="comfortable" flat style="border-bottom-width: 1px">
        <v-btn variant="flat" color="primary" class="me-2">Run all</v-btn>
        <v-btn variant="flat" color="secondary" class="me-2">Cancel</v-btn>
        <v-btn variant="flat" color="secondary">Clean</v-btn>
        <v-spacer></v-spacer>
        <v-progress-circular :rotate="360" :size="50" :width="3" :model-value="downloadProgress" color="teal">
            {{ getDownloadInPercentage }}
        </v-progress-circular>
    </v-app-bar>
</template>

<script>
export default {
    data() {
        return {
            downloadProgress: 56
        }
    },
    computed: {
        getDownloadInPercentage() {
            // returns current download progress together with a %
            return this.downloadProgress + "%"
        }
    }
}
</script>