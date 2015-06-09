var readline = require("readline"),
    rl = readline.createInterface(process.stdin,process.stdout);

rl.setPrompt("$$ ");
rl.prompt();

var toDoList = [];

var commands = {
    ls: function() {
        console.log(toDoList);
    },
    add: function(item) {
        toDoList.push(item);
        return item+" added."
    },
    rm: function(item) {
        var itemIndex, removedItem;
        itemIndex = toDoList.indexOf(item);
        if(itemIndex !== -1)
            removedItem = toDoList.splice(itemIndex,1);

        if(removedItem) {
            return removedItem;
        } else {
            return "Error: item not found."
        }
    },
    exit: function() {
        process.exit(0);
    }
}

rl.on('line',function(line){
    var words = line.split(' '),
        command = words.shift(),
        argsString = words.join(' '),
        response;

    response = commands[command](argsString);
    if (response)
        console.log(response);
    rl.prompt();
});