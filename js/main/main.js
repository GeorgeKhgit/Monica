let arrayCard = [];
document.addEventListener("DOMContentLoaded", () => {
  $("#slick").slick({});

  $.ajax({
    method: "GET",
    catch: false,
    url: "https://georgekhgit.github.io/Monica/data.json",
    
    success: function(datas) { 
      for (let i = 0; i < datas.length; i++) {
        if (datas[i].type == "Shorts") {
          let outSideContainer = document.createElement("div");
          let cardTitle = document.createElement("p");
          let cardDescription = document.createElement("p");
          let cardDescriptionhover = document.createElement("p");
          let cardImg = document.createElement("img");
          let cardCost = document.createElement("p");
          let cardCostHover = document.createElement("p");
          let hoverCoster = document.createElement("div");
          let cardTitlehover = document.createElement("p");
          let cardButtonhover = document.createElement("button");
          let cardButtonhoverp = document.createElement("p");
          let cardButtonhoverimg = document.createElement("img");
          let imgLiker = document.createElement("div");
          let imageforLike = document.createElement("img");
          let patagraphLike = document.createElement("p");

          cardCostHover.innerHTML = datas[i].cost_ts;
          cardCostHover.classList.add("cardCostHover");

          imageforLike.src = "img/icons/lover.png";
          patagraphLike.innerHTML = "Add to wishlist";
          imgLiker.appendChild(imageforLike);
          imgLiker.appendChild(patagraphLike);
          imgLiker.classList.add("imgLiker");

          hoverCoster.classList.add("hoverCoster");
          cardTitlehover.innerHTML = datas[i].title;
          cardDescriptionhover.innerHTML = datas[i].type;
          cardDescriptionhover.classList.add("cardDescriptionhover");
          cardTitlehover.classList.add("cardTitlehover");

          cardButtonhoverp.innerHTML = "Add to Bag";
          cardButtonhoverimg.src = "img/icons/arrows.png";
          cardButtonhover.appendChild(cardButtonhoverp);
          cardButtonhover.appendChild(cardButtonhoverimg);
          cardButtonhover.classList.add("cardButtonhover");

          hoverCoster.appendChild(cardTitlehover);
          hoverCoster.appendChild(cardDescriptionhover);
          hoverCoster.appendChild(cardButtonhover);
          hoverCoster.appendChild(imgLiker);
          hoverCoster.appendChild(cardCostHover);
          cardTitle.innerHTML = datas[i].title;
          cardTitle.classList.add("cardTitle");

          cardDescription.innerHTML = datas[i].type;
          cardDescription.classList.add("cardDescription");

          cardImg.src = datas[i].image_ts;
          cardImg.classList.add("cardImg");

          cardCost.innerHTML = datas[i].cost_ts;
          cardCost.classList.add("cardCost");
          outSideContainer.appendChild(hoverCoster);
          outSideContainer.classList.add("outSideContainer");
          outSideContainer.appendChild(cardTitle);
          outSideContainer.appendChild(cardDescription);
          outSideContainer.appendChild(cardImg);
          outSideContainer.appendChild(cardCost);
          document.getElementById("collect2015").appendChild(outSideContainer);
        } else if (datas[i].type == "Rubashka") {
        }
      }
    }
  });

  document.querySelector("#seconditems").click();
  let cardIndicator = document.createElement("p");
  cardIndicator.classList.add("cardIndicator");
  cardIndicator.innerHTML = arrayCard.length;
  document
    .querySelector(".header_undercontent__indicator")
    .appendChild(cardIndicator);
  for (
    let i = 0;
    i < document.querySelectorAll(".login_signin a").length;
    i++
  ) {
    document
      .querySelectorAll(".login_signin a")
      [i].addEventListener("click", e => {
        e.preventDefault();
      });
  }
  document
    .querySelector(".right_header_side button")
    .addEventListener("click", () => {
      console.log(document.querySelector(".right_header_side input").value);
    });
});
let liList = document.querySelectorAll(".fitst__content__rightside ul li p");
for (let i = 0; i < liList.length; i++) {
  liList[i].addEventListener("click", () => {
    for (let j = 0; j < liList.length; j++) {
      liList[j].style.color = "#232323";
      liList[j].parentNode.style.background = "none";
      liList[j].parentNode.style.borderBottom = "1px solid #c6c6c6";
    }
    liList[i].style.color = "#fff";
    liList[i].parentNode.style.background = "url('img/icons/phoneitem.png')";
    liList[i].parentNode.style.borderBottom = "none";
    if (i != 0) {
      liList[i - 1].parentNode.style.borderBottom = "none";
    }
  });
}
const functionRev = newdata => {
  let allBlocks = document.querySelectorAll(".block_items");
  for (let i = 0; i < allBlocks.length; i++) {
    allBlocks[i].style.display = "none";
  }
  $(`#${newdata}`).fadeIn();
};
