function addStudent() {
    let rollNo = document.getElementById("rollNo").value;
    let studentName = document.getElementById("studentName").value;
    let studentClass = document.getElementById("studentClass").value;
    let section = document.getElementById("section").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;

    if (rollNo === "" || studentName === "" || studentClass === "" || section === "" || email === "" || phone === "") {
        alert("Please fill all fields");
        return false;
    }

    let table = document.getElementById("studentTableBody");
    let row = table.insertRow();

    row.insertCell(0).innerHTML = rollNo;
    row.insertCell(1).innerHTML = studentName;
    row.insertCell(2).innerHTML = studentClass;
    row.insertCell(3).innerHTML = section;
    row.insertCell(4).innerHTML = email;
    row.insertCell(5).innerHTML = phone;
    return false;
}


document.getElementById("studentForm").onsubmit = addStudent;