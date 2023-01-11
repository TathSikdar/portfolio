var PrevscrollPos = window.scrollY;

if (PrevscrollPos<window.scrollY){
    document.getElementById("nav-bar").style.top="0";
}
else{
    document.getElementById("nav-bar").style.top=""
}