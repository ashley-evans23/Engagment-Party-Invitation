/*
  EASY EDIT SETTINGS
  Change only the values after the colons.
  Keep quotation marks around words, colors, links, and filenames.
  Save this file, then refresh the webpage to see changes.
*/

const SETTINGS = {
  // Page background. You can use color names like "red", "lightpink", "lavender",
  // or hex codes like "#f8e7dc".
  backgroundColor: "#f8e7dc",

  // Image filenames. Replace front.png and back.png with your own Canva exports.
  // Keep the filenames the same unless you change them here too.
  frontImage: "front.png",
  backImage: "back.png",

  // Card size. This means: use 92% of the screen width, but never wider than 520px.
  cardWidth: "min(92vw, 520px)",

  // Card shape. For portrait invitations, 5 / 7 works well.
  // If your Canva design is 1080 x 1920, use "9 / 16".
  // If your design is square, use "1 / 1".
  cardAspectRatio: "5 / 7",

  // Image fit.
  // "contain" shows the entire image without cropping.
  // "cover" fills the card but may crop the edges.
  imageFit: "contain",

  // Card styling.
  borderRadius: "18px",
  showShadow: true,

  // Flip button.
  showFlipButton: true,
  flipButtonText: "Tap to flip",
  flipSpeed: "700ms",

  // Clicking/tapping the invite flips it.
  flipOnCardClick: true,

  // Link settings.
  // Put the RSVP link, registry link, wedding website, etc. here.
  linkUrl: "https://example.com",

  // Turn this ON while editing so you can see the clickable link box.
  // Turn this OFF before sharing the final invite.
  showLinkBox: true,

  // Link box placement, measured in percentages of the card.
  // x = distance from left, y = distance from top.
  // width = how wide the clickable area is.
  // height = how tall the clickable area is.
  linkBox: {
    x: 25,
    y: 72,
    width: 50,
    height: 10
  }
};
