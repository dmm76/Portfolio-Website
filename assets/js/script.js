const menuIcon = document.querySelector("#menu-icon");
const navbar = document.querySelector(".navbar");
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("header nav a");

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
    const normalizePath = (pathname) => {
      if (pathname === "/") return "/";
      return pathname.endsWith("/") ? pathname.slice(0, -1) : pathname;
    };

    const currentPath = normalizePath(window.location.pathname);
    const isEnglishPage =
      currentPath.endsWith("/index-us.html") ||
      currentPath.endsWith("/index-us");
    const isPortuguesePage =
      currentPath === "/" ||
      currentPath.endsWith("/index.html") ||
      currentPath.endsWith("/index");

    const basePath = normalizePath(
      currentPath.replace(/index-us\.html$|index\.html$/, ""),
    );
    const englishPath = `${
      basePath === "/" ? "" : `${basePath}/`
    }index-us.html`.replace(/\/{2,}/g, "/");
    const portuguesePath =
      basePath === "/" ? "/" : `${basePath}/index.html`.replace(/\/{2,}/g, "/");

    languageToggle.checked = isEnglishPage;

    languageToggle.addEventListener("change", (event) => {
      const wantsEnglish = event.target.checked;
      const targetPath = wantsEnglish ? englishPath : portuguesePath;
      const alreadyOnTarget = wantsEnglish ? isEnglishPage : isPortuguesePage;

      if (!alreadyOnTarget) {
        window.location.href = targetPath;
      }
    });
  }

  const themeToggle = document.getElementById("theme-toggle");
  if (themeToggle) {
    themeToggle.addEventListener("change", function () {
      const root = document.documentElement;
      if (this.checked) {
        root.classList.add("light-theme");
      } else {
        root.classList.remove("light-theme");
      }
    });
  }
});
