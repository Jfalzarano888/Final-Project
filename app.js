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
//
// $.ajax(settings).done(function (response) {
//   console.log(response);
// });



let imgRoot="https://api.gettyimages.com/v3/search/images?fields=id,title,thumb,referral_destinations&sort_order=best&phrase=puppies";
let matchCards = [];

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
      console.log('not random stuff');
      console.log(randoShit.display_sizes[0].uri);
      matchCards.push(randoShit.display_sizes[0].uri);
    }

    console.log(matchCards);
    // results.images.forEach(function(picture, i){
    //     if(i < 3) {
    //       matchCards.push(picture.display_sizes[0].uri);
    //     }
    // });
    matchCards.forEach(function(matchCard){
      $("#match-row1").append(`
          <div class="card-frame">
            <img src="${matchCard}" alt="card-back">
          </div>`);
    })
    shuffle(matchCards);
    matchCards.forEach(function(matchCard){
      $("#match-row2").append(`
          <div class="card-frame">
             <img src="${matchCard}" alt="card-back">
          </div>`);
    })
  })
};



displayGameCards(imgRoot);
