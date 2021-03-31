console.log("work")
const images = [
  {
    preview: "https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825__340.jpg",
    original: "https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825_1280.jpg",
    description: "Hokkaido Flower",
  },
  {
    preview: "https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg",
    original: "https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg",
    description: "Container Haulage Freight",
  },
  {
    preview: "https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg",
    original: "https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg",
    description: "Aerial Beach View",
  },
  {
    preview: "https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg",
    original: "https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg",
    description: "Flower Blooms",
  },
  {
    preview: "https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg",
    original: "https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg",
    description: "Alpine Mountains",
  },
  {
    preview: "https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg",
    original: "https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg",
    description: "Mountain Lake Sailing",
  },
  {
    preview: "https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg",
    original: "https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg",
    description: "Alpine Spring Meadows",
  },
  {
    preview: "https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg",
    original: "https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg",
    description: "Nature Landscape",
  },
  {
    preview: "https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg",
    original: "https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg",
    description: "Lighthouse Coast Sea",
  },
]

// console.log(createGallery(images))

const refs = {
  modal: document.querySelector(".lightbox"),
  overlay: document.querySelector(".lightbox__overlay"),
  imgOrigin: document.querySelector(".lightbox__image"),
  btnClose: document.querySelector(".lightbox__button"),
  listImages: document.querySelector(".js-gallery"),
}
let index

// console.log(createGallery(images))
function createGallery(images) {
  return images
    .map((image, index) => {
      return `<li class="gallery__item">
      <a
        class="gallery__link"
        href="${image.original}"
      >
        <img
          class="gallery__image"
          src="${image.preview}"
          data-source="${image.original}"
          alt="${image.description}"
          data-index = "${index}"
        />
      </a>
    </li>`
    })
    .join("  ")
}

// const x = createGallery(images)

refs.listImages.insertAdjacentHTML("beforeend", createGallery(images))

refs.listImages.addEventListener("click", openModal)
refs.btnClose.addEventListener("click", closeModal)
refs.overlay.addEventListener("click", closeModal)

let currentIndexImg = null

function openModal(e) {
  e.preventDefault()
  if (e.target !== e.currentTarget) {
    refs.modal.classList.add("is-open")
    index = +e.target.dataset.index
    refs.imgOrigin.src = images[index].original
    console.log(index)
  }
  slider()

  document.addEventListener("keydown", keyDown)
}

function closeModal() {
  refs.modal.classList.remove("is-open")
  refs.imgOrigin.src = ""
  document.removeEventListener("keydown", keyDown)
}

function keyDown(e) {
  if (e.code === "Escape") {
    closeModal()
  }
}

// function slider(images) {
//   window.addEventListener("keydown", function (e) {
//     if (e.code === "ArrowRight") {
//       index = index + 1
//       console.log(index)
//       refs.imgOrigin.src = images[index].original
//     }
//     // currentIndexImg = +e.target.dataset.index
//   })
// }
