var i = 0;
function change() {
  var doc = document.getElementById("background1");
  var color = ["white", "yellow", "orange"];
  doc.style.backgroundColor = color[i];
  i = (i + 1) % color.length;
}
setInterval(change, 1500);
