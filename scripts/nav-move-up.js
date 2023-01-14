// // Model       -------------------------------------
// function isScrollingDown(){    
//     document.addEventListener("scroll", function(){
//         var currentScroll = window.scrollY

//         if(window.scrollY<currentScroll){
//             return true;
//         }
//         else{
//             return false;
//         }
//     });
// }

// function isScrollingUp(){
//     document.addEventListener("scroll", function(){
//         var currentScroll = window.scrollY

//         if(window.scrollY>currentScroll){
//             return true;
//         }
//         else{
//             return false;
//         }
//     });
// }
// // Model       -------------------------------------

// // View        -------------------------------------
// function moveNavUp(){
//     const navBar = document.getElementById('nav-bar');

//     while(navBar.style.top<navBar.style.height){
//         navBar.style.top = parseInt(navBar.style.top) + 1 + 'px';
//     }
// }

// function moveNavDown(){
//     const navBar = document.getElementById('nav-bar');

//     while(navBar.style.top != 0){
//         navBar.style.top = parseInt(navBar.style.top) - 1 + 'px';
//     }
// }
// // View        -------------------------------------

// // Controller  -------------------------------------
// function main(){
//     var scrollReset = 0;
//     var navPos = 1;

    

//     if(isScrollingDown()){
//         moveNavUp();

//         scrollReset = 0; //scroll lockout
//         navPos = 0; //moved up
//     }
//     else if(isScrollingUp()){
//         moveNavDown();
//         scrollReset = 1; 
//         navPos = 1; // moved down
//     }
    
    
// }

// moveNavUp();

// // Controller  -------------------------------------


var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("nav-bar").style.top = "0";
  } else {
    document.getElementById("nav-bar").style.top = '-70px';
  }
  prevScrollpos = currentScrollPos;
}