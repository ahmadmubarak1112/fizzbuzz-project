const containerNo = document.querySelector('.container-number');

// let number = 0;

for( let i = 1; i <= 100; i++ ) {


    const numberList = document.createElement('div');
    const numberElement  = document.createElement('span');

    numberList.setAttribute('class', 'number-list');
    numberElement.setAttribute('class', 'number');

    
    numberList.appendChild(numberElement);
    containerNo.appendChild(numberList);
    // console.log(containerNo);

    if( i % 3 === 0 && i % 5 === 0 ) {

        numberElement.textContent = "FizzBuzz";

    } else if( i % 3 === 0 ) {
        
        numberElement.textContent = "Fizz";
    
    } else if( i % 5 === 0 ) {
    
        numberElement.textContent = "Buzz";
    
    } else {
    
        numberElement.textContent = `${i}`;

    }
    



    // numberElement.textContent = `${i}`;

}

// console.log(i);