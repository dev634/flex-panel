const images = document.querySelectorAll(".img");
const texts = document.querySelectorAll(".text");
const container = document.querySelector(".container");
let move = 0;

function handleTouchMove(e) {
	if (e.type == "touchstart") {
		e.preventDefault();
	} else if (e.type == "touchmove") {
		e.preventDefault();
	} else if (e.type == "touchend") {
		e.target.parentNode.style.position = "relative";
		move += -100;
		if (move == -500) {
			move = 0;
		}
		e.target.parentNode.style.left = move + "%";
	}
}

function closing(e) {
	this.classList.remove("is-open-active", "is-open");
	this.removeEventListener("transitionend", myTransit);
}

function myTransit(e) {
	if (e.propertyName === "flex-grow") {
		this.classList.add("is-open-active");
	}
	return;
}

function opening(e) {
	e.target.classList.add("is-open");
	this.addEventListener("transitionend", myTransit);
}

if (window.innerHeight > window.innerWidth) {
	container.addEventListener("touchstart", handleTouchMove);
	container.addEventListener("touchmove", handleTouchMove);
	container.addEventListener("touchend", handleTouchMove);
} else {
	images.forEach(function (element) {
		element.addEventListener("click", opening);
		element.addEventListener("touchstart", opening);
		element.addEventListener("mouseleave", closing);
	});
}
