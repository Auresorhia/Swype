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

const FAVORITES_STORAGE_KEY = "swype:favorites";

function readFavorites() {
  try {
    const raw = localStorage.getItem(FAVORITES_STORAGE_KEY);
    const parsed = raw ? JSON.parse(raw) : [];
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function writeFavorites(items) {
  try {
    localStorage.setItem(FAVORITES_STORAGE_KEY, JSON.stringify(items));
  } catch {
    // ignore quota / private mode issues
  }
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function renderFavorites(listEl, items) {
  listEl.innerHTML = items
    .map((p) => {
      const title = escapeHtml(p?.title ?? "");
      const meta = escapeHtml(p?.meta ?? "");
      const price = escapeHtml(p?.price ?? "");
      const image = escapeHtml(p?.image ?? "");
      const id = escapeHtml(p?.id ?? "");

      return `
        <article class="favoris-item" data-id="${id}">
          <div class="favoris-item__media" style="background-image: url('${image}');" aria-hidden="true"></div>
          <div class="favoris-item__content">
            <div class="favoris-item__row">
              <div class="favoris-item__title">${title}</div>
            </div>
            <div class="favoris-item__meta">${meta}</div>
            <div class="favoris-item__price">${price}</div>
          </div>
          <div class="favoris-item__actions" aria-label="Actions">
            <button class="favoris-item__trash" type="button" aria-label="Supprimer">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path d="M9 3H15M4 6H20M10 6V5C10 4.44772 10.4477 4 11 4H13C13.5523 4 14 4.44772 14 5V6M7 6L8 21H16L17 6" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </button>
            <button class="favoris-item__cart" type="button" aria-label="Ajouter au panier">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path d="M6 6H21L20 14H8L6 3H3" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M9 20C9.55228 20 10 19.5523 10 19C10 18.4477 9.55228 18 9 18C8.44772 18 8 18.4477 8 19C8 19.5523 8.44772 20 9 20Z" fill="currentColor" />
                <path d="M18 20C18.5523 20 19 19.5523 19 19C19 18.4477 18.5523 18 18 18C17.4477 18 17 18.4477 17 19C17 19.5523 17.4477 20 18 20Z" fill="currentColor" />
              </svg>
            </button>
          </div>
        </article>
      `;
    })
    .join("\n");
}

function updateCount(root) {
  const countEl = root.querySelector(".favoris-count");
  if (!countEl) return;

  const count = root.querySelectorAll(".favoris-item").length;
  countEl.textContent = `${count} article${count > 1 ? "s" : ""}`;
}

function setupFavoris() {
  const root = document.getElementById("favoris");
  if (!root) return;

  const listEl = document.getElementById("favorisList");
  if (listEl) {
    const favorites = readFavorites();
    renderFavorites(listEl, favorites);
  }

  root.addEventListener("click", (e) => {
    const trashBtn = e.target.closest(".favoris-item__trash");
    if (trashBtn) {
      const itemEl = trashBtn.closest(".favoris-item");
      if (itemEl) {
        const id = itemEl.getAttribute("data-id");
        itemEl.remove();
        const favorites = readFavorites();
        const updated = id ? favorites.filter((p) => p && p.id !== id) : favorites;
        writeFavorites(updated);
      }
      updateCount(root);
      showToast("Supprimé des favoris !");
      return;
    }

    const cartBtn = e.target.closest(".favoris-item__cart");
    if (cartBtn) {
      showToast("Ajouté au panier !");
      return;
    }
  });

  updateCount(root);
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", setupFavoris);
} else {
  setupFavoris();
}
