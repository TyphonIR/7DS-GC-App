
//#region Navbar

function toggleMode(toggleTo = "toggle") {
    const a_Elem = document.createElement("a");
    a_Elem.style.display = "none";
    const convertFilePath = "../convert/convert.html"
    const searchFilePath = "../search/search.html"
    document.querySelector("body").appendChild(a_Elem);
    const current_file_name = currentFileName_meta.dataset.file_name;
    
    if (current_file_name === "search.html" || toggleTo === "convert") {
        a_Elem.href = convertFilePath;
        a_Elem.click();
    } else if (current_file_name === "convert.html" || toggleTo === "search") {
        a_Elem.href = searchFilePath;
        a_Elem.click();
    }
    document.querySelector("body").removeChild(a_Elem);
}

function toggleNavBar() {
    navBar.style.height = navBar.style.height === "0px" ? "var(--nav-height)" : "0px";
    toggleNav_button.innerHTML = navBar.style.height === "0px" ? "&downarrow;" : "&uparrow;";
    controls_div.style.position = navBar.style.height === "0px" ? "fixed" : "relative";
    convert_header.style.marginTop = navBar.style.height === "0px" ? "10px" : "var(--convert-margin-top)";
}

//#endregion

//#region Convert functions

function listItem(image_src, text, alt) {
    let engName = text[0];
    let jpName = text[1];

    const listItem_div = Object.assign(document.createElement("div"), { className : "list-item" });
    const itemImage_div = Object.assign(document.createElement("div"), { className : "item-image" });
    const itemName_div = Object.assign(document.createElement("div"), { className : "item-name" });
    const itemImage_img = Object.assign(document.createElement("img"), { src : image_src, alt : alt });
    const itemTextName_p = document.createElement("p");
    const itemTextTranslation_p = document.createElement("p");

    container_div.appendChild(listItem_div);
    listItem_div.appendChild(itemImage_div);
    itemImage_div.appendChild(itemImage_img);
    listItem_div.appendChild(itemName_div);
    itemName_div.appendChild(itemTextName_p);
    itemName_div.appendChild(itemTextTranslation_p);

    itemTextName_p.innerText = engName;
    itemTextTranslation_p.innerText = jpName;
}

const addCharactersConvert = () => {
    addCharacters((image_src, text, alt) => listItem(image_src, text, alt));
    setDisplayToNone();
}

addCharactersConvert();

function setDisplayToNone() {
    for (let i = 0; i < listItems_div.length; i++) {
        listItems_div[i].style.display = "none";
    }
}

function copyToClipboard(name, translation) {
    let characterNameAndTranslations = name + " = " + translation;
    navigator.clipboard.writeText(translation);
    
    convertRestultsEngName_p.style.display = "";
    convertRestultsEngName_p.textContent = characterNameAndTranslations;
    convertResultsText_p.style.color = "rgb(10, 255, 10)";
    convertResultsText_p.textContent = `Copied '${translation}' to clipboard`;
}

function convertName() {
    let listItemsDisplayStatus = [];

    let characterName = '';
    let characterTranslatedName = '';
    let characterNameAndTranslations = '';

    if (convert_input.value.length > 0) {
        for (let i = 0; i < listItems_div.length; i++) {
            let itemName = listItems_div[i].children[1].children;
            characterName = itemName[0].textContent;
            characterTranslatedName = itemName[1].textContent;

            if (convert_input.value.toLowerCase() === characterName.toLowerCase()) {
                listItems_div[i].style.display = "grid";
                copyToClipboard(characterName, characterTranslatedName);
            }
            else {
                listItems_div[i].style.display = "none";
            }

            if (listItemsDisplayStatus.length < listItems_div.length) listItemsDisplayStatus.push(listItems_div[i].style.display);
        }
        
        if (!listItemsDisplayStatus.every(item => item === "none")) {
            noMatch_div.style.display = "none";
        }
        else {
            noMatch_div.style.display = "flex";
            convertRestultsEngName_p.style.display = "none";
            convertResultsText_p.textContent = "Type in the name of the character you want to convert to japanese.";
            convertResultsText_p.style.color = "yellow";
        }

        noMatchText_p.style.color = "red";
        noMatchText_p.textContent = "No match found";
    } 
    else {
        setDisplayToNone();

        noMatch_div.style.display = "flex";
        noMatchText_p.style.color = "white";
        noMatchText_p.textContent = "Type a character's name to convert.";
        
        convertRestultsEngName_p.style.display = "none";
        convertResultsText_p.textContent = "Type in the name of the character you want to convert to japanese.";
        convertResultsText_p.style.color = "yellow";
    }
}

convertName();

//#endregion


function addEventListeners() {
    toggleMode_button.addEventListener("click", () => toggleMode());
    toggleNav_button.addEventListener("click", () => toggleNavBar());

    ["input", "keydown"].forEach(evt => {
        convert_input.addEventListener(evt, (e) => {
            if (evt === "input") {
                if (e.inputType === "deleteContentBackward") convertName();
                else convert_input.addEventListener('change', () => {
                    convertName();
                    setTimeout(() => {
                        convert_input.value = ""
                    }, 0)
                })
            }
            else if (evt === "keydown") {
                if (e.key === "Escape") {
                    convert_input.blur();
                }
            }
        })
    })
}

addEventListeners();
