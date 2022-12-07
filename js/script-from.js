let navbar = document.querySelector('.menu');
const nextPage = document.querySelector(".nextpage");
const slidePage = document.querySelector(".slidepage");
const NextBtn = document.querySelector(".next-btn");
const firstNextBtn = document.querySelector(".nextBtn");
document.querySelector('.menu-btn').onclick = () =>{
    navbar.classList.toggle('active-btn');
}

const menuButton = document.querySelector('.icon-menu')
if (menuButton) {
  menuButton.addEventListener('click', event => {
    event.currentTarget.classList.toggle('menu-close')
  })
}

NextBtn.addEventListener("click", function(){
  nextPage.style.marginLeft = "-50%";
});

const prevBtnSec = document.querySelector(".prev-1");
const nextBtnSec = document.querySelector(".next-1");
const prevBtnThird = document.querySelector(".prev-2"); 


const submitBtn = document.querySelector(".submit");
const progressText = document.querySelectorAll(".step p");
const progressCheck = document.querySelectorAll(".step .check");
const bullet = document.querySelectorAll(".step .bullet");
let max = 4;
let current = 1;


firstNextBtn.addEventListener("click", function(){
	slidePage.style.marginLeft = "-25%";
	bullet[current - 1].classList.add("active");
	progressText[current - 1].classList.add("active");
	progressCheck[current - 1].classList.add("active");
	current += 1;
});
nextBtnSec.addEventListener("click", function(){
	slidePage.style.marginLeft = "-50%";
	bullet[current - 1].classList.add("active");
	progressText[current - 1].classList.add("active");
	progressCheck[current - 1].classList.add("active");
	current += 1;
});

submitBtn.addEventListener("click", function(){
	slidePage.style.marginLeft = "-75%";

	bullet[current - 1].classList.add("active");
	progressText[current - 1].classList.add("active");
	progressCheck[current - 1].classList.add("active");
	current += 1;
	setTimeout(function() {
		location.reload();
	}, 2000);
});

prevBtnSec.addEventListener("click", function(){
	slidePage.style.marginLeft = "0%";
	bullet[current - 2].classList.remove("active");
	progressText[current - 2].classList.remove("active");
	progressCheck[current - 2].classList.remove("active");
	current -= 1;
});
prevBtnThird.addEventListener("click", function(){
	slidePage.style.marginLeft = "-25%";
	bullet[current - 2].classList.remove("active");
	progressText[current - 2].classList.remove("active");
	progressCheck[current - 2].classList.remove("active");
	current -= 1;
});