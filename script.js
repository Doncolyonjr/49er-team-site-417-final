"use strict";

let darkBtn = document.querySelector("#darkBtn");
let dark = document.querySelector("body")
/*Selecting body and button for dark mode*/

darkBtn.addEventListener("click",function(){
/*event to listen for click on light and dark mode */
    dark.classList.toggle("dark");
    /*toggles dark class*/
});

/*function to add hidden class to non-active items */
function addHidden(){
    let products = document.querySelectorAll("#news section");
/*selects the product display section */
    for(let section of products){
        section.classList.add("hidden");
    }
    /*loop that adds hidden class */
}   

let product1Btn = document.querySelector("#product1");
let product2Btn = document.querySelector("#product2");
let product3Btn = document.querySelector("#product3");
/*Selects product display buttons */

/*event function for button 1 */
product1Btn.addEventListener("click", function(){
    addHidden();
    /*calls hidden function */


    let product1 = document.querySelector("#article1");
    /*selects product img */

    product1.classList.remove("hidden");
    product1.classList.add("active");
    /*adds hidden class and adds active class */
});

/*event function for button 2 */
product2Btn.addEventListener("click", function(){
    addHidden();
    /*calls hidden function */

    let product2 = document.querySelector("#article2")
    /*selects product img */

    product2.classList.remove("hidden");
    product2.classList.add("active");
    /*adds hidden class and adds active class */

});

/*event function for button 3 */
product3Btn.addEventListener("click", function(){
    addHidden();
    /*calls hidden function */


    let product3 = document.getElementById("article3");
    /*selects product img */

    product3.classList.remove("hidden");
    product3.classList.add("active");
    /*adds hidden class and adds active class */

});


function validateForm(event){

    event.preventDefault();
    /*prevents form from submitting */

    let fName = document.getElementById("name");
    let phone = document.getElementById("phone");
    let email = document.getElementById("email");
    let fieldset = document.querySelector("fieldset");
    let byPhone = document.getElementById("contact_phone");
    let byEmail = document.getElementById("contact_email");
    let comments = document.getElementById("comments");
    let confirm = document.getElementById("confirm");
    /**Selects: name input, phone input, email input, fieldset of radio, radio inputs, textarea, and submit button */

    let fNameRegex = /^[A-Z][a-z]+\s[A-Z][a-z]+$/;
    let phoneRegex = /^\d{10}$/;
    let emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,5}$/;
    /**regular expression for name, phone, and email */

    fName.classList.remove("error");
    phone.classList.remove("error");
    email.classList.remove("error");
    fieldset.classList.remove("error");
    comments.classList.remove("error");
    /**removes error class, to repeat process*/

    let error1 = document.getElementById("error1");
    let error2 = document.getElementById("error2");
    let error3 = document.getElementById("error3");
    let error4 = document.getElementById("error4");
    let error5 = document.getElementById("error5");
    /**selects each error span */

    error1.classList.add("hidden");
    error2.classList.add("hidden");
    error3.classList.add("hidden");
    error4.classList.add("hidden");
    error5.classList.add("hidden")
    /**adds hidden class */

    confirm.classList.add("hidden");
    /**adds hidden class to confirm message */

    let isValid = true;
    /**form is declared valid until test */

    if(!fNameRegex.test(fName.value)){
        /**test value of name to regex */

        isValid = false;
        /**form is false if does not match regex */
        fName.classList.add("error");
        /**add error class */
       error1.classList.remove("hidden");
       /**removes hidden from error span */
    }


    if(byPhone.checked){
        /**if phone is checked test phone */
        if(!phoneRegex.test(phone.value)){
        /**test value of phone to regex */

        isValid = false;
        /**form is false if does not match regex */
        phone.classList.add("error");
        /**add error class */
        error2.classList.remove("hidden");
        /**removes hidden from error span */
    }
    
    }else if(byEmail.checked){
        /**if email is check test email */
        if(!emailRegex.test(email.value)){
        /**test value of email to regex */

        isValid = false;
        /**form is false if does not match regex */
        email.classList.add("error");
        /**add error class */
        error3.classList.remove("hidden");
        /**removes hidden from error span */
        }

    }else{

        isValid = false;
        /**form is false if neither is chosen */
        fieldset.classList.add("error");
        /**add error class */
        error4.classList.remove("hidden");
        /**removes hidden from error span */
    }

    if(comments.value === ""){
        /**textarea value */
        isValid = false;
        /**form is false if textarea is left blank */
        comments.classList.add("error");
        /**add error class */
        error5.classList.remove("hidden");
        /**removes hidden from error span */
    }

    /**if form is valid */
    if(isValid){
        document.getElementById("signUp").submit();
        /** selects submit button*/

        confirm.classList.remove("hidden");
        /**removes confirm hidden */
        confirm.innerHTML =
        `Thank you for signing up!:
        <br>Full Name: ${fName.value}
        <br>Email: ${email.value}
        <br>Phone: ${phone.value}
        <br>Comments: ${comments.value}`;
        /**pop up message for users input */

        /**blank values for inputs after submission */
        fName.value = "";
        phone.value = "";
        email.value = "";
        byPhone.checked = false;
        byEmail.checked = false;
        comments.value = "";

    }

}

document.getElementById("signUp").addEventListener("submit",validateForm);
/**calls validation function when event listener is called */

/*gets a random generated number */
function getRandomNumber(min, max){
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

function guessingGame(event){
/**guessing game event function */
    event.preventDefault();
    /**prevents form from submitting */

    let userGuess = document.getElementById("numGuess");
    let notGuess = document.getElementById("notGuess");
    /**selects user input and error message */

    let output = document.getElementById("gameOutput");
    /**selects output message */

    let number = getRandomNumber(1, 10);
    /**calls random number function for number between 1 and 10 */

    notGuess.classList.add("hidden")
    /**adds hidden class to output message */

    if(userGuess.value >= 1 && userGuess.value <= 10){
        /**if value is more than or equal to one and if value is less than or equal to 10 */

        
        if(userGuess.value == number){
        /**if value of guess is equal to the random number*/
        output.innerHTML = `You Won! 
                            <br> Your guess was: ${userGuess.value}
                            <br> The Number was: ${number}`
        /**out put message created */
        userGuess.value = "";
        /**input for guess is blank */
        }else{
        /**if value of guess does not equal to the random number*/
        output.innerHTML = `Sorry you loss,
                            <br> Your guess was: ${userGuess.value}
                            <br> The number was: ${number}`
        /**input for guess is blank */
        }
    }else{
        /**error if guess is not valid */
        notGuess.classList.remove("hidden");
        /**removes hidden from error output */
        userGuess.value = "";
        /**makes users guess blank again */
    }
}
document.getElementById("game").addEventListener("submit", guessingGame);
/**calls game when submitted */
