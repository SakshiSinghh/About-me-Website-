
/*Logic:At default,the list is hidden .create a function that use indexOf to check for matching ,if matching it will be ===0,
options matching will be list out by enable the display:css style .Else if not match, display:css style will be changed to none(ie list will not be
shown).If the user did not input anything ,the whole table will be hidden.This function will key running upon detecting that there is a input(onkeyup).
*/
/*Functions to match search input with option table*/
function searchfeature(){
    /*Get table by ID*/
    var tables=document.getElementById("searchtable");
    /*Get input by ID and upcase it */
    var input=document.getElementById("sbar").value.toUpperCase();
    /*Get individual search option list*/
    var li=tables.getElementsByTagName("tr");
    for (var l=0;l<li.length;l++){
        /* if the input match by any search option records ,remove the "hidden" in style display to make that option appear*/
        if (li[l].textContent.toUpperCase().indexOf(input)===0){
            li[l].style.display="";
            tables.style.display=""
        }else{
            li[l].style.display="none";/*If not found,hide*/

        }
        if (input===""){
            tables.style.display="none"/*If user did not enter anything ,hide*/
        }
    }}

/*Only load after whole page is loaded*/
window.onload=function() {
   /*everytime,the search icon is clicked ,count++,when count is odd Make search overlay show else hide */
    // this function is so that when the serachkey is clicked the search bar appears
    var searchbar = document.getElementById("searchbar")
    var searchkey = document.getElementById("search");
    var counter = 0;
    searchkey.onclick = function () {
      // if the user clicks searchkey will show the search bar it will show as count is (1 odd), 
       // if users clicks searchkey again count is (2 even ) hence search bar hidden 
        counter = counter + 1;
        counter = counter + 1;
        if (counter % 2 > 0) {
            searchbar.style.visibility = "visible";
        } else {
            searchbar.style.visibility = "hidden";
        }
    };

    /*Adding a event listener to remove and add animation everytime click so that animation will appear everytime it is clicked*/
    searchkey.addEventListener("click", function (e) {
        e.preventDefault;
        searchbar.classList.remove("searchbaranimation");
        void searchbar.offsetWidth;
        searchbar.classList.add("searchbaranimation");
    });
    /*Toast message*/
    var option =
        {
            animation: true,
            delay: 2000
        };
    /*get toast element by id*/
    var toastHTMLElement = document.getElementById('welcome');
    var toastElement = new bootstrap.Toast(toastHTMLElement, option);
    var toastHTMLElement2 = document.getElementById('sucessfd');
    var toastElement2 = new bootstrap.Toast(toastHTMLElement2, option);
    /*Launch toast*/
    toastElement.show();

      }

      
// typewriter!!
var i = 0;
var txt = 'This is the end !! Give your feedback ';
var speed = 50;

function typeWriter() {
 if (i < txt.length) {
// charAt() is a method that returns the character from the specified index.
document.getElementById("demo").innerHTML += txt.charAt(i); // gets each word
    i++;
setTimeout(typeWriter, speed);
// The global setTimeout() method sets a timer which executes a 
// function or specified piece of code once the timer expires.
}
}



// The addEventListener() method of the EventTarget interface sets up a function that 
// will be called whenever the specified event is delivered to the target.

// What does DOMContentLoaded mean?
// The DOMContentLoaded event fires when the initial HTML document has been completely loaded and parsed, 
// without waiting for stylesheets, images, and subframes to finish loading.

document.addEventListener('DOMContentLoaded',function(){
    // array with texts to type in typewriter
    var dataText = [ "You have reached the end ", "Feedback is welcomed", "Goodbye"];
    
    // type one text in the typwriter
    // keeps calling itself until the text is finished
    function typeWriter(text, i, fnCallback) {
      // check if text isn't finished yet
      if (i < (text.length)) {
        // add next character to h1
       document.querySelector("h1").innerHTML = text.substring(0, i+1) +'<span aria-hidden="true"></span>';
  
        // wait for a while and call this function again for next character
        setTimeout(function() {
          typeWriter(text, i + 1, fnCallback)
        }, 100);
      }
      // text finished, call callback if there is a callback function
      else if (typeof fnCallback == 'function') {
        // call callback after timeout
        setTimeout(fnCallback, 700);
      }
    }
    // start a typewriter animation for a text in the dataText array
     function StartTextAnimation(i) {
       if (typeof dataText[i] == 'undefined'){
          setTimeout(function() {
            StartTextAnimation(0);
          }, 20000);
       }
       // check if dataText[i] exists
      if (i < dataText[i].length) {
        // text exists! start typewriter animation
       typeWriter(dataText[i], 0, function(){
         // after callback (and whole text has been animated), start next text
         StartTextAnimation(i + 1);
       });
      }
    }
    // start the text animation
    StartTextAnimation(0);
  });
  
  
