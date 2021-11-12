  $(document).ready(function(){
const $button = document.querySelector(".menu-button");
const $menu = document.querySelector(".primary-menu");
let flag=false;
$button.addEventListener('click', function(e) {
  if (flag) {
    $menu.classList.remove("visibled");
    $menu.classList.add("hidden");
    flag=false;
  }
  else {
    $menu.classList.add("visibled");
    $menu.classList.remove("hidden");
    flag=true;

  }
});

});
