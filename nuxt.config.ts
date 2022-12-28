// https://nuxt.com/docs/api/configuration/nuxt-config
/* 
<meta property="" content="">

<!-- Twitter -->
<meta property="twitter:url" content="https://ecodes.vercel.app/">
<meta property="twitter:title" content="E-Kod Tekshiruvchi">
<meta property="twitter:description" content="Mahsulotlardagi moddalar halolligini tekshirish

">
<meta property="twitter:image" content="">
*/

export default defineNuxtConfig({
  modules: ["nuxt-windicss"],
  css: ["@/assets/css/main.css"],
  app: {
    head: {
      title: "E-Kod Tekshiruvchi",
      link: [
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Material+Icons",
        },
      ],
      meta: [
        {
          name: "title",
          content: "E-Kod Tekshiruvchi",
        },
        {
          name: "description",
          content: "Mahsulotlardagi moddalar halolligini tekshirish",
        },
        {
          property: "og:type",
          content: "website",
        },
        {
          property: "og:url",
          content: "https://ecodes.vercel.app/",
        },
        {
          property: "og:title",
          content: "E-Kod Tekshiruvchi",
        },
        {
          property: "og:description",
          content: "Mahsulotlardagi moddalar halolligini tekshirish",
        },
        {
          property: "og:image",
          content: "http://localhost:3000/_nuxt/assets/images/main.png",
        },
        {
          property: "twitter:card",
          content: "http://localhost:3000/_nuxt/assets/images/main.png",
        },
        {
          property: "twitter:url",
          content: "https://ecodes.vercel.app/",
        },
        {
          property: "twitter:title",
          content: "E-Kod Tekshiruvchi",
        },
        {
          property: "twitter:description",
          content: "Mahsulotlardagi moddalar halolligini tekshirish",
        },
        {
          property: "twitter:image",
          content: "http://localhost:3000/_nuxt/assets/images/main.png",
        },
      ],
    },
  },
});
