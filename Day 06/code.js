function addUser(){
    fetch('https://jsonplaceholder.typicode.com/users')
        .then((response) => response.json())
        .then((json) => createTable(json)) 
}
function createTable(arr){
    for(var i=0; i<arr.length; i++){
        var newRow = document.createElement("tr");
        var cell1 = document.createElement("td");
        var cell2 = document.createElement("td");

        cell1.innerHTML=arr[i].name;
        cell2.innerHTML=arr[i].email;

        newRow.append(cell1,cell2);
        myTable.append(newRow);
    }
}
function addNewUser() {
    
    var newRow = document.createElement("tr");
    var cell1 = document.createElement("td");
    var cell2 = document.createElement("td");

    if(isValidUsername(userName.value) && isValidEmail(email.value)){
        cell1.innerHTML=userName.value;
        cell2.innerHTML=email.value;
        newRow.append(cell1,cell2);
        myTable.append(newRow);
    }
    else if(!(isValidUsername(userName.value)) &&!(isValidEmail(email.value)) ){
       alert("Both username and email are invalid")
    }
    else if(!(isValidUsername(userName.value))){
        alert("Invalid username format! Please enter valid name.");
    }else if(!(isValidEmail(email.value))){
        alert("Invalid email address!");
    } 
    
}

function isValidUsername(username) {
    // Username must be at least 4 characters long and no more than 20 characters long
    const lengthRegex = /^.{4,20}$/;
    if (!lengthRegex.test(username)) {
      return false;
    }
  
    // Username can only contain letters, numbers, underscores, and hyphens
    const characterRegex = /^[a-zA-Z0-9-_]+$/;
    if (!characterRegex.test(username)) {
      return false;
    }
  
    // Username cannot start with a hyphen or a number
    const startRegex = /^[^-0-9]/;
    if (!startRegex.test(username)) {
      return false;
    }
  
  
    return true;
  }

function isValidEmail(email) {
    const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,})+$/;
    return emailRegex.test(email);
  }

  // change image
  function changeImage() {
    const img = document.getElementById("myImage");
    if (img.src.includes("https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80")) {
      img.src = "https://www.imgonline.com.ua/examples/bee-on-daisy.jpg";
    } else {
      img.src = "https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80";
    }
  }


  // change style
  function changeStyle() {
    if (myDiv.style.backgroundColor === "blue") {
      myDiv.style.backgroundColor = "red";
      myDiv.style.width = "300px";
      myDiv.style.height = "300px";
    } else {
      myDiv.style.backgroundColor = "blue";
      myDiv.style.width = "200px";
      myDiv.style.height = "200px";
    }
  }