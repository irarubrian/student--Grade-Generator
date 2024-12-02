function calculateNetSalary(basicSalary , benefits){
    const TAX_RATE = 0.1; 
    const NHIF_RATE = 0.02; 
    const NSSF_RATE = 0.06;
}

grossSalary =basicSalary + benefits;
  
  const tax = grossSalary * taxRate;
  const nhif = grossSalary * nhifRate;
  const nssf = grossSalary * nssfRate;

  
  const netSalary = grossSalary - (tax + nhif + nssf);

  return {
    grossSalary,
    kra ,
    nhif,
    nssf,
    netSalary
  };
}


const basicSalary = 59000; 
const benefits =4500; 
const result = calculateNetSalary(basicSalary, benefits);
console.log("Net Salary Calculation Results:");
console.log("NHIF Deductions:", result.nhif);
console.log("NSSF Deductions:", result.nssf);
console.log("Gross Salary:", result.grossSalary);
