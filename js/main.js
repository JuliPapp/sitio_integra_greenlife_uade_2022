/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
    var x = document.getElementById("logo-gl-nav");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
    var x = document.getElementById("user-nav");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
    var x = document.getElementById("relleno-para-nav");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }

//slider1
  $(document).ready(function(){
    $('.autoplay1').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2500,
      speed: 1000,
      arrows: false,
      dots: false,
      adaptiveHeight: true,
      customPaging: function(slider, i) {
        // this example would render "tabs" with titles
        return '<span class="dot"></span>';
      },
    });
  });

  //slider2
  $(document).ready(function(){
    $('.autoplay2').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3800,
      speed: 1000,
      arrows: false,
      dots: false,
      adaptiveHeight: true,
      customPaging: function(slider, i) {
        // this example would render "tabs" with titles
        return '<span class="dot"></span>';
      },
    });
  });

  //slider3
  $(document).ready(function(){
    $('.autoplay3').slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2500,
      speed: 1500,
      arrows: false,
      dots: false,
      adaptiveHeight: true,
      customPaging: function(slider, i) {
        // this example would render "tabs" with titles
        return '<span class="dot"></span>';
      },
    });
  });
  boton1.onclick = () => {
    let numero = Number(mostrador.value.trim(" "));
    numero = !isNaN( numero ) ? numero - 1 : 1;
    mostrador.value = numero;
}


  boton2.onclick = () => {
    let numero = Number(mostrador.value.trim(" "));
    numero = !isNaN( numero ) ? numero + 1 : 1;
  
    mostrador.value = numero;
  }