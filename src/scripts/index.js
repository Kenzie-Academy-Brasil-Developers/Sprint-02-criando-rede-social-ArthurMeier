const perfil = document.getElementById('perfilArea')
const sugestion = document.getElementById('sugestion')
const post = document.getElementById('postArea')

function criarPerfilArea(user) {
    const divContainer = document.createElement('div')
    const imgPerfil = document.createElement('img')
    const divInfo = document.createElement('div')
    const name = document.createElement('h2')
    const stack = document.createElement('p')
    const divPost = document.createElement('div')
    const title = document.createElement('input')
    const text = document.createElement('textarea')
    const button = document.createElement('button')

    perfil.append(divContainer, divPost)
    divContainer.append(imgPerfil, divInfo)
    divInfo.append(name, stack)
    divPost.append(title, text, button)

    divContainer.classList.add("container__perfil")
    divInfo.classList.add("container__perfil--info")
    name.classList.add("perfil__name")
    stack.classList.add("perfil__stack")
    divPost.classList.add("container__post")
    title.classList.add("container__post--title")
    text.classList.add("container__post--post")
    button.classList.add("container__post--button")

    imgPerfil.src = user.img
    imgPerfil.alt = "Foto de perfil"
    name.innerText = user.user
    stack.innerText = user.stack
    title.placeholder = "    Digitar título do post"
    text.placeholder = "   Digitar descrição do post"
    button.innerText = "Postar"
    button.setAttribute('type', 'submit')

}

function criarAside(array) {
    const title = document.createElement('h2')
    const lista = document.createElement('ul')

    sugestion.append(title, lista)

    title.innerText = 'Sugestões para você seguir'

    for (let i = 0; i < array.length; i++) {
        const item = document.createElement('li')
        const divPerfil = document.createElement('div')
        const img = document.createElement('img')
        const divInfo = document.createElement('div')
        const name = document.createElement('h2')
        const stack = document.createElement('p')
        const button = document.createElement('button')

        lista.appendChild(item)
        item.append(divPerfil, button)
        divPerfil.append(img, divInfo)
        divInfo.append(name, stack)

        item.classList.add('container__sugestoes')
        divPerfil.classList.add('container__perfil')
        divInfo.classList.add('container__perfil--info')
        name.classList.add('perfil__name')
        stack.classList.add('perfil__stack')
        button.classList.add('seguir')

        img.src = array[i].img
        img.alt = "Foto de perfil"
        name.innerText = array[i].user
        stack.innerText = array[i].stack
        button.innerText = "Seguir"
        button.dataset.seguir = "seguir"
    }


}

function criarPostArea(array) {
    const title = document.createElement('h1')
    const lista = document.createElement('ul')

    lista.classList.add('postListArea')

    title.innerText = "Posts"

    post.append(title, lista)

    for (let i = 0; i < array.length; i++) {
        for (let e = 0; e < users.length; e++) {
            if (users[e].id == array[i].user) {
                const item = document.createElement('li')
                const divPerfil = document.createElement('div')
                const imgPerfil = document.createElement('img')
                const divInfo = document.createElement('div')
                const name = document.createElement('h2')
                const stack = document.createElement('p')
                const divPost = document.createElement('div')
                const titlePost = document.createElement('h1')
                const text = document.createElement('p')
                const divButton = document.createElement('div')
                const button = document.createElement('button')
                const heart = document.createElement('i')
                const likeCount = document.createElement('span')

                lista.appendChild(item)
                item.append(divPerfil, divPost)
                divPerfil.append(imgPerfil, divInfo)
                divInfo.append(name, stack)
                divPost.append(titlePost, text, divButton)
                divButton.append(button, heart, likeCount)

                divPerfil.classList.add('container__perfil')
                divInfo.classList.add('container__perfil--info')
                name.classList.add('perfil__name')
                stack.classList.add('perfil__stack')
                divPost.classList.add('container__posted')
                divButton.classList.add('container__posted--buttons')
                button.classList.add('container__posted--button')
                heart.classList.add('fa-solid', 'fa-heart')

                imgPerfil.src = users[e].img
                imgPerfil.alt = "Foto de perfil"
                name.innerText = users[e].user
                stack.innerText = users[e].stack
                titlePost.innerText = array[i].title
                text.innerText = array[i].text
                button.innerText = "Abrir Post"
                button.dataset.id = array[i].id_post
                likeCount.innerText = Number(25)
                likeCount.dataset.likeCount = array[i].id_post
                heart.dataset.like = array[i].id_post

            }

        }
    }

}

function renderSite() {
    criarPerfilArea(users[1])
    criarAside(sugestUsers)
    criarPostArea(posts)
    seguir()
    like()
}

function renderModal() {
    const modal = document.querySelector('.modal__container')
    const buttons = document.querySelectorAll('.container__posted--button')

    for (let i = 0; i < buttons.length; i++) {
        const button = buttons[i]

        button.addEventListener('click', () => {
            const modalContent = createModal(button.dataset.id)

            modal.innerHTML = ''

            modal.appendChild(modalContent)

            modal.showModal()

            closeModal()

        })
    }
}

function createModal(id) {
    const modalContainer = document.createElement('div')
    const modalDivPerfil = document.createElement('div')
    const modalImg = document.createElement('img')
    const modalDivInfo = document.createElement('div')
    const modalName = document.createElement('h2')
    const modalStack = document.createElement('p')
    const modalTitle = document.createElement('h1')
    const modalText = document.createElement('p')
    const modalClose = document.createElement('p')
    let element = {}

    console.log(id);

    for (let i = 0; i < posts.length; i++) {
        if (posts[i].id_post == Number(id)) {
            element = posts[i]
        }
    }

    for (let e = 0; e < users.length; e++) {
        if (users[e].id == element.user) {

            modalImg.src = users[e].img
            modalImg.alt = "Foto de perfil"
            modalName.innerText = users[e].user
            modalStack.innerText = users[e].stack
            modalTitle.innerText = element.title
            modalText.innerText = element.text
            modalClose.innerText = 'X'

            modalDivPerfil.classList.add('container__perfil')
            modalDivInfo.classList.add('container__perfil--info')
            modalName.classList.add('perfil__name')
            modalStack.classList.add('perfil__stack')
            modalText.classList.add('modal__text')
            modalClose.classList.add('modal__close')


            modalContainer.append(modalDivPerfil, modalTitle, modalText, modalClose)
            modalDivPerfil.append(modalImg, modalDivInfo)
            modalDivInfo.append(modalName, modalStack)

            return modalContainer
        }
    }

}

function closeModal() {
    const modal = document.querySelector('.modal__container')
    const closeBtn = document.querySelector('.modal__close')

    closeBtn.addEventListener('click', () => {
        modal.close()
    })
}

function seguir() {
    const buttonToggle = document.querySelectorAll("[data-seguir]")

    for (let i = 0; i < buttonToggle.length; i++) {

        buttonToggle[i].addEventListener('click', () => {

            buttonToggle[i].classList.toggle('seguir')
            buttonToggle[i].classList.toggle('seguindo')

            if (buttonToggle[i].classList == "seguindo") {

                buttonToggle[i].innerText = "Seguindo"

            }
            else {

                buttonToggle[i].innerText = "Seguir"

            }

        })

    }
}

function like() {
    const heart = document.querySelectorAll("[data-like]")
    const likeCount = document.querySelectorAll('[data-like-count]')

    for (let i = 0; i < heart.length; i++) {

        heart[i].addEventListener('click', () => {

            heart[i].classList.toggle('like')

            for (let e = 0; e < likeCount.length; e++) {
                console.log(likeCount[e]);
                if (heart[i].classList == "fa-solid fa-heart like") {
                    likeCount[e].innerText = 26
                }
                else {
                    likeCount[e].innerText = 25
                }

            }
            console.log(likeCount);

        })
    }
}

renderSite()
renderModal()