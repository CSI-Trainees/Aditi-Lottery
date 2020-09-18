
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
    else if(lotteryNumber == NULL)
    {
      alert("Please enter the above number");
    }
    else
    {
      alert("sorry");
    }
    this.disabled = true;
  }
