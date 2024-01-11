let data = [
    { name: "Jonas", age: 33 },
    { name: "Marte", age: 29 },
    { name: "Caesar", age: 13 }
];







function generateTable(data){
let table = "<table>";
table += "<tr>  <th>Name</th>   <th>Age</th>    </tr>";
data.forEach(item => {
table += `<tr>  <td> ${item.name}</td>  <td> ${item.age}</td>   </tr>`;
});
table += "</table>";
return table;
};




let tableCon = document.getElementById("tableCon");
tableCon.innerHTML = generateTable(data);