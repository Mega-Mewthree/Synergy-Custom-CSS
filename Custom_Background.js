// ==UserScript==
// @name         Synergy Custom Background
// @namespace    https://discord.gg/KjMSnKk
// @version      0.1
// @description  Adds a custom background to Synergy!
// @author       Lucario
// @include      *.edupoint.com/*
// @exclude      *www.edupoint.com*
// @grant        none
// @run-at       document-start
// ==/UserScript==

window.backgroundURL = localStorage.backgroundURL || "https://cdn.discordapp.com/attachments/295216348190212096/341686337084194826/lunala-and-solgaleo-pokemon_sun_and_moon-749.jpg";

var css = `
html {
  background-image: url(${window.backgroundURL});
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: cover;
}
a, table, tr, tbody, #header, #footer, .main {
  background: none!important;
}
body {
  /* Permalink - use to edit and share this gradient: http://colorzilla.com/gradient-editor/#7db9e8+0,ffffff+100&1+1,0.5+100 */
  background: -moz-radial-gradient(center, ellipse cover,  rgba(125,185,232,1) 0%, rgba(126,186,232,1) 1%, rgba(255,255,255,0.5) 100%); /* FF3.6-15 */
  background: -webkit-radial-gradient(center, ellipse cover,  rgba(125,185,232,1) 0%,rgba(126,186,232,1) 1%,rgba(255,255,255,0.5) 100%); /* Chrome10-25,Safari5.1-6 */
  background: radial-gradient(ellipse at center,  rgba(125,185,232,1) 0%,rgba(126,186,232,1) 1%,rgba(255,255,255,0.5) 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#7db9e8', endColorstr='#80ffffff',GradientType=1 ); /* IE6-9 fallback on horizontal gradient */
}
`;

var head = document.head || document.getElementsByTagName('head')[0];
var style = document.createElement('style');

style.type = 'text/css';
if (style.styleSheet){
  style.styleSheet.cssText = css;
}else{
  style.appendChild(document.createTextNode(css));
}

head.appendChild(style);

var removedImages = [
    "https://ca-egusd-psv.edupoint.com/images/PXP/header_lft3.gif",
    "https://ca-egusd-psv.edupoint.com/Photos/B5/B541D03F-CF0C-410E-A2C0-647CEA53E05C_LoginPageLogo.PNG",
    "https://ca-egusd-psv.edupoint.com/images/PXP/header_rt.gif",
    "https://ca-egusd-psv.edupoint.com/images/PXP/corner_top_lft.gif",
    "https://ca-egusd-psv.edupoint.com/images/PXP/content_header_left.png",
    "https://ca-egusd-psv.edupoint.com/images/PXP/content_header_right.png",
    "https://ca-egusd-psv.edupoint.com/images/PXP/corner_top_rt.gif",
    "https://ca-egusd-psv.edupoint.com/images/PXP/1x1trans.gif"
];

window.onload = window.onready = () => {
    var observer = new MutationObserver((mutations) => {
        [].forEach.call(document.getElementsByTagName("img"), (img) => {
            if(removedImages.indexOf(img.src) > -1){
                img.remove();
            }
        });
    });
    observer.observe(document.getElementsByTagName("body")[0], {attributes: true, childList: true, characterData: true, subtree: true});
    [].forEach.call(document.getElementsByTagName("img"), (img) => {
        if(removedImages.indexOf(img.src) > -1){
            img.remove();
        }
    });
    var keepTD = document.getElementsByTagName("td")[24];
    [].forEach.call(document.getElementsByTagName("td"), (td) => {
        if(td !== keepTD && td.className !== "row_hdr2" && td.className !== "row_ftr2"){
            td.style.background = "none";
        }
    });
    [].forEach.call(document.getElementsByTagName("ul"),(ul) => {
        ul.remove();
    });
};
