var hiringButton = document.getElementById("hiringOption");
var commentButton = document.getElementById("commentOption");
var questionButton = document.getElementById("questionOption");
var hourlyPayments = document.getElementById("hourlyFieldDiv");

hiringButton.addEventListener("change",function(e){

    if(this.checked){
        hourlyPayments.hidden = false;
    }
})

commentButton.addEventListener("change",function(e){
    if(this.checked){
        hourlyPayments.hidden = true;
    }
})

questionButton.addEventListener("change",function(e){
    if(this.checked){
        hourlyPayments.hidden = true;
    }
})
