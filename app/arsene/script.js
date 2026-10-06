/* ============================================================
   Arsene Kahunga — Digital Business Card
   Lightweight, dependency-free interactions
   ============================================================ */

(function () {
  "use strict";

  document.documentElement.classList.replace("no-js", "js");

  var doc = document;

  function $(selector, ctx) {
    return (ctx || doc).querySelector(selector);
  }

  function $all(selector, ctx) {
    return Array.prototype.slice.call((ctx || doc).querySelectorAll(selector));
  }

  /* ---------- Footer year ---------- */

  var yearEl = $("#year");
  if (yearEl) {
    yearEl.textContent = String(new Date().getFullYear());
  }

  /* ---------- Reveal on scroll ---------- */

  var revealEls = $all(".reveal");
  var prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  if (!("IntersectionObserver" in window) || prefersReducedMotion) {
    revealEls.forEach(function (el) {
      el.classList.add("is-visible");
    });
  } else {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -6% 0px" }
    );
    revealEls.forEach(function (el) {
      observer.observe(el);
    });
  }

  /* ---------- Toast ---------- */

  var toast = $("#toast");
  var toastTimer = null;

  function showToast(message) {
    if (!toast) return;
    toast.textContent = message;
    toast.classList.add("show");
    if (toastTimer) clearTimeout(toastTimer);
    toastTimer = setTimeout(function () {
      toast.classList.remove("show");
    }, 2200);
  }

  /* ---------- Clipboard ---------- */

  function copyText(text) {
    if (navigator.clipboard && window.isSecureContext) {
      return navigator.clipboard.writeText(text).then(
        function () {
          return true;
        },
        function () {
          return copyTextFallback(text);
        }
      );
    }
    return Promise.resolve(copyTextFallback(text));
  }

  function copyTextFallback(text) {
    try {
      var ta = doc.createElement("textarea");
      ta.value = text;
      ta.setAttribute("readonly", "");
      ta.style.position = "fixed";
      ta.style.opacity = "0";
      doc.body.appendChild(ta);
      ta.select();
      var ok = doc.execCommand("copy");
      doc.body.removeChild(ta);
      return ok;
    } catch (err) {
      return false;
    }
  }

  $all("[data-copy]").forEach(function (btn) {
    btn.addEventListener("click", function () {
      copyText(btn.getAttribute("data-copy")).then(function (ok) {
        showToast(ok ? "Copied to clipboard" : "Copy failed — long-press to copy");
      });
    });
  });

  /* ---------- Share (Web Share API with fallback) ---------- */

  var shareData = {
    title: "Arsene Kahunga — Founder & Software Developer",
    text:
      "Arsene Kahunga, Founder & Software Developer at M.A.R.J.E.N.E Software Development. We build. You grow.",
    url: "https://www.marjenesoftwaredev.com/arsene"
  };

  $all("[data-share]").forEach(function (btn) {
    btn.addEventListener("click", function () {
      if (navigator.share) {
        navigator.share(shareData).catch(function (err) {
          if (err && err.name === "AbortError") return;
          copyText(shareData.url).then(function (ok) {
            showToast(ok ? "Link copied — ready to share" : "Sharing unavailable here");
          });
        });
      } else {
        copyText(shareData.url).then(function (ok) {
          showToast(ok ? "Link copied — ready to share" : "Sharing unavailable here");
        });
      }
    });
  });

})();
