
'use strict';
  function Employee(ID,Name,Department,Level,Image){
    this.id = ID;
    this.name = Name;
    this.department = Department;
    this.level = Level;
    this.img = Image;
    this.salary =calaculatesalary(this.level);
    this.netsalary =calaculatenetsalary(this.salary);
    
  }
  function calaculatesalary(level){  
    let salaryRange = {};
   if(level =="Junior"){
     salaryRange["min"] = 30000;
     salaryRange["max"] = 50000;
   } else if(level == "Mid-Senior"){
     salaryRange["min"] = 50000;
     salaryRange["max"] = 80000;
   }else if(level =="Senior") {
     salaryRange["min"] = 80000;
     salaryRange["max"] = 120000;
   }
   let salary = Math.floor(Math.random() * (salaryRange.max - salaryRange.min + 1)) + salaryRange.min;
   return salary
}
function calaculatenetsalary(salary){

   let percent = 7.5;
   let netsalary = Math.floor(salary - ((salary * percent) / 100));
   return netsalary   
}
function render(emp){
  var hr = document.createElement("span");
        hr.classList.add("hr")
        let sec=document.querySelector(`.${emp.department}`)
        let imageName = (emp.name).split(" ")[0];
      sec.innerHTML += `<div class="box" style="width: 300px; height: 400px;  border-radius: 5px; border: 1px solid #444; background-color: #00aa88; text-align: center; padding: 20px; color: #fff; "> 
      <div class="img" style="background-size: cover; text-align: center;">
      <img src="image/${imageName}.jpg" alt="" style="background-size: cover;width: 200px; height: 200px;" >
      </div>   
      <p style="color: #fff; margin-bottom: 10px; margin-top: 10px; ">Name: ${emp.name}- <span>Id: ${emp.id}</span></p>        
      <p style = "padding: 10px; margin-top:4px;margin-bottom:3px">department: ${emp.department} - <span>${emp.level}</span></p>
      <p>salary: ${emp.salary} </p>
      <span>net salary ${emp.netsalary}</span>
      </div>`
      if(!(sec.classList.contains("Finance"))){
        sec.appendChild(hr);
      }
      
  
    }


function uniqueId(){
   return Math.floor(Math.random() * (1099 - 1000 +1) + 1000 );
  }  
  let employees=[
    new Employee(1000,"Ghazi Samer","Administration","Senior","https://as1.ftcdn.net/v2/jpg/02/43/12/34/1000_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg"),
    new Employee(1001,"Lana Ali","Finance","Senior","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSQKaS7LP80SEcKgz9-d_ORjkh1B9hPSUqkeI_mLSnDg&s"),
    new Employee(1002,"Tamara Ayoub","Marketing","Senior","https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?w=996&t=st=1711632238~exp=1711632838~hmac=fa2fd6fa508aa262860545d89e34d394eacbf5fe04f8b3003c031723f6ce2032"),
    new Employee(1003,"Safi Walid","Administration","Mid-Senior","https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?w=996&t=st=1711632238~exp=1711632838~hmac=fa2fd6fa508aa262860545d89e34d394eacbf5fe04f8b3003c031723f6ce2032"),
    new Employee(1004,"Omar Zaid","Development","Senior","https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?w=996&t=st=1711632238~exp=1711632838~hmac=fa2fd6fa508aa262860545d89e34d394eacbf5fe04f8b3003c031723f6ce2032"),
    new Employee(1005,"Rana Saleh","Development","Junior","https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?w=996&t=st=1711632238~exp=1711632838~hmac=fa2fd6fa508aa262860545d89e34d394eacbf5fe04f8b3003c031723f6ce2032"),
    new Employee(1006,"Hadi Ahmad","Finance","Mid-Senior","https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?w=996&t=st=1711632238~exp=1711632838~hmac=fa2fd6fa508aa262860545d89e34d394eacbf5fe04f8b3003c031723f6ce2032"),
    ];
  

    document.querySelector("form").addEventListener("submit",(event)=>{
      event.preventDefault();
    let name = event.target.names.value;
    let department = event.target.Department.value;
    let level = event.target.level.value;
    let img = event.target.image.value
    if(!(name == "" ||department == "Enter your Department" || level =="Enter your level" || img == "")){
     var emp = new Employee((uniqueId()),name,department,level,img); 
     employees.push(emp)
     renderemp()
    
     

    
    let jsonemp = JSON.stringify(employees)
    localStorage.setItem("Employees",jsonemp);
  
    
   
  }else{
    alert("Enter correct information");
  }
});
 
  function getemp(){
    if(localStorage.getItem("Employees")== null){
      employees = employees
    }else{
    employees = JSON.parse(localStorage.getItem("Employees"));
    console.log(employees)
    }
    
 }
  function renderemp(){

       document.querySelector(".Administration").innerHTML =''
   document.querySelector(".Marketing").innerHTML =''
   document.querySelector(".Development").innerHTML =''
   document.querySelector(".Finance").innerHTML =''
    employees.forEach((emp)=>{
     render(emp)
  })
}
 getemp()
 renderemp()

    getemp();
    render();
    // localStorage.clear();
