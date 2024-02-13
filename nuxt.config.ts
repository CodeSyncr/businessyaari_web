// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["nuxt-aos", "nuxt-swiper", "@nuxtjs/supabase", "nuxt-snackbar"],
  app: {
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      meta: [
        {
          name: "description",
          content:
            "File your Income tax return with our support in minutes. Businessyaari ensures accurate efiling of ITR with maximum tax refund. Registered with incometax.gov.in.",
        },
        {
          property: "og:type",
          content: "website",
        },
        {
          property: "og:site_name",
          content: "Businessyaari",
        },
        {
          property: "og:title",
          content: "File Income-tax return for 2024",
        },
        {
          property: "og:description",
          content:
            "File your Income tax return with our support in minutes. Businessyaari ensures accurate efiling of ITR with maximum tax refund. Registered with incometax.gov.in.",
        },
        {
          property: "og:image",
          content: "/assets/logo/preloader.png",
        },
        {
          name: "twitter:title",
          content: "File Income-tax return for 2024",
        },
        {
          name: "twitter:description",
          content:
            "File your Income tax return with our support in minutes. Businessyaari ensures accurate efiling of ITR with maximum tax refund. Registered with incometax.gov.in.",
        },
        {
          name: "twitter:card",
          content: "summary_large_image",
        },
        {
          name: "twitter:site",
          content: "@businessyaari",
        },
        {
          name: "twitter:image",
          content: "/assets/logo/preloader.png",
        },
      ],
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
  supabase: {
    redirect: false,
  },
  snackbar: {
    bottom: true,
    right: true,
    duration: 5000,
  },
});
