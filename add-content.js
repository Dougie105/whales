function myFunction(){

    var name = prompt ('What\'s your name?');
    var answer = confirm  ('Do you want to save whales?');
    var output = 'Hello ' + name + '!';
    var output2 = 'Wow ' + name + '...';

    if(answer) {
        output = output +  ' Thank you for your support!'
    } else { 
        output = output2 + ' A whale just died because of you...'
    }
    return output;
}

var showOrder = function() {
    var order = prompt('You really care?');
    var item, quantity;
    var items = '';

while
}