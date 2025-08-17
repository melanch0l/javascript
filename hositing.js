var favFruit = 'mango';
var fruit = 'apple';
var fruit = 'orange';

function hisFavFruit() {
    // this this how hoisted looks : var favFruit = undefined;
    console.log(`his fav fruit is ${favFruit}`);

    var favFruit = 'grapes'; //hoisted

    console.log("his fav fruit for now is " + favFruit);

}
console.log(fruit);
hisFavFruit();