var userAges = [16, 21, 12, 30]
var subscriptionStatus = [true, false, false, true];

for (var i = 0; i < userAges.length; i++) {
    console.log(userAges[i], subscriptionStatus[i]);
    if (userAges[i] < 18 && !subscriptionStatus[i]) {
        console.log("The user is too young and you are not subscribed to this site!");
    } else if (userAges[i] >= 18 && !subscriptionStatus[i]) {
        console.log("The user is permitted but you are not subscribed to this site!");
    } else if (userAges[i] < 18 && subscriptionStatus[i]) {
        console.log("The user is too young but you are subscribed to this site!");
    } else {
        console.log("The user is the correct age or older and you are subscribed to this site!");
    }
}