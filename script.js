(function () {
  const card = document.getElementById("inviteCard");
  const frontImage = document.getElementById("frontImage");
  const backImage = document.getElementById("backImage");
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

  flipButton.textContent = settings.flipButtonText || "Tap to flip";
  flipButton.classList.toggle("hidden", settings.showFlipButton === false);

  function flipCard() {
    card.classList.toggle("is-flipped");
  }

  function createLinkBoxes() {
    const linkBoxes = settings.linkBoxes || [];

    linkBoxes.forEach(function (box, index) {
      const link = document.createElement("a");

      link.href = box.url || "#";
      link.className = "link-box";
      link.target = "_blank";
      link.rel = "noopener noreferrer";
      link.setAttribute("aria-label", box.label || `Open invitation link ${index + 1}`);

      link.style.left = `${box.x}%`;
      link.style.top = `${box.y}%`;
      link.style.width = `${box.width}%`;
      link.style.height = `${box.height}%`;

      if (settings.showLinkBox === true) {
        link.classList.add("preview-on");
      }

      link.addEventListener("click", function (event) {
        event.stopPropagation();
      });

      if (box.side === "front") {
        document.querySelector(".card-front").appendChild(link);
      } else {
        document.querySelector(".card-back").appendChild(link);
      }
    });
  }

  createLinkBoxes();

  if (settings.flipOnCardClick !== false) {
    card.addEventListener("click", flipCard);
  }

  card.addEventListener("keydown", function (event) {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      flipCard();
    }
  });

  flipButton.addEventListener("click", flipCard);
})();
