var age = [5, 8, 10, 16, 20, 30, 40, 50];
var is_subscribed = [true, true, true, false, false, true, false, true];

for (var i = 0; i < age.length; i++) {
    if (is_subscribed[i] == false && age[i] < 18) {
        console.log(age + " is to young and you are not subscribed to this site!");
    } else if (is_subscribed == false && age[i] > 18) {
        console.log(age + " is permitted but you are not subscribed to this site!");
    } else if (is_subscribed == true && age[i] < 18) {
        console.log(age + " is too young but you are subscribed to this site!");
    } else if (is_subscribed == true && age[i] > 18) {
        console.log(age + " is the correct age and you are subscribed to this site!");
    }