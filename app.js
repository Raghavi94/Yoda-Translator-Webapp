var inputText = document.querySelector("#txt-ip");
var btnTranslate = document.querySelector("#btn-translate");
var outputText = document.querySelector("#op");

var serverURL = "https://api.funtranslations.com/translate/yoda.json"

function getTranslationURL(text){
    return serverURL + "?" + "text=" + text
}

function errorHandler(error){
    console.log("error occured",error);
    alert("Something wrong with server! try again later");
}

function clickEventHandler(){

    //taking input

    var txtInput = inputText.value;
    
    //calling server for processing

    fetch(getTranslationURL(txtInput))
        .then(response=>response.json())
        .then(json => {
            var translatedText = json.contents.translated;
            outputText.innerText = translatedText; //=>output comes here
        })
        .catch(errorHandler)
};

btnTranslate.addEventListener("click",clickEventHandler);
