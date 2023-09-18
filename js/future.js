
/*Logic:At default,the list is hidden .create a function that use indexOf to check for matching ,if matching it will be ===0,
options matching will be list out by enable the display:css style .Else if not match, display:css style will be changed to none(ie list will not be
shown).If the user did not input anything ,the whole table will be hidden.This function will key running upon detecting that there is a input(onkeyup).
*/
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
    // this function is so that when the serachkey is clicked the search bar appears    var searchbar = document.getElementById("searchbar")
    var searchkey = document.getElementById("search");
    var counter = 0;
    searchkey.onclick = function () {
                     // if the user clicks searchkey will show the search bar it will show as count is (1 odd), 
                    // if users clicks searchkey again count is (2 even ) hence search bar hidden 
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

    /*Adding a event listener ,once your scroll offset =to the offset of the section ,then add and start animation else remove and image remain grey*/
   //Get element of the cloud computing photo
    var cloud=document.getElementById("cloud"); 
    document.addEventListener('scroll',function(e){
         // querySelector matches the specified selector, or group of selectors. If no matches are found, null is returned.
        // innerheight is the height of the view portal, and pageYoffset is the amount of scroll that we make.
        var top1=window.pageYOffset+window.innerHeight;
        isVisible=top1> document.querySelector("#jobsection>div").offsetTop; // heght is more than #jobsection>div
        if (isVisible){
            cloud.classList.add('greyscale');/*Add class*/
        }else{
            cloud.classList.remove('greyscale');//Remove class
            cloud.style.filter="grayscale(100%);";//Greyscale 100% by default
        }


    })
    /*Toast message*/
    var option =
        {
            animation: true,
            delay: 2000
        };

    {
        /*get toast element by id*/
        var toastHTMLElement = document.getElementById('welcome');
        var toastElement = new bootstrap.Toast(toastHTMLElement, option);
        /*Launch toast*/
        toastElement.show();
    }
    
    

    
/*Using random function to generator random position for rocket animation*/
    function rand(m,n){
        return Math.ceil(Math.random()*(n-m+1))+m-1; 
    }
    //Create new stars constantly at random position within range
    var num=40;
    for (var u=0;u<num;u++){
        var j =document.createElement("j"); // new element 
        j.style.height=rand(30,100)+'px'; //The style property returns the values of an element's style attribute., controls length of star
        j.style.top=-250+'px';// star position on rocket
        j.style.left=rand(-250,250)+"px"; // star position on rocket
        j.style.animationDuration=rand(5,30)/10 +'s';// duration stars stay
        document.querySelector('.rocket').appendChild(j); // addimg stars to the rocket with appendchild
    }
}

// The appendChild() method of the Node interface adds a node to the end of the list
//  of children of a specified parent node. 
// If the given child is a reference to an existing node in the document, 
// appendChild() moves it from its current position to the new position.

// If the given child is a Docum