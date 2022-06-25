let count = 0;
const value = document.querySelector(".value");
// 方法 1
// const jianxiao = document.querySelector(".jianxiao");
// const reset = document.querySelector(".reset");
// const zengjia = document.querySelector(".zengjia");
// jianxiao.addEventListener("click", function () {
//   return value.textContent--;
// });
// zengjia.addEventListener("click", function () {
//   return value.textContent++;
// });
// reset.addEventListener("click", function () {
//   return (value.textContent = 0);
// });
const btns = document.querySelectorAll(".btn");
btns.forEach(function (btn) {
  // console.log(btn);
  btn.addEventListener("click", function (e) {
    const styles = e.currentTarget.classList;
    // console.log(styles);
    // console.log(styles.contains);
    if (styles.contains("jianxiao")) {
      count--;
    } else if (styles.contains("zengjia")) {
      count++;
    } else {
      count = 0;
    }
    if (count === 0) {
      value.style.color = "#222";
    }
    if (count > 0) {
      value.style.color = "green";
    }
    if (count < 0) {
      value.style.color = "red";
    }
    value.textContent = count;
  });
});
