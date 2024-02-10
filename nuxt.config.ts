// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["nuxt-aos", "nuxt-swiper"],
  app: {
    head: {
      bodyAttrs: {
        class: "bg-gray-50",
        "data-aos-easing": "ease",
        "data-aos-duration": "400",
        "data-aos-delay": "0",
      },
      htmlAttrs: {
        "data-bs-theme": "light",
        class: "fontawesome-i2svg-active fontawesome-i2svg-complete",
      },
      link: [
        // <link rel="stylesheet" href="https://myawesome-lib.css">
        { rel: "stylesheet", href: "/assets/css/bootstrap.min.css" },
        { rel: "stylesheet", href: "/assets/css/all.min.css" },
        { rel: "stylesheet", href: "/assets/css/lightcase.css" },
        // { rel: "stylesheet", href: "/assets/css/swiper-bundle.min.css" },
        { rel: "stylesheet", href: "/assets/css/style.css" },
      ],
      script: [
        {
          type: "text/javascript",
          hid: "main",
          src: "/assets/js/bootstrap.bundle.min.js",
        },
        {
          type: "text/javascript",
          hid: "main",
          src: "/assets/js/all.min.js",
        },
        {
          type: "text/javascript",
          hid: "main",
          src: "/assets/js/fslightbox.js",
        },
        {
          type: "text/javascript",
          hid: "main",
          src: "/assets/js/purecounter_vanilla.js",
        },
        {
          type: "text/javascript",
          hid: "main",
          src: "/assets/js/custom.js",
        },
      ],
    },
  },
});
