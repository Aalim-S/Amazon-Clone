const left = document.querySelector("#left");
const right = document.querySelector("#right");
const slideShow = document.querySelector(".slideshow");
const slidShow = document.querySelector(".slidshow");
const images = document.querySelectorAll(".images");
const styleForMen = document.querySelector(".style-for-men")
const shoppingBoxContainer = document.querySelector(".shopping-box-container");
const scootyRow = document.querySelector(".scooty-row");
const booksRow = document.querySelector(".books-row");
const newArrivalsRow = document.querySelector(".newArrivals-row");
const historyBox = document.querySelector(".history-box");

//amajon main slide show section
let number = 1;
let length = images.length;

const leftfunc = ()=>{
  slideShow.style.transform = `translateX(-${number*100}%)`;
  number++;
}
const rightfunc = ()=>{
  slideShow.style.transform = `translateX(-${(number - 2)*100}%)`;
  number--;
}

const leftstart = ()=>{
  slideShow.style.transform = `translateX(0px)`;
  number = 1;
}
const rightstart = ()=>{
  slideShow.style.transform = `translateX(-${(length - 1) * 100}%)`;
  number = length;
}

left.addEventListener("click",()=>{
  number > 1 ? rightfunc() : rightstart();
  left.classList.add("left-border");
  right.classList.remove("right-border");
})
right.addEventListener("click",()=>{
  number < length ? leftfunc() : leftstart();
  right.classList.add("right-border");
  left.classList.remove("left-border");
})

let slideName = setInterval(()=>{
  number < length ? leftfunc() : leftstart();
},10000);


//functionality for shopping boxes
//dynamically creating boxes with for loop from object
for(let i = 0; i < styleFMObject.length; i++){
  shoppingBoxContainer.innerHTML += `<div class="style-for-men"><h2>${styleFMObject[i].sfmlh2}</h2><div class="cloth-footwear"><div class="cloth"><img src=${styleFMObject[i].sfmlclothimg} alt=""><p>${styleFMObject[i].sfmlclothp}</p></div><div class="f-wear"><img src=${styleFMObject[i].fwearimg} alt=""><p>${styleFMObject[i].fwearp}</p></div></div><div class="watch-bags"><div class="watches"><img src=${styleFMObject[i].watchesimg} alt=""><p>${styleFMObject[i].watchesp}</p></div><div class="bags"><img src=${styleFMObject[i].bagsimg} alt=""><p>${styleFMObject[i].bagsp}</p></div></div><a href="#">${styleFMObject[i].styleformena}</a></div>`;
}

//dynamically creating sliderow with for loop from object
slidShow.innerHTML = '<i class="fa-solid fa-chevron-left slide-row-left" id="left"></i>';
for(let i = 0; i < slideShowObject.length; i++){
    slidShow.innerHTML += `
                          <div class="slideimgrow">
                              <div class="slideimg">
                                  <img src=${slideShowObject[i].slideimg} alt="">
                              </div>
                              <div class="slideimgcontent">
                                  <small><span>${slideShowObject[i].spanText}</span>${slideShowObject[i].smallText}</small>
                                  <p>${slideShowObject[i].paraText}</p>
                              </div>
                          </div>
                          `;
}
slidShow.innerHTML += '<i class="fa-solid fa-chevron-right slide-row-right" id="right" ></i>';

//scooty row slide
scootyRow.innerHTML = '<i class="fa-solid fa-chevron-left left" id="left"></i>';
for(let i = 0; i < scootyRowSlideObjectData.length; i++){
    scootyRow.innerHTML += `
                          <div class="slideimgrow">
                              <div class="scootyimg">
                                  <img src=${scootyRowSlideObjectData[i].imgsrc} alt="">
                              </div>
                          </div>
                          `;
}
scootyRow.innerHTML += '<i class="fa-solid fa-chevron-right right" id="right" ></i>';

//books row slide
booksRow.innerHTML = '<i class="fa-solid fa-chevron-left left" id="left"></i>';
for(let i = 0; i < booksRowSlideObjectData.length; i++){
    booksRow.innerHTML += `
                          <div class="slideimgrow">
                              <div class="booksimg">
                                  <img src=${booksRowSlideObjectData[i].imgsrc} alt="">
                              </div>
                          </div>
                          `;
}
booksRow.innerHTML += '<i class="fa-solid fa-chevron-right right" id="right" ></i>';


//new arrivals row slide
newArrivalsRow.innerHTML = '<i class="fa-solid fa-chevron-left left" id="left"></i>';
for(let i = 0; i < newArrivalsRowSlideObjectData.length; i++){
    newArrivalsRow.innerHTML += `
                          <div class="slideimgrow">
                              <div class="booksimg">
                                  <img src=${newArrivalsRowSlideObjectData[i].imgsrc} alt="">
                              </div>
                          </div>
                          `;
}
newArrivalsRow.innerHTML += '<i class="fa-solid fa-chevron-right right" id="right" ></i>';

//handling newArrivalsleft and right button
let newArrivalsLeft = newArrivalsRow.querySelector(".left");
let newArrivalsRight = newArrivalsRow.querySelector(".right");

newArrivalsRow.addEventListener("mouseover",()=>{
  newArrivalsLeft.style.visibility = 'visible';
  newArrivalsRight.style.visibility = 'visible';
})
newArrivalsRow.addEventListener("mouseleave",()=>{
  newArrivalsLeft.style.visibility = 'hidden';
  newArrivalsRight.style.visibility = 'hidden';
})

newArrivalsLeft.addEventListener("click",()=>{
  newArrivalsRow.scrollLeft -= 900;

  newArrivalsLeft.classList.add("slide-left-border");
  newArrivalsRight.classList.remove("slide-right-border");
});
newArrivalsRight.addEventListener("click",()=>{
  newArrivalsRow.scrollLeft += 900;

  newArrivalsRight.classList.add("slide-right-border");
  newArrivalsLeft.classList.remove("slide-left-border");
});

//handling booksleft and right button
let booksLeft = booksRow.querySelector(".left");
let booksRight = booksRow.querySelector(".right");

booksRow.addEventListener("mouseover",()=>{
  booksLeft.style.visibility = 'visible';
  booksRight.style.visibility = 'visible';
})
booksRow.addEventListener("mouseleave",()=>{
  booksLeft.style.visibility = 'hidden';
  booksRight.style.visibility = 'hidden';
})

booksLeft.addEventListener("click",()=>{
  booksRow.scrollLeft -= 900;

  booksLeft.classList.add("slide-left-border");
  booksRight.classList.remove("slide-right-border");
});
booksRight.addEventListener("click",()=>{
  booksRow.scrollLeft += 900;

  booksRight.classList.add("slide-right-border");
  booksLeft.classList.remove("slide-left-border");
});

//handling scootyleft and right button
let scootyLeft = scootyRow.querySelector(".left");
let scootyRight = scootyRow.querySelector(".right");

scootyRow.addEventListener("mouseover",()=>{
  scootyLeft.style.visibility = 'visible';
  scootyRight.style.visibility = 'visible';
})
scootyRow.addEventListener("mouseleave",()=>{
  scootyLeft.style.visibility = 'hidden';
  scootyRight.style.visibility = 'hidden';
})

scootyLeft.addEventListener("click",()=>{
  scootyRow.scrollLeft -= 900;

  scootyLeft.classList.add("slide-left-border");
  scootyRight.classList.remove("slide-right-border");
});
scootyRight.addEventListener("click",()=>{
  scootyRow.scrollLeft += 900;

  scootyRight.classList.add("slide-right-border");
  scootyLeft.classList.remove("slide-left-border");
});

//sliderow left and right button handling
const slideRowLeft = slidShow.querySelector(".slide-row-left");
const slideRowRight = slidShow.querySelector(".slide-row-right");

slideRowLeft.addEventListener("click",()=>{
  slidShow.scrollLeft -= 900;

  slideRowLeft.classList.add("slide-left-border");
  slideRowRight.classList.remove("slide-right-border");
});
slideRowRight.addEventListener("click",()=>{
  slidShow.scrollLeft += 900;

  slideRowRight.classList.add("slide-right-border");
  slideRowLeft.classList.remove("slide-left-border");
});

//footer section
let footerRowSlide = document.querySelector(".footer-row-slide");

//dynamically printing footer-slide form object footerRowSlideObjectData
let go = true;
for(let i = 0; i < footerRowSlideDataObject.length; i++){
  footerRowSlide.innerHTML += `          <div class="history-box">
  <img src=${footerRowSlideDataObject[i].images} alt="">
  <p id="first-para">${footerRowSlideDataObject[i].firstPara}</p>
  <div class="history-star">
    <i class="fa-solid fa-star"></i>
    <i class="fa-solid fa-star"></i>
    <i class="fa-solid fa-star"></i>
    <i class="fa-solid fa-star"></i>
    <i class="fa-solid fa-star"></i>
    <p>${footerRowSlideDataObject[i].rate}</p>
  </div>
  <p id="price">${footerRowSlideDataObject[i].price}</p>
  <p id="mrp">${footerRowSlideDataObject[i].mrp}</p>
  <p id="date">${footerRowSlideDataObject[i].date}</p>
  <p id="free">${footerRowSlideDataObject[i].free}</p>
  </div> `;
}
const historyLeftArrow = document.querySelector(".history-left-arrow");
const historyRightArrow = document.querySelector(".history-right-arrow");
let firstTextSmall = document.querySelector(".first-text small");

let startOver = ()=>{
  let para = firstTextSmall.querySelector("#over");
  para.addEventListener('click',()=>{
    footerRowSlide.scrollLeft = 0;
    firstTextSmall.textContent = 'Page 1 of 3';
  })
}

historyLeftArrow.addEventListener("click",()=>{
  footerRowSlide.scrollLeft -= 1410;
  if(footerRowSlide.scrollLeft == 1410 || footerRowSlide.scrollLeft == 1393){
    firstTextSmall.textContent = 'Page 1 of 3';
    console.log('helloo')
    console.log(footerRowSlide.scrollLeft)
  }
  if(footerRowSlide.scrollLeft == 2803){
    firstTextSmall.innerHTML = 'Page 2 of 3  | <p id="over">Start over<p>';
    startOver();
  }
  console.log(footerRowSlide.scrollLeft)
  
  historyLeftArrow.classList.add("slide-left-border");
  historyRightArrow.classList.remove("slide-right-border");
});

historyRightArrow.addEventListener("click",()=>{
  if(footerRowSlide.scrollLeft === 0){
    firstTextSmall.innerHTML = 'Page 2 of 3  | <p id="over">Start over<p>';
    startOver();
  }

  footerRowSlide.scrollLeft += 1410;

  if(footerRowSlide.scrollLeft === 1410){
    firstTextSmall.innerHTML = 'Page 3 of 3  | <p id="over">Start over<p>';
    startOver();
  }

  historyRightArrow.classList.add("slide-right-border");
  historyLeftArrow.classList.remove("slide-left-border");
});