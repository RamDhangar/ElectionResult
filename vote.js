let bjp = document.getElementById("bjp");
let congress = document.getElementById("congrass");
let aap = document.getElementById("aap");
let bjpResult = 0;
let congressResult = 0;
let appResult = 0;

//BJP button click
bjp.addEventListener("click", function (e) {
  clearResult();
  let bool = confirm("Are sure you wnat to vote for BJP")
  if (bool) {
    bjpResult++;
    document.getElementById("afterVote").innerHTML = 'This vote for BJP';
    setTimeout(function () { document.getElementById("afterVote").innerHTML = '' }, 2000);
  }
  console.log(bjpResult);
});

//Congress button click
congress.addEventListener("click", function () {
  clearResult();
  let bool = confirm("Are sure you wnat to vote for BJP")
  if (bool)
    congressResult++;
  document.getElementById("afterVote").innerHTML = 'This vote for Congress';

  setTimeout(function () { document.getElementById("afterVote").innerHTML = '' }, 2000);

  console.log(congressResult);
});

//AAP vote button click
aap.addEventListener("click", function () {
  clearResult();
  let bool = confirm("Are sure you wnat to vote for BJP")
  if (bool)
    appResult++;
  document.getElementById("afterVote").innerHTML = 'This vote for AAP';

  setTimeout(function () { document.getElementById("afterVote").innerHTML = '' }, 3000);

  console.log(appResult)
});


//Show result for election who winn
let showResult = document.getElementById("showResult");
showResult.addEventListener("click", function () {
  document.getElementById("bjpre").innerHTML = 'BJP Vote is <br><h2>' + bjpResult + '</h2>';
  document.getElementById("congrassre").innerHTML = 'Congress Vote is <br><h2> ' + congressResult + '</h2>';
  document.getElementById("aapre").innerHTML = 'AAP Vote is<br> <h2>' + appResult + '</h2>';
  let sr = document.getElementById("winResult");
  if (bjpResult == congressResult && bjpResult == appResult) {
    sr.innerHTML = 'No one win Election';
  }
  else if (bjpResult > congressResult && bjpResult > appResult) {
    sr.innerHTML = 'BJP win The Election';
  }
  else if (congressResult > bjpResult && congressResult > appResult) {
    sr.innerHTML = 'Congress win The Election';
  }
  else if (appResult > bjpResult && appResult > congressResult) {
    sr.innerHTML = 'AAP win The Election';
  }
})

// Result clear when vote button clicked
function clearResult() {
  document.getElementById("bjpre").innerHTML = 'BJP Result <br> will show<br> here';
  document.getElementById("congrassre").innerHTML = 'Congress Result <br> will show<br> here';
  document.getElementById("aapre").innerHTML = 'AAP Result <br> will show<br> here';
  let sr = document.getElementById("winResult").innerHTML = 'Click on show result button to check winner';
}