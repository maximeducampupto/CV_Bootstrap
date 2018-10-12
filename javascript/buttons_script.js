document.getElementById('exp_button').addEventListener('click', function() {
   var wrapper = document.getElementById('exp_wrapper');

   if (wrapper.style.display != 'none') {
       wrapper.style.display = 'none';
       document.getElementById('exp_button').innerHTML = '+';
   } else {
       wrapper.style.display = 'flex';
   }
});

document.getElementById('form_button').addEventListener('click', function() {
    var wrapper = document.getElementById('form_wrapper');

    if (wrapper.style.display != 'none') {
        wrapper.style.display = 'none';
        document.getElementById('form_button').innerHTML = '+';
    } else {
        wrapper.style.display = 'flex';
    }
});

document.getElementById('comp_button').addEventListener('click', function() {
    var wrapper = document.getElementById('comp_wrapper');

    if (wrapper.style.display != 'none') {
        wrapper.style.display = 'none';
        document.getElementById('comp_button').innerHTML = '+';
    } else {
        wrapper.style.display = 'flex';
    }
});