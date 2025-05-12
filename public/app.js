try {
  var dropdownMenus = document.querySelectorAll(".dropdown-menu.stop");
  dropdownMenus.forEach(function (e) {
    e.addEventListener("click", function (e) {
      e.stopPropagation();
    });
  });
} catch (e) {}

try {
  lucide.createIcons();
} catch (e) {}

try {
  var themeColorToggle = document.getElementById("light-dark-mode");
  themeColorToggle &&
    themeColorToggle.addEventListener("click", function () {
      document.documentElement.setAttribute(
        "data-bs-theme",
        document.documentElement.getAttribute("data-bs-theme") === "light"
          ? "dark"
          : "light"
      );
    });
} catch (e) {}

try {
  var collapsedToggle = document.querySelector(".mobile-menu-btn");
  const overlay = document.querySelector(".startbar-overlay");

  const changeSidebarSize = () => {
    if (window.innerWidth >= 310 && window.innerWidth <= 1440) {
      document.body.setAttribute("data-sidebar-size", "collapsed");
    } else {
      document.body.setAttribute("data-sidebar-size", "default");
    }
  };

  collapsedToggle?.addEventListener("click", function () {
    const currentSize = document.body.getAttribute("data-sidebar-size");
    document.body.setAttribute(
      "data-sidebar-size",
      currentSize === "collapsed" ? "default" : "collapsed"
    );
  });

  overlay?.addEventListener("click", () => {
    document.body.setAttribute("data-sidebar-size", "collapsed");
  });

  window.addEventListener("resize", changeSidebarSize);
  changeSidebarSize();
} catch (e) {}

try {
  const tooltipElements = document.querySelectorAll('[data-bs-toggle="tooltip"]');
  [...tooltipElements].map((el) => new bootstrap.Tooltip(el));

  const popoverTriggerList = [].slice.call(
    document.querySelectorAll('[data-bs-toggle="popover"]')
  );
  popoverTriggerList.map((el) => new bootstrap.Popover(el));
} catch (e) {}

function windowScroll() {
  var topbar = document.getElementById("topbar-custom");
  if (topbar) {
    if (document.body.scrollTop >= 50 || document.documentElement.scrollTop >= 50) {
      topbar.classList.add("nav-sticky");
    } else {
      topbar.classList.remove("nav-sticky");
    }
  }
}

window.addEventListener("scroll", (e) => {
  e.preventDefault();
  windowScroll();
});

const initVerticalMenu = () => {
  const collapses = document.querySelectorAll(".navbar-nav li .collapse");

  // ✅ FIXED: Removed preventDefault to allow collapse to work
  document.querySelectorAll(".navbar-nav li [data-bs-toggle='collapse']").forEach((el) => {
    el.addEventListener("click", function () {
      // Do not block default Bootstrap collapse
    });
  });

  collapses.forEach((el) => {
    el.addEventListener("show.bs.collapse", function (event) {
      const current = event.target.closest(".collapse.show");
      document.querySelectorAll(".navbar-nav .collapse.show").forEach((openEl) => {
        if (openEl !== event.target && openEl !== current) {
          new bootstrap.Collapse(openEl).hide();
        }
      });
    });
  });

  const navLinks = document.querySelectorAll(".navbar-nav a");
  const currentUrl = window.location.href.split(/[?#]/)[0];

  navLinks.forEach((link) => {
    if (link.href === currentUrl) {
      link.classList.add("active");
      link.parentNode.classList.add("active");
      let collapseParent = link.closest(".collapse");
      while (collapseParent) {
        collapseParent.classList.add("show");
        const toggle = collapseParent.parentElement.children[0];
        toggle.classList.add("active");
        toggle.setAttribute("aria-expanded", "true");
        collapseParent = collapseParent.parentElement.closest(".collapse");
      }
    }
  });

  setTimeout(() => {
    const activeLink = document.querySelector(".nav-item li a.active");
    if (!activeLink) return;

    const scrollContainer = document.querySelector(".main-nav .simplebar-content-wrapper");
    const scrollTo = activeLink.offsetTop - 300;

    if (scrollContainer && scrollTo > 100) {
      const duration = 600;
      const start = scrollContainer.scrollTop;
      const distance = scrollTo - start;
      let startTime = 0;

      function scrollStep(timestamp) {
        if (!startTime) startTime = timestamp;
        const timeElapsed = timestamp - startTime;
        const progress = Math.min(timeElapsed / duration, 1);
        scrollContainer.scrollTop = start + distance * progress;
        if (progress < 1) requestAnimationFrame(scrollStep);
      }

      requestAnimationFrame(scrollStep);
    }
  }, 200);
};

initVerticalMenu();
