var loadFile = function(event){
  var image = document.getElementById('output');
  image.style.display="block";
  image.src = URL.createObjectURL(event.target.files[0]);
  document.getElementById('photofield').style.width= "150px";
  document.getElementById('photolegend').style.padding="0px";
  
  };



  
function validateForm(){
var modal = document.getElementById("myModal");
var span = document.getElementsByClassName("close")[0];
  modal.style.display = "block";
[10000]}
span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

   