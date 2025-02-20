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

//slide otomatis setiap 10 detik
// setInterval(() => {
//     let items = document.querySelectorAll('.item');
//     document.querySelector('.slide').appendChild(items[0]);
// }, 10000);

buttons.forEach((button, index) => {
    button.addEventListener('click', () => {
        window.location.href = urls[index];
    });
});