function marry(person1, person2) {
    console.log("this is execution context argumentes", arguments);//it looks like array but it's not array
    console.log(`${person1} is married to ${person2}`);
}
marry('john', 'ann');
//using rest parameter(...args)
function marry2(...args) {
    console.log("this is execution context argumentes", args);//it looks like array but it's not array
    console.log(`${args[0]} is married to ${args[1]}`);
}
marry2('john', 'ann');
