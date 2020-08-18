const images = document.querySelectorAll(".img");
const texts = document.querySelectorAll(".text");
const container = document.querySelector(".container");
let move = 0;

function handleTouchMove(e) {
	switch (e.type) {
		case "touchstart":
			e.preventDefault();
			this.classList.add("is-open-active");
			break;
		case "touchmove":
			e.preventDefault();
			break;
		case "touchend":
			move = move == -400 ? 0 : move - 100;
			this.classList.remove("is-open-active");
			document.documentElement.style.setProperty(
				"--translate",
				move + "%"
			);
			break;
		default:
			alert("Something wrong happened ...");
			break;
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
	images.forEach(function (element) {
		element.addEventListener("touchstart", handleTouchMove);
		element.addEventListener("touchmove", handleTouchMove);
		element.addEventListener("touchend", handleTouchMove);
	});
} else {
	images.forEach(function (element) {
		element.addEventListener("click", opening);
		element.addEventListener("touchstart", opening);
		element.addEventListener("mouseleave", closing);
	});
}
