document.addEventListener('click', function(e) {
    if (e.target.tagName == 'BUTTON') {
        var wrapper = e.target.parentElement.parentElement.nextElementSibling;

        switch(wrapper.style.display) {
            case 'none':
            wrapper.style.display = 'flex';
            e.target.innerHTML = '-';
            break;
            default:
                wrapper.style.display = 'none';
                e.target.innerHTML = '+';
        }
    }
})