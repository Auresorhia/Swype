const products = [
  {
    id: "p1",
    title: "SAC Y2K À CHAINES",
    meta: "Couleur : Noir/Rose",
    price: "14,99€",
    image: "asset/vetements/bag.png",
    style: "Y2K",
  },
  {
    id: "p2",
    title: "JERSEY",
    meta: "Couleur : Bleu/Blanc",
    price: "24,90€",
    image: "asset/vetements/jerseyy.png",
    style: "Streetwear",
  },
  {
    id: "p3",
    title: "JEAN BAGGY",
    meta: "Couleur : Bleu Dévalé",
    price: "22,99€",
    image: "asset/vetements/pant.png",
    style: "Skater",
  },
  {
    id: "p4",
    title: "LUNETTES DE SOLEIL PRADA",
    meta: "Couleur : Noir",
    price: "84,99€",
    image: "asset/vetements/lunette-prada.png",
    style: "DarkAcademia",
  },
  {
    id: "p5",
    title: "TOP À BRETELLES",
    meta: "Couleur : Rose",
    price: "9,99€",
    image: "asset/vetements/top-pink.png",
    style: "Goth",
  },
];

const DETAILS_BY_TITLE = {
  "SAC Y2K À CHAINES": {
    title: "SAC Y2K À CHAINES",
    html: `
      <h2 class="details-title">SAC Y2K À CHAINES</h2>
      <p class="details-p">Affirmez votre style avec ce sac à épaule iconique, mélange parfait entre esthétique <strong>punk-rock</strong> et <strong>vibe pop-star</strong> des années 2000.</p>
      <p class="details-h">Les points forts :</p>
      <p class="details-p"><strong>Design contrasté :</strong> Toile noire et détails rose pastel pour un look "soft-grunge".</p>
      <p class="details-p"><strong>Détails iconiques :</strong> Sangle à oeillets métalliques, patchs étoiles scintillants et boucle oversize.</p>
      <p class="details-p"><strong>Touche urbaine :</strong> Livré avec une chaîne argentée amovible.</p>
      <p class="details-p"><strong>Format idéal :</strong> Compact mais spacieux, parfait pour vos essentiels (téléphone, clés, maquillage).</p>
      <p class="details-p"><strong>Conseil mode :</strong> Le match parfait pour un jean taille basse ou pour booster un look "full black" avec une touche de rose électrique.</p>
    `,
  },
  JERSEY: {
    title: "JERSEY",
    html: `
      <h2 class="details-title">JERSEY</h2>
      <p class="details-p">Inspiré des terrains de sport vintage, ce haut en <strong>maille ajourée</strong> est la pièce maîtresse pour un look <strong>streetwear</strong> affirmé.</p>
      <p class="details-h">Les détails qui font tout :</p>
      <p class="details-p"><strong>Maille filet (Mesh) :</strong> Une texture ajourée bleu marine, parfaite pour jouer sur les superpositions.</p>
      <p class="details-p"><strong>Graphisme imposant :</strong> Numéro "86" contrasté sur le buste pour un esprit authenticité d'équipe universitaire.</p>
      <p class="details-p"><strong>Détails étoiles :</strong> Patchs étoiles iconiques sur les manches, ajoutant cette touche cyber-Y2K tant recherchée.</p>
      <p class="details-p"><strong>Coupe Relax :</strong> Confortable et respirant, idéal pour les festivals ou une sortie en ville.</p>
      <p class="details-p"><strong>L'avis mode :</strong> Superposez-le sur un débardeur blanc ou un crop top noir. Mariez-le avec un baggy ou un jean cargo pour un total look années 2000.</p>
    `,
  },
  "JEAN BAGGY": {
    title: "JEAN BAGGY",
    html: `
      <h2 class="details-title">JEAN BAGGY</h2>
      <p class="details-p">Le jean ultime pour un look streetwear XXL aux influences <strong>britanniques</strong> et <strong>gothiques</strong>. Sa coupe ultra-large et ses détails graphiques en font une pièce forte et unique.</p>
      <p class="details-h">Les détails qui font tout :</p>
      <p class="details-p"><strong>Print Union Jack Grunge :</strong> Un drapeau britannique effet "usé" sur la jambe droite, surmonté de calligraphies et de motifs artistiques.</p>
      <p class="details-p"><strong>Détails Goth-Chic :</strong> Un imprimé de chaînes et de croix sur la poche avant, ajoutant une vibe sombre et mystérieuse.</p>
      <p class="details-p"><strong>Coupe Baggy Authentique :</strong> Un denim brut délavé avec un volume généreux pour une silhouette skater/street ultra-tendance.</p>
      <p class="details-p"><strong>Finition Premium :</strong> Coutures contrastées et denim robuste pour un style qui dure.</p>
      <p class="details-p"><strong>L'avis mode :</strong> Le combo gagnant ? Portez-le avec le jersey Mesh "86" bleu pour un contraste de textures, ou avec un hoodie noir oversize pour un look 100% cyber-grunge.</p>
    `,
  },
  "TOP À BRETELLES": {
    title: "TOP À BRETELLES",
    html: `
      <h2 class="details-title">TOP À BRETELLES</h2>
      <p class="details-p">Le top ultime pour une allure fée-grunge (fairy-grunge) et audacieuse. Ce caraco rose pastel mélange <strong>douceur</strong> et <strong>esthétique</strong> rebelle des années 2000.</p>
      <p class="details-h">Les détails qui font tout :</p>
      <p class="details-p"><strong>Graphisme Tattoo-Style :</strong> Une rose centrale imposante avec inscription "Chaotic Bloom" en lettrage gothique, ornée de strass brillants.</p>
      <p class="details-p"><strong>Finition Dentelle :</strong> Des empiècements en dentelle rose sur la poitrine pour une touche délicate et féminine.</p>
      <p class="details-p"><strong>Coupe Dos Nu (Halter) :</strong> Fines bretelles à nouer derrière le cou, offrant une coupe ajustée et flatteuse.</p>
      <p class="details-p"><strong>Effet Froncé :</strong> Matière légèrement froncée sur les côtés pour épouser parfaitement la silhouette.</p>
      <p class="details-p"><strong>L'avis mode :</strong> À porter avec le baggy denim London pour un contraste massif/ajusté, ou avec une mini-jupe plissée pour un look "pop-star" vintage total.</p>
    `,
  },
  "LUNETTES DE SOLEIL PRADA": {
    title: "LUNETTES DE SOLEIL PRADA",
    html: `
      <h2 class="details-title">LUNETTES DE SOLEIL PRADA</h2>
      <p class="details-p">L'accessoire futuriste indispensable pour une allure de pop-star des années 2000. Ces lunettes enveloppantes mélangent luxe et esthétique Cyber-Tech.</p>
      <p class="details-h">Les détails qui font tout :</p>
      <p class="details-p"><strong>Verre Shield Monobloc :</strong> Une visière fumée gris foncé pour un look mystérieux et une protection maximale.</p>
      <p class="details-p"><strong>Signature Étoile Argentée :</strong> Un emplacement en forme d'étoile métallique sur la charnière, rappelant les motifs des autres pièces de la collection.</p>
      <p class="details-p"><strong>Branches Logotées :</strong> Le logo PRADA iconique gravé discrètement sur des branches profilées noires brillantes.</p>
      <p class="details-p"><strong>Silhouette Galbée :</strong> Une forme aérodynamique qui épouse le visage, typique des "Fast & Furious" du début des millénaires.</p>
      <p class="details-p"><strong>L'avis mode :</strong> C'est la pièce finale. Elles se marient parfaitement avec le Jersey "86" pour un style sport-luxe ou avec le Top Rose pour un contraste "Mean Girls" version underground.</p>
    `,
  },
};

