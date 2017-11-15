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

$(window).load(function() {
    console.log('hello');
    displayGameCards(imgRoot);
    const $rowGrab1 = $("#match-row1");
    const $rowGrab2 = $("#match-row2");
    const $childGrab1 = $rowGrab1.children(".card-front");
    const $childGrab2 = $rowGrab2.children(".card-front");
    $rowGrab1.on('click', 'img', function() {
      $('.card-front').toggle(".card-back");
    });

    // const $modal = $("#popUp");
    // const $modalClose = $modal.children(".closePopUp");
});

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

      $("#match-row1").append(`
          <div class="card-frame">
            <img  class="hidden card-front" src="${matchCard}" alt="card-front">
            <img  class="card-back" src="pictures/face.svg" alt="card-back">
          </div>`);
    })
    shuffle(matchCards);
    matchCards.forEach(function(matchCard, i){
      $("#match-row2").append(`
          <div class="card-frame">
             <img class="hidden card-front" src="${matchCard}" alt="card-front">
             <img class="card-back" src="pictures/face.svg" alt="card-back">
          </div>`);
    })
  })
};
