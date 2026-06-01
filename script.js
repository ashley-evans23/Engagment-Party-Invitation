(function () {
  const card = document.getElementById("inviteCard");
  const frontImage = document.getElementById("frontImage");
  const backImage = document.getElementById("backImage");
  const linkBox = document.getElementById("linkBox");
  const flipButton = document.getElementById("flipButton");

  const settings = window.SETTINGS || SETTINGS;
  const root = document.documentElement;

  function setCSSVariable(name, value) {
    root.style.setProperty(name, value);
  }

  setCSSVariable("--page-background", settings.backgroundColor || "#f8e7dc");
  setCSSVariable("--card-width", settings.cardWidth || "min(92vw, 520px)");
  setCSSVariable("--card-aspect-ratio", settings.cardAspectRatio || "5 / 7");
  setCSSVariable("--image-fit", settings.imageFit || "contain");
  setCSSVariable("--card-radius", settings.borderRadius || "18px");
  setCSSVariable("--flip-speed", settings.flipSpeed || "700ms");

  if (settings.showShadow === false) {
    setCSSVariable("--card-shadow", "none");
  }

  frontImage.src = settings.frontImage || "front.png";
  backImage.src = settings.backImage || "back.png";

  linkBox.href = settings.linkUrl || "#";
  linkBox.classList.toggle("preview-on", settings.showLinkBox === true);

  const box = settings.linkBox || { x: 25, y: 72, width: 50, height: 10 };
  setCSSVariable("--link-x", `${box.x}%`);
  setCSSVariable("--link-y", `${box.y}%`);
  setCSSVariable("--link-width", `${box.width}%`);
  setCSSVariable("--link-height", `${box.height}%`);

  flipButton.textContent = settings.flipButtonText || "Tap to flip";
  flipButton.classList.toggle("hidden", settings.showFlipButton === false);

  function flipCard() {
    card.classList.toggle("is-flipped");
  }

  if (settings.flipOnCardClick !== false) {
    card.addEventListener("click", function (event) {
      if (event.target === linkBox) return;
      flipCard();
    });
  }

  card.addEventListener("keydown", function (event) {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      flipCard();
    }
  });

  flipButton.addEventListener("click", flipCard);
})();
