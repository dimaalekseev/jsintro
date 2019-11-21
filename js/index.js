document.querySelector('#load').addEventListener('click', load);
let poster=document.querySelector('.poster');
let input=document.querySelector('input');
let text=input.value;

function load(){
    text=input.value;
    let url=`http://www.omdbapi.com/?apikey=a0fcebb7&t=${text}`;
    fetch(url)
        .then(
            function(response){
                console.log(response)
                return response.json();
            }
        )

        .then(
            function(data){
                console.log(data);
                //poster.innerHTML = `<img src='${data.Poster}' alt="">`
                poster.innerHTML='';
                img=document.createElement('img');
                img.setAttribute('src', data.Poster);
                img.setAttribute('alt', ' ');
                poster.insertAdjacentElement('afterbegin',img);

                let name=document.createElement('h1');
                name.textContent=data.Title;
                poster.insertAdjacentElement('afterbegin',name);
                
            }
        )
    }
        
        
