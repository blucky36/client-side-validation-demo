document.addEventListener("DOMContentLoaded", function(){

  let myForm = document.getElementsByClassName("input-form")[0]
  console.log(myForm)

  myForm.addEventListener("submit", function(){
    event.preventDefault()
    let email = document.getElementById("email-input").value
    console.log(email)
    let password = document.getElementById("password-input").value
    console.log(password)
    let telephone = document.getElementById("tel-input").value
    console.log(telephone)
    let admin = document.getElementById("admin-input").checked
    console.log(admin)
  }) //end of submit listener

  let admin = document.getElementById("admin-input")
  let body = document.getElementsByTagName("body")[0]

  admin.addEventListener("click", function(){

    if (admin.checked) {
      let pTag = document.createElement("p")
      pTag.setAttribute("id", "pTagOI")
      pTag.innerHTML = "wassup bruv ( ͡° ͜ʖ ͡°). (☭ ͜ʖ ☭). (ᴗ ͜ʖ ᴗ). ( ° ͜ʖ °). (⟃ ͜ʖ ⟄). ( ‾ ʖ̫ ‾). (͠≖ ͜ʖ͠≖) ( ͡° ͜ʖ ͡°). (☭ ͜ʖ ☭). (ᴗ ͜ʖ ᴗ). ( ° ͜ʖ °). (⟃ ͜ʖ ⟄). ( ‾ ʖ̫ ‾). (͠≖ ͜ʖ͠≖) ( ͡° ͜ʖ ͡°). (☭ ͜ʖ ☭). (ᴗ ͜ʖ ᴗ). ( ° ͜ʖ °). (⟃ ͜ʖ ⟄). ( ‾ ʖ̫ ‾). (͠≖ ͜ʖ͠≖) ( ͡° ͜ʖ ͡°). (☭ ͜ʖ ☭). (ᴗ ͜ʖ ᴗ). ( ° ͜ʖ °). (⟃ ͜ʖ ⟄). ( ‾ ʖ̫ ‾). (͠≖ ͜ʖ͠≖) ( ͡° ͜ʖ ͡°). (☭ ͜ʖ ☭). (ᴗ ͜ʖ ᴗ). ( ° ͜ʖ °). (⟃ ͜ʖ ⟄). ( ‾ ʖ̫ ‾). (͠≖ ͜ʖ͠≖) ( ͡° ͜ʖ ͡°). (☭ ͜ʖ ☭). (ᴗ ͜ʖ ᴗ). ( ° ͜ʖ °). (⟃ ͜ʖ ⟄). ( ‾ ʖ̫ ‾). (͠≖ ͜ʖ͠≖) ( ͡° ͜ʖ ͡°). (☭ ͜ʖ ☭). (ᴗ ͜ʖ ᴗ). ( ° ͜ʖ °). (⟃ ͜ʖ ⟄). ( ‾ ʖ̫ ‾). (͠≖ ͜ʖ͠≖) ( ͡° ͜ʖ ͡°). (☭ ͜ʖ ☭). (ᴗ ͜ʖ ᴗ). ( ° ͜ʖ °). (⟃ ͜ʖ ⟄). ( ‾ ʖ̫ ‾). (͠≖ ͜ʖ͠≖) ( ͡° ͜ʖ ͡°). (☭ ͜ʖ ☭). (ᴗ ͜ʖ ᴗ). ( ° ͜ʖ °). (⟃ ͜ʖ ⟄). ( ‾ ʖ̫ ‾). (͠≖ ͜ʖ͠≖) ( ͡° ͜ʖ ͡°). (☭ ͜ʖ ☭). (ᴗ ͜ʖ ᴗ). ( ° ͜ʖ °). (⟃ ͜ʖ ⟄). ( ‾ ʖ̫ ‾). (͠≖ ͜ʖ͠≖)( ͡° ͜ʖ ͡°). (☭ ͜ʖ ☭). (ᴗ ͜ʖ ᴗ). ( ° ͜ʖ °). (⟃ ͜ʖ ⟄). ( ‾ ʖ̫ ‾). (͠≖ ͜ʖ͠≖)( ͡° ͜ʖ ͡°). (☭ ͜ʖ ☭). (ᴗ ͜ʖ ᴗ). ( ° ͜ʖ °). (⟃ ͜ʖ ⟄). ( ‾ ʖ̫ ‾). (͠≖ ͜ʖ͠≖)( ͡° ͜ʖ ͡°). (☭ ͜ʖ ☭). (ᴗ ͜ʖ ᴗ). ( ° ͜ʖ °). (⟃ ͜ʖ ⟄). ( ‾ ʖ̫ ‾)"
      pTag.style.color = "yellow"
      pTag.style.border = "100px double green"
      pTag.style.fontSize = "2000%"
      body.appendChild(pTag)
    } else{
      let pTag = document.getElementById("pTagOI")
      body.removeChild(pTag)
    }//i guess you can really tell which one is mine im such a fucking child

  })
}) //end of DOMContentLoaded
