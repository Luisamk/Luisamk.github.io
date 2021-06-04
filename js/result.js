document.addEventListener('DOMContentLoaded', function() {

    value = localStorage.getItem('text')

    if (value != null) {

        span = document.querySelector('span')
        span.innerHTML = value

    }

})
