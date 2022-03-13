import "./assets/styles/main.css";
import newImage from "./assets/images/istockphoto-1338130496-170667a.jpg";
import Lorna from "./assets/images/tumblr_7335889cb2865853043d9d36a4269c04_12cf37bc_1280.jpg";

const addComponent = () => {
  const element = document.createElement("div");
  const myImage = new Image();
  const me = new Image();

  element.innerHTML = "This is a test text from index.js file.";
  element.classList.add("main__title");

  myImage.src = newImage;
  me.src = Lorna;

  element.appendChild(myImage);
  element.appendChild(me);

  return element;
};

document.body.appendChild(addComponent());
