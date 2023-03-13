let myBox1 = document.getElementById("box")
myBox.addEventListener('click', function (e) {
   alert("The box was clicked")
});



// click event
let myBox = document.querySelector(".box")
myBox.addEventListener("click", function() {
    alert("the box was clicked")
    console.log("box was clicked")
})



//mouse hover event
let myImage = document.getElementById("myImage")
myImage.addEventListener("mouseover", () => {
    alert("hovered on the image")
    console.log("mouseover")
})

//keydown event
document.addEventListener("keydown", (event)=>{
    if (event.key === "Escape") {
        alert("ESC key was pressed")
    }
})


document.addEventListener("keydown", (event)=>{
    if (event.key === "Enter") {
        alert("arrow key was pressed")
        console.log("key pressed")
    }
})


  document.addEventListener("keydown", (event) => {
    if (event.key.match(/[a-z]/)) {
      alert("a letter was entered")
    }
  })

  // Load event listerner
window.addEventListener("load", ()=> {
    alert("The page loaded")
    console.log("page loaded")
  })
  

  //scroll event
window.addEventListener("scroll", () => {
    alert("you scrolled the page")
    console.log("page scrolled")
})
  
let Description = document.getElementById("#description")
let Text= document.querySelector(".text")
let Btn = document.getElementById("btn")
Btn.addEventListener("click", () => {
    let someText = "welcome to my page"
   let  dec="Hello my name is Brian Kemboi,This is my website and here is where you get to know me "
    Text.innerText = someText
    Description.innerHTML = dec
})
//textcontent


let Hover = document.getElementById("myImage")
Hover.addEventListener("mouseover", () => {
    Hover.style.filter = "grayscale(50%)";
})
Hover.addEventListener("mouseout", () => {
    Hover.style.filter = "none"
})
