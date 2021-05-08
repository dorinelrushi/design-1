
let buttons = document.querySelectorAll(".lic");
buttons.forEach(button => {
    button.addEventListener("click",function(){
         buttons.forEach(btn => btn.classList.remove('active'));
         this.classList.add("active")
    })
})
