// Var for home page
var genreBtn = document.querySelector("#genreBtn");
var clearFilter = document.querySelector("#clearBoxes");
var myFavPage = document.querySelector("#myFav");
var movieBtn = document.querySelector('#movieBtn')
var streamBtn = document.querySelector('#streamBtn')


// when click "show genre" it will toggle hide and unhide for the buttons 
genreBtn.addEventListener('click', toggleGenre);
// clear all checked boxes
clearFilter.addEventListener('click', uncheckAll);
// relocate to new page
myFavPage.addEventListener('click', locationMyMovies);
// will move onto next page 
movieBtn.addEventListener('click',getSelected);
// will show streaming sites 
streamBtn.addEventListener('click', toggleStream)

// toggles between hide unhide for the genre check boxes
function toggleGenre() {
    var x = document.querySelector("#checkbox");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }

  function toggleStream() {
    var x = document.querySelector("#streambox");
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


// will turn the selected checks boxes back as an array once movieBtn is clicked. 
function getSelected() {
  //Create an Array.
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
  //Display the selected CheckBox values.| for testing purposes only 
  if (selected.length > 0) {
      alert("Selected values: " + selected.join(","));
  }

  window.location.href='moviePage.html'
};

$("button").click(function () {
  var searchTerm = $("#search").val();
  var watchProviders = 8
  //with_watch_providers=8&watch_region=US&
  //&${watchProviders ? `with_watch_providers=${watchProviders}` : ''}
  var sciFi = "&with_genres=878"
  var action = "&with_genres=28"
  var western = "&with_genres=37"
  var apiURL = `https://api.themoviedb.org/3/discover/movie?api_key=2d68f36569896b3eca3f4d442ec3c9a3&language=en-US&sort_by=popularity.desc&vote_count.gte=50&certification_country=US&include_adult=false&watch_region=US&page=`
  fetch(apiURL)
    .then(function (data) {
      return data.json();
    })
    .then(function(data){
      console.log(data);
      var random = Math.floor(Math.random()*data.total_results);
      console.log(random);
      var randomPage = Math.ceil(random/20);
      var randomResult = random%20;
      console.log(randomPage, randomResult);
      fetch(`${apiURL}${randomPage}`).then(function(data){
        return data.json()
      }).then(function(data){
        console.log(data.results[randomResult])
        $("body").append(`
        <div class="card" style="width: 18rem;">
          <img src="https://www.themoviedb.org/t/p/w220_and_h330_face/${data.results[randomResult].poster_path}" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">${data.results[randomResult].original_title.toUpperCase()}</h5>
            <p class="card-text">
              <ul>
                <li>${data.results[randomResult].overview}</li>
                <li>${data.results[randomResult].release_date}</li>
                <li>${data.results[randomResult].vote_average}</li>
              </ul>
            </p>
          </div>
        </div>`);
      })
    })
});
