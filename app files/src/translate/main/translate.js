const navBar = document.querySelector('nav');
const controls_div = document.getElementById('controls');
const toggleMode_button = document.getElementById('toggle-mode');
const toggleNav_button = document.getElementById('toggle-nav');
const optionsOpen_button = document.querySelector("#options-open");

const optionsSideBar_div = document.querySelector("#options-side-bar");
const optionsClose_button = document.querySelector("#options-close");
let allSettings_elem = document.querySelectorAll(".settings");
const searchTypeSettings_input = document.querySelector("#options-side-bar select[name='select-search-type']")
const optionSearchSection = document.querySelector("#option-search-section");
const optionConvertSection = document.querySelector("#option-convert-section");
const noSettingsText_p = document.querySelectorAll("p.no-settings");

const main = document.querySelector('main');
const search_div = document.querySelector('div.search');
const search_iframe = document.querySelector('div.search iframe');
const convert_div = document.querySelector('div.convert');
const convert_iframe = document.querySelector('div.convert iframe');

search_div.style.display = 'flex';
convert_div.style.display = 'none';

function toggleOptionsSideBar(closeOrOpen="") {
    if (closeOrOpen === "open") {
        optionsSideBar_div.style.width = "var(--options-side-bar-width)";
        for ( let i in optionsSideBar_div.children ) optionsSideBar_div.children[i].className -= " hideElem";
    }
    else if (closeOrOpen === "close") {
        optionsSideBar_div.style.width = "0";
        for ( let i in optionsSideBar_div.children ) optionsSideBar_div.children[i].className += " hideElem";
    }
}

function toggleMode() {
    if (search_div.style.display === 'none' && convert_div.style.display === 'flex') {
        search_div.style.display = 'flex';
        convert_div.style.display = 'none';
    } 
    else if (search_div.style.display === 'flex' && convert_div.style.display === 'none') {
        search_div.style.display = "none";
        convert_div.style.display = "flex";
    }
}

function toggleNavBar() {
    navBar.style.height = navBar.style.height === '0px' ? '7%' : '0px';
    main.style.height = navBar.style.height === '0px' ? '100%' : 'calc(100% - var(--nav_height))';
    controls_div.style.position = navBar.style.height === '0px' ? 'fixed' : 'relative';
}

function toggleNoSettingsText(hide, index) {
    let text = noSettingsText_p[index];
    if (hide) {
        if (!text.className.includes(" hideElem")) text.className += " hideElem";
    } else if (!hide) {
        if (text.className.includes(" hideElem")) text.className.replace(" hideElem", "");
    }
}

function addSettingsToHtml() {
    // "parentSetting" is for things like search_type or other children of the main settings which would be "search_setting" and "convert_setting"
    // "setting" is for any setting that are children settings of "parentSetting"
    let settingsArray = Object.entries(currentSettings);

    settingsArray.forEach( (parentSetting, i) => {
        let parentSettingArray = Object.entries(parentSetting[1]);
        
        if (parentSettingArray.length > 0) {
            toggleNoSettingsText(true, i);

            parentSettingArray.forEach(setting => {
                let labelElem = Object.assign(document.createElement("label"), { for: `select_${setting[0]}` })
                let selectElem = Object.assign(document.createElement("select"), { name: `select_${setting[0]}`, className: "option-select settings" })
                let optionElem = Object.assign(document.createElement("option"), { value: setting[1][0] });
                let allSettingsOptions = allSettings[parentSetting[0]][setting[0]].options;
                let allSettingsOptionsArray = Object.values(allSettingsOptions)
    
                allSettingsOptionsArray.forEach( item => {
                    optionElem = Object.assign(document.createElement("option"), { value: setting[1][0] });
                    optionElem.textContent = item.textContent;
                    optionElem.value = item.value;
                    selectElem.appendChild(optionElem);
                });
    
                selectElem.setAttribute(`data-${parentSetting[0]}`, setting[0])
                labelElem.setAttribute("for", `select_${setting[0]}`)
                labelElem.textContent = setting[1].labelText;
                selectElem.setAttribute("name", `select_${setting[0]}`);
    
                switch(parentSetting[0].toLowerCase()) {
                    case "search_settings":
                        optionSearchSection.appendChild(labelElem)
                        optionSearchSection.appendChild(selectElem)
                        break;
                    case "convert_settings":
                        optionConvertSection.appendChild(labelElem)
                        optionConvertSection.appendChild(selectElem)
                        break;
                    default:
                        break;
                }
            })
        }
        else {
            toggleNoSettingsText(false, i);
        }
    })

    allSettings_elem = document.querySelectorAll(".settings");
}

addSettingsToHtml();

// aplySettings() is meant to apply the settings in the Object "setings" to the html settings
function applySettings() {
    allSettings_elem.forEach(item => {
        let itemDataset = Object.entries(item.dataset);
        let settingName = itemDataset[0][0];
        let wantedSettingName = itemDataset[0][1];
        let settingsValue = currentSettings[settingName][wantedSettingName].value;
        let settingsTextContent = currentSettings[settingName][wantedSettingName].textContent;

        if (currentSettings[settingName] !== undefined) {
            if (currentSettings[settingName][wantedSettingName] !== undefined)  item.value = settingsValue;
            else console.error(`Error: ${currentSettings[settingName][wantedSettingName]} is undefined`);
        }
        else console.error(`Error: ${currentSettings[settingName]} is undefined`);
    })
}

applySettings();

// updateSetings() does the opposite of applySettings hence the different functions
function updateSettings() {
    allSettings_elem.forEach(item => {
        let itemDataset = Object.entries(item.dataset);
        let settingName = itemDataset[0][0];
        let wantedSettingName = itemDataset[0][1];
        let settingsOptions = currentSettings[settingName][wantedSettingName];
        
        if (currentSettings[settingName] !== undefined) {
            if (settingsOptions !== undefined) {
                settingsOptions.value = item.value;
                settingsOptions.textContent = item.textContent;
            }
            else console.error(`Error: ${currentSettings[settingName][wantedSettingName]} is undefined`);
        }
        else console.error(`Error: ${currentSettings[settingName]} is undefined`);
    })
    applySettings();
}

allSettings_elem.forEach(item => {
    item.addEventListener("change", () => updateSettings())
})

toggleMode_button.addEventListener('click', () => toggleMode());
toggleNav_button.addEventListener('click', () => toggleNavBar());
optionsOpen_button.addEventListener("click", () => toggleOptionsSideBar("open"))
optionsClose_button.addEventListener("click", () => toggleOptionsSideBar("close"))
