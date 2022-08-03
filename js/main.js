var btn = document.querySelectorAll(".btn")
var input = document.querySelector("#input")
var myequal = document.querySelector("#equal")
var remove = document.querySelector("#remove")

btn.forEach((mybutton) => {

    mybutton.addEventListener("click", (bu) => {


        input.value += bu.target.dataset.number
    })
});

myequal.addEventListener("click", () => {

    if (input.value += ""){
        input.value = eval(input.value)

    }else{
        input.value = "Not Number"

        // input.value = eq.target.dataset.number
    }

})

remove.addEventListener("click", () => {

  input.value = ''

})

