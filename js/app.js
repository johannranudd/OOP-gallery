// function getElement(selection) {
//   const element = document.querySelector(selection);
//   if (element) {
//     return element;
//   } else {
//     throw new Error(`element does not exist, check ${selection}`);
//   }
// }

// function Gallery(element) {
//   this.container = element;
//   this.list = [...element.querySelectorAll(".img")];
//   // target
//   this.modal = getElement(".modal");
//   this.modalImg = getElement(".main-img");
//   this.modalImages = getElement(".modal-images");
//   this.closeBtn = getElement(".close-btn");
//   this.nextBtn = getElement(".next-btn");
//   this.prevBtn = getElement(".prev-btn");
//   // bind functions

//   this.openModal = this.openModal.bind(this);
//   this.container.addEventListener("click", this.openModal);
// }

// Gallery.prototype.openModal = function() {
//     // console.log(this.modal);
//     this.modal.classList.add('open')
// }

// const nature = new Gallery(getElement(".nature"));
// const city = new Gallery(getElement(".city"));

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
  this.modal = getElement(".modal");
  this.modalImg = getElement(".main-img");
  this.modalImages = getElement(".modal-images");
  this.closeBtn = getElement(".close-btn");
  this.nextBtn = getElement(".next-btn");
  this.prevBtn = getElement(".prev-btn");

  this.openModal = this.openModal.bind(this);
  this.closeModal = this.closeModal.bind(this);
  this.container.addEventListener("click", this.openModal);
  this.closeBtn.addEventListener("click", this.closeModal);

}

Gallery.prototype.openModal = function () {
  // console.log(this.modal);
  this.modal.classList.add("open");
};
Gallery.prototype.closeModal = function () {
  // console.log(this.modal);
  this.modal.classList.remove("open");
//   console.log(this);
};

const nature = new Gallery(getElement(".nature"));
