function createPopup(target, position ,warningLevel, title, content, timeout) {
    const popUpWrap = document.createElement('div');
    popUpWrap.classList.add('pop-up');

    switch (warningLevel) {
        case 'warning':
            popUpWrap.classList.add('warning');
            break;
        case 'alert':
            popUpWrap.classList.add('alert');
            break;
        case 'info':
        default:
            popUpWrap.classList.add('info');
            break;
    }
    switch (position) {
        case 'top':
            popUpWrap.classList.add('pop-up-top');
            break;
        case 'bottom':
            popUpWrap.classList.add('pop-up-bottom');
            break;
        case 'left':
            popUpWrap.classList.add('pop-up-left');
            break;
        case 'right':
            popUpWrap.classList.add('pop-up-right');
            break;
        case 'center':
            default:
            popUpWrap.classList.add('pop-up-center');
            break;
        case 'top-left':
            popUpWrap.classList.add('pop-up-top-left');
            break;
        case 'top-right':
            popUpWrap.classList.add('pop-up-top-right');
            break;
        case 'bottom-left':
            popUpWrap.classList.add('pop-up-bottom-left');
            break;
        case 'bottom-right':
            popUpWrap.classList.add('pop-up-bottom-right');
            break;
    }

    const popUpTitle = document.createElement('h2');
    popUpTitle.classList.add('popUpTitle');
    popUpTitle.textContent = title;


    const text = document.createElement('p');
    text.classList.add('popUpText');
    text.textContent = content;

    popUpWrap.appendChild(popUpTitle);
    popUpWrap.appendChild(text);

    target.appendChild(popUpWrap);

    setTimeout(()=> target.removeChild(popUpWrap), timeout);

}