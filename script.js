let employees=[]
function addEmpolyee() {
    let name = document.getElementById("name").value;
    let id = document.getElementById("roll").value;
    let course = document.getElementById("course").value;

    employees.push({name, id, course});

    document.getElementById("list").innerHTML +=
        "<li>" + name + " - " + id + " - " + course+ "</li>";
        alert("ADDED SUCCESSFULLY")
}

function searchEmpolyee() {
    let id = document.getElementById("roll").value;
    let e = employees.find(x => x.id === id);

    alert(e ? e.name + "-" +e.course: "Employee Not Found");
}
