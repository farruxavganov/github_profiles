const form = document.querySelector('.farm');
const profile = document.querySelector(".profile");


const API = "https://api.github.com/users/";

form.addEventListener("submit",function (e) {
	const value = document.querySelector(".input").value;
	e.preventDefault();
	getUser(API,value);
})

getUser(API);
async function getUser(API,value="farruxavganov") {
	
	if(value){
		try{
			const request = await fetch(API + value);
			const response = await request.json();

			let html = render(response);

			profile.innerHTML = html;
		}catch (e) {
			console.log(e.message);
		}
	}
}

function render(response) {

	return `<div class="profile__img">
                  	<img src="${response.avatar_url}" alt="${response.login}" />
                </div>
                <div class="profile__infos">
                    <h2 class="profile__title">${response.name}</h2>
                    <h3 class="profile__job">${response.login}</h3>
                    
                    <p class="profile__disc">
                        ${response.bio? response.bio : "Tasnifi qo'yilmagan"}
                    </p>
                    
                   <ul class="profile__datas">
                       <li class="profile__data eye"><i class="fa-solid fa-eye"></i> <span>${response.followers}</span></li>
                       <li class="profile__data heart"><i class="fa-solid fa-heart"></i> <span>${response.following}</span></li>
                       <li class="profile__data message"><i class="fa-solid fa-message"></i> <span>${response.public_repos}</span></li>
                   </ul>
                </div>`;
}