const darkBtn = document.getElementById("darkBtn");

darkBtn.onclick = () => {
  document.body.classList.toggle("dark");
};

const images = document.querySelectorAll(".gallery img");

images.forEach(img => {
  img.onclick = () => {
    const popup = document.createElement("div");
    popup.style.position = "fixed";
    popup.style.top = "0";
    popup.style.left = "0";
    popup.style.width = "100%";
    popup.style.height = "100%";
    popup.style.background = "rgba(0,0,0,0.8)";
    popup.style.display = "flex";
    popup.style.justifyContent = "center";
    popup.style.alignItems = "center";
    popup.style.zIndex = "2000";

    const bigImg = document.createElement("img");
    bigImg.src = img.src;
    bigImg.style.maxWidth = "80%";
    bigImg.style.borderRadius = "10px";

    popup.appendChild(bigImg);
    document.body.appendChild(popup);

    popup.onclick = () => popup.remove();
  };
});
