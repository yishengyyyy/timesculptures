// var start = new Date().getTime();
// console.log(start)

$("body").css("overflow", "hidden");

// $(document).ready(function(){
//     $(".btn").mouseover(function() {
//         $(this).find('img').toggle();
//         $(this).find('span').toggle();
//       }).mouseout(function() {
//         $(this).find('img').toggle();
//         $(this).find('span').toggle();

//       })

//       });
      

var startDate = new Date();
  var startTime = startDate.getTime();
  //
  
  function start() {
      startDate = new Date();
  }
  
  window.onload = function() {
      start()
  }

// <script src="https://cdn.jsdelivr.net/npm/p5@1.5.0/lib/p5.js"></script>


// var options = ["A" , "B" , "C" , "D"];

var i = Math.floor(Math.random() * 8);
// console.log(i)

// getScript( "optionA.js", function( data, textStatus, jqxhr ) {
//     console.log( data ); // Data returned
//     console.log( textStatus ); // Success
//     console.log( jqxhr.status ); // 200
//     console.log( "Load was performed." );
//   });

// function get_random_elemnt(list) { 
//     var random_index = Math.floor(Math.random() * list.length)
//         return list[ random_index ];
//     }

function loadScript(url){
    var script = document.createElement("script");
    script.type = "text/javascript";
    script.src = url;
    document.body.appendChild(script);
}
    


switch(i) {

    case 0: 
    loadScript('Options/optionA.js')
    break;
      
    case 1: 
    loadScript('Options/optionB.js')
    break;

    case 2: 
    loadScript('Options/optionC.js')
    break;

    case 3:
    loadScript('Options/optionD.js')
    break;

    case 4:
    loadScript('Options/optionE.js')
    break;

    case 5:
    loadScript('Options/optionF.js')
    break;

    case 6:
    loadScript('Options/optionG.js')
    break;

    case 7:
    loadScript('Options/optionH.js')
    break;

 

 
      
  }

  

  var canvas = document.getElementById( 'defaultCanvas0' );  

function downloadCanvas(){  
    var image = canvas.toDataURL(); 
    console.log(image);
   
    var tmpLink = document.createElement( 'a' );  
    tmpLink.download = 'Your Time Sculpture.png'; 
    tmpLink.href = image; 
    document.body.appendChild( tmpLink );  
    tmpLink.click();  
    document.body.removeChild( tmpLink ); 


   
     
}

$(document).ready(function(){
    $('.re').click(function(){
        
        downloadCanvas();
        window.location.replace('Retrieve Your Time.html');
    })

});

// window location replace








// }


// setTimeout(
//     function() 
//     {
//       //do something special
//     }, 5000);


  
  window.onbeforeunload = function(event) {
      event.returnValue = stopTime();
      return stopTime();
  };
  



  
  function stopTime() {
      var date_now = new Date();
      var time_now = date_now.getTime();
      var time_diff = time_now - startTime;
      console.log(time_diff);
      var seconds_elapsed = Math.floor(time_diff / 1000);
      localStorage.setItem("seconds_elapsed", seconds_elapsed);
      
  }



//   console.log(time)

// function pick_random_option(){
//     var options_element=$('#C')
   
// }
// $(document).ready(function(){
//     pick_random_option();
    

 

// })


// var startDate = new Date();
// var startTime = startDate.getTime();
// //

// function start() {
//     startDate = new Date();
//     }
  
  
// $(document).ready(function() { 
   
//     $(window).load(function() { 
//         return 'start()';
//     });

// });

// function stopTime() {
//     var date_now = new Date (); 
//     var time_now = date_now.getTime (); 
//     var time_diff = time_now - startTime; 
//     console.log(time_diff);
//     var seconds_elapsed = Math.floor ( time_diff / 1000 );
//     alert("Time Spent: " + seconds_elapsed + " seconds");
// }
// $(function() {
//     $(window).on('beforeunload', function() {
//     return 'stopTime()';
//     });

// window.addEventListener("beforeunload",function(e){
//     var confirmationMessage = "xx?";
//     (e || window.event).returnValue = confirmationMessage;
//     return confirmationMessage;
// });




    // window.onunload = stopTime;
    
//     function stopTime(){
//         var end = new Date().getTime();
//         var time = end - start;
//      alert('Execution time: ' + time);
  

//  }
// });









// const screenshotTarget = document.body;

// html2canvas(screenshotTarget).then((canvas) => {
//     const base64image = canvas.toDataURL("image/png");
//     window.location.href = base64image;
// });

// save-canvas p5js
// download image -- any buttom/click/keyboard
// freeze the animation

// randomalize the sculpture
