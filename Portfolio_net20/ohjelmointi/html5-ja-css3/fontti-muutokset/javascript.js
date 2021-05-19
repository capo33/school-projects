function fontsize() {
    var currentFontSize = document.getElementById('changefontsize').style.fontSize;
    
    if (currentFontSize == "16px") {
        document.getElementById('changefontsize').style.fontSize = "20px";

    } else if (currentFontSize == "20px") {
        document.getElementById('changefontsize').style.fontSize = "24px";
    
    } else if (currentFontSize == "24px") {
        document.getElementById('changefontsize').style.fontSize = "28px";
    
    } else if (currentFontSize == "28px") {
        document.getElementById('changefontsize').style.fontSize = "32px";
    
    } else {
        document.getElementById('changefontsize').style.fontSize = "20px";
    }
}

function fontstyle() {
    var currentFontFamily = document.getElementById('changefontstyle').style.fontFamily;
  
    if (currentFontFamily == '"Courier New"') {
        document.getElementById('changefontstyle').style.fontFamily = "Roboto";
     } 
  
    else if (currentFontFamily == "Roboto") {
        document.getElementById('changefontstyle').style.fontFamily = "Mansalva";
    } 
    
    else if (currentFontFamily == "Mansalva") {
        document.getElementById('changefontstyle').style.fontFamily = "Grenze";
    } 
    
    else if (currentFontFamily == "Grenze") {
        document.getElementById('changefontstyle').style.fontFamily = "Turret Road";
    } 
    
    else {
        document.getElementById('changefontstyle').style.fontFamily = "Courier New";
    }
  
    var currentFontFamily = document.getElementById('changefontstyle').style.fontFamily;
    document.getElementById("currentFontFamily").innerHTML = currentFontFamily;
  }
  