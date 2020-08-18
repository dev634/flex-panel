const images = document.querySelectorAll(".img");
const texts = document.querySelectorAll(".text");
let alreadyOpen = null;

function openTrans(e) {}

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

images.forEach(function (element) {
	element.addEventListener("click", opening);
	element.addEventListener("mouseout", closing);
});
