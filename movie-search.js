// This is what the data returning from IMDB will look like:
var sampleResult = {
  "Search": [
    {
      "Title": "Cool Runnings",
      "Type": "movie",
      "Year": "1993",
      "imdbID": "tt0106611"
    }
  ]
}

// Attach an event listener to the form submit (using jQuery)
$("#movie-search-form").submit(formSubmitted);

// Handle the form submission: go to OMDB and get results
function formSubmitted(event) {
  event.preventDefault();
  var url = "http://omdbapi.com/?s=" + $("#query").val();
  $.get(url, resultsReceived);
}



function resultsReceived(results) {
 // adding function to each index of array
 for (var i = 0; i < results["Search"].length; i++) {
   addMovie(results["Search"][i]);
 }
}

  function addMovie(search){
  var ul = document.querySelector('#movies');
  //create li
  var li = document.createElement('li');
  //create first div
  var div = document.createElement('div');
  //create anchor
  var anchor = document.createElement('a');
  //create second div
  var div2 = document.createElement('div');


  //append new elements
  ul.appendChild(li);
  li.appendChild(div);
  div.appendChild(anchor);
  li.appendChild(div2);


 var url ="http://www.imdb.com/title/" + search["imdbID"];
  //setting new elements attribute
  li.setAttribute('class', 'movie');
  div.setAttribute('class', 'movie-title');
  anchor.setAttribute('href', url);
  anchor.setAttribute('target', '_blank');
  div2.setAttribute('class', 'movie-release-date');

  //adding content
    anchor.textContent = search["Title"];
    div2.textContent= search["Year"];
}
