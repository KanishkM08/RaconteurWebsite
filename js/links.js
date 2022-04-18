var raconteurInsta = "https://www.instagram.com/raconteurblogs/";
var kanishkGithub = "https://github.com/KanishkM08";
var projRepo = "https://github.com/Gargantuan5k/FrenchBlogWebsite";
var kanishkTwitter = "https://twitter.com/BansalRigved";

document.getElementById("twitter").addEventListener("click", (e) => {
    e.preventDefault();
    window.open(raconteurTwitter);
});
document.getElementById("insta").addEventListener("click", (e) => {
    e.preventDefault();
    window.open(raconteurInsta);
});
document.getElementById("github").addEventListener("click", (e) => {
    e.preventDefault();
    window.open(projRepo);
    window.open(kanishkGithub);
});