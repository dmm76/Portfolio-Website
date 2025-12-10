const menuIcon = document.querySelector("#menu-icon");
const navbar = document.querySelector(".navbar");
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("header nav a");
const THEME_KEY = "monquero-theme";
const FADE_CLASS = "fade-out";
const FADE_DELAY = 220;

document.documentElement.classList.remove(FADE_CLASS);

const storedTheme = localStorage.getItem(THEME_KEY);
if (storedTheme === "light") {
  document.documentElement.classList.add("light-theme");
}

if (sections.length && navLinks.length) {
  window.addEventListener("scroll", () => {
    const top = window.scrollY;

    sections.forEach((sec) => {
      const offset = sec.offsetTop - 150;
      const height = sec.offsetHeight;
      const id = sec.getAttribute("id");

      if (top >= offset && top < offset + height) {
        navLinks.forEach((link) => link.classList.remove("active"));
        const activeLink = document.querySelector(
          `header nav a[href="#${id}"]`,
        );
        if (activeLink) {
          activeLink.classList.add("active");
        }
      }
    });
  });
}

if (menuIcon && navbar) {
  menuIcon.addEventListener("click", () => {
    menuIcon.classList.toggle("bx-x");
    navbar.classList.toggle("active");
  });

  menuIcon.addEventListener("mouseenter", () => {
    menuIcon.classList.add("bx-x");
    navbar.classList.add("active");
  });

  document.addEventListener("click", (event) => {
    if (!navbar.contains(event.target) && event.target !== menuIcon) {
      menuIcon.classList.remove("bx-x");
      navbar.classList.remove("active");
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const stars = document.querySelectorAll(".star");
  stars.forEach((star) => {
    star.addEventListener("click", () => {
      const value = parseInt(star.getAttribute("data-value"), 10);
      const siblings = star.parentNode.querySelectorAll(".star");
      siblings.forEach((sibling) => sibling.classList.remove("active"));
      for (let i = 0; i < value; i += 1) {
        siblings[i].classList.add("active");
      }
    });
  });

  const languageToggle = document.getElementById("language-toggle");
  if (languageToggle) {
    const sanitizePath = (pathname) => {
      if (!pathname.startsWith("/")) {
        return `/${pathname}`;
      }
      return pathname;
    };

    const currentPath = sanitizePath(window.location.pathname);
    const isEnglishPage = /\/index-us(?:\.html)?\/?$/.test(currentPath);
    const isPortuguesePage =
      !isEnglishPage &&
      (currentPath === "/" ||
        currentPath.endsWith("/") ||
        /\/index(?:\.html)?\/?$/.test(currentPath));

    const directory = (() => {
      const withoutIndex = currentPath.replace(
        /\/index(?:-us)?(?:\.html)?\/?$/,
        "/",
      );
      const trimmed = withoutIndex.replace(/\/+$/, "");
      if (trimmed === "") {
        return "/";
      }
      return `${trimmed}/`;
    })();

    const englishPath =
      directory === "/" ? "/index-us.html" : `${directory}index-us.html`;
    const portuguesePath =
      directory === "/" ? "/" : `${directory}index.html`;

    languageToggle.checked = isEnglishPage;

    languageToggle.addEventListener("change", (event) => {
      const wantsEnglish = event.target.checked;
      const targetPath = wantsEnglish ? englishPath : portuguesePath;
      const alreadyOnTarget = wantsEnglish ? isEnglishPage : isPortuguesePage;

      if (!alreadyOnTarget) {
        document.documentElement.classList.add(FADE_CLASS);
        setTimeout(() => {
          window.location.href = targetPath;
        }, FADE_DELAY);
      }
    });
  }

  const themeToggle = document.getElementById("theme-toggle");
  if (themeToggle) {
    themeToggle.checked = document.documentElement.classList.contains(
      "light-theme",
    );

    themeToggle.addEventListener("change", function () {
      const root = document.documentElement;
      if (this.checked) {
        root.classList.add("light-theme");
        localStorage.setItem(THEME_KEY, "light");
      } else {
        root.classList.remove("light-theme");
        localStorage.setItem(THEME_KEY, "dark");
      }
    });
  }
});
