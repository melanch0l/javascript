//give method to their obj
//excute same code for multiple obj
function goodDog() {
    console.log(this.name + ' is a good dog');
}
global.name = 'Backy'; //attach to window(js)/global(nodejs) obj
const dog1 = {
    name: 'Jackie',
    kindOfDog: goodDog
}
const dog2 = {
    name: 'Lucky',
    kindOfDog: goodDog
}
dog1.kindOfDog();
dog2.kindOfDog();
goodDog();