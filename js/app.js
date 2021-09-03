function getElement(selection) {
  const element = document.querySelector(selection);
  if (element) {
    return element;
  } else {
    throw new Error(`element does not exist, check ${selection}`);
  }
}

function Gallery(element) {
  this.container = element;
  this.list = [...element.querySelectorAll(".img")];
  // target
  this.modal = getElement(".modal");
  this.modalImg = getElement(".main-img");
  this.modalImages = getElement(".modal-images");
  this.closeBtn = getElement(".close-btn");
  this.nextBtn = getElement(".next-btn");
  this.prevBtn = getElement(".prev-btn");
  // bind functions

  this.openModal = this.openModal.bind(this);
  this.container.addEventListener("click", this.openModal);
}

Gallery.prototype.openModal = function() {
    console.log(this);
}

const nature = new Gallery(getElement(".nature"));
const city = new Gallery(getElement(".city"));
