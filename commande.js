function showToast(message) {
  const toastEl = document.getElementById("toast");
  if (!toastEl) return;

  toastEl.textContent = message;
  toastEl.classList.add("toast--show");

  if (toastEl._hideTimer) {
    window.clearTimeout(toastEl._hideTimer);
  }

  toastEl._hideTimer = window.setTimeout(() => {
    toastEl.classList.remove("toast--show");
  }, 1800);
}

function formatDateFR(d) {
  const day = String(d.getDate()).padStart(2, "0");
  const month = String(d.getMonth() + 1).padStart(2, "0");
  const year = String(d.getFullYear());
  return `${day}/${month}/${year}`;
}

function makeOrderNumber() {
  const n = Math.floor(Math.random() * 900000) + 100000;
  return `#SS${n}`;
}

function getSelectedPayMode() {
  const active = document.querySelector(".commande-payopt.commande-payopt--active");
  return active?.dataset?.pay || null;
}

function buildNextUrl() {
  const now = new Date();
  const delivery = new Date(now);
  delivery.setDate(delivery.getDate() + 5);

  const order = makeOrderNumber();
  const date = formatDateFR(now);
  const deliveryDate = formatDateFR(delivery);

  return `commande-realisee.html?order=${encodeURIComponent(order)}&date=${encodeURIComponent(date)}&delivery=${encodeURIComponent(deliveryDate)}`;
}

function setApplePayOpen(open) {
  const modal = document.getElementById("applePayModal");
  if (!modal) return;

  modal.classList.toggle("applepay-modal--open", open);
  modal.setAttribute("aria-hidden", open ? "false" : "true");
  document.documentElement.classList.toggle("no-scroll", open);
  document.body.classList.toggle("no-scroll", open);
}

function setupCommande() {
  const submitBtn = document.getElementById("btnValiderCommande");
  if (!submitBtn) return;

  const payOptions = Array.from(document.querySelectorAll(".commande-payopt"));
  payOptions.forEach((btn) => {
    btn.addEventListener("click", () => {
      payOptions.forEach((b) => b.classList.remove("commande-payopt--active"));
      btn.classList.add("commande-payopt--active");
    });
  });

  const applePayConfirmBtn = document.getElementById("applePayConfirm");
  if (applePayConfirmBtn) {
    applePayConfirmBtn.addEventListener("click", () => {
      const nextUrl = buildNextUrl();
      setApplePayOpen(false);
      window.location.href = nextUrl;
    });
  }

  document.addEventListener("click", (e) => {
    const target = e.target;
    if (!(target instanceof Element)) return;
    if (target.matches("[data-applepay-close]")) {
      setApplePayOpen(false);
    }
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      setApplePayOpen(false);
    }
  });

  submitBtn.addEventListener("click", () => {
    try {
      const selectedPay = getSelectedPayMode();
      const nextUrl = buildNextUrl();

      if (selectedPay === "faceid") {
        setApplePayOpen(true);
        return;
      }

      window.location.href = nextUrl;
    } catch {
      showToast("Commande validée !");
    }
  });
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", setupCommande);
} else {
  setupCommande();
}
