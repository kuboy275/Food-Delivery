function showList() {
    let btnBars = document.querySelector('.btn-bars');
    let navList = document.querySelector('.nav-list');

    btnBars.addEventListener('click', function() {
        navList.classList.toggle('show');
    });
}
showList();