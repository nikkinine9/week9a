var age = 18;
var is_subscribed = confirm("Do you have a subscription?");

if (age < 18 && is_subscribed == false) {
    console.log(age + " is to young and you are not subscribed to this site!");
} else if (age >= 18 && is_subscribed == false) {
    console.log(age + " is permitted but you are not subscribed to this site!");
} else if (age < 18 && is_subscribed == true) {
    console.log(age + " is too young but you are subscribed to this site!");
} else {
    console.log(age + " is the correct age and you are subscribed to this site!");
}


var counter = 0;
while (counter < 10) {
    console.log(counter);
    counter++;
}

// for alternative
for (var counter = 0; counter < 10; counter++) {
    console.log(counter);
}