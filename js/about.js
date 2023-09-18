function searchfeature(){
    /*Get table by ID*/
    var tables=document.getElementById("searchtable");// accesimng id ( search table )in HTML document table conatins all values that can be inpjut into search feauture
    /*Get input by ID and upcase it */
    var input=document.getElementById("sbar").value.toUpperCase();// js is case sesnitive so make everything uppercase
    /*Get individual search option list / elements*/
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
    var searchbar = document.getElementById("searchbar")
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


    /*3D Slideshow*/
    /*Get elements by ID*/
    var photo1 = document.getElementById("slide1");
    var photo2 = document.getElementById("slide2")
    var photo3 = document.getElementById("slide3")
    var i = 0;
    /*button for on and off of auto slideshow*/
    var timeron = 1;
    /*Slideshow interval 1.5s*/
    var start = setInterval(function () {
        // starts function since timeron==1
        if (timeron === 1) {
            if (i === 3) {
                i = 3;
            } else {
                i++;
            }
            // cuurent photo will be 0 since there alr
            if (i === 1) {
                photo2.style.transform = "translate3d(-30%,0,-100px)"
                photo3.style.transform = " translate3d(30%,0,-100px)"
                photo1.style.transform = "translate3d(0,0,0)"
            }
            if (i === 2) {
                photo2.style.transform = "translate3d(0,0,0)"
                photo3.style.transform = "translate3d(-30%,0,-100px)"
                photo1.style.transform = " translate3d(30%,0,-100px)"
            }
            if (i === 3) {
                photo3.style.transform = "translate3d(0,0,0)"
                photo1.style.transform = "translate3d(-30%,0,-100px)"
                photo2.style.transform = " translate3d(30%,0,-100px)"
                // reintalise i-0 for function to keep
                i = 0;
            }
        }
    }, 1500) 
    /*Get radios of photos by ID*/
    var control1 = document.getElementById("s1")
    var control2 = document.getElementById("s2")
    var control3 = document.getElementById("s3")
    var check;
    /*If first photo is clicked ,transform to there and wait for another 1.5s before starting*/
    control1.addEventListener("click", function (e) {
        check = 0;
        timeron = 0;
        photo2.style.transform = "translate3d(-30%,0,-100px)"
        photo3.style.transform = " translate3d(30%,0,-100px)"
        photo1.style.transform = "translate3d(0,0,0)"
        i = 1;
        var restart = setInterval(function () {
            if (check === 0) {
                check++;
            } else {
                timeron = 1;
            }
            if (timeron === 1) {
                clearTimeout(restart)
            }
        }, 1500)
    })
    /*If second photo is clicked ,transform to there and wait for another 1.5s before starting*/
    control2.addEventListener("click", function (e) {
        check = 0;
        timeron = 0;
        photo2.style.transform = "translate3d(0,0,0)"
        photo3.style.transform = "translate3d(-30%,0,-100px)"
        photo1.style.transform = " translate3d(30%,0,-100px)"
        i = 2;
        var restart = setInterval(function () {
            if (check === 0) {
                check++;
            } else {
                timeron = 1;
            }
            if (timeron === 1) {
                clearTimeout(restart)
            }
        }, 1500)
    })
    /*If third photo is clicked ,transform to there and wait for another 1.5s before starting*/
    control3.addEventListener("click", function (e) {
        check = 0;
        timeron = 0;
        photo3.style.transform = "translate3d(0,0,0)"
        photo1.style.transform = "translate3d(-30%,0,-100px)"
        photo2.style.transform = " translate3d(30%,0,-100px)"
        i = 3;
        var restart = setInterval(function () {
            if (check === 0) {
                check++;
            } else {
                timeron = 1;
            }
            if (timeron === 1) {
                clearTimeout(restart)
            }
        }, 1500)
    })
    /*Toast message*/
    var option =
        {
            animation: true,
            delay: 2000
        };
    /*get toast element by id*/
    var toastHTMLElement = document.getElementById('welcome');
    var toastElement = new bootstrap.Toast(toastHTMLElement, option);
    /*Launch toast*/
    toastElement.show();

   
}