// Heart icon count 
// declare variables
let heartCount = 0;
const heartIcon = document.querySelectorAll(".main-love-icon-container");
const heartBtn = document.getElementById("love-btn");

heartIcon.forEach(function(icon) {
    icon.addEventListener("click", function(){
        heartCount++;
        heartBtn.innerText = heartCount;
    })
})    

// call button
// Show an **alert** with a message including the service name and number
document.querySelectorAll(".call-btn").forEach(function(btn) {
    btn.addEventListener("click", function(e) {
        e.preventDefault();
        alert("button clicked");
    })
})