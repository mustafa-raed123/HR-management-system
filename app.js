function Employee(ID,Name,Department,Level,Image){
    this.id = ID;
    this.name = Name;
    this.department = Department;
    this.level = Level;
    this.img = Image;
    this.salary =0;
    this.netsalary = 0;
} 
Employee.prototype.calaculatesalary = function(){
    const salary = {
        "Junior" :     { min: 30000, max: 50000 },
        "Mid-Senior" : { min: 50000, max: 80000 },
        "Senior" :     { min: 80000, max: 120000 }
    };
    const salaryRange = salary[this.level] ;
    this.salary = Math.floor(Math.random() * (salaryRange.max - salaryRange.min + 1)) + salaryRange.min;
}
Employee.prototype.calaculatenetsalary = function(){
    let percent = 7.5;
    this.netsalary = Math.floor(this.salary - ((this.salary * percent) / 100));   
 }
 function uniqueId(count){
    return 1000 + count;
   }  
   let employees = [];
   let count = 0;
   document.querySelector("form").addEventListener("submit",(event)=>{
    event.preventDefault();
  

  let name = event.target.names.value;
  
  let department = event.target.Department.value;

  let level = event.target.level.value;
  let img = event.target.image.value
  console.log(name , department , level , img)

console.log(employees[0])

  if(!(name == "" ||department == "Enter your Department" || level =="Enter your level" || img == "")){
   employees.push(new Employee(parseInt(uniqueId(count  + 1 )),name,department,level,img));  
   console.log(employees)
   employees[count].calaculatesalary();
   employees[count].calaculatenetsalary();
   employees[count].render();
   count++;
    



   
  }else{
    alert("Enter correct information");
  }
    

})



Employee.prototype.render= function() {
    let sec=document.querySelector(`.${this.department}`)
    console.log(sec)
    sec.innerHTML += `<div class="box" style="width: 300px; height: 400px;  border-radius: 5px; border: 1px solid #444; background-color: #00aa88; text-align: center; padding: 20px; color: #fff; "> 
    <div class="img" style="background-size: cover; text-align: center;">
    <img src="image/${this.img}.jpg" alt="" style="background-size: cover;width: 200px; height: 200px;">
    </div>   
    <p style="color: #fff; margin-bottom: 10px; margin-top: 10px; ">Name: ${this.name}- <span>Id: ${this.id}</span></p>        
    <p>department: ${this.department} - <span>${this.level}</span></p>
    <p>salary: ${this.salary} </p>
     <span>net salary ${this.netsalary}</span>
    </div>`

    document.querySelector("main form #name").value = "";
    document.querySelector("main form #image").value = "";
       document.querySelector("#select_debartment").value =["Enter your Department"];
       document.querySelector("#select_level").value =["Enter your level"];

    }