var sectionOne = document.querySelector(".section-one")
var hide = document.querySelector(".hide")
var show = document.querySelector(".show")


hide.addEventListener("click" , ()=> {
    
    sectionOne.style.opacity = "0"
    sectionOne.style.transition = "2s All"
    // sectionOne.style.display = "none"
    // sectionOne.style.position = "absolute"
    // sectionOne.style.left = "-20%"
    // sectionOne.style.transition = "1s All"



})

show.addEventListener("click" , ()=> {
    
    sectionOne.style.opacity = "1"
    // sectionOne.style.display = "block"
    // sectionOne.style.position = "absolute"
    // sectionOne.style.left = "15%"
    sectionOne.style.transition = "1s All"

})