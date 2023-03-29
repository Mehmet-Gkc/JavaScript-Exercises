const body = document.querySelector("body");
body.style.fontFamily = "sans-serif";

const title = document.querySelector(".title");
title.style.textAlign = "center";

const allCategories = document.querySelectorAll(".category");

allCategories.forEach(categoryElement => {
  categoryElement.style.color = "red";
  categoryElement.style.fontStyle = "italic";
})

const colorGenerator = () => {
  const colors = [
    "rgba(245, 40, 145, 0.8)", // 0
    "rgba(112, 59, 255, 0.8)",  // 1
    "rgba(252, 113, 230, 0.8)", // 2
    "rgba(203, 229, 8, 0.8)" // 3
  ]
  // Math.random() -> 0.0 bis 1.0, z.b 0.55
  // Math.random()*colors.lenght -> 0.0 bis 4, z.b. 2.12
  return colors[Math.floor(Math.random()*colors.length)];
}

const colorGenerator2 = () => {
  // wir brauchen 3 zahlen zwischen 0 und 255, und 1 zahl zwischen 0 und 1.
  const zahl1 = Math.floor(Math.random() * 255); // R
  const zahl2 = Math.floor(Math.random() * 255); // G
  const zahl3 = Math.floor(Math.random() * 255); // B
  const zahl4 = Math.random(); // A
  return `rgba(${zahl1}, ${zahl2}, ${zahl3}, ${zahl4})`;
}

const colorGenerator3 = () => {
    // hexadezimal
    return (Math.floor(Math.random()*4294967295+1)).toString(16)
}

const allFoodCategories = document.querySelectorAll(".food-category");

allFoodCategories.forEach((foodCategory) => {
  foodCategory.style.backgroundColor = colorGenerator2();
  foodCategory.style.width = "8rem";
  foodCategory.style.paddingLeft = "3%";
  foodCategory.style.paddingRight = "3%";
})

const main = document.querySelector(".main");
main.style.display = "flex";
main.style.justifyContent = "space-around";
main.style.flexWrap = "wrap";
const allergyWarningSection = document.querySelector(".allergy-warning");
allergyWarningSection.style.display = "flex"; 
allergyWarningSection.style.justifyContent = "center";
allergyWarningSection.style.flexDirection = "column";
allergyWarningSection.style.alignItems = "center";

                    // document.querySelector("#warning");
const warningHeader = document.getElementById("warning");
warningHeader.style.fontSize = "2em";
warningHeader.style.fontFamily = "georgia serif";
warningHeader.style.textAlign = "center";
//                  für die css cracks unter euch:
// document.querySelectorAll(".allergy-info:nth-child(even)")
const allergyInfoItems = document.querySelectorAll(".allergy-info");
allergyInfoItems.forEach((li, index) => {
  if(index%2 === 1){
    li.style.backgroundColor = "aqua";
  }
});

const descriptions = document.querySelectorAll(".food-desc");
// rounded border
descriptions.forEach(description => {
  description.style.border = "2px solid orange";
  description.style.borderRadius = "100%";
  description.style.width = "6rem";
  description.style.height = "6rem";
  description.style.display = "flex";
  description.style.alignItems = "center";
  description.style.justifyContent = "center";
});
// row in desktop
// column in mobile

const footer = document.querySelector(".footer");
footer.style.display = "flex";
footer.style.justifyContent = "center";
footer.style.gap = "5%";
footer.style.flexWrap = "wrap";