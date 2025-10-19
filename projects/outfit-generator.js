// Arrays of image paths
const capImages = [
  'images/C1.png', 'images/C2.png', 'images/C3.png', 'images/C4.png', 'images/C5.png', 'images/C6.png', 'images/C7.png'
];

const accessoriesImages = [
  'images/A1.png', 'images/A2.png', 'images/A3.png', 'images/A4.png', 'images/A5.png', 'images/A6.png'
];

const topImages = [
  'images/T1.png','images/T2.png','images/T3.png','images/T4.png','images/T5.png',
  'images/T6.png','images/T7.png','images/T8.png','images/T9.png','images/T10.png',
  'images/T11.png','images/T12.png','images/T13.png','images/T14.png'
];

const bottomImages = [
  'images/B1.png','images/B2.png','images/B3.png','images/B4.png','images/B5.png',
  'images/B6.png','images/B7.png'
];

const shoesImages = [
  'images/S1.png','images/S2.png','images/S3.png','images/S4.png','images/S5.png',
  'images/S6.png','images/S7.png','images/S8.png','images/S9.png','images/S10.png',
  'images/S11.png','images/S12.png','images/S13.png','images/S14.png'
];

// Function to pick a random item from an array
function randomChoice(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

// Function to generate a new outfit
function generateOutfit() {
  document.getElementById('cap').src = randomChoice(capImages);
  document.getElementById('accessories').src = randomChoice(accessoriesImages);
  document.getElementById('top').src = randomChoice(topImages);
  document.getElementById('bottom').src = randomChoice(bottomImages);
  document.getElementById('shoes').src = randomChoice(shoesImages);
}

// Generate the first outfit when page loads
window.onload = generateOutfit;

// Attach the button event
document.getElementById('generateBtn').addEventListener('click', generateOutfit);
