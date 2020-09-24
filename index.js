
document.getElementById("genbut").onclick = function() {
  var number = Math.floor(Math.random()*11)+10;
  document.getElementById("lot").value=number;
  this.disabled = true;
  }





  document.getElementById("checkButton").onclick = function(){
    var lotteryNumber = document.getElementById("checkinput").value;

      if(lotteryNumber == 12 || lotteryNumber == 16 ||lotteryNumber == 18)
      {
        document.getElementById("welcome").innerHTML = "Welcome To HORGWARTS!!";
        lotterypic();
         document.getElementById("letter").style.backgroundImage ="url(images/letter.png)";

      }
    else
      {
        document.getElementById("pics").style.backgroundImage ="url(images/sorry1.png)";
        document.getElementById("welcome").innerHTML = "Better Luck Next Time";
      }



    this.disabled = true;
  }
  var pic = ["images/gry.jpg","images/huffle.png","images/raven.jpg","images/sly.jpg"];
var kb;
var div = document.getElementById("pics");

function lotterypic(){

var num = Math.floor(Math.random()* pic.length)
console.log(num);
var img =pic[num];
console.log(img);

document.getElementById("pics").style.backgroundImage ="url(" + img +")";

}