const state = {
  index: 0,
  dragging: false,
  pointerId: null,
  startX: 0,
  startY: 0,
  dx: 0,
  dy: 0,
  cardWidth: 1,
  ended: false,
};

const SWIPE_OUT_DRAG_MS = 420;
const SWIPE_OUT_BTN_MS = 850;

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

function addFavorite(product) {
  const favorites = readFavorites();
  if (favorites.some((p) => p && p.id === product.id)) return;
  favorites.unshift({
    id: product.id,
    title: product.title,
    meta: product.meta,
    price: product.price,
    image: product.image,
  });
  writeFavorites(favorites);
}

function clamp(v, min, max) {
  return Math.min(max, Math.max(min, v));
}

function lerp(a, b, t) {
  return a + (b - a) * t;
}

function setDotsActive(dotsEl, index) {
  const dots = Array.from(dotsEl.querySelectorAll(".home-dot"));
  dots.forEach((d, i) => {
    if (i === index) d.classList.add("home-dot--active");
    else d.classList.remove("home-dot--active");
  });
}

function renderProduct(product) {
  const titleEl = document.getElementById("productTitle");
  const metaEl = document.getElementById("productMeta");
  const priceEl = document.getElementById("productPrice");
  const cardEl = document.getElementById("swipeCard");

  titleEl.textContent = product.title;
  metaEl.textContent = product.meta;
  priceEl.textContent = product.price;

  cardEl.classList.toggle("home-card--top-pink", product.id === "p5");
  cardEl.classList.toggle("home-card--lunette-prada", product.id === "p4");

  const mediaEl = cardEl.querySelector(".home-card__media");
  mediaEl.style.backgroundImage = product.image ? `url('${product.image}')` : "";

  const dotsEl = document.getElementById("homeDots");
  setDotsActive(dotsEl, state.index % 5);
}

function computeTransform(dx, dy, cardWidth) {
  const rotate = clamp(dx / cardWidth, -1, 1) * 6;
  return `translate3d(${dx}px, ${dy}px, 0) rotate(${rotate}deg)`;
}

function updateOverlay(cardEl, dx, cardWidth) {
  const t = clamp(Math.abs(dx) / (cardWidth * 0.3), 0, 1);
  const opacity = lerp(0, 1, t);

  const mediaEl = cardEl.querySelector(".home-card__media");
  mediaEl.style.opacity = String(lerp(1, 0.7, t));

  const noEl = cardEl.querySelector(".home-card__overlay--no");
  const yesEl = cardEl.querySelector(".home-card__overlay--yes");

  if (dx < 0) {
    cardEl.classList.add("show-no");
    cardEl.classList.remove("show-yes");
    noEl.style.opacity = String(opacity);
    yesEl.style.opacity = "0";
  } else if (dx > 0) {
    cardEl.classList.add("show-yes");
    cardEl.classList.remove("show-no");
    yesEl.style.opacity = String(opacity);
    noEl.style.opacity = "0";
  } else {
    cardEl.classList.remove("show-no", "show-yes");
    noEl.style.opacity = "0";
    yesEl.style.opacity = "0";
  }
}

function resetOverlay(cardEl) {
  const noEl = cardEl.querySelector(".home-card__overlay--no");
  const yesEl = cardEl.querySelector(".home-card__overlay--yes");
  const mediaEl = cardEl.querySelector(".home-card__media");
  cardEl.classList.remove("show-no", "show-yes");
  noEl.style.opacity = "";
  yesEl.style.opacity = "";
  mediaEl.style.opacity = "";
}

function snapBack(cardEl) {
  cardEl.classList.remove("is-dragging");
  cardEl.style.transform = "translate3d(0, 0, 0)";
  resetOverlay(cardEl);
  state.dx = 0;
  state.dy = 0;
}

function showEndScreen() {
  const homeEl = document.getElementById("home");
  const endEl = document.getElementById("homeEnd");
  const btnNo = document.getElementById("btnNo");
  const btnYes = document.getElementById("btnYes");

  state.ended = true;

  if (homeEl) homeEl.classList.add("home-shell--ended");
  if (endEl) endEl.hidden = false;
  if (btnNo) btnNo.disabled = true;
  if (btnYes) btnYes.disabled = true;
}

function nextProduct(cardEl) {
  if (state.index >= products.length - 1) {
    showEndScreen();
    return;
  }

  state.index = state.index + 1;
  renderProduct(products[state.index]);

  cardEl.classList.remove("is-dragging");
  cardEl.style.transition = "none";
  cardEl.style.transform = "translate3d(0, 0, 0)";
  resetOverlay(cardEl);
  void cardEl.offsetHeight;
  cardEl.style.transition = "";

  state.dx = 0;
  state.dy = 0;
}

function swipeOut(cardEl, dir, options = {}) {
  const durationMs = options.durationMs ?? SWIPE_OUT_DRAG_MS;
  const timingFunction =
    options.timingFunction ?? "cubic-bezier(0.16, 1, 0.3, 1)";

  if (dir === "yes") {
    const product = products[state.index];
    if (product) addFavorite(product);
  }

  const sign = dir === "yes" ? 1 : -1;
  const x = sign * (window.innerWidth * 1.2);
  const y = state.dy * 0.6;
  cardEl.classList.remove("is-dragging");
  cardEl.style.transitionDuration = `${durationMs}ms`;
  cardEl.style.transitionTimingFunction = timingFunction;
  cardEl.style.transform = computeTransform(x, y, state.cardWidth);

  window.setTimeout(() => {
    nextProduct(cardEl);
    cardEl.style.transitionDuration = "";
    cardEl.style.transitionTimingFunction = "";
  }, durationMs + 30);
}

function openDetails() {
  const modal = document.getElementById("detailsModal");
  const mediaEl = document.getElementById("detailsMedia");
  const contentEl = document.getElementById("detailsContent");
  if (!modal || !mediaEl || !contentEl) return;

  const product = products[state.index];
  if (!product) return;

  const details = DETAILS_BY_TITLE[product.title];
  contentEl.innerHTML = details?.html || `<h2 class="details-title">${product.title}</h2>`;
  mediaEl.style.backgroundImage = product.image ? `url('${product.image}')` : "";

  modal.classList.add("details-modal--open");
  modal.setAttribute("aria-hidden", "false");
  document.documentElement.classList.add("no-scroll");
  document.body.classList.add("no-scroll");
}

function closeDetails() {
  const modal = document.getElementById("detailsModal");
  if (!modal) return;
  modal.classList.remove("details-modal--open");
  modal.setAttribute("aria-hidden", "true");
  document.documentElement.classList.remove("no-scroll");
  document.body.classList.remove("no-scroll");
}

function setup() {
  const cardEl = document.getElementById("swipeCard");
  const btnNo = document.getElementById("btnNo");
  const btnYes = document.getElementById("btnYes");
  const detailsLink = document.querySelector(".home-link--details");

  if (!cardEl || !btnNo || !btnYes) return;

  state.cardWidth = cardEl.getBoundingClientRect().width || 1;
  renderProduct(products[state.index]);

  window.addEventListener("resize", () => {
    state.cardWidth = cardEl.getBoundingClientRect().width || 1;
  });

  btnNo.addEventListener("click", () => {
    if (state.ended) return;
    swipeOut(cardEl, "no", { durationMs: SWIPE_OUT_BTN_MS });
  });
  btnYes.addEventListener("click", () => {
    if (state.ended) return;
    swipeOut(cardEl, "yes", { durationMs: SWIPE_OUT_BTN_MS });
  });

  if (detailsLink) {
    detailsLink.addEventListener("click", (e) => {
      e.preventDefault();
      if (state.ended) return;
      openDetails();
    });
  }

  document.addEventListener("click", (e) => {
    const target = e.target;
    if (!(target instanceof Element)) return;
    if (target.matches("[data-details-close]")) closeDetails();
  });

  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeDetails();
    }
    if (state.ended) return;
    if (state.dragging) return;

    if (e.key === "ArrowLeft") {
      e.preventDefault();
      swipeOut(cardEl, "no", { durationMs: SWIPE_OUT_BTN_MS });
      return;
    }
    if (e.key === "ArrowRight") {
      e.preventDefault();
      swipeOut(cardEl, "yes", { durationMs: SWIPE_OUT_BTN_MS });
    }
  });

  cardEl.addEventListener("pointerdown", (e) => {
    if (state.ended) return;
    state.dragging = true;
    state.pointerId = e.pointerId;
    state.startX = e.clientX;
    state.startY = e.clientY;
    state.dx = 0;
    state.dy = 0;

    cardEl.classList.add("is-dragging");
    cardEl.setPointerCapture(e.pointerId);
  });

  cardEl.addEventListener("pointermove", (e) => {
    if (!state.dragging || e.pointerId !== state.pointerId) return;

    state.dx = e.clientX - state.startX;
    state.dy = e.clientY - state.startY;

    cardEl.style.transform = computeTransform(state.dx, state.dy, state.cardWidth);
    updateOverlay(cardEl, state.dx, state.cardWidth);
  });

  function endPointer(e) {
    if (!state.dragging || e.pointerId !== state.pointerId) return;

    state.dragging = false;
    state.pointerId = null;

    const threshold = state.cardWidth * 0.3;

    if (Math.abs(state.dy) > Math.abs(state.dx) && Math.abs(state.dy) > 50) {
      snapBack(cardEl);
      openDetails();
      return;
    }

    if (state.dx > threshold) {
      swipeOut(cardEl, "yes", { durationMs: SWIPE_OUT_DRAG_MS });
      return;
    }

    if (state.dx < -threshold) {
      swipeOut(cardEl, "no", { durationMs: SWIPE_OUT_DRAG_MS });
      return;
    }

    snapBack(cardEl);
  }

  cardEl.addEventListener("pointerup", endPointer);
  cardEl.addEventListener("pointercancel", endPointer);
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", setup);
} else {
  setup();
}
