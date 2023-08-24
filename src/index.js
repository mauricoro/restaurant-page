import addTitle from './home.js';

const buttons = document.querySelectorAll("button");
const pages = document.querySelectorAll(".content div") 

buttons.forEach((button) => {
    button.onclick = load;
});

function load(){
    //create if not already created
    //unload all then load new one
    //disable the ability to click on the button until another one is
    
    //makes each page hidden
    pages.forEach((page) => {
        page.classList.add("hidden")
    });

    //enables all buttons
    buttons.forEach((button) => {
        button.disabled = false;
    });

    //add's title if hasn't been already created else removes hidden tag
    if(!document.querySelector("." + this.id + " .title")){
        addTitle(this.id)
    }

    document.querySelector(".content " + "." + this.id).classList.remove("hidden");

    //disables button
    this.disabled = true;
    
}

function unload(){
    
}

