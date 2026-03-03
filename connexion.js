const form = document.querySelector("#loginForm");
const forgotLink = document.querySelector("#forgotLink");

if (forgotLink) {
  forgotLink.addEventListener("click", (e) => {
    e.preventDefault();
    window.alert("Fonctionnalité à venir.");
  });
}

if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    window.location.href = "accueil.html";
  });
}
