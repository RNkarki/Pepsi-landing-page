<!--Start of Tawk.to Script-->
<script type="text/javascript">
var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
(function(){
var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
s1.async=true;
s1.src='https://embed.tawk.to/646e1fc7ad80445890eedd8f/1h172o9ur';
s1.charset='UTF-8';
s1.setAttribute('crossorigin','*');
s0.parentNode.insertBefore(s1,s0);
})();
</script>
<!--End of Tawk.to Script-->

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
