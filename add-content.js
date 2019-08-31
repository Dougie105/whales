//first popup

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

//Happy Whales

function giveNumber() {
    var whale = '<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/0703_SD_Breaching02.jpg/300px-0703_SD_Breaching02.jpg">';
    var quantity = prompt("How many whales do you want to save?");
    quantity = Number(quantity);
    var whales = "";
    
    while (isNaN(quantity)) {
        quantity = prompt("How many whales?");
        quantity = Number(quantity);
        
    }
    
    for (var i = 0; i < quantity; i++) {
        whales = whales + whale;
    }
    return whales --;
}

