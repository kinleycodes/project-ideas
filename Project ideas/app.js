let xhttp = new XMLHttpRequest();
let response;
xhttp.onreadystatechange = function(){
    if(xhttp.readyState == 4 && xhttp.status == 200){
        response = JSON.parse(xhttp.responseText);
    }
};
xhttp.open('GET', 'random.json', true);
xhttp.send();
const title = document.querySelector('.title');
const description = document.querySelector('.description');
const technology = document.querySelector('.technologies');
const btn = document.querySelector('.btn');
let index;
function random(){
    index = Math.floor(Math.random() * response.length);
}
btn.addEventListener('click', ()=>{
    random();
    title.innerHTML = response[index].title;
    description.innerHTML = response[index].description;
    technology.innerHTML = response[index].technology;
})