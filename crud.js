let data =[
    {id: 1, name:"Shema", email: "Shema@gmail.com"},
    {id: 2, name:"She", email: "She@gmail.com"},
];

function readAll(){
    var tabledata = document.querySelector(".table-data");
    var elements = '';
    data.map(obj => (
        elements += `
            <tr>
                <td>${obj.name}</td>
                <td>${obj.email}</td>
                <td>
                    <button onclick={edit(${obj.id})}>Update</button>
                    <button onclick={delet(${obj.id})}>Delete</button>
                </td>
            </tr> 
        `
    ))
    tabledata.innerHTML = elements;
}
function delet(id){
    data.filter(d => d.id !== id);
    readAll();
}
function update(){
   var name = document.querySelector(".uname").value ;
   var email = document.querySelector(".uemail").value;
   var id  =  parseInt(document.querySelector(".id").value);
   var index = data.findIndex(d => d.id === id);
   data[index] = {id , name , email};
   
   document.querySelector(".create-form").style.display = "block";
   document.querySelector(".update-form").style.display = "none";
   readAll();

}
function edit(id){
    document.querySelector(".create-form").style.display = "none";
    document.querySelector(".update-form").style.display = "block";
    var object  = data.find(d => d.id === id); 

    document.querySelector(".uname").value = object.name;
    document.querySelector(".uemail").value = object.email;
    document.querySelector(".id").value = object.id;
    readAll();

}
function create(){
    var name = document.querySelector(".name").value;
    var email = document.querySelector(".email").value;
    var obj = {id: 3, name:name, email:email};
    data.push(obj);
    readAll();
    document.querySelector(".name").value = "";
    document.querySelector(".email").value = "";
}