let employees = JSON.parse(localStorage.getItem("Employees")) || [];
console.log(employees)
let obj = [
    {department : "Administration" ,num : 0, tsalary : 0 ,vsalary : 0  },
    {department : "Marketing" ,num : 0, tsalary : 0 ,vsalary : 0  },
    {department : "Development" ,num : 0, tsalary : 0 ,vsalary : 0  },
    {department : "Finance" ,num : 0, tsalary : 0 ,vsalary : 0  },
]

employees.forEach(ele =>{
    
    obj.forEach(num =>{
        ele.department == num.department ? (num.num += 1 , num.tsalary += parseInt(ele.salary) ) :obj.num ;
    })

})
console.log(obj)


function render(){
    let table = document.querySelector(".addDepartment");
    let footer = document.querySelector(".footer")
    
    footer.innerHTML =''
    table.innerHTML =''
    let totalEmployees = 0; 
    let totalAvg =  0;
    let totalsalary = 0;
    obj.forEach((ele)=>{
        totalEmployees +=  ele.num;
        totalsalary +=  ele.tsalary;
        totalAvg =parseInt(totalsalary / totalEmployees);
       
        let avgsalary= parseInt(ele.tsalary /  ele.num);
        table.innerHTML +=`   <tr>
        <th>${ele.department}</th>
        <td>${ele.num}</td>
        <td>${ele.tsalary}</td>
        <td>${avgsalary || 0}</td>
    </tr>  `
        
    });
    footer.innerHTML =` <tr>
    <th>number of employees:</th>
    <td>${totalEmployees} </td>
    <th>Total salary for all:</th>
    <td>${totalsalary} </td>
    <th>average salary for all:</th>
    <td>${totalAvg || 0} </td>
</tr>` 
}
render()

