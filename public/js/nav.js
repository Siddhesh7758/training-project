var nav = document.getElementById('nav')
nav.style.backgroundColor = "white";
window.scroll = function srolling(){
    console.log("work")

    if (window.pageYOffset >100){

        nav.style.background = "#007bff";
        console.log('working');
    }
    else{
        nav.style.background = "transparent"
    }

}
console.log('hello');