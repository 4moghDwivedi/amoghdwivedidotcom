function showPreview(image, subtitle) {
    document.getElementById("preview-image").src = image;
    document.getElementById("preview-subtitle").textContent = subtitle;
}

function hidePreview(){
    document.getElementById("preview-image").removeAttribute("src");
    document.getElementById("preview-subtitle").textContent = "";
}
