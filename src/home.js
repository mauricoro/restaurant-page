//add


export default function addTitle(name){
    const content = document.querySelector("." + name);
    const title = document.createElement("div");
    title.classList.add("title")
    if(name === "home"){
        title.textContent = "Welcome to Pizza Plaza!";
    }else if(name === "menu") {
        title.textContent = "Menu";
    }
    else{
        title.textContent = "Contact";
    }
    content.appendChild(title);
    
}


