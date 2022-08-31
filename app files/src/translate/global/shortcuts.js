// Keyboard Shortcuts
window.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && helpSideBar_div.style.width !== "0") toggleHelpSideBar("close");
    if (e.key === "Shift") {
        if (current_file_name === "search.html" && search_input !== document.activeElement) search_input.focus();
        else if (current_file_name === "convert.html" && convert_input !== document.activeElement) convert_input.focus();
    }
    if (e.ctrlKey && e.key === "Alt") {
        toggleMode();
    }
})