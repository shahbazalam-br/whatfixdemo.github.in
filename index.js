function openTab(evt, tabName) {
    // Declare all variables
    var i, tabcontent, tablinks;
  
    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
  
    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
  }


  var textIndentPercent = 100;
var marqueeCenteringInterval = setInterval(function() {
    console.log(document.getElementById('my-marquee'));
    console.log(textIndentPercent);
    console.log(document.getElementById('my-marquee').style.textIndent);
    document.getElementById('my-marquee').style.textIndent = -textIndentPercent + '%';
    textIndentPercent -= 0.1;
    if (textIndentPercent < 0) {
        document.getElementById('my-marquee').style.textIndent = '0px';
        clearInterval(marqueeCenteringInterval);
    }
}, 100);