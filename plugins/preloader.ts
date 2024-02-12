// export default ({ app }: any) => {
//   window.addEventListener("load", function () {
//     const preloader: any = document.querySelector(".preloader");
//     preloader.style.transition = "opacity .5s ease";
//     preloader.style.opacity = "0";
//     setTimeout(function () {
//       preloader.style.display = "none";
//     }, 1500);
//   });
// };

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.hook("page:finish", () => {
    const loadingElement = document.querySelector(".preloader");
    if (loadingElement) {
      loadingElement.remove();
    }
  });
});
