// $.get("/breeds/getBreeds", (data) => console.log(data))
// )


// $.get('/breeds/getBreeds',(data) =>{
//     console.log(data)
// })
// $.get('/breeds/create-Breed',(data) =>{
//     console.log(data)
// })
// const form = document.querySelector('#dogForm')
// document.addEventListener("keyup", resetGame);
dogForm.addEventListener('submit', creator)
// startBtn.addEventListener("click", startButton);
// function startButton() {
//     alert('hello')
// }
// fetch('http://localhost:3005/breeds/read')
//     .then(res => res.json())
//     .then(data => console.log(data))
// $.get('/breeds/create',(data)=>console.log(data))
$('h1').append('Wordy')
// fetch('http://localhost:3005/breeds/create-breed')
//     .then(res => res.json)
//     .the(data => console.log(data))\
function creator(e) {
    e.preventDefault()
    const form=e.target
    const payLoad = {
        originated: e.target.origin.value,
        picture: e.target.pic.value,
        name: e.target.name.value,
        info:e.target.info.value
    }
    $.post('/breeds/create',payLoad,(data)=>console.log(data))
    form.reset()
    // fetch('http://localhost:3005/breeds/create')
    // .then(res => res)
    // .then(data => console.log(data))
    // console.log(payLoad)
}