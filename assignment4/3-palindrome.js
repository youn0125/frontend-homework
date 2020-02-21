document.getElementById("checkBtn").addEventListener("click", function(){
  var inputNum = Number(document.getElementById("numText").value);
  console.log(inputNum);
  if (inputNum <= 0){
    alert("Enter the positive number");
    document.getElementById("numText").value="";   
  } else {
    var ret = checkPalindrome(inputNum);
    document.getElementById("result").innerHTML = ret;
  }
});

function checkPalindrome(n1) {
  var rem, temp, final = 0;
  temp = n1;
  
  while(n1>0){
    rem = n1%10;
    n1 = parseInt(n1/10);
    final = final*10 + rem;
  }
  
  if(final === temp)
    return true;
  else
    return false;
}

