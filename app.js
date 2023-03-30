
function bmiCalculator() {
    
    const weightEl = document.getElementById('weight');
    const heightEl = document.getElementById('height');
    const weightElValue = weightEl.value;
    weightEl.value = "";
    const weight = parseFloat(weightElValue);
    const heightElValue = heightEl.value;
    heightEl.value = "";
    const height = parseFloat(heightElValue);
    const result = document.getElementById('outputResult');
    let height_status = false;
    let weight_status = false;

    if(height === '' || isNaN(height) || (height <= 0)){
        document.querySelector('#height_error').innerHTML = 'Please Again a valid height';
    }else{
        document.querySelector('#height_error').innerHTML = '';
        height_status=true;
    }

    if(weight === '' || isNaN(weight) || (weight <= 0)){
        document.querySelector('#weight_error').innerHTML = 'Please Again a valid weight';
    }else{
        document.querySelector('#weight_error').innerHTML = '';
        weight_status=true;
    }

    if(height_status && weight_status){
        const bmi = weight / (height/100 * height/100).toFixed(2);

        if(bmi < 18.6){
            result.innerHTML = 'Under weight : ' + bmi;
        }else if(bmi >= 18.6 && bmi < 24.9){
            result.innerHTML = 'Normal : ' + bmi;
        }else{
            result.innerHTML = 'Over weight : ' + bmi;
        }
    }else{
        
        result.innerHTML = '';
    }
}