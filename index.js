function shuffle(array) {
  var currentIndex = array.length,
    randomIndex;

  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [
      array[currentIndex],
      array[currentIndex],
    ];
  }
  return array;
}

function spin() {
  rotate.play();
  const box = document.getElementById("box");
  const element = document.getElementById("mainbox");

  let AC = shuffle([1890, 2250, 2610]);
  let Gimbal = shuffle([1850, 2210, 2570]);
  let Headset = shuffle([1770, 2130, 2490]);
  let Drone = shuffle([1810, 2170, 2530]);
  let ROG = shuffle([1750, 2110, 2470]);
  let Zonk = shuffle([1630, 1990, 2350]);
  let PS = shuffle([1570, 1930, 2290]);

  let results = shuffle([
    AC[0],
    Gimbal[0],
    Headset[0],
    Drone[0],
    ROG[0],
    Zonk[0],
    PS[0],
  ]);

  box.style.setProperty("transition", "all ease 5s");
  box.style.transform = "rotate(" + results[0] + "deg)";
  element.classList.remove("animate");

  setTimeout(function () {
    element.classList.add("animate");
  }, 5000);

  setTimeout(function () {
    applause.play();
    Swal.fire({
      title: "",
      text: "More Projects coming in",
      imageUrl: "./images/win.png",
      imageWidth: 400,
      imageHeight: 200,
      imageAlt: "Custom image",
    });
  }, 5200);

  setTimeout(function () {
    box.style.setProperty("transition", "initial");
    box.style.transform = "rotate(90deg)";
  }, 6000);
}
