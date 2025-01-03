document.getElementById("follow-button").addEventListener("click", function () {
    const button = this;
    const textSpan = document.querySelector("#follow-text");
    const iconSpan = document.querySelector("#follow-icon");

    
    if (button.classList.contains("unfollow")) {
      button.classList.remove("unfollow");
      textSpan.textContent = "Follow";
      iconSpan.textContent = "➕"; 
    } else {
      button.classList.add("unfollow");
      textSpan.textContent = "Unfollow";
      iconSpan.textContent = "➖";
    }
  });