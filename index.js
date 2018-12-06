// Listen for messages
const body = document.querySelector("body");
browser.runtime.onMessage.addListener(receiver);

const searchBar = document.querySelector("#twotabsearchtextbox");

const searchResults = document.querySelector("#s-result-count");

const searchCont = document.querySelector(".nav-searchbar")

if(!document.querySelector(".my-logo-home")){
	const imgCont = document.createElement("div")
imgCont.style["width"] = "100%"
imgCont.style["text-align"] = "center"

const imgLogo = document.createElement("img")
imgLogo.setAttribute("src","https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Amazon_logo_plain.svg/603px-Amazon_logo_plain.svg.png")
imgLogo.classList.toggle("my-logo-home")

imgCont.appendChild(imgLogo)

const navLeft = document.querySelector(".nav-searchbar .nav-left")

searchCont.insertBefore(imgCont,navLeft)
}


// A message is received
function receiver(request, sender, sendResponse) {
  if (request.active) {
    //do something
    body.classList.toggle("my-beautiful-extension");
    if(!searchResults){
    	body.classList.toggle("this-is-home");
    }
    
    searchBar.setAttribute("placeholder", "se hai bisogno di qualcosa, cerca qui")
  } else {
    //do else
    body.classList.toggle("my-beautiful-extension");
    searchBar.setAttribute("placeholder", "")
  }
}
