
const search_header = document.querySelector("#search");

const container_div = document.getElementById("container");
const search_input = document.getElementById("search-bar");
const toggleInputMode_button = document.querySelector("#toggle-input");
const noMatch_div = document.getElementById("no-match");

const displayCopiedText_div = document.getElementById("display-copied-text");
const displayCopiedTextPara_p = document.querySelector("#display-copied-text p");
const copiedText_span = document.getElementById("copied-text");

const toTopLink_a = document.querySelector("#to-top");

let listItems_div = document.getElementsByClassName("list-item");
let listItemName_div = document.getElementsByClassName("item-name");
let listItemCopy_btn = document.getElementsByClassName("item-copy-btn");
let listItemsDisplayStatus = [];

const navBar = document.querySelector("nav");
const controls_div = document.getElementById("controls");
const toggleMode_button = document.getElementById("toggle-mode");
const toggleNav_button = document.getElementById("toggle-nav");

