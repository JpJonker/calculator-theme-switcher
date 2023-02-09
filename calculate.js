var firstNum;
var secondNum;
var operator;

for (let i = 0; i < 10; i++) {
    $(`.num${i}`).click(function() {
        $('.input-display').append(i);
    })
}

$('.dot').click(function() {
    $('.input-display').append('.')
})

// refactor to more optimized later
$('.add').click(function() {
    if (!firstNum) {
        firstNum = $('.input-display').text();
        $('.input-display').text('');
    }

    operator = 'add'
})
// refactor to more optimized later
$('.subtract').click(function() {
    if (!firstNum) {
        firstNum = $('.input-display').text();
        $('.input-display').text('');
    }

    operator = 'subtract'
})
// refactor to more optimized later
$('.multiply').click(function() {
    if (!firstNum) {
        firstNum = $('.input-display').text();
        $('.input-display').text('');
    }

    operator = 'multiply'
})
// refactor to more optimized later
$('.divide').click(function() {
    if (!firstNum) {
        firstNum = $('.input-display').text();
        $('.input-display').text('');
    }

    operator = 'divide';
})

$('.delete').click(function() {
    $('.input-display').text('');
})

$('.reset').click(function() {
    firstNum = '';
    secondNum = '';
    operator = '';
    $('.input-display').text('');
})

$('.equals').click(function(){
    let result;
    secondNum = $('.input-display').text()

    switch (operator) {
        case 'add': 
            result = Number(firstNum) + Number(secondNum);
            break;

        case 'subtract': 
            result = Number(firstNum) - Number(secondNum);
            break;

        case 'multiply': 
            result = Number(firstNum) * Number(secondNum);
            break;

        case 'divide': 
            result = Number(firstNum) / Number(secondNum);
            break;
    }

    firstNum = '';
    secondNum = '';
    operator = '';
    
    $('.input-display').text(result)
})

