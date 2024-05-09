// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss",'@vite-pwa/nuxt'],

  tailwindcss:{
    cssPath: "~/assets/css/tailwind.css",
    configPath: "~/tailwing.config.ts"
  },
  
  pwa: {
    manifest: {  
      name: "nuxt.js",  
      short_name: "nuxt.js",  
      theme_color: "#fff",  
      background_color: "#fff",  
      display: "standalone",  
      orientation: "portrait",  
      scope: "/",  
      start_url: "/",
      icons: [
        {
        src: "arteased_final_logo.png",
        sizes: "96x96",
        type: "images/png"
      }],
  },
    devOptions: {
      enabled: true,
    }
  }
})
