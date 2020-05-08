function renderProjects() {

    let queryURL = "/api/project";

    $.get(queryURL, function (res) {
        const projects = res;
        console.log(projects);
        for (var i=0; i< projects.length; i++) {
            console.log("generating project divs");
            $("#projects").append(`<div id="card" class="p-2">
            <div class="card-body bg-light opacity">
                <h4 class="card-title">${i + 1} - ${projects[i].title}</h4>
                <h6 class="card-subtitle mb-2 text-muted"><a href="${projects[i].deployedLink}">Deployed Link</a></h6>
                <p class="card-text">${projects[i].description}</p>
                <p><h6 id="toolsUsed${projects[i].id}">Tools Used: </h6>
                <p class="card-text"><img src="${projects[i].imageLink}" style="max-height: 400px; max-width: 500px;"></p>
                <h6 class="card-subtitle mb-2 text-muted"><a href="${projects[i].repoLink}">Project Repository<a></h6>

            </div>


            </div>`);
        }
    }).then(function(){
        let queryURL2 = "/api/projecttool";
        $.get(queryURL2, function(res) {
            console.log(res);
            for(var i=0; i<res.length; i++){
                let projectId = res[i].ProjectId;
                let pId = "#toolsUsed" + projectId;
                console.log(pId);
                console.log(res[i].name);
                $(pId).append(res[i].name + "\n");
            }
        })
    })
}

renderProjects();