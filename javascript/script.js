document.getElementById('show-element').onclick = function() {
    var element = document.getElementById('to-show');
    if (element.className === 'hide') {
        element.className = 'show';
        document.getElementsByTagName('body')[0].className = 'on';
        document.getElementById('show-element').className = 'active';
    } else {
        element.className = 'hide';
        document.getElementsByTagName('body')[0].className = 'off';
        document.getElementById('show-element').className = '';
    }
}

document.getElementById('show-element2').onclick = function() {
    var element = document.getElementById('to-show2');
    if (element.className === 'hide') {
        element.className = 'show';
        document.getElementsByTagName('body')[0].className = 'on';
        document.getElementById('show-element2').className = 'active';
    } else {
        element.className = 'hide';
        document.getElementsByTagName('body')[0].className = 'off';
        document.getElementById('show-element2').className = '';
    }
}
