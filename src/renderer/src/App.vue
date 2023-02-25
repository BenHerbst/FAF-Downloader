<template>
  <v-app>
    <v-navigation-drawer v-model="drawer" :rail="rail" permanent>
      <!-- hamburger menu -->
      <v-list density="compact" nav select-strategy="independent">
        <v-list-item prepend-icon="mdi-menu" title="Close" @click="rail = !rail"></v-list-item>
      </v-list>

      <v-divider></v-divider>

      <!-- other menu items -->
      <v-list density="compact" nav active-color="primary" mandatory>
        <v-list-item prepend-icon="mdi-call-split" title="Parallel Mode" value="parallel"
          @click="this.$router.push('/')"></v-list-item>
        <v-list-item prepend-icon="mdi-animation" title="Single Mode" value="single"
          @click="this.$router.push('/single')"></v-list-item>
        <v-list-item prepend-icon="mdi-cog" title="Settings" value="settings"
          @click="this.$router.push('/settings')"></v-list-item>
      </v-list>

      <template v-slot:append>
        <v-list density="compact" nav>
          <v-list-item :prepend-icon="darkModeItemIcon" :title="darkModeItemText"
            @click="onDarkModeItemClicked"></v-list-item>
        </v-list>
      </template>
    </v-navigation-drawer>

    <v-main style="min-height: 300px">
      <RouterView></RouterView>
    </v-main>
  </v-app>
</template>

<style lang="scss"></style>

<script>
import { useTheme } from 'vuetify'

export default {
  data() {
    const theme = useTheme()

    return { drawer: true, rail: false, darkModeItemText: "Switch to dark mode", darkModeItemIcon: "mdi-weather-night", darkMode: false, theme }
  },
  methods: {
    onDarkModeItemClicked(event) {
      this.switchDarkMode()
      // change icon to the one matching the current theme
      this.darkModeItemIcon = this.darkMode ? "mdi-weather-sunny" : "mdi-weather-night"
    },
    switchDarkMode() {
      // switch between light and dark theme
      this.darkMode = !this.darkMode
      this.theme.global.name = this.darkMode ? 'dark' : 'light'
    }
  }
}
</script>