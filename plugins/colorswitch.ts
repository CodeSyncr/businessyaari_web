export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.hook("page:finish", () => {
    const moon: any = document.querySelector("#btnSwitch");
    const icon: any = document.querySelector("#btnSwitch img");

    if (moon) {
      moon.addEventListener("click", () => {
        const theme = document.documentElement.getAttribute("data-bs-theme");
        document.documentElement.setAttribute(
          "data-bs-theme",
          theme === "dark" ? "light" : "dark"
        );
        if (theme === "light") {
          icon.src = "/assets/images/icon/sun.svg"; // Adjust the path based on your project structure
          moon.style.backgroundColor = "white";
        } else {
          icon.src = "/assets/images/icon/moon.svg"; // Adjust the path based on your project structure
          moon.style.backgroundColor = "black";
        }
        // Assuming changeImage is a function defined elsewhere in your code
        // Uncomment the line below if necessary
        changeImage();
      });
    }
  });
});
