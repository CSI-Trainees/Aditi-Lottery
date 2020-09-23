
document.getElementById("genbut").onclick = function() {
  var number = Math.floor(Math.random()*11)+10;
  document.getElementById("lot").value=number;
  this.disabled = true;
  }





  document.getElementById("checkButton").onclick = function(){
    var lotteryNumber = document.getElementById("checkinput").value;

      if(lotteryNumber == 12 || lotteryNumber == 16 ||lotteryNumber == 18)
      {
        lotterypic();
      }
    else
      {
        div.style.backgroundImage = "images/hufflepuff.jpg";
      }



    this.disabled = true;
  }
  var pic = ["images/gryffindor.jpg","images/hufflepuff.jpg","images/ravenclaw.jpg","images/slytherin.jpg"];
  var kb;
  var div = document.getElementById("pics");
function lotterypic(){

  var num = Math.floor(Math.random()* pic.length)
  console.log(num);
  var img = pic[num];
  console.log(img);

div.style.backgroundImage ="url(img)";
}
