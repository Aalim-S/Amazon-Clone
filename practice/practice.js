const h1 = document.querySelector("body h1");

const arr = ["Aalim", "Asif", "Fazal", "Vikram"];
let currentIndex = 0;
console.log(arr.length)
h1.addEventListener("click", () => {
    h1.textContent = arr[currentIndex];
    currentIndex = (currentIndex + 1) % arr.length;
});
