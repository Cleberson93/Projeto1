const inputNovaTarefa = document.querySelector('.inputNovaTarefa')
const btnAdd = document.querySelector('.btnAdd')
const listaTarefa = document.querySelector('.listaTarefa')

btnAdd.addEventListener('click', addtodo)
listaTarefa.addEventListener('click', deletecheck)   

function addtodo(event) {
    event.preventDefault()
    if (inputNovaTarefa.value.trim() === '') {
        alert ('Digite uma tarefa!')
        return
    }

    const toLi = document.createElement('li')
    const check = document.createElement ('input')
    check.type = 'checkbox'
    check.classList.add('checkB')
    toLi.appendChild(check)

    toLi.classList.add('listaTarefa')
    check.insertAdjacentHTML('afterend', inputNovaTarefa.value)
    inputNovaTarefa.value = '' 


    const trashButton = document.createElement('button')
    trashButton.innerHTML = '<i class= "fa fa-trash"></i>'
    trashButton.classList.add('trash-btn')
    toLi.appendChild(trashButton)

    listaTarefa.appendChild(toLi)

}
function deletecheck (e) {
        
        const item = e.target

        if(item.classList[0] === 'trash-btn') {
            if (confirm('Deseja Remover esta tarefa?')){
                const todo = item.parentElement
                todo.remove()
            }
        }
    
        if(item.classList[0] === 'checkB') {
        const todo = item.parentElement
        todo.classList.toggle('completed')
    }
}

