const btnOpen = document.getElementById('more-info-btn');
const moreInfo = document.getElementById('more-info');
const ovCont = document.getElementById('overview-content');
btnOpen.addEventListener('click', () => {
    btnOpen.classList.toggle('active');
    if(!ovCont.style.maxHeight) {
        ovCont.style.maxHeight = ovCont.scrollHeight + 109 + "px";
    }
    else {
        ovCont.removeAttribute('style');
    }
    ovCont.classList.toggle('active');
    
});

const movies = document.querySelectorAll(`[movie]`);
for (let i = 0; i < movies.length; i++) {
    movies[i].addEventListener('click', () => {
        menu.style.cssText = `display: none; opacity:0;`;
        document.querySelector(`.header__menu__icon.left`).removeAttribute('style');
        document.querySelector(`#save--header`).removeAttribute('style');
        document.querySelector(`#notifications`).style.display = 'none';
        // document.querySelector(`#bg__image__blur`).removeAttribute('style');
        fadeOut(document.querySelector(`#${localStorage.getItem('page')}`), document.querySelector(`#screen--simple_one`));
        const {id,poster,language,duration,overview,published,rating,trailor,actors,name, ganre} = JSON.parse(movies[i].getAttribute('movie-content'));
        
        document.querySelector(`#${poster}`).removeAttribute('style');
        console.log(actors);
        for ( let i = 1 ; i <= 4; i++ ) {
            document.querySelector(`#actor-${i}`).setAttribute('src',`${actors}actor-${i}.jpg`)
        }
        
        document.querySelector(`[data-poster="${poster}"]`).removeAttribute('style');
        document.querySelector(`#name`).innerText = name;
        document.querySelector(`#ganre`).innerText = ganre;
        document.querySelector(`#language`).innerText = language;
        document.querySelector(`#duration`).innerText = duration;
        document.querySelector(`#published`).innerText = published;
        document.querySelector(`#rating`).innerText = rating;
        document.querySelector(`#published`).innerText = published;
        document.querySelector(`#more-info`).innerText = overview;
        document.querySelector(`#trailor`).setAttribute('src',trailor);

    });
}

const back = document.getElementById(`back`);
back.addEventListener('click', ()=> {
    btnOpen.click();
    document.querySelectorAll('.bg__image__blur').forEach(item => {
        item.style.display = 'none';
    });
    
    document.querySelectorAll('.film__poster').forEach(item => {
        item.style.display = 'none';
    });
    menu.removeAttribute('style');
    document.querySelector(`.header__menu__icon.left`).style.display = 'none';
    document.querySelector(`#save--header`).style.display = 'none';
    document.querySelector(`#notifications`).removeAttribute('style');
    fadeOut(document.querySelector(`#screen--simple_one`),document.querySelector(`#${localStorage.getItem('page')}`));
})