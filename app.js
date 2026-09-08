(() => {
  const burger = document.getElementById("burger");
  const nav = document.getElementById("nav");
  const year = document.getElementById("year");
  if (year) year.textContent = String(new Date().getFullYear());

  const fallbacks = {
    logo: ["images/logo.png", "android-chrome-512x512 (1).png", "favicon (1).ico"],
    art: ["images/markiz.jpg", "Markiz.jpg", "images/markiz-sm.jpg"],
    video: ["video/Amirtop.mp4", "Amirtop.mp4"],
  };

  const tryNext = (el, list, i = 0) => {
    if (!el || i >= list.length) return;
    const url = list[i];
    if (el.tagName === "SOURCE") {
      el.src = url;
      el.parentElement?.load?.();
      el.parentElement?.addEventListener("error", () => tryNext(el, list, i + 1), { once: true });
      return;
    }
    el.addEventListener("error", () => tryNext(el, list, i + 1), { once: true });
    if (el.getAttribute("src") !== url) el.src = url;
  };

  document.querySelectorAll("[data-asset]").forEach((el) => {
    const key = el.getAttribute("data-asset");
    if (fallbacks[key]) tryNext(el, fallbacks[key]);
  });

  if (!burger || !nav) return;
  const setOpen = (open) => {
    nav.classList.toggle("is-open", open);
    burger.setAttribute("aria-expanded", String(open));
    burger.setAttribute("aria-label", open ? "Закрыть меню" : "Меню");
  };
  burger.addEventListener("click", () => setOpen(!nav.classList.contains("is-open")));
  nav.querySelectorAll("a").forEach((a) => a.addEventListener("click", () => setOpen(false)));
  document.addEventListener("keydown", (e) => { if (e.key === "Escape") setOpen(false); });
  document.addEventListener("click", (e) => {
    if (!nav.classList.contains("is-open")) return;
    if (!nav.contains(e.target) && !burger.contains(e.target)) setOpen(false);
  });
  window.addEventListener("resize", () => { if (window.innerWidth > 860) setOpen(false); });
})();

const ctaBIR = document.getElementById("cta1");

ctaBIR.addEventListener("click", function(event){ 
  event.preventDefault();
  const msg1 = "Қалайсың гэй! Хочу забустить мой аккаунт";
  const link1 = "https://t.me/Markizzmlbb?text=" + encodeURIComponent(msg1);
  window.open(link1, "_blank");
});

const ctaEKI = document.getElementById("cta2");

ctaEKI.addEventListener("click", function(event){ 
  event.preventDefault();
  const msg2 = "Қалайсың гэй! бірдене бірдене коучинг?";
  const link2 = "https://t.me/Markizzmlbb?text=" + encodeURIComponent(msg2);
  window.open(link2, "_blank");
});