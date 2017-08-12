// ==UserScript==
// @name         Synergy Custom Background
// @namespace    https://discord.gg/KjMSnKk
// @version      0.2
// @description  Adds a custom background to Synergy!
// @author       Lucario
// @include      *.edupoint.com/*
// @exclude      *www.edupoint.com*
// @grant        GM_addStyle
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
a, table, tr, td, tbody, #header, #footer, .main {
  background: none!important;
}
body {
  /* Permalink - use to edit and share this gradient: http://colorzilla.com/gradient-editor/#7db9e8+0,ffffff+100&1+1,0.5+100 */
  background: -moz-radial-gradient(center, ellipse cover,  rgba(125,185,232,1) 0%, rgba(126,186,232,1) 1%, rgba(255,255,255,0.5) 100%)!important; /* FF3.6-15 */
  background: -webkit-radial-gradient(center, ellipse cover,  rgba(125,185,232,1) 0%,rgba(126,186,232,1) 1%,rgba(255,255,255,0.5) 100%)!important; /* Chrome10-25,Safari5.1-6 */
  background: radial-gradient(ellipse at center,  rgba(125,185,232,1) 0%,rgba(126,186,232,1) 1%,rgba(255,255,255,0.5) 100%)!important; /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#7db9e8', endColorstr='#80ffffff',GradientType=1 )!important; /* IE6-9 fallback on horizontal gradient */
}
::-webkit-scrollbar-track-piece {
  visibility: hidden!important;
}
::-webkit-scrollbar {
  width: 10px!important;
}
::-webkit-scrollbar-thumb {
  background-color: #F90!important;
  background-image: -webkit-linear-gradient(45deg, rgba(255, 255, 255, .2) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, .2) 50%, rgba(255, 255, 255, .2) 75%, transparent 75%, transparent)!important;
  border-radius: 10px!important;
  border: 0px!important;
}
`;

GM_addStyle(css);

var removedImages = [
    "https://ca-egusd-psv.edupoint.com/images/PXP/header_lft3.gif",
    "https://ca-egusd-psv.edupoint.com/Photos/B5/B541D03F-CF0C-410E-A2C0-647CEA53E05C_LoginPageLogo.PNG",
    "https://ca-egusd-psv.edupoint.com/images/PXP/header_rt.gif",
    "https://ca-egusd-psv.edupoint.com/images/PXP/corner_top_lft.gif",
    "https://ca-egusd-psv.edupoint.com/images/PXP/content_header_left.png",
    "https://ca-egusd-psv.edupoint.com/images/PXP/content_header_right.png",
    "https://ca-egusd-psv.edupoint.com/images/PXP/content_footer_left.png",
    "https://ca-egusd-psv.edupoint.com/images/PXP/content_footer_right.png",
    "https://ca-egusd-psv.edupoint.com/images/PXP/corner_top_rt.gif",
    "https://ca-egusd-psv.edupoint.com/images/PXP/1x1trans.gif",
    "https://ca-egusd-psv.edupoint.com/images/PXP/sidenav_bottom_left.png",
    "https://ca-egusd-psv.edupoint.com/images/PXP/sidenav_bottom_right.png",
    "https://ca-egusd-psv.edupoint.com/images/PXP/sidenav_top_left.png",
    "https://ca-egusd-psv.edupoint.com/images/PXP/sidenav_top_right.png"
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
    [].forEach.call(document.getElementsByTagName("ul"),(ul) => {
        ul.remove();
    });
};
