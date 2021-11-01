import fruit from "./fruit.jpeg";
import altText from "./altText.txt";

function addImage() {
  const img = document.createElement("img");
  img.alt = altText;
  img.width = 300;
  img.src = fruit;
  const body = document.querySelector("body");
  body.appendChild(img);
}
export default addImage;
