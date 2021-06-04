document.addEventListener('DOMContentLoaded', function() {

    text = document.querySelectorAll('input[type="text"]')
    submit = document.querySelector('input[type="submit"]')
    console.log(text)

    submit.addEventListener('click', function(event) {

        texto = text[1].value
        localStorage.setItem('text', texto)

    })

})

document.addEventListener('DOMContentLoaded', function() {


    let nome = document.querySelector('.curso')
    let email = document.querySelector('.duv')
    let upload = document.querySelector('.upload')
    let foto = document.querySelector('.foto')


    function update() {

        submit = document.querySelector('input[type="submit"]')

        if(nome.value == '' || email.value == '') {
            submit.disabled = true
        } else {
            submit.disabled = false
        }

  
    }

    nome.addEventListener('input', function() {
        update()
    })

    email.addEventListener('input', function() {
        update()
    })

    upload.addEventListener('input', function() {
        update()
    })

    update()


})
