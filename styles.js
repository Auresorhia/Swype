const styles = [
  {
    id: "Streetwear",
    title: "Streetwear",
    description: "Urbain & décontracté",
    image: "asset/vetements/jerseyy.png",
  },
  {
    id: "Y2K",
    title: "Y2K",
    description: "Rétro & intemporel",
    image: "asset/vetements/dickies.png",
  },
  {
    id: "Grunge",
    title: "Grunge",
    description: "Épuré & élégant",
    image: "asset/vetements/fond.png",
  },
  {
    id: "DarkAcademia",
    title: "DarkAcademia",
    description: "Pratique & tendance",
    image: "asset/vetements/london-pant1.png",
  },
  {
    id: "Skater",
    title: "Skater",
    description: "Sportif & confortable",
    image: "asset/vetements/short.png",
  },
  {
    id: "Goth",
    title: "Goth",
    description: "Féminin & doux",
    image: "asset/vetements/top-pink.png",
  },
];

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function renderGrid(gridEl, items) {
  gridEl.innerHTML = items
    .map((s) => {
      const title = escapeHtml(s?.title ?? "");
      const description = escapeHtml(s?.description ?? "");
      const image = escapeHtml(s?.image ?? "");

      return `
        <article class="styles-card" aria-label="${title}">
          <div class="styles-card__media" style="background-image: url('${image}');" aria-hidden="true"></div>
          <div class="styles-card__overlay" aria-hidden="true"></div>
          <div class="styles-card__content">
            <div class="styles-card__title">${title}</div>
            <div class="styles-card__desc">${description}</div>
          </div>
        </article>
      `;
    })
    .join("\n");
}

function setupStyles() {
  const root = document.getElementById("styles");
  if (!root) return;

  const gridEl = document.getElementById("stylesGrid");
  if (!gridEl) return;

  renderGrid(gridEl, styles);
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", setupStyles);
} else {
  setupStyles();
}
