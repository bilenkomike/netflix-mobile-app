const startScroll = document.querySelector(`[scroll-start]`);
startScroll.addEventListener('click', () => {
    
    if (document.querySelector(`.start__scroll--icon.active`).getAttribute('scroll-item') == 'start-1') {
        document.querySelector(`[scroll-item="start-2"]`).classList.add('active');
        document.querySelector(`[scroll-item="start-1"]`).classList.remove('active');
        document.querySelector(`#start-1`).classList.add('transform_1');
        document.querySelector(`#start-2`).classList.add('transform_2');
    }
    else {
        document.querySelector(`[scroll-item="start-1"]`).classList.add('active');
        document.querySelector(`[scroll-item="start-2"]`).classList.remove('active');
        document.querySelector(`#start-1`).classList.remove('transform_1');
        document.querySelector(`#start-2`).classList.remove('transform_2');
    }
});

const mainScroll = document.querySelector(`[scroll-main]`);
mainScroll.addEventListener(`click`, () => {
    let btnclicked = document.querySelector('.switcher.active');

    switch (btnclicked.getAttribute('scroll-item')) {
        case 'main-1':
            scroll = btnclicked.getAttribute('scroll-item');
            document.querySelector(`[scroll-item="main-2"]`).classList.add('active');
            document.getElementById(`main-1`).style.transform = 'translateX(-150%)';
            document.getElementById(`main-2`).style.transform = 'translateX(0%)';
            document.getElementById(`main-3`).style.transform = 'translateX(150%)';
            btnclicked.classList.remove('active');
            break;
        case 'main-2':
            scroll = btnclicked.getAttribute('scroll-item');
            document.querySelector(`[scroll-item="main-3"]`).classList.add('active');
            document.getElementById(`main-1`).style.transform = 'translateX(-300%)';
            document.getElementById(`main-2`).style.transform = 'translateX(-150%)';
            document.getElementById(`main-3`).style.transform = 'translateX(-86%)';
            btnclicked.classList.remove('active');
            break;
        case 'main-3':
            scroll = btnclicked.getAttribute('scroll-item');
            document.querySelector(`[scroll-item="main-1"]`).classList.add('active');
            document.getElementById(`main-1`).style.transform = 'translateX(88%)';
            document.getElementById(`main-2`).style.transform = 'translateX(150%)';
            document.getElementById(`main-3`).style.transform = 'translateX(300%)';
            btnclicked.classList.remove('active');
            break;
    }
});