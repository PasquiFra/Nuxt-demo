// https://nuxt.com/docs/api/configuration/nuxt-config
import { resolve } from "path";

export default {
  alias: {
    '@': resolve(__dirname, "/"),
  },
  css: [
    'bootstrap/dist/css/bootstrap.css',
    "./assets/main.scss",
  ],
  plugins: [
    '~/plugins/bootstrap-vue.js',
    '~/plugins/pinia.js'
  ]
}
