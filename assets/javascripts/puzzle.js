  var images  = new Array();                      // var images is array of image pieces 
      images[0] = "assets/images/puzzle/1.jpg"
      images[1] = "assets/images/puzzle/2.jpg"
      images[2] = "assets/images/puzzle/3.jpg"
      images[3] = "assets/images/puzzle/4.jpg"
      images[4] = "assets/images/puzzle/5.jpg"
      images[5] = "assets/images/puzzle/6.jpg"
      images[6] = "assets/images/puzzle/7.jpg"
      images[7] = "assets/images/puzzle/8.jpg"
      images[8] = "assets/images/puzzle/9.jpg"



  // to shuffle the images we are using the function
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

  var resultArray = ["a1","a2","a3","a4","a5","a6","a7","a8","a9"];  //declaring the result array
    console.log(resultArray);

  $(document).ready(function(){

    var newArr;                                        //declaring array is var newArr;

  $(".sortable").sortable({                           //sortable method using
    stop: function(event, ui) {                        //running the stop function
      newArr = $(".sortable").sortable('toArray');    // 
      console.log(newArr);
      // checkIfOver(newArr);
    }
  });

  $(".sortable").disableSelection();

  var arr = $(".sortable").sortable('toArray');

  $("#submit").click(function(){                  //when we click on submit
    
      //console.log(newArr)
      var count = 0;
      for (var i = 0 ; i <= newArr.length ; i++){

        if (resultArray[i] == newArr[i]) {              //comparing resultArray with shuffled images array
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

    //shuffle and rearrange the images in a page
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

    });
    
    $("#reload").click(function(){
       return images; 
    });

 });

      



   
