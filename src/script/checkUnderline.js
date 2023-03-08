export function gamesMenu() {
  if (document.getElementById("gamesMenuText")) {
    document.getElementById("mediaMenuText").style.borderBottom = "none";
    document.getElementById("softwareMenuText").style.borderBottom = "none";

    document.getElementById("gamesMenuText").style.borderBottom = "solid";
    document.getElementById("gamesMenuText").style.borderColor = "red";
  }
}

export function mediaMenu() {
  if (document.getElementById("mediaMenuText")) {
    document.getElementById("gamesMenuText").style.borderBottom = "none";
    document.getElementById("softwareMenuText").style.borderBottom = "none";

    document.getElementById("mediaMenuText").style.borderBottom = "solid";
    document.getElementById("mediaMenuText").style.borderColor = "red";
  }
}

export function softwareMenu() {
  if (document.getElementById("softwareMenuText")) {
    document.getElementById("gamesMenuText").style.borderBottom = "none";
    document.getElementById("mediaMenuText").style.borderBottom = "none";

    document.getElementById("softwareMenuText").style.borderBottom = "solid";
    document.getElementById("softwareMenuText").style.borderColor = "red";
  }
}
