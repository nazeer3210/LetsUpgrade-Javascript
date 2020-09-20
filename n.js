let array=[
    {
        name:"Ravi",
        age:20,
        city:"Hyderabad",
        salary:20000
    },
    {
        name:"Teja",
        age:21,
        city:"Kakinada",
        salary:30000
    },
    {
        name:"Kumar",
        age:19,
        city:"Mumbai",
        salary:40000
    },
    {
        name:"Nazeer",
        age:27,
        city:"pune",
        salary:45000
    },
    {
        name:"Mahesh",
        age:24,
        city:"Chennai",
        salary:50000
    },
];
function display(superarray){
let tabdata = "";
let num = 1;
array.forEach(function(arr){
    let row=`<tr>
    <td>${num}</td>
    <td>${arr.name}</td>
    <td>${arr.age}</td>
    <td>${arr.city}</td>
    <td>${arr.salary}</td>
    <td><button onclick='deletee()'>Delete</button></td>
    </tr>`;
    tabdata+=row;
    num++;
});
document.getElementsByClassName("tdata")[0].innerHTML=tabdata;
 // document.getElementById('td').innerHTML=tabdata;       
}
display();

function searchByName(){
let svalue=document.getElementById("search").value;

let nd = array.filter(function(arr)
{
    return arr.name.indexOf(svalue)!=-1;
});
console.log(nd);
}

function searchByCity(){
let s1value=document.getElementById("searchh").value;

let nnd = array.filter(function(arr)
{
    return arr.city.indexOf(s1value)!=-1;
});
console.log(nnd);
}

function deletee(index){
array.splice(index,1);
display(array);       
}