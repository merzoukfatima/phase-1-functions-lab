// Code your solution in this file!
function distanceFromHqInBlocks(distance){
    return (distance>=42) ? distance-42 : 42-distance
}
//
function distanceFromHqInFeet(distance){
    return 264*distanceFromHqInBlocks(distance)
}
//
function distanceTravelledInFeet(start,destination){
    return (start<=destination) ? (destination-start)*264:(start-destination)*264
}
//
function calculatesFarePrice(start, destination){
    const distanceFeet=distanceTravelledInFeet(start,destination)

    if(distanceFeet<400){
        return 0
    }
    else if(distanceFeet>=400 && distanceFeet<2000 ){
        return (distanceFeet-400)*0.02
    }
    else if(distanceFeet>=2000 && distanceFeet<2500){
        return 25
    }
    else if(distanceFeet>2500){
        return "cannot travel that far"
    }
}
