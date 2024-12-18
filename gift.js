function highlightLines() {
  const lines = document.querySelectorAll(".poem-line");
  const windowHeight = window.innerHeight;

  lines.forEach((line) => {
    const rect = line.getBoundingClientRect();

    // Check if the line is in the center of the viewport
    if (rect.top >= 0 && rect.bottom <= windowHeight) {
      line.classList.add("active");
    } else {
      line.classList.remove("active");
    }
  });
}
document.addEventListener("scroll", highlightLines);

document.addEventListener("DOMContentLoaded", () => {
  setTimeout(highlightLines, 100);
});

window.addEventListener("load", () => {
  highlightLines();
});
