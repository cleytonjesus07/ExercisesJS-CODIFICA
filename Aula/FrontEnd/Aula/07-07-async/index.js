/* 

SINCRONO

function putWatterToBoil(){
    console.log('Boil the water.');
}
function getReadyToMakeCoffe(){
    console.log('Grind coffee beans.');
    console.log('Line the basket of your coffe maker with a filter.');
    console.log('Wet the filter, and let it drain into your cup.');
    console.log('Discard the wather in the cup');
    console.log('Measure the ground coffee into the wet filter.');
}

function makeCoffee(){
    console.log('Pour water to wet the gorund beans and drain into your cup.')
}
 */


function putWatterToBoil() {
    console.log('Boil the water.');
    setTimeout(() => {
        console.log('We have boiled water');
        makeCoffee();
    }, 5000)
}
function getReadyToMakeCoffe() {
    console.log('Grind coffee beans.');
    console.log('Line the basket of your coffe maker with a filter.');
    console.log('Wet the filter, and let it drain into your cup.');
    console.log('Discard the wather in the cup');
    console.log('Measure the ground coffee into the wet filter.');
}

function makeCoffee() {
    console.log('Pour water to wet the gorund beans and drain into your cup.')
}

putWatterToBoil()
getReadyToMakeCoffe()
