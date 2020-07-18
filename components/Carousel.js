/*
  STRETCH GOAL
  STRETCH GOAL
  STRETCH GOAL

  If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/
function Carousel() {
  const ce = document.createElement.bind(document);
  const images = ["mountains", "computer", "trees", "turntable"];
  let current = 0;

  const carousel = ce("div");
  const leftButton = carousel.appendChild(ce("div"));
  images.forEach((name, i) => {
    const img = carousel.appendChild(ce("img"));
    img.src = `./assets/carousel/${name}.jpeg`;
    img.dataset.index = i;
  });
  const rightButton = carousel.appendChild(ce("div"));

  carousel.className = "carousel";
  leftButton.className = "left-button";
  rightButton.className = "right-button";

  leftButton.onclick = function () {
    current > 0 ? current-- : (current = images.length - 1);
    document.getElementById("carousel-filter").innerHTML = `
      .carousel img[data-index="${current}"] {
        display: block;
      }
      `;
  };

  rightButton.onclick = function () {
    current < images.length - 1 ? current++ : (current = 0);
    document.getElementById("carousel-filter").innerHTML = `
      .carousel img[data-index="${current}"] {
        display: block;
      }
      `;
  };

  return carousel;
}

document.querySelector(".carousel-container").appendChild(Carousel());
