function formatDateFR(d) {
  const day = String(d.getDate()).padStart(2, "0");
  const month = String(d.getMonth() + 1).padStart(2, "0");
  const year = String(d.getFullYear());
  return `${day}/${month}/${year}`;
}

function readQueryParams() {
  try {
    return new URLSearchParams(window.location.search);
  } catch {
    return new URLSearchParams();
  }
}

function setupCommandeRealisee() {
  const params = readQueryParams();

  const orderNumberEl = document.getElementById("orderNumber");
  const orderDateEl = document.getElementById("orderDate");
  const deliveryDateEl = document.getElementById("deliveryDate");

  const fallbackNow = new Date();
  const fallbackDelivery = new Date(fallbackNow);
  fallbackDelivery.setDate(fallbackDelivery.getDate() + 5);

  const orderNumber = params.get("order") || "#SS000000";
  const orderDate = params.get("date") || formatDateFR(fallbackNow);
  const deliveryDate = params.get("delivery") || formatDateFR(fallbackDelivery);

  if (orderNumberEl) orderNumberEl.textContent = orderNumber;
  if (orderDateEl) orderDateEl.textContent = orderDate;
  if (deliveryDateEl) deliveryDateEl.textContent = deliveryDate;
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", setupCommandeRealisee);
} else {
  setupCommandeRealisee();
}
