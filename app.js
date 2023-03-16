function myFunction() {
  var x = document.getElementById("gallery");
  if (x.classList.contains("visible")) {
    x.classList.remove("visible");
  } else {
    x.classList.add("visible");
  }
}
