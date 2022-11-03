let inputName = document.querySelector(".inputName");
let inputPost = document.querySelector(".inputPost");
let btn = document.querySelector(".postbtn");
let ul = document.querySelector("ul");
let save=document.querySelector(".save");
let error = document.querySelector(".error");
let arr = []

btn.addEventListener("click", function(){
  error.innerHTML = "";
    if(inputName.value != "" && inputPost.value != ""){
        
        if(!(inputName.value-99999999999)){
          arr.push({name:inputName.value, priority:inputPost.value})
          addTodo();
          inputName.value = "";
          inputPost.value = "";
        }else{
          error.innerHTML = "You Entered a Number!";
        }
    }
    else{
      error.innerHTML = "Empty Value";
    }
});

function addTodo(){
    ul.innerHTML = "";
    arr.map((item, index)=>{
        ul.innerHTML += `
        <div class="box">
        <div class="title">
          <img src="images/profile.png" alt="" />
          <p class="userName">${arr[index].name}</p>
          <input type="text" style="display: none" class="editName" value="${arr[index].name}" />
          <div class="options">
            <div class="dot"></div>
            <div class="dot"></div>
            <div class="dot"></div>
          </div>
        </div>
        <div class="textBox">
          <div class="text">${arr[index].priority}</div>
          <input type="text" style="display: none" class="editText" value="${arr[index].priority}" />
        </div>
        <div class="btn">
          <button class="delete hidebtn1">Delete</button>
          <button class="edit">Edit</button>
          <button class="share hidebtn2">Share</button>
        </div>
      </div>`;

    });
    // for remove
    let remove = document.querySelectorAll(".delete");
    let removearr = Array.from(remove);
    removearr.map((button, index)=>{
        button.addEventListener("click", function(){
            console.log("Successfully deleted")
            arr.splice(index, 1);
            addTodo();
        });
    });
    // for edit
    let editBtn = document.querySelectorAll(".edit");
    let editBtnarr= Array.from(editBtn);
    editBtnarr.map((button, index)=>{
        button.addEventListener("click", ()=>{
            editF(ul,index)
        });
    });

    // for share
    let share = document.querySelectorAll(".share");
    let shareAr = Array.from(share)
    shareAr.map((button, index)=>{
        button.addEventListener("click", ()=>{
            sharePost(index);
        });
    })
}

function editF(ul,index){
    let updateInput = document.querySelectorAll(".edit")
    let updateInputarr= Array.from(updateInput);

    let editName=document.querySelectorAll(".editName");
    let editNameAr= Array.from(editName)

    let userName = document.querySelectorAll(".userName")
    let userNameAr= Array.from(userName)

    let editText = document.querySelectorAll(".editText");
    let editTextAr = Array.from(editText)

    let text = document.querySelectorAll(".text");
    let textAr = Array.from(text)

    let hidebtn1 = document.querySelectorAll(".hidebtn1");
    let hidebtnAr1 = Array.from(hidebtn1)

    let hidebtn2 = document.querySelectorAll(".hidebtn2");
    let hidebtnAr2 = Array.from(hidebtn2)

    let toggle= updateInputarr[index].classList.toggle("mylist");
    if(toggle){
        editNameAr[index].style.display= "inline-block";
        userNameAr[index].style.display= "none";
        editTextAr[index].style.display= "inline-block";
        textAr[index].style.display= "none";
        updateInputarr[index].innerHTML= "Save";
        hidebtnAr1[index].style.display= "none";
        hidebtnAr2[index].style.display= "none";
    }
    else{
        editNameAr[index].style.display= "none";
        userNameAr[index].style.display= "inline-block";
        updateInputarr[index].innerHTML= "Edit";
        editTextAr[index].style.display= "none";
        textAr[index].style.display= "inline-block";
        hidebtnAr1[index].style.display= "inline-block";
        hidebtnAr2[index].style.display= "inline-block";
        console.log(arr)

     if(editNameAr[index].value != "" && editTextAr[index].value != ""){
        arr[index].name= editNameAr[index].value;
        arr[index].priority=editTextAr[index].value;
     addTodo();
    }
}
}

function sharePost(index){
        arr.push({name:arr[index].name, priority:arr[index].priority})
        addTodo();
}