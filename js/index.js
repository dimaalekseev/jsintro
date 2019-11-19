document.querySelector('#load').addEventListener('click', load);
let poster=document.querySelector('.poster');

function load(){
    let url="http://www.omdbapi.com/?apikey=a0fcebb7&t=batman";
    fetch(url)
        .then(
            function(response){
                console.log(response)
                return response.json();
            }
        )

        .then(
            function(data){
                console.log(data)
                return data.Poster;
            }
        )

        .then((imgSrc)=>{
                console.log(imgSrc);
                let post_img=imgSrc;
                poster.innerHTML=`<img src="${post_img}" alt=" "`;
            }
        )
    }
        
        
