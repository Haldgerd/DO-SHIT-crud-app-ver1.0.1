const addComponent = () => {
  const element = document.createElement("div");

  element.innerHTML = "This is a test text from index.js file.";

  return element;
};

document.body.appendChild(addComponent());
