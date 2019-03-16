var myVar;

function myFunction() {
  myVar = setTimeout(showPage, 1000);
}

function showPage() {
  document.getElementById("h1").style.display = "none";
  document.getElementById("loader").style.display = "none";
  document.getElementById("myDiv").style.display = "block";
}