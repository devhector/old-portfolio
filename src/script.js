
document.addEventListener('DOMContentLoaded', function () {
    var checkbox = document.querySelector('input[type="checkbox"]');
    let name = document.getElementById("name");
    let phrase = document.getElementById("turn");

    name.classList.add("glitch");
  
    checkbox.addEventListener('change', function () {
      if (checkbox.checked) {

        name.classList.add("glitch");
        phrase.innerText = 'glitch on'

      } else {
        name.classList.remove("glitch");
        phrase.innerText = 'glitch off'
      }
    });
  });

function openNav() {
    document.getElementById("Nav").style.width = "100%";
}
  
function closeNav() {
    document.getElementById("Nav").style.width = "0%";
}