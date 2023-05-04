function backgroundChanger(color) {
    if (color === "blue") {
      document.querySelector("body").style.backgroundColor = "#0065c3";
    } else if (color === "red") {
      document.querySelector("body").style.backgroundColor = "red";
    } else if (color === "black") {
      document.querySelector("body").style.backgroundColor = "black";
    }
  }

  /*function imageChanger(imageSrc) {
    let img = document.querySelector(".Product-Display");
    let btn1 = document.querySelector("#btn1");
    let btn2 = document.querySelector("#btn2");
    let btn3 = document.querySelector("#btn3");
    let btn4 = document.querySelector("#btn4");

    btn1.addEventListener("click", () => {
      img.src = "images/Bluecan.png";
    });

    btn2.addEventListener("click", () => {
      img.src = "images/Diet-Pepsi.png";
    });

    btn3.addEventListener("click", () => {
      img.src = "images/3.zero-pepsi.png";
    });
  }*/

  function imageChanger(id, imageSrc) {
    document.getElementById(id).src = imageSrc;
  }