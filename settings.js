/*
  EASY EDIT SETTINGS
  Change only the values after the colons.
  Keep quotation marks around words, colors, links, and filenames.
  Save this file, then refresh the webpage to see changes.
*/

const SETTINGS = {
  // Page background. You can use color names like "red", "lightpink", "lavender",
  // or hex codes like "#f8e7dc".
  backgroundColor: "#4C0000",

  // Image filenames. Replace front.png and back.png with your own Canva exports.
  // Keep the filenames the same unless you change them here too.
  frontImage: "front.png",
  backImage: "back.png",

  // Card size. This means: use 92% of the screen width, but never wider than 520px.
  cardWidth: "min(92vw, 520px)",

  // Card shape. For portrait invitations, 5 / 7 works well.
  // If your Canva design is 1080 x 1920, use "9 / 16".
  // If your design is square, use "1 / 1".
  cardAspectRatio: "17 / 22",

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

  // Turn this ON while editing so you can see the clickable link boxes.
  // Turn this OFF before sharing the final invite.
  showLinkBox: true,

  // Link box placement is measured in percentages of the card.
  // side = "front" or "back"
  // x = distance from left, y = distance from top.
  // width = how wide the clickable area is.
  // height = how tall the clickable area is.
  //
  // To add another link box, copy one full block from { to },
  // paste it below another block, and change the side, url, x, y, width, and height.
  linkBoxes: [
    {
      side: "front",
      label: "Open front link",
      url: "https://www.google.com/maps/place/6401+Saratoga+Trail,+Frederick,+CO+80516/@40.092416,-105.0031001,17z/data=!3m1!4b1!4m6!3m5!1s0x876c09b152d1600f:0x7ad33da8a398204c!8m2!3d40.092416!4d-105.0031001!16s%2Fg%2F11hbvtfr6c?entry=ttu&g_ep=EgoyMDI2MDUzMS4wIKXMDSoASAFQAw%3D%3D",
      x: 60,
      y: 75,
      width: 40,
      height: 15
    },

    {
      side: "back",
      label: "Open RSVP email",
      url: "mailto:eallison331@gmail.com?subject=RSVP-Evans%20%26%20Bhetwal%20Engagement%20Party&body=Guest%20Name%3A%0AAttending%20%28Yes%2FNo%29%3A",
      x: 20,
      y: 90,
      width: 65,
      height: 10
    }
  ]
};
