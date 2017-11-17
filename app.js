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
let $match = "";
//
// const test2 = displayRow2.find("div[name='card0']" )
//
// console.log($test2);

$(window).load(function() {
    console.log('hello');
    displayGameCards(imgRoot);
});

$(document).on("click", ".card-frame", function(){
  $(this).addClass("selected");
  $(this).find(".card-front").removeClass("hidden");
  const $cardFrame = $(this);
  const $cardName = $cardFrame.attr("name");
  if (!$match) {
    console.log("you idiot dr. dres dead hes lost in my basement");
    $match = $cardName
    console.log($match);
  } else {
    if ($cardName === $match ) {
      console.log("All famous women love eminem chicka chikca slim shady");
      cardRemoval();
  } else {
      cardFlip();
  }
  $match = "";
}


// $(this).find(".card-back").addClass("hidden");
// $(this).addClass("selected");

  //console.log($cardName);

  // if ($cardName === $cardName) {
  //   console.log("congrats, you got a match!");
  // }
  // console.log($test);
  //var $name = $(this).find('name');

  //console.log(displayRow2[0]);
  // if (displayRow1[0] == displayRow2[0] && $(".selected")) {
  //   return alert("you finally did it");
  // }

  // for(var i in displayRow1) {
  //   for (var j in displayRow2) {
  //     if(displayRow1[i] == displayRow2[j]) {
  //       return alert("its a match!");
  //     }
  //   }
  // }
  // if ( $(".selected").length >= 2 {
  //   return;
  // }

  // $(this).find(".card-front").removeClass("hidden");
  // $(this).find(".card-back").addClass("hidden");

  //console.log(displayRow2[1]);
})

function cardRemoval () {
  let card = $(".selected");
  card.remove();
}

function cardFlip (){
  let cardFront = $(".card-frame").find(".card-front");
  let card = $(".selected");
  cardFront.addClass("hidden");
  card.removeClass("selected");

}

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
            <img name="card${i}" class="hidden card-front" src="${matchCard}" alt="card-front">
            <img class="card-back" src="pictures/face.svg" alt="card-back">
          </div>`);
    }); shuffle(displayRow1);
    matchCards.forEach(function(matchCard, i){
      displayRow2.push(
          `<div name="card${i}" class="card-frame">
              <img name="card${i}"  class="hidden card-front" src="${matchCard}" alt="card-front">
              <img class="card-back" src="pictures/face.svg" alt="card-back">
          </div>`);
    });
    shuffle(displayRow2);
    $("#match-row1").append(displayRow1);
    $("#match-row2").append(displayRow2);
  });
}
