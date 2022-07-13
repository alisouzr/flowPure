const newButton = document.querySelector(".button1");
const cardTop = document.querySelector(".card-top");
const cardBottom = document.querySelector(".card-bottom");
const divGlobal = document.createElement("div");
//const options = document.querySelector(".moreoptions");

divGlobal.classList.add("global");

newButton.addEventListener("click", () => {
    newButton.disabled = "true";
    const createDiv = document.createElement("div") //div com  class element
    createDiv.classList.add("element");
    const createDivText = document.createElement("div"); //onde fica o texto do element
    createDivText.classList.add("divText");
    createDivText.textContent = `IVR`
    const createDivBtn = document.createElement("div"); //divBtn onde o button + fica
    createDivBtn.classList.add("divBtn");
    const createbuttonPlus = document.createElement("button"); // button que fica na divBtn
    createbuttonPlus.classList.add("moreoptions"); //nome da class do button
    createbuttonPlus.textContent = "▼"; //conteudo do button
    const createText = document.createElement("text");
    createText.classList.add("textContent");
    createText.textContent = "1002";
    createDivBtn.appendChild(createbuttonPlus); //button+ adicionado dentro da divbtn
    createDivBtn.appendChild(createText); //texto adicionado dentro da divbtn
    createDiv.appendChild(createDivText);
    createDiv.appendChild(createDivBtn);
    divGlobal.appendChild(createDiv)
    cardBottom.appendChild(divGlobal);


    document.querySelector(".moreoptions").addEventListener("click", () => {
        anotherDiv();
    })
})


function anotherDiv() {
    document.querySelector(".moreoptions").disabled = "true";
    const createDiv = document.querySelector(".element");
    const divPlusandOptions = document.createElement("div");
    divPlusandOptions.classList.add("plusAndOptions");
    divGlobal.appendChild(divPlusandOptions);
    const buttonPlus = document.createElement("button");
    buttonPlus.textContent = "+";
    buttonPlus.classList.add("buttonPlus");
    divPlusandOptions.appendChild(buttonPlus);
    const options = document.createElement("div");
    options.textContent = "…"
    options.classList.add("options");
    divPlusandOptions.appendChild(options);
}

/* function moreOptions() {
    document.querySelector(".moreoptions").disabled = "true";
    const divContent = document.createElement("div");
    divContent.classList.add("divContent");
    divGlobal.appendChild(divContent);
    const divMenu = document.createElement("div");
    divMenu.classList.add("menu");
    divContent.appendChild(divMenu);
    createNineMenus();
}

function createNineMenus() {

} */