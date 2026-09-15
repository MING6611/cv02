const menuButton = document.querySelector(".menu-btn");
const nav = document.querySelector(".nav nav");

menuButton.addEventListener("click", () => {
  const isOpen = nav.style.display === "flex";
  nav.style.display = isOpen ? "none" : "flex";
  nav.style.position = "absolute";
  nav.style.top = "76px";
  nav.style.right = "5vw";
  nav.style.flexDirection = "column";
  nav.style.background = "#f7f6f2";
  nav.style.padding = "20px";
  nav.style.border = "1px solid #deddd8";
});
