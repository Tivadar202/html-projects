const math = document.getElementById("math");

math.addEventListener("click", function () {
  const edge = Number(document.getElementById("edge").value);
  const height = Number(document.getElementById("height").value);
  let felszin =
    edge * edge + Math.sqrt((edge / 2) ** 2 + height ** 2) * (edge / 2) * 4;
  let terfogat = (edge * edge * height) / 3;

  document.getElementById("f").textContent = "Felszín: " + felszin;
  document.getElementById("t").textContent = "Térfogat: " + terfogat;
});
