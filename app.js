var translateBtn=document.querySelector('#button');

var txtOutput=document.querySelector('#outputTxt');

var serverUrl="https://api.funtranslations.com/translate/pirate.json";

function getUrl(text){
 return serverUrl+"?"+"text="+text;
}

function errorHandler(error){
    alert("Server is not responding. Please try again later.")
}



function clickEventHandler(){
    var InputTxt=document.querySelector('#txtInput');


    fetch(getUrl(InputTxt.value))
    .then(response => response.json())
    .then(json=> {
        var outputFinal=json.contents.translated;
        txtOutput.innerText=outputFinal;
    })
    .catch(errorHandler)
    


};


translateBtn.addEventListener("click",clickEventHandler)