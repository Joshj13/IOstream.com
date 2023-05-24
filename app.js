function myFunction() {
  console.log("Button clicked!"); // Add this line to see if the function is being executed
  var x = document.getElementById("gallery");
  if (x.classList.contains("visible")) {
    x.classList.remove("visible");
  } else {
    x.classList.add("visible");
  }
}