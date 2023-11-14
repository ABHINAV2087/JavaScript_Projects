let input = document.querySelector('.search')
const submitBtn = document.querySelector('.search-button')
const div = document.createElement('div')
const ul = document.createElement('ul')
const main = document.querySelector('#main')


submitBtn.addEventListener('click', function (e) {
    // Prevent the default form submission behavior
    const username = input.value;
     if(username != ""){
        const requestUrl = `https://api.github.com/users/${username}`;
    const xhr = new XMLHttpRequest();
    xhr.open('GET', requestUrl);


    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                const data = JSON.parse(this.responseText);
                const reposUrl = data.repos_url;

                // Make a request to the repositories URL
                const reposXhr = new XMLHttpRequest();
                reposXhr.open('GET', reposUrl);

                 reposXhr.onreadystatechange = function () {
                    if (reposXhr.readyState === 4 && reposXhr.status === 200) {
                        const reposData = JSON.parse(reposXhr.responseText);
                        console.log(reposData); // This is the list of repositories

                        main.appendChild(div)
                       
                        div.innerHTML = 
                        `<div class="card">
                        <div id="left">
                            <img src="${data.avatar_url}" alt="">
                            <a href="${data.html_url}" target="_blank">visit profile <i class="fa-solid fa-arrow-up-right-from-square"></i></a>
                        </div>
                        <div id="right">
                            <div id="name">
                                <h1>${data.name}</h1>
                            </div>
                            <div id="boxes-1">
                                <div class="box1">
                                    <h3>repo count </h3>
                                    <h2>${data.public_repos}</h2>
                                </div>
                                <div class="box1">
                                    <h3>Followers</h3>
                                    <h2>${data.followers}</h2>
                                </div>
                                <div class="box1">
                                    <h3>following</h3>
                                    <h2>${data.following}</h2>
                                </div>
                            </div>
                            
                            <div id="repos">
                                <div id="repo-left"><h4>repositories</h4></div>
                                <div id="repo-right">
                                    
                                </div>
                                
                            </div>
                        </div>
                        </div>  `
                        let repoRight = document.querySelector('#repo-right')

                        let repoInfo = [];                        
                        for (let repo of reposData) {
                            
                            let name = repo.name;
                            let htmlUrl = repo.html_url;
                            
                           
                            let repoData = {
                                name: name,
                                html_url: htmlUrl
                            };
                            repoInfo.push(repoData);
                        }
                        console.log(repoInfo);
                        
                        for (const repository of repoInfo) {
                            const name1 = repository.name;
                            const htmlUrl2 = repository.html_url;
                            
                        }
                        let tableclutter =""; 

                        repoInfo.forEach(element => {
                            console.log(element.name);
                            console.log(element.html_url);
                            tableclutter += `<li><a href="${element.html_url}" target="_blank"
                            >${element.name}</a></li>`
                        });
                        repoRight.appendChild(ul)
                        ul.innerHTML = tableclutter

                        
                    }
                };
                

                reposXhr.send();
            } 
        }
    };

    xhr.send();

     }
})
