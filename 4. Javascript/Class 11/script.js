console.log("Test")
$(document).ready(function() {
    let g7 = {
        trainer: "Panche Manaskov",
        assistent: "Aleksandar Milovski",
        students: [
            "Jonas SNK",
            "Marte KSN",
            "Lucas SN",
            "Silke SN",
            "Gitte SN",
            "Alex BC"
        ],
        academy: "Web Development",
        subject: "Javascript Basic",
    }
    console.log(g7);

    // Json.stringify converts JS Objects to JSON object (string)
    let jsonObject = JSON.stringify(g7);
    console.log(jsonObject)

    // JSON.parse converts JSON object to JS object
    let backToJs = JSON.parse(jsonObject);
    console.log(backToJs)

    // AJAX Call
    
    let button01 = $("#btn");
    button01.click(function() {
        $.ajax({
            url: "https://jsonplaceholder.typicode.com/users",
            success: function(users){
                console.log("Success")
                console.log(users);

                for(let user of users) {
                    $("#userList").append(`<li>${user.name} - ${user.phone}</li>`)
                }

                showUsers(users);

            },
            error: function() {
                console.log("An error has occured")
            }
        
        
        })

    })
    function showUsers(usersList) {
        for(let user of usersList) {
            $("#userList").append(`<li>${user.name}</li>`)
        }
    }





    // Fetch

let fetchBtn = $("#btnFetch");

    fetchBtn.click(function(){
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(function(response){
            console.log(response);
            return response.json();
            // let parsed = JSON.parse(response);
            // return parsed


            })
            .then(function(parsedResult) {
            console.log(parsedResult)
            showUsersFetch(parsedResult)
            
            })
            .catch(function(error) {
            console.log("error", error)
            })

    })
    function showUsersFetch(usersList) {
        for(let user of usersList) {
            $("#userListFetch").append(`<li>${user.name}</li>`)
        }
    }

    // Get Post - AJAX
    
    let postButton = $("#postBtn");
    let postDiv = $("#postDiv");

    function getPost(id) {
        $.ajax({
            url: `https://jsonplaceholder.typicode.com/posts/${id}`,
            success: function(resultPost) {
                console.log(resultPost)

                postDiv.append(`<h3>${resultPost.title}</h3>`)
                postDiv.append(`<p>${resultPost.body}</p>`)
                
            },
            error: function(error) {
                console.log(error)
            }
        })
    }

    postButton.click(function() {
        getPost(2);
    })

})



