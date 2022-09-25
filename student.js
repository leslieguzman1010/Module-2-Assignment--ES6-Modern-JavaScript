var LOANS = [];
var student = {
    name: 'Michael Scott', 
    LoanTermYear: 48, 
    INTEREST: 0.06,
    AMOUNTS: 2000,
    active : true,
    CalculateLoanAmount: function calculate(){ 
        if(this.active){
            INTEREST = (AMOUNTS * (INTEREST * 0.01)) / this.LoanTermYear;
            return INTEREST;
        }
    }
} 


var student2 = {
    name: 'Dwight Schrute', 
    LoanTermYear: 48, 
    INTEREST: 0.06,
    AMOUNTS: 4000, 
    active:  false,
    CalculateLoanAmount: function(){
        if(this.active){
            INTEREST = (AMOUNTS * (INTEREST * 0.01)) / this.LoanTermYear;
            return INTEREST;
        }
        else {
            return 0; 
        }
    }
        
    
}
var student3 = {
    name: 'Jim Halpert', 
    LoanTermYear: 48, 
    INTEREST: 0.06,
    AMOUNTS: 2400, 
    active:  false,
    CalculateLoanAmount: function(){
        if(this.active){
            INTEREST = (AMOUNTS * (INTEREST * 0.01)) / this.LoanTermYear;
            return INTEREST;
        }
        else {
            return 0; 
        }
    }
        
    
}
var student4 = {
    name: 'Pam Beesly', 
    LoanTermYear: 48, 
    INTEREST: 0.06,
    AMOUNTS: 800, 
    active:  false,
    CalculateLoanAmount: function(){
        if(this.active){
            INTEREST = (AMOUNTS * (INTEREST * 0.01)) / this.LoanTermYear;
            return INTEREST;
        }
        else {
            return 0; 
        }
    }
        
    
}
var student5 = {
    name: 'Ryan Howard', 
    LoanTermYear: 48, 
    INTEREST: 0.06,
    AMOUNTS: 1000, 
    active:  false,
    CalculateLoanAmount: function(){
        if(this.active){
            INTEREST = (AMOUNTS * (INTEREST * 0.01)) / this.LoanTermYear;
            return INTEREST;
        }
        else {
            return 0; 
        }
    }
        
    
}
 
LOANS.push(student);
LOANS.push(student2);
LOANS.push(student3);
LOANS.push(student4);
LOANS.push(student5);
LOANS.forEach((item) => console.log(item.CalculateLoanAmount()));
console.log(LOANS);
//console.log(student['name']);
//console.log(student.name);
//console.log(student2);
//console.log(student2.age());
//console.log(student.age());