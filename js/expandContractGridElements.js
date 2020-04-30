/**
 * Expands the grid element when clicked, and contracts it when clicked again.
 * 
 * @author Emma Pettersson
 */

var conElems = document.getElementsByClassName("grid-element-contracted-info");
var elems = document.getElementsByClassName("grid-element");
var expInd = document.getElementsByClassName("grid-element-expand-indicator");

for (var i = 0; i < conElems.length; i++) {
  conElems[i].addEventListener("click", function() {
    this.classList.toggle("active");

    // Gets the index of the grid element that was clicked.
    var index = $(this).parent().index();

    if (elems[index].style.height != "250pt"){
        elems[index].style.height = "250pt";
        expInd[index].innerHTML = "keyboard_arrow_up";
    } else {
        elems[index].style.height = "100pt";
        expInd[index].innerHTML = "keyboard_arrow_down";
    } 
  });
}