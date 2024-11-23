'use strict';

const themeKey = "dark-mode";
const lightText = "Light";
const darkText = "Dark";

const lightClass = "light-theme";
const darkClass = "dark-theme";

const switcher = document.querySelector('.btn');

const setSwitcherText = (text) => switcher.textContent = text;

const setDarkMode = (choice) => localStorage.setItem(themeKey, choice);
const isDarkModeOn = () => {
    var isDarkModeOn = localStorage.getItem(themeKey);

    return isDarkModeOn === "y";
}

window.onload = function () 
{
    if(isDarkModeOn()){
        switchTheme(lightText, lightClass, darkClass);
    }else{
        switchTheme(darkText, darkClass, lightClass);
    }
}

switcher.addEventListener('click', function(){
    if(isDarkModeOn()){
        switchTheme(darkText, darkClass, lightClass);
        setDarkMode("n");
    }
    else{
        switchTheme(lightText, lightClass, darkClass);
        setDarkMode("y");
    }
});

function switchTheme(oppositeThemeText, classOff, classOn)
{
    document.body.classList.remove(classOff);
    document.body.classList.add(classOn);

    setSwitcherText(oppositeThemeText)
}