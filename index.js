// alert("ready to start")

let btn = document.querySelectorAll(".drum");

function sound(val) {

    switch (val) {

        case "w":
            let tom1 = new Audio("/projects/drumKit/sounds/tom-1.mp3");
            tom1.play();
            break;

        case "a":
            let tom2 = new Audio("/projects/drumKit/sounds/tom-2.mp3");
            tom2.play();
            break;

        case "s":
            let tom3 = new Audio("/projects/drumKit/sounds/tom-3.mp3");
            tom3.play();
            break;

        case "d":
            let tom4 = new Audio("/projects/drumKit/sounds/tom-4.mp3");
            tom4.play();
            break;

        case "j":
            let crash = new Audio("/projects/drumKit/sounds/crash.mp3");
            crash.play();
            break;

        case "k":
            let snare = new Audio("/projects/drumKit/sounds/snare.mp3");
            snare.play();
            break;

        case "l":
            let kick = new Audio("/projects/drumKit/sounds/kick-bass.mp3");
            kick.play();
            break;
    
        default:
            alert("please click only instrument buttons");
            break;
    }

}


//for clicks 
for(let i=0; i<btn.length; i++) {

    btn[i].addEventListener("click", function () {
        
        // this.style.color="white";

        let cur = this.innerHTML;

        sound(cur);

    } );
}

//for keypress
document.addEventListener("keypress", function(event) {
    sound(event.key);
})