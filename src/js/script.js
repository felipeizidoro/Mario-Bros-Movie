const button = document.querySelector(".button");
const modal = document.querySelector(".modal");
const closeModal = document.querySelector(".closeModal");
const stopVideo = document.getElementById("video");
const linkVideo = stopVideo.src

button.addEventListener("click", () => {
    modal.classList.add("openModal");
    stopVideo.setAttribute("src", linkVideo);
});

closeModal.addEventListener("click", () => {
    modal.classList.remove("openModal");
    stopVideo.setAttribute("src", "");
})

