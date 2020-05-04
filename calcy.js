const calcy = () =>{
    let wd = document.getElementById('wd').value;
    let maths = document.getElementById('maths').value;
    let comp = document.getElementById('comp').value;
    let phy = document.getElementById('wd').value;
    let grades="";

    let totalGrades =parseFloat(wd)+parseFloat(maths)+parseFloat(comp)+parseFloat(phy);
    /*alert(totalGrades);*/

    let percentage = (totalGrades/400) * 100;
    /*alert(percentage);*/

    debugger;

    if(percentage<=100 && percentage>=80){
        grades = 'A';
    }else if(percentage<=79 && percentage>=60){
        grades = 'B';
    }else if(percentage<=59 && percentage>=49){
        grades = 'C';
    }else{
        grades = 'F';
    }
    
    if(percentage>=39.5){
        document.getElementById('showData').innerHTML = `Out of 400 your total is ${totalGrades} and percentage is ${percentage}. <br> Your grade is ${grades}. You Passed.`
    }else{
        document.getElementById('showData').innerHTML = `Out of 400 your total is ${totalGrades} and percentage is ${percentage}. <br> Your grade is ${grades}. You Passed.`
    }
}