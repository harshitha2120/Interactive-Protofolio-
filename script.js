function showImage(imageSource) {
  const viewer = document.querySelector(".image-viewer");
  const viewerImage = viewer.querySelector("img");

  viewerImage.src = imageSource;
  viewer.style.display = "flex";
}

function hideImage() {
  const viewer = document.querySelector(".image-viewer");
  viewer.style.display = "none";
}