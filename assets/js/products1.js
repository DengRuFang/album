let slideIndex = 0;
show1();

function show1() {
  let i;
  let slides = document.getElementsByClassName("midbox-2");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) { slideIndex = 1 }
  slides[slideIndex - 1].style.display = "block";
  setTimeout(show1, 2000); // Change image every 2 seconds
}