let obj = {
    name: 'Himanshu',
    salary:() => {
        return 25000
    }
}

var getEmployeeSalary = () =>{
    return 10000;
}

var res = obj.salary.bind(getEmployeeSalary);

console.log(res());