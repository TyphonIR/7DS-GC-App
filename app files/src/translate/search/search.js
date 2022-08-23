
let copiedText = "";
let input_mode = "start_with_text";

function loadSearchSettings(data) {
    // Set input mode
    input_mode = data.default_input_mode;
    setInputModeButtonText();
}

function setInputModeButtonText() {
    if (input_mode === "start_with_text") toggleInputMode_button.textContent = "Start with text";
    else if (input_mode === "include_text") toggleInputMode_button.textContent = "Includes text";
}

setInputModeButtonText()

toTopLink_a.style.display = "none";

//#region Navbar and help function

function toggleHelpSideBar(closeOrOpen = "") {
    if (closeOrOpen === "open") {
        helpSideBar_div.style.width = "var(--help-side-bar-width)";
        helpSideBar_div.style.left = "0";
        for (let i in helpSideBar_div.children) helpSideBar_div.children[i].className -= "hideElem";
    } else if (closeOrOpen === "close") {
        helpSideBar_div.style.width = "0";
        helpSideBar_div.style.left = "-100px";
        for (let i in helpSideBar_div.children) helpSideBar_div.children[i].className += "hideElem";
    }
}
  
function toggleMode(toggleTo = "toggle") {
    const a_Elem = document.createElement("a");
    a_Elem.style.display = "none";
    const convertFilePath = "../convert/convert.html"
    const searchFilePath = "../search/search.html"
    document.querySelector("body").appendChild(a_Elem);
    
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
    search_header.style.marginTop = navBar.style.height === "0px" ? "10px" : "var(--search-margin-top)";
}
  
function toggleNoHelpText(hide, index) {
    let text = noHelpText_p[index];

    if (hide) {
        if (!text.className.includes(" hideElem")) text.className += " hideElem";
    } else if (!hide) {
        if (text.className.includes(" hideElem")) text.className.replace(" hideElem", "");
    }
}

//#endregion

//#region Search functions

function toggleSearchInputMode() {
    switch(input_mode) {
        case "include_text":
            input_mode = "start_with_text";
            break;
        case "start_with_text":
            input_mode = "include_text";
            break;
        default:
            input_mode = "include_text";
            break;
    }
    setInputModeButtonText();
}

function listItem(image_src, text, alt) {
    let engName = text[0];
    let jpName = text[1];
    
    const listItem_div = Object.assign(document.createElement("div"), { className : "list-item" });
    const itemImage_div = Object.assign(document.createElement("div"), { className : "item-image" });
    const itemName_div = Object.assign(document.createElement("div"), { className : "item-name" });
    const itemControls_div = Object.assign(document.createElement("div"), { className : "item-controls" });

    const itemImage_img = Object.assign(document.createElement("img"), { src : image_src, alt : alt });
    const itemTextName_p = document.createElement("p");
    const itemTextTranslation_p = document.createElement("p");
    const itemCopy_btn = Object.assign(document.createElement("button"), { className : "item-copy-btn" });

    const copyBtnTip = document.createElement("span");

    container_div.appendChild(listItem_div);

    listItem_div.appendChild(itemImage_div);
    itemImage_div.appendChild(itemImage_img);

    listItem_div.appendChild(itemName_div);
    itemName_div.appendChild(itemTextName_p);
    itemName_div.appendChild(itemTextTranslation_p);
    itemTextName_p.innerText = engName;
    itemTextName_p.dataset.language = "eng";
    itemTextTranslation_p.innerText = jpName;
    itemTextTranslation_p.dataset.language = "jp";

    listItem_div.appendChild(itemControls_div);
    itemControls_div.appendChild(itemCopy_btn);
    itemCopy_btn.append(copyBtnTip);
    itemCopy_btn.append("Copy clipboard");
}

function addCharactersSearch() {
    addCharacters((image_src, text, alt) => listItem(image_src, text, alt));
    noMatchFound();
}

addCharactersSearch()

function copyToClipboard(e) {
    let listItemElem = e.target.parentElement.parentElement;
    let listItemBtnElem = e.target;

    let characterTranslatedName;

    const alphabet = "abcdefghijklmnopqrstuvwxyz"
    let itemName = listItemElem.children[1].children;

    for (let i = 0; i < itemName.length; i++) {
        console.log(itemName[i])
        if (itemName[i].dataset.language === "jp") {
            characterTranslatedName = itemName[i].textContent;
        }
    }

    navigator.clipboard.writeText(characterTranslatedName);

    copiedText_span.textContent = `" ${characterTranslatedName} "`;

    displayCopiedText_div.style.display = "flex";
    setTimeout(function() {
        displayCopiedText_div.style.display = "none";
    }, 1300);
}

function noMatchFound() {
    if (listItemsDisplayStatus.every(item => item === "none") && listItemsDisplayStatus.length > 0) {
        noMatch_div.style.display = "flex";
    } else {
        noMatch_div.style.display = "none";
    }
}

function searchCharacters() {
    listItemsDisplayStatus = [];

    if (search_input.value.length > 0) {
        for (let i = 0; i < listItems_div.length; i++) {
            let characName = listItemName_div[i].textContent.toLowerCase();
            let searchCondition;

            switch(input_mode) {
                case "include_text":
                    searchCondition = characName.includes(search_input.value.toLowerCase());
                    break;
                case "start_with_text":
                    searchCondition = characName.startsWith(search_input.value.toLowerCase());
                    break;
            }

            if (searchCondition) {
                listItems_div[i].style.display = "grid";
            } else {
                listItems_div[i].style.display = "none";
            }
            if (listItemsDisplayStatus.length < listItems_div.length) listItemsDisplayStatus.push(listItems_div[i].style.display)
        }
    } else {
        for (let i = 0; i < listItems_div.length; i++) {
            listItems_div[i].style.display = "grid";
            if (listItemsDisplayStatus.length < listItems_div.length) listItemsDisplayStatus.push(listItems_div[i].style.display)
        }
    }
    noMatchFound()
}

//#endregion

function addEventListeners() {
    ["input", "keydown"].forEach(evt => {
        search_input.addEventListener(evt, (e) => {
            if (evt === "input") searchCharacters();
            else if (evt === "keydown") {
                if (e.key === "Enter") {
                    search_input.value = "";
                    searchCharacters();
                } else if (e.key === "Escape") {
                    search_input.blur();
                }
            }
        });
    })
    
    for (let i = 0; i < listItemCopy_btn.length; i++) {
        listItemCopy_btn[i].addEventListener("click", (e) => copyToClipboard(e));
    }
    
    toggleInputMode_button.addEventListener("click", () => toggleSearchInputMode())
    
    document.addEventListener("scroll", () => scrollY > 0 ? toTopLink_a.style.display = "flex" : toTopLink_a.style.display = "none")
    
    toggleMode_button.addEventListener("click", () => toggleMode());
    toggleNav_button.addEventListener("click", () => toggleNavBar());
    
    helpOpen_button.addEventListener("click", () => toggleHelpSideBar("open"));
    helpClose_button.addEventListener("click", () => toggleHelpSideBar("close"));
}

addEventListeners();
