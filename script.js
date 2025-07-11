function showPart(part) {
  document.getElementById("cover").classList.add("hidden");
  document.getElementById("part1").classList.add("hidden");
  document.getElementById("part2").classList.add("hidden");
  document.getElementById("part3").classList.add("hidden");

  document.getElementById("part" + part).classList.remove("hidden");
}

function goToLove() {
  window.location.href = "love.html";
}
