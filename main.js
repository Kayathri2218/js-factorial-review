// factorial of number

        let num = prompt("Enter the number : ")
        let result = 1;
        for (let i = num; i >= 1; i--) {
            result *= i;
        }
        console.log(result);
