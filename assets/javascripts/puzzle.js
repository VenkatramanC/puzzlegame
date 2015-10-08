  // to shuffle the images
  var images  = new Array(); 
  images[0] = "assets/images/puzzle/1.jpg"
  images[1] = "assets/images/puzzle/2.jpg"
  images[2] = "assets/images/puzzle/3.jpg"
  images[3] = "assets/images/puzzle/4.jpg"
  images[4] = "assets/images/puzzle/5.jpg"
  images[5] = "assets/images/puzzle/6.jpg"
  images[6] = "assets/images/puzzle/7.jpg"
  images[7] = "assets/images/puzzle/8.jpg"
  images[8] = "assets/images/puzzle/9.jpg"



  function shuffle(images) {           
    var currentIndex = images.length, temporaryValue, randomIndex ;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = images[currentIndex];
    images[currentIndex] = images[randomIndex];
    images[randomIndex] = temporaryValue;
  }

  return images;
}

var resultArray = ["a1","a2","a3","a4","a5","a6","a7","a8","a9"];
console.log(resultArray);

$(document).ready(function(){

  var newArr;

  $(".sortable").sortable({
    stop: function(event, ui) {
      newArr = $(".sortable").sortable('toArray');
      console.log(newArr);
      // checkIfOver(newArr);
    }
  });
  $(".sortable").disableSelection();

  var arr = $(".sortable").sortable('toArray');

  $("#submit").click(function(){
    
      //console.log(newArr)
      var count = 0;
      for (var i = 0 ; i <= newArr.length ; i++){

        if (resultArray[i] == newArr[i]) {
          count += 1;
        }
      }
      if (count == newArr.length) {
        alert("Game is  over");
          console.log("won");
            }
        else {
          alert("Game is not over");
          console.log("Still Moves");
        }
    });
    
  


  //console.log(arr);


  $("#newgame").click(function(){

   var shuffled_images = shuffle(images);

        //console.log(shuffled_images);
        $("#a1 img").attr("src", shuffled_images[0])
        $("#a2 img").attr("src", shuffled_images[1])
        $("#a3 img").attr("src", shuffled_images[2])
        $("#a4 img").attr("src", shuffled_images[3])
        $("#a5 img").attr("src", shuffled_images[4])
        $("#a6 img").attr("src", shuffled_images[5])
        $("#a7 img").attr("src", shuffled_images[6])
        $("#a8 img").attr("src", shuffled_images[7])
        $("#a9 img").attr("src", shuffled_images[8])

        //shuffle and rearrange the images in a page

        // $("#shuffled_images[i]").each().click(function(){
        //   $("#shuffled_images[i]").sortable()
        // });



       //console.log(shuffled_images);



    //by drag or sort we can place the image where we need

    //result images is equal to random then show you win
  });

  
   //by pressing quit we can get home page
   
 });
