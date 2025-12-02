document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("theme-toggle");
  const body = document.body;

  const storedTheme = window.localStorage.getItem("theme");
  if (storedTheme === "dark") {
    body.classList.add("dark");
  }

  if (toggle) {
    toggle.addEventListener("click", () => {
      body.classList.toggle("dark");
      const mode = body.classList.contains("dark") ? "dark" : "light";
      window.localStorage.setItem("theme", mode);
    });
  }
});