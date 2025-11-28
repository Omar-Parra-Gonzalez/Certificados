const carousel = document.getElementById("carousel");
const nextBtn = document.getElementById("next");
const prevBtn = document.getElementById("prev");

nextBtn.onclick = () => carousel.scrollLeft += 300;
prevBtn.onclick = () => carousel.scrollLeft -= 300;

const modal = document.getElementById("modal");
const modalImg = document.getElementById("modal-img");
const close = document.getElementById("close");

document.querySelectorAll(".carousel img").forEach(img => {
  img.addEventListener("click", () => {
    modalImg.src = img.src;
    modal.style.display = "flex";
  });
});

close.onclick = () => modal.style.display = "none";

modal.onclick = (e) => { 
  if (e.target === modal) modal.style.display = "none"; 
};