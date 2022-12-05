// Code your solution in this file!
function distanceFromHqInBlocks(pickupLocation){
const scruberHQ = 42
let totalDistance = (Math.abs(pickupLocation - scruberHQ))
    return totalDistance
}

distanceFromHqInBlocks(50)
distanceFromHqInBlocks(34)



function distanceFromHqInFeet (totalDistance){  
//1block = 264feet
return distanceFromHqInBlocks(totalDistance)* 264
}
distanceFromHqInFeet(10)


function distanceTravelledInFeet(start, destination){
    //returns : no of feet travelled
    // let start =pickupLocation
    // let destination = dropLocation
    return (Math.abs(destination - start)*264)
}
distanceTravelledInFeet(40,45)
distanceTravelledInFeet(46,40)

function calculatesFarePrice(start, destination){
    const travelDistance = distanceTravelledInFeet(start,destination)
if ( travelDistance <= 400){
 return 0;
}
else if (travelDistance>400 && travelDistance <= 2000 ){
    return (0.02 *(travelDistance - 400))
}
else if(travelDistance >2000 && travelDistance < 2500){
    return 25
}
else(travelDistance >2500)
return 'cannot travel that far'
}
