  $(document).ready(function(){
    var cityOne = $("#city-one-info");
    var cityTwo = $("#city-two-info");
    var cityThree = $("#city-three-info");
    var section_hero = $(".hero-info");
    var $elmnt = document.querySelector(".container-servises");
    let flag1 =false;
    let flag =false;


      document.addEventListener('scroll', function(e) {
        setTimeout(
          function()
          {
            setTimeout(
              function()
              {
                flag=true;
              }, 3000);

            flag1=true;
          }, 2000);

          $(".hero-info").slideDown(3000);
        });

      window.addEventListener('load', function(e) {
        $(".hero-job").slideDown(3000);
      });

      document.addEventListener('scroll', function(e) {
      if (flag1) {
          $(".effects").slideDown(3000);
      }
      if (flag) {
          $(".effects1").slideDown(3000);
      }
      });


    $(".city-animation-two").hide();
    $(".city-animation-one").hide();
    $(".city-animation-three").hide();
    $(".hero-info").hide();
    $(".effects").hide();
    $(".effects1").hide();
    $(".hero-job").hide();





      $("#city-one").mouseover(function(){
      $(".city-animation-one").slideDown(2000);

      });

      $("#city-two").mouseover(function(){
      $(".city-animation-two").slideDown(2000);

      });

      $("#city-three").mouseover(function(){
      $(".city-animation-three").slideDown(2000);

      });


    $("#city-one").click(function(){
      setTimeout(
        function()
        {
            cityOne.toggleClass("hidden");
      }, 1500);

      });
    $("#city-two").click(function(){
      setTimeout(
        function()
        {
          cityTwo.toggleClass("hidden");
      }, 1500);;

    });
    $("#city-three").click(function(){
      setTimeout(
        function()
        {
          cityThree.toggleClass("hidden");
          }, 1500);
    });

});
