const user = "deeepsek-dot";
const repo = "aa";
const folder = "images";

const apiUrl = `https://api.github.com/repos/${user}/${repo}/contents/${folder}`;

fetch(apiUrl)
  .then(res => res.json())
  .then(files => {
    const gallery = document.getElementById("gallery");
    gallery.innerHTML = "";

    files.forEach(file => {
      if (file.type === "file" && file.name.match(/\.(jpg|jpeg|png|webp|gif)$/i)) {
        const img = document.createElement("img");
        img.src = file.download_url;
        gallery.appendChild(img);
      }
    });
  })
  .catch(() => {
    document.getElementById("gallery").innerText = "Resimler yüklenemedi.";
  });
