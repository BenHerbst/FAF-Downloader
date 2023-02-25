<template>
    <v-progress-circular :rotate="360" :size="45" :width="3" :model-value="progress" color="teal">
        {{ getProgressInPercentage }}
    </v-progress-circular>
</template>

<script>
export default {
    props: {
        progress: 0
    },
    computed: {
        getProgressInPercentage() {
            return this.progress + "%"
        }
    }
}
</script>