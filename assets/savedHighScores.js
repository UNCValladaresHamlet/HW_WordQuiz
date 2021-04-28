//function to display scores of current and past users/players
function displayscores() {
    // either get scores from localstorage or set to empty array
    var savedhighscores = JSON.parse(window.localStorage.getItem("finalscores")) || [];
       
    savedhighscores.forEach(function(savedScore) {
      // create list tag  
      var list_HighScore = document.createElement("li");
      list_HighScore.textContent = savedScore.Initials + " : " + savedScore.Finalscore;
      // displays on page
      var orderedListEl = document.getElementById("finalscores");
      orderedListEl.appendChild(list_HighScore);
    });
  }
//function to clear scores
  function clearScores() {
    window.localStorage.removeItem("finalscores");
    window.location.reload();
  }
  //event-listener to clear saved highscores
  document.getElementById("clearscores").onclick = clearScores;

//function runs whenever page loads
displayscores();