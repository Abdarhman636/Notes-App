
// const noteBox = document.querySelector('.note')

const addBTN = document.getElementById('add')


console.log(addBTN)

addBTN.addEventListener('click', () => {
     addNewNote()
})

function addNewNote() {
     console.log('test')
     const noteBox = document.createElement('div')
     noteBox.classList.add('note')

     noteBox.innerHTML = `      <div class="tools">
     <button class="edit"><i class="fas fa-edit"></i></button>
     <button class="delete"><i class="fas fa-trash-alt"></i></button>
</div>
<div class="main text"></div>
<textarea class="hidden"></textarea>

`
     const deleteBtn = noteBox.querySelector(".delete");
     const editBTN = noteBox.querySelector('.edit')
     const mainBox = noteBox.querySelector('.main')
     const textarea = noteBox.querySelector('textarea')

     editBTN.addEventListener('click', () => {
          mainBox.classList.toggle('hidden')
          textarea.classList.toggle('hidden')
     })

     deleteBtn.addEventListener("click", () => {
          noteBox.remove();
     });

     textarea.addEventListener('input', (e) => {
          const { value } = e.target
          mainBox.innerHTML = marked(value);
     })


     document.body.appendChild(noteBox)
}