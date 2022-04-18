var raconteurInsta = "https://www.instagram.com/raconteurblogs/";
var projRepo = "https://github.com/KanishkM08/RaconteurWebsite";
var raconteurTwitter = "https://twitter.com/BansalRigved";

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
});