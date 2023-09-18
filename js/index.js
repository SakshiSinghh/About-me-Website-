
function searchfeature(){
    /*Get table by ID*/
    var tables=document.getElementById("searchtable"); // accesimng id ( search table )in HTML document table conatins all values that can be inpjut into search feauture
    /*Get input by ID and upcase it */
    var input=document.getElementById("sbar").value.toUpperCase();// js is case sesnitive so make everything uppercase
    /*Get individual search option list/ elements*/
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
    searchkey.onclick = function (){
                    // if the user clicks searchkey will show the search bar it will show as count is (1 odd), 
                    // if users clicks searchkey again count is (2 even ) hence search bar hidden 

        counter = counter + 1;
        if (counter % 2 > 0) {  
            searchbar.style.visibility = "visible";
        } else {
            searchbar.style.visibility = "hidden";
        }
    };



    /*Toast message*/
    var option =
        {
            animation: true,
            delay: 2000
        };

    {
        /*get toast element by id*/
        var toastHTMLElement = document.getElementById('welcome');
        // get bootstrap toastelement
        var toastElement = new bootstrap.Toast(toastHTMLElement, option);
        /*Launch toast by calling*/
        toastElement.show();
    }


    
/*Get the SP photo using id*/
    var spphoto=document.getElementById("singaporepoly");
    /*Adding a event listner ,when scroll to the specific height/section ,add in class to replace original photo and with effect else remove it */
    // To register a scroll event handler, you call the addEventListener() method on the target element, like this
    document.addEventListener('scroll',function(e){
        var top1=window.pageYOffset+window.innerHeight; // height for picture change original 
            isVisible=top1> document.querySelector("#spsection>div").offsetTop;
            // adding "new" from css onto otiginal no colour picture
        if (isVisible){
           spphoto.classList.add('new');/*Add class to element*/
        }else{
           spphoto.classList.remove('new')
        }


    })
}

// The Element.classList is a read-only property that returns a live DOMTokenList 
// collection of the class attributes of the element. 



