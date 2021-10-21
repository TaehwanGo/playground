const btnMovePage = document.querySelector('#btnMovePage');

/**
 * @param {MouseEvent} event 
 */
function handleClickATag(event) {
    const body = document.querySelector('body');
    console.log('body', body);
    body.classList.add('move__page');
    setTimeout(() => {
        window.location.href = './text.html';
    }, 300)
}


btnMovePage.addEventListener('click', handleClickATag);
