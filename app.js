function Employee(ID,Name,Department,Level,Image){
    this.id = ID;
    this.name = Name;
    this.department = Department;
    this.level = Level;
    this.img = Image;
    this.salary =0;
    this.netsalary = 0;
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
Employee.prototype.calaculatesalary = function(){
    const salary = {
        "Junior" :    { min: 30000, max: 50000 },
        "Mid-Senior" : { min: 50000, max: 80000 },
        "Senior" : { min: 80000, max: 120000 }
    };
    const salaryRange = salary [this.level] ;
    this.salary = Math.floor(Math.random() * (salaryRange.max - salaryRange.min + 1)) + salaryRange.min;
}
Employee.prototype.calaculatenetsalary = function(){
    let percent = 7.5;
     this.netsalary = Math.floor(this.salary - ((this.salary * percent) / 100));   
 }
 Employee.prototype.render = function(){
     let main = document.querySelector(".main")
     let div = document.createElement("div")
     let p = document.createElement("p");
     let sal = document.createElement("p")
     let pp= document.createElement("span");
     let pa = document.createElement("div")
     
    p.innerHTML += this.id
     p.innerHTML += `-${this.name}`;
     pp.innerHTML = `${this.department} - ${this.level}`
     p.style.fontSize = "20px";
     p.style.fontWeight ="bold"
     pp.style.fontSize = "20px";
     pp.style.fontWeight ="bold"
     sal.innerHTML =` salary: ${this.salary}    \b   netSalaty:  ${this.netsalary}     `
     sal.style.paddingTop ="10px";
     sal.style.fontWeight ="bold"
     sal.style.color="#fff"
     sal.style.fontSize = "19px"; 
     div.classList.add("empname");
     pa.append(p)
     pa.append(pp)
     pa.style.display = "flex"
     pa.style.justifyContent = "space-between"
    div.append(pa)
    
     div.append(sal)    
     div.style.padding= "10px";
     div.style.marginTop= "10px";
     div.style.backgroundColor = "#00aa88";
     main.appendChild(div)
     console.log(div) 

}
employees.forEach((e)=>{
   console.log(e.calaculatesalary())
   console.log(e.calaculatenetsalary())
})

employees.forEach((e)=>{
 e.render()
 })

