
document.getElementById("genbut").onclick = function() {
  var number = Math.floor(Math.random()*11)+10;
  document.getElementById("lot").value=number;
  this.disabled = true;
  }

  document.getElementById("checkButton").onclick = function(){
    var lotteryNumber = document.getElementById("checkinput").value;
    if(lotteryNumber == 12)
    {
      alert("Winner");
    }
    else if(lotteryNumber == 16)
    {
      alert("Winner");
    }
    else if(lotteryNumber == 18)
    {
      alert("Winner");
    }
    
    {
      alert("sorry");
    }
    this.disabled = true;
  }
