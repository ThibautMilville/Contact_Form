// All required elements

const form = document.querySelector("form")
statusTxt = form.querySelector(".button-area span")

form.onsubmit = (e)=>{
    e.preventDefault() // Preventing form from submitting
    statusTxt.style.display = "block"
    
    let xhr = new XMLHttpsRequest() // Creating new XML object
    xhr.open("POST", "message.php", true) // Sending post request to message.php file
    xhr.onload = ()=>{ //Once ajax loaded
        if(xhr.readyState == 4 && xhr.status == 200){ // If ajax response is 200 & ready status is 400 means there is no any error
            let response = xhr.response // Storing ajax response in a response variable
            console.log(response);
        }
    }
    xhr.send()
}