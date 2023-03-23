//Program Title
document.getElementById("submit").addEventListener("click", check);

//INPUT
function check() {
  let r1 = document.getElementById("res1").value.trim().toLowerCase();
  let r2 = document.getElementById("res2").value.trim().toLowerCase();
  let r3 = document.getElementById("res3").value.trim().toLowerCase();
  let r4 = document.getElementById("res4").value.trim().toLowerCase();

  let score = 0;

  if (r1 == "no") {
    document.getElementById("q1").innerHTML = "Correct";
    document.getElementById("res1").classList = "y";
    score += 1;
  } else if (r1 != "no") {
    document.getElementById("q1").innerHTML = "Incorrect";
    document.getElementById("res1").classList = "n";
  }
  if (r2 == "conversational way") {
    document.getElementById("q2").innerHTML = "Correct";
    document.getElementById("res2").classList = "y";
    score += 1;
  } else if (r2 != "conversational way") {
    document.getElementById("q2").innerHTML = "Incorrect";
    document.getElementById("res2").classList = "n";
    console.log("go!");
  }
  if (r3 == "inappropriate requests") {
    document.getElementById("q3").innerHTML = "Correct";
    document.getElementById("res3").classList = "y";
    score += 1;
  } else if (r3 != "inappropriate requests") {
    document.getElementById("q3").innerHTML = "Incorrect";
    document.getElementById("res3").classList = "n";
  }
  if (r4 == "chatgpt plus") {
    document.getElementById("q4").innerHTML = "Correct";
    document.getElementById("res4").classList = "y";
    score += 1;
  } else if (r4 != "chatgpt plus") {
    document.getElementById("q4").innerHTML = "Incorrect";
    document.getElementById("res4").classList = "n";
  }

  let percent = (score / 4) * 100;
  document.getElementById("scorereturn").innerHTML = score + "/4";
  document.getElementById("scorepercent").innerHTML = percent + "%";
}

//PROCESS

//OUTPUT
