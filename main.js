const GenerateMemeBtn = document.querySelector(
    ".meme-generator .generate-meme-btn" );
const memeImage = document.querySelector(".meme-generator img");
const memeTitle = document.querySelector(".meme-generator .meme-title");
const memeAuthor = document.querySelector(".meme-generator .meme-author");

const updatedetails = (url, title, author) => {
    memeImage.setAttribute("src", url);
    memeTitle.innerHTML = title;
    memeAuthor.innerHTML = `Meme by: ${author}`;
};
const generateMeme = () => {
    fetch(" https://meme-api.com/gimme/wholesomememes")
    .then((Response) => Response.json())
    .then((data) => {
         updatedetails(data.url, data.title, data.author);
    });
}; 

GenerateMemeBtn.addEventListener("click", generateMeme);