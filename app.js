
'use strict';
let employees = [];
function Employee(ID,Name,Department,Level,Image){
    this.id = ID;
    this.name = Name;
    this.department = Department;
    this.level = Level;
    this.img = Image;
    this.salary =0;
    this.netsalary = 0;
    employees.push(this);
} 
Employee.prototype.calaculatesalary = function(){  
     let salaryRange = {};
    if(this.level =="Junior"){
      salaryRange["min"] = 30000;
      salaryRange["max"] = 50000;
    } else if(this.level == "Mid-Senior"){
      salaryRange["min"] = 50000;
      salaryRange["max"] = 80000;
    }else if(this.level =="Senior") {
      salaryRange["min"] = 80000;
      salaryRange["max"] = 120000;
    }
    this.salary = Math.floor(Math.random() * (salaryRange.max - salaryRange.min + 1)) + salaryRange.min;
}
Employee.prototype.calaculatenetsalary = function(){
  console.log(this.salary)
    let percent = 7.5;
    this.netsalary = Math.floor(this.salary - ((this.salary * percent) / 100));   
 }

 
 function uniqueId(){
    return Math.floor(Math.random() * (1099 - 1000 +1) + 1000 );
   }  
   
//  localStorage.clear()
   document.querySelector("form").addEventListener("submit",(event)=>{
    event.preventDefault();
  let name = event.target.names.value;
  let department = event.target.Department.value;
  let level = event.target.level.value;
  let img = event.target.image.value
  if(!(name == "" ||department == "Enter your Department" || level =="Enter your level" || img == "")){
   var emp = new Employee((uniqueId()),name,department,level,img); 
   emp.calaculatesalary();
   emp.calaculatenetsalary();
   let jsonemp = JSON.stringify(employees)
   localStorage.setItem("Employees",jsonemp);
  render();
}else{
  alert("Enter correct information");
}
});
function getemp(){
   employees = JSON.parse(localStorage.getItem("Employees"));
}
function render() {
   
  
   document.querySelector(".Administration").innerHTML =''
   document.querySelector(".Marketing").innerHTML =''
   document.querySelector(".Development").innerHTML =''
   document.querySelector(".Finance").innerHTML =''
    getemp();
    if(employees == null){
      employees = [];
    }
    for(let i =0 ;i < employees.length ;i++ ){
      var hr = document.createElement("span");
      hr.classList.add("hr")
      let sec=document.querySelector(`.${employees[i].department}`)
      let imageName = (employees[i].name).split(" ")[0];
    sec.innerHTML += `<div class="box" style="width: 300px; height: 400px;  border-radius: 5px; border: 1px solid #444; background-color: #00aa88; text-align: center; padding: 20px; color: #fff; "> 
    <div class="img" style="background-size: cover; text-align: center;">
    <img src="image/${imageName}.jpg" alt="" style="background-size: cover;width: 200px; height: 200px;" >
    </div>   
    <p style="color: #fff; margin-bottom: 10px; margin-top: 10px; ">Name: ${employees[i].name}- <span>Id: ${employees[i].id}</span></p>        
    <p style = "padding: 10px; margin-top:4px;margin-bottom:3px">department: ${employees[i].department} - <span>${employees[i].level}</span></p>
    <p>salary: ${employees[i].salary} </p>
    <span>net salary ${employees[i].netsalary}</span>
    </div>`
    if(!(sec.classList.contains("Finance"))){
      sec.appendChild(hr);
    }
    
    document.querySelector("main form #name").value = "";
    document.querySelector("main form #image").value = "";
    document.querySelector("#select_debartment").value =["Enter your Department"];
    document.querySelector("#select_level").value =["Enter your level"]; 
  }
    }
    getemp();
    render();
  
