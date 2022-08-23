
//#region Document variables

const convert_header = document.querySelector("#convert");

const container_div = document.getElementById("container");
const convert_input = document.getElementById("convert-bar");
const noMatch_div = document.getElementById("no-match");
const noMatchText_p = document.querySelector("#no-match p");
const convertResultsText_p = document.getElementById("convert-results-text");
const convertRestultsEngName_p = document.getElementById("convert-results-name");

let listItems_div = document.getElementsByClassName("list-item");
let listItemName_div = document.getElementsByClassName("item-name");

const navBar = document.querySelector("nav");
const controls_div = document.getElementById("controls");
const toggleMode_button = document.getElementById("toggle-mode");
const toggleNav_button = document.getElementById("toggle-nav");

const helpOpen_button = document.querySelector("#help-open");
const helpSideBar_div = document.querySelector("#help-side-bar");
const helpClose_button = document.querySelector("#help-close");
let help_elem = document.querySelectorAll(".help");

const helpSearchSection = document.querySelector("#help-search-section");
const helpConvertSection = document.querySelector("#help-convert-section");
const noHelpText_p = document.querySelectorAll("p.no-help");

//#endregion
