const bup = { something: 'yee'}

fetch('http://quotes.rest/qod.json',{
    method: 'POST',
    headers:{
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(bup),
})
.then((response) => response.json())
.then((bup) => {
  console.log('Success:', bup);
});