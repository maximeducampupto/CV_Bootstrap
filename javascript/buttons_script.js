document.addEventListener('click', function(e) {
    if (e.target.tagName == 'BUTTON') {
        var wrapper = e.target.parentElement.parentElement.nextElementSibling;

        switch(wrapper.style.display) {
            case 'none':
            wrapper.style.display = 'flex';
                wrapper.parentElement.style.marginBottom = '70px';
            e.target.innerHTML = '-';
            break;
            default:
                wrapper.style.display = 'none';
                wrapper.parentElement.style.marginBottom = '20px';
                e.target.innerHTML = '+';
        }
    }
})