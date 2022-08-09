const settingsFilePath = "../settings/setting_data.js"

const data = {
    General : {
        default_page : "convert.html"
    },
    Search : {
        default_input_mode : "start_with_text" // "start_with_text" or "include_text"
    },
    Convert : {},
}

function loadSettings(data, currentPage) {
    switch(currentPage) {
        case "main.html":
            loadDefaultWebpage(data.General.default_page);
            break;
        case "search.html":
            loadSearchSettings(data.Search)
            break;
    }
}

loadSettings(data, current_file_name);
