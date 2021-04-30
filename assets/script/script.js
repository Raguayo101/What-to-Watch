// Var for home page
var genreBtn = document.querySelector("#genreBtn");
var clearFilter = document.querySelector("#clearBoxes");
var myFavPage = document.querySelector("#myFav");
var streamBtn = document.querySelector('#streamBtn')
var decadeBtn = document.querySelector('#decadeBtn')


// when click "show genre" it will toggle hide and unhide for the buttons 
genreBtn.addEventListener('click', toggleGenre);
// clear all checked boxes
clearFilter.addEventListener('click', uncheckAll);
// toggles decades
decadeBtn.addEventListener('click', toggleDecade);

// toggles between hide unhide for the buttons
function toggleGenre() {
  var x = document.querySelector("#genreBox");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}


function toggleDecade() {
  var x = document.querySelector("#decadeBox");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

// Uncheck all checked boxes
function uncheckAll() {
  $('input[type="checkbox"]:checked').prop('checked', false);
}



$("#movieBtn").click(function () {
  var selected = new Array();

  //Reference all the CheckBoxes in tag
  var chked = document.getElementsByTagName("INPUT");;

  // Loop and push the checked CheckBox value in Array.
  for (var i = 0; i < chked.length; i++) {
    if (chked[i].checked) {
      selected.push(chked[i].value);
    }
  }
  console.log(selected);
  // turns the selected array into a string. 
  var genreString = selected.join('');

  localStorage.setItem('checked', genreString);

  console.log(localStorage);

  console.log(genreString);

  window.location.href = 'moviePage.html';

});

