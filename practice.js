let addbtn=document.getElementById('btn');
shownotes();
addbtn.addEventListener("click",function(){
    let addtxt=document.getElementById('addtxt');
    let addtitle=document.getElementById('addtitle');
    let notes=localStorage.getItem("notes");
    if(notes==null){
     notesobj=[];
    }
    else{
    notesobj=JSON.parse(notes);
    }
    let myobj={
        title:addtitle.value,
        text:addtxt.value
    };
    notesobj.push(myobj);
    localStorage.setItem("notes",JSON.stringify(notesobj));
    addtxt.value="";
    addtitle.value="";
    shownotes();
});
function shownotes(){
    let notes=localStorage.getItem("notes");
    if(notes==null){
        notesobj=[];
    }
    else{
        notesobj=JSON.parse(notes);
    }
    let html="";
    notesobj.forEach(function(element,index){
        html=html+`
        <div class="notecard mx-2 my-2 card" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title"> ${element.title}</h5>
          <p class="card-text">${element.text}</p>
          <button id=${index} onclick="deletenote(this.id)"class="btn btn-primary">Delete Note</button>
        </div>

        </div>
        `
    })
    let notesele=document.getElementById("notes");
    if(notesobj.length != 0){
        notesele.innerHTML=html;
    }
    else{
        notesele.innerHTML='The list is empty please add the task ......';
    }
}
function deletenote(index){
       
       let notes=localStorage.getItem("notes");
    
        if(notes==null){
           notesobj=[];
        }
       else{
           notesobj=JSON.parse(notes);
        }
        notesobj.splice(index,1);
        localStorage.setItem("notes",JSON.stringify(notesobj));
        shownotes();
}
let search=document.getElementById("searchtxt");
search.addEventListener("input",function(){
    let inputval=search.value.toLowerCase();
 // console.log("Input event is fired "+inputval);
  let notecard=document.getElementsByClassName('notecard');
  Array.from(notecard).forEach(function(element){
    let cardtxt=element.getElementsByTagName("p")[0].innerText.toLowerCase();
    
    if(cardtxt.includes(inputval)){
        element.style.display="block";
    }
    else{
        element.style.display="none";
    }
  })
});