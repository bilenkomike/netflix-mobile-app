const inputs = document.querySelectorAll('.input');
for(let i = 0; i < inputs.length; i++) {
    let input = inputs[i];
    input.addEventListener('focus',() => {
        document.querySelector(`[for="${input.getAttribute('id')}"]`).classList.add('active');
    });
    input.addEventListener('focusout',() => {
        if(input.value.length == 0) {
            document.querySelector(`[for="${input.getAttribute('id')}"]`).classList.remove('active');
        }
    });
}
// search
document.querySelector(`[id="search"]`).addEventListener('focus', () => {
    document.querySelector(`#search-icon`).innerText = 'close';
    document.getElementById('search-results').classList.add('active');
    if(document.querySelector(`#search-icon`).innerText == 'close') {
        document.querySelector(`#search-icon`).addEventListener('click', () => {
            document.querySelector(`#search-icon`).innerText = 'search';
            document.getElementById('search-results').classList.remove('active');
            document.querySelector('#search').value = '';
        });
    }

});
document.querySelector(`[id="search"]`).addEventListener('focusout', () => {
    if(document.querySelector(`[id="search"]`).value.length == 0) {
        document.querySelector(`#search-icon`).innerText = 'search';
        document.getElementById('search-results').classList.remove('active');
    }   
});

