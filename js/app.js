var userAges = [16, 21, 12, 30]
var subscriptionStatus = [true, false, false, true];

for (var index = 0; index < 4; index++) {
    var userAge = userAges[index];
    var subscriptionStatus = subscriptionStatus[index];

    if (subscriptionStatus == false && userAges[index] < 18) {
        console.log("The is to young and you are not subscribed to this site!");
    } else if (subscriptionStatus == false && userAges[index] >= 18) {
        console.log(" The user is permitted but you are not subscribed to this site!");
    } else if (subscriptionStatus == true && userAges[index] < 18) {
        console.log(" The user is too young but you are subscribed to this site!");
    } else if (subscriptionStatus == true && userAges[index] >= 18); {
        console.log(" The user is the correct age and you are subscribed to this site!");
    }
}