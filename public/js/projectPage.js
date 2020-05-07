function renderProjects() {

    let queryURL = "/api/project";

    $.get(queryURL, function (res) {
        const projects = res;
        console.log(projects);
        for (var i=0; i< projects.length; i++) {
            console.log("generating project divs");
            $("#projects").append(`<div id="card" class="p-2">
            <div class="card-body bg-light opacity">
                <h5 class="card-title">${i + 1} - ${projects[i].title}</h5>
                <h6 class="card-subtitle mb-2 text-muted"><a href="${projects[i].deployedLink}">Deployed Link</a></h6>
                <p class="card-text">${projects[i].description}</p>
                <p class="card-text"><img src="${projects[i].imageLink}"></p>
                <h6 class="card-subtitle mb-2 text-muted"><a href="${projects[i].repoLink}">Project Repository<a></h6>

            </div>


            </div>`);
        }
    })
}

renderProjects();