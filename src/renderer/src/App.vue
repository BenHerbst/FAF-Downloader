<template>
  <v-app>
    <v-navigation-drawer v-model="drawer" color="grey-lighten-5" :rail="rail" permanent>
      <!-- hamburger menu -->
      <v-list density="compact" nav>
        <v-list-item prepend-icon="mdi-menu" title="Close" value="hamburger" @click="rail = !rail"></v-list-item>

        <v-divider class="my-3"></v-divider>

        <!-- other menu items -->
        <v-list-item prepend-icon="mdi-call-split" title="Parallel Mode" value="parallel"></v-list-item>
        <v-list-item prepend-icon="mdi-animation" title="Single Mode" value="single"></v-list-item>
        <v-list-item prepend-icon="mdi-cog" title="Settings" value="settings"></v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main style="min-height: 300px">
      <RouterView></RouterView>
    </v-main>
  </v-app>
</template>

<style lang="scss"></style>

<script>
export default {
  data() {
    return { drawer: true, rail: false }
  }
}
</script>