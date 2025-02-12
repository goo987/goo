let next = document.querySelector('.next');
let prev = document.querySelector('.prev');

// Fungsi untuk tombol navigasi carausel
next.addEventListener('click', function () {
    let items = document.querySelectorAll('.item');
    document.querySelector('.slide').appendChild(items[0]);
});

prev.addEventListener('click', function () {
    let items = document.querySelectorAll('.item');
    document.querySelector('.slide').prepend(items[items.length - 1]);
});

setInterval(() => {
    let items = document.querySelectorAll('.item');
    document.querySelector('.slide').appendChild(items[0]);
}, 10000);

// Fungsi ketika mengklik tombol button "See more"
const buttons = document.querySelectorAll('.item .content button');
const urls = [
    'https://example.com/solo-leveling',                            // URL untuk Solo Leveling
    'https://id.wikipedia.org/wiki/Spider-Man/spiderman',           // URL untuk Spiderman
    'https://id.wikipedia.org/wiki/Thor_(film)/thor',               // URL untuk Thor
    'https://id.wikipedia.org/wiki/Iron_Man/ironman',               // URL untuk Iron Man
    'https://id.wikipedia.org/wiki/Captain_America/captain-america' // URL untuk Captain America
];

buttons.forEach((button, index) => {
    button.addEventListener('click', () => {
        window.location.href = urls[index];
    });
});
