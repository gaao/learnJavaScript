const colors = ["green","blue","rgb(16,200,200)","f1f5f8"];
const btn = document.getElementById('btn')
// const color1 = document.getElementsByClassName("color")
const color = document.querySelector(".color")
console.log(color)

btn.addEventListener("click",function() {
  const randomNumber = getRandomNumber();
  document.body.style.backgroundColor = colors[randomNumber]
  color.textContent = colors[randomNumber]
})
function getRandomNumber() {
  return Math.floor(Math.random() * colors.length)
}