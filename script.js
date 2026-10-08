function showImage(img) {
    document.getElementById("popup").style.display = "flex";
    document.getElementById("bigImage").src = img.src;
}

function closeImage() {
    document.getElementById("popup").style.display = "none";
}
