// Var for home page
var genreBtn = document.querySelector("#genreBtn");
var clearFilter = document.querySelector("#clearBoxes");
var myFavPage = document.querySelector("#myFav");


// toggles between hide unhide for the genre check boxes
function toggleBoxes() {
    var x = document.querySelector("#checkbox");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }

// Uncheck all checked boxes
  function uncheckAll(){
    $('input[type="checkbox"]:checked').prop('checked',false);
 }

// relocate to page to saved movies. 
 function locationMyMovies (){
    window.location.href='myfav.html'
 }

// when click "show genre" it will toggle hide and unhide for the buttons 
genreBtn.addEventListener('click', toggleBoxes);
clearFilter.addEventListener('click', uncheckAll);
myFavPage.addEventListener('click', locationMyMovies);



