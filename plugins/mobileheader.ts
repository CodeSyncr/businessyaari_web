export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.hook("page:finish", () => {
    const headerBar = document.querySelector(".header-bar");
    if (headerBar && headerBar.classList.contains("active")) {
      headerBar.classList.remove("active");
      var menu = document.querySelector(".menu");
      if (menu) {
        menu.classList.remove("active");
      }
    }

    if (headerBar) {
      headerBar.addEventListener("click", () => {
        headerBar.classList.toggle("active");
        var menu = document.querySelector(".menu");
        if (menu) {
          menu.classList.toggle("active");
        }
      });
    }
  });
});
