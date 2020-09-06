console.log("We Are Fetching Api")

async function getApi () {
    const api =  await fetch('https://jsonplaceholder.typicode.com/todos/1') //it will return a promise  
    console.log(api)
    const jsonForm = await api.json()
    console.log(jsonForm)
}

getApi()

function postAPIDATA(){
const api =fetch('https://jsonplaceholder.typicode.com/posts/1', {
    method: 'PUT',
    body: JSON.stringify({
      title: 'post this',
      body: 'hello world ',
      userId: 121
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
  })
  .then(response => response.json())
  .then(json => console.log(json))
}

postAPIDATA();

// const api =  fetch('https://jsonplaceholder.typicode.com/todos/1').then(
//     response => response.json())
//     .then(json => console.log(json))
    // return api)
// .then(function() {
//     console.log(api)
// })