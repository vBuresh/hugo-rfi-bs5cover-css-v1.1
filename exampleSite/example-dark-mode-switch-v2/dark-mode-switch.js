var darkSwitch=document.getElementById("darkSwitch");window.addEventListener("load",function(){if(darkSwitch){var darkThemeSelected=localStorage.getItem("darkSwitch")!==null&&localStorage.getItem("darkSwitch")==="dark";darkSwitch.checked=darkThemeSelected;darkSwitch.addEventListener("change",function(){resetTheme();});}});function resetTheme(){if(darkSwitch.checked){document.body.setAttribute("data-theme","dark");localStorage.setItem("darkSwitch","dark");}else{document.body.removeAttribute("data-theme");localStorage.removeItem("darkSwitch");}}