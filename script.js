// All required elements

const form = document.querySelector("form")
statusTxt = form.querySelector(".button-area span")

form.onsubmit = (e)=>{
    e.preventDefault() // Preventing form from submitting
    statusTxt.style.color = "#0d6efd"
    statusTxt.style.display = "block"
    
    let xhr = new XMLHttpRequest() // Creating new XML object
    xhr.open("POST", "message.php", true) // Sending post request to message.php file
    xhr.onload = ()=>{ //Once ajax loaded
        if(xhr.readyState == 4 && xhr.status == 200){ // If ajax response is 200 & ready status is 400 means there is no any error
            let response = xhr.response // Storing ajax response in a response variable
            // If response is an error then we change status color to red, else we reset the form
            if(response.indexOf("Email and message fields are required!") != -1 || response.indexOf("Enter a valid email address!") || response.indexOf("Sorry, failed to send your message!")){
                statusTxt.style.color = "red"
            }else{
                console.log("coucou")
                form.reset()
                setTimeout(()=>{
                    statusTxt.style.display = "none"
                }, 3000) // Hide the status after 3 seconds if the form is sent
            }
            statusTxt.innerText = response
        }
    }
    let formData = new FormData(form); // Creating new FormData object, this object is used to send form data
    xhr.send(formData)
}