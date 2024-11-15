function addValue(){
    const inputA = document.mycalculator.input_a.value;
    const inputB = document.mycalculator.input_b.value;
    // get the operands value

    // parse to integer. You can use: parseInt(input, 10);
    const numA = parseInt(inputA, 10);
    const numB = parseInt(inputB, 10);
    // perform operation
    if(isNaN(inputA) || isNaN(inputB))
    {
        document.mycalculator.output.value = "Please enter valid numbers";
        return;
    }
    // creating the text output
    const result = numA + numB;
    document.mycalculator.output.value = `${numA} + ${numB} = ${result}`;
    // (if you want to check) print out in console

    // change the text area

    document.mycalculator.output.value = text;
}


function mulValue(){
    const inputA = document.mycalculator.input_a.value;
    const inputB = document.mycalculator.input_b.value;
    const numA = parseInt(inputA, 10);
    const numB = parseInt(inputB, 10);
    if(isNaN(inputA) || isNaN(inputB))
    {
        document.mycalculator.output.value = "Please enter valid numbers";
        return;
    }
    const result = numA * numB;
    document.mycalculator.output.value = `${numA} * ${numB} = ${result}`;
    document.mycalculator.output.value = text;
}

function divValue(){
    const inputA = document.mycalculator.input_a.value;
    const inputB = document.mycalculator.input_b.value;
    const numA = parseInt(inputA, 10);
    const numB = parseInt(inputB, 10);
    if(isNaN(inputA) || isNaN(inputB))
    {
        document.mycalculator.output.value = "Please enter valid numbers";
        return;
    }

    if (numB === 0) {
        document.mycalculator.output.value = "Division by zero is undefined";
        return;
    }
    const result = numA / numB;
    document.mycalculator.output.value = `${numA} ÷ ${numB} = ${result}`;
    
    document.mycalculator.output.value = text;
}