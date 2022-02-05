
const body = document.querySelector("body")
const nav = document.querySelector("nav")
const siderbarClose = document.querySelector('.siderbarClose')
const siderbarOpen = document.querySelector('.siderbarOpen')
const dropdown = document.getElementById("myDropdown")
siderbarOpen.addEventListener('click',() => {
    nav.classList.add("active");
})
siderbarClose.addEventListener('click',() => {
    nav.classList.remove("active");
})

function myFunction() {
    dropdown.classList.toggle("show");
  }
  window.onclick = function(e) {
    if (!e.target.matches('.dropbtn')) {
    var myDropdown = document.getElementById("myDropdown");
      if (myDropdown.classList.contains('show')) {
        myDropdown.classList.remove('show');
      }
    }
  }
