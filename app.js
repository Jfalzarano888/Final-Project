var settings = {
  "async": true,
  "crossDomain": true,
  "url": "https://api.gettyimages.com/v3/search/images?fields=id%2Ctitle%2Cthumb%2Creferral_destinations&sort_order=best&phrase=puppies",
  "method": "GET",
  "headers": {
    "api-key": "jb366azpdwc9yyfwwhz89nkp",
    "cache-control": "no-cache",
    "postman-token": "d71acb46-b1a7-96be-edf8-617cdf974d0b"
  }
}

let imgRoot="https://api.gettyimages.com/v3/search/images?fields=id,title,thumb,referral_destinations&sort_order=best&phrase=puppies";
let matchCards = [];
let displayRow1 = [];
let displayRow2 = [];
let displayRow3 = ["butthole", "fuck", "ass"];
// const $modal = $("#match-row1");
// const $modalClose = $modal.children("name");
//
//
// console.log($modalClose);


$(window).load(function() {
    console.log('hello');
    displayGameCards(imgRoot);

});

$(document).on("click", ".card-frame", function(){
  if ( $(".selected").length >= 2 && displayRow1[0] == displayRow2[0]){
    console.log("match!");
    return;
  } else if ( $(".selected").length >= 2 && displayRow1[1] == displayRow2[1]){
    console.log("match!");
    return;
  } else if ($(".selected").length >= 2 && displayRow1[2] == displayRow2[2]){
    console.log("match!");
    return;
  }
  $(this).find(".card-front").removeClass("hidden");
  $(this).find(".card-back").addClass("hidden");
  $(this).addClass("selected");
})

function getRandomInt(array) {
  	let max = array.length;
  	let randomIndex = Math.floor(Math.random() * (max));
    let randomElement = array[randomIndex];
    return randomElement;
}

function shuffle(a) {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
    console.log(a);
}

function displayGameCards(url) {
  $.ajax(settings).done(function(results){
    for(let i=0; i<3; i++){
      let randoShit = getRandomInt(results.images);
      matchCards.push(randoShit.display_sizes[0].uri);
    }
    matchCards.forEach(function(matchCard, i){
      displayRow1.push(`
          <div name="card${i}" class="card-frame">
            <img class="hidden card-front" src="${matchCard}" alt="card-front">
            <img class="card-back" src="pictures/face.svg" alt="card-back">
          </div>`);
    });

    matchCards.forEach(function(matchCard, i){
    displayRow2.push(
          `<div name="card${i}" class="card-frame">
              <img class="hidden card-front" src="${matchCard}" alt="card-front">
              <img class="card-back" src="pictures/face.svg" alt="card-back">
          </div>`);
    });
    console.log(displayRow2);
    shuffle(displayRow2);
    console.log(displayRow2[0]);
    $("#match-row1").append(displayRow1);
    $("#match-row2").append(displayRow2);
  });
}

// console.log(displayRow3.length);
// console.log(displayRow2.length);
// shuffle(displayRow1);
