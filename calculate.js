var firstValue;
var secondValue;
var operationToUse;

$(".num0").click(function() {
    $(".user-input-text").append("0");
})

$(".num1").click(function() {
    $(".user-input-text").append("1");
})

$(".num2").click(function() {
    $(".user-input-text").append("2");
})

$(".num3").click(function() {
    $(".user-input-text").append("3");
})

$(".num4").click(function() {
    $(".user-input-text").append("4");
})

$(".num5").click(function() {
    $(".user-input-text").append("5");
})

$(".num6").click(function() {
    $(".user-input-text").append("6");
})

$(".num7").click(function() {
    $(".user-input-text").append("7");
})

$(".num8").click(function() {
    $(".user-input-text").append("8");
})

$(".num9").click(function() {
    $(".user-input-text").append("9");
})

$(".comma").click(function() {
    $(".user-input-text").append(".");
})

$(".delete").click(function() {
    $(".user-input-text").text('');
})

$('.addition').click(function() {
    operationToUse = '+';

    if (!firstValue) {
        firstValue = $('.user-input-text').text();
        $('.user-input-text').text('');
    }
})

$('.subtraction').click(function() {
    operationToUse = '-';

    if (!firstValue) {
        firstValue = $('.user-input-text').text();
        $('.user-input-text').text('');
    }
})

$('.division').click(function() {
    operationToUse = '/';

    if (!firstValue) {
        firstValue = $('.user-input-text').text();
        $('.user-input-text').text('');
    }
})

$('.multiplication').click(function() {
    operationToUse = '*';

    if (!firstValue) {
        firstValue = $('.user-input-text').text();
        $('.user-input-text').text('');
    }
})

$('.equals').click(function() {
    let result;
    firstValue = firstValue;
    secondValue = $('.user-input-text').text()

    switch (operationToUse) {
        case '+':
            result = Number(firstValue) + Number(secondValue);
            break;

        case '-':
            result = Number(firstValue) - Number(secondValue);
            break;

        case '/':
            result = Number(firstValue) / Number(secondValue);
            break;

        case '*':
            result = Number(firstValue) * Number(secondValue);
            break;
    }
    
    $('.user-input-text').text(result)
})

$('.reset').click(function() {
    firstValue = '';
    secondValue = '';
    operationToUse = '';
    $('.user-input-text').text('');
})