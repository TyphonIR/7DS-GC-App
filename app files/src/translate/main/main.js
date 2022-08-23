

function createAnchorElem(path) {
    let a = document.createElement("a");
    a.style.display = "none";
    a.href = path;
    document.body.appendChild(a);
}

function redirectToPage() {
    let redirect_a = document.querySelector("a");
    redirect_a.click();
}

function loadDefaultWebpage(default_page_setting) {
    let defaultPagePath = "";

    switch(default_page_setting) {
        case "search.html":
            defaultPagePath = "../search/search.html"
            break;
        case "convert.html":
            defaultPagePath = "../convert/convert.html"
            break;
        default:
            defaultPagePath = "../search/search.html"
            break;
    }

    createAnchorElem(defaultPagePath);
    redirectToPage();
}
