const letters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
let randomLetter = letters[Math.floor(Math.random() * 26)];
console.log(randomLetter);

document.addEventListener('keydown', function(event) {
    if (randomLetter === event.key) {
        randomLetter = letters[Math.floor(Math.random() * 26)];
    }
})