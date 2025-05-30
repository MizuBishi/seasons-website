// Header background on scroll
const headers = document.querySelectorAll(".header");

headers.forEach((header) => {
  let lastScroll = 0;

  window.addEventListener("scroll", () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > 50) {
      header.classList.add("header--scrolled");
    } else {
      header.classList.remove("header--scrolled");
    }

    lastScroll = currentScroll;
  });
});
