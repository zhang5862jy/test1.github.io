let myImage = document.querySelector("img")
let k1 = true
myImage.onclick = function(){
    if (k1){
        myImage.setAttribute("src", "images/思考.jfif");
        k1 = false
    }else {
        myImage.setAttribute("src", "images/火狐.png");
        k1 = true
    }
};
let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");
function setUserName() {
    let myName = prompt("请输入你的名字。");
    if (!myName) {
      setUserName();
    } else {
      localStorage.setItem("name", myName);
      myHeading.textContent = "欢迎您，" + myName + '同志';
    }
  }
  if (!localStorage.getItem("name")) {
    setUserName();
  } else {
    let storedName = localStorage.getItem("name");
    myHeading.textContent = "欢迎您，" + storedName + '同志';
  }
  myButton.onclick = function () {
    setUserName();
  };