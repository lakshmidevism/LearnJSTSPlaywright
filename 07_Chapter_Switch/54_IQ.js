let fruit = "banana";
switch (fruit) {
    case "apple":
        console.log("Apple selected");
    case "banana":
        console.log("Banana selected");
    case "cherry":
        console.log("Cherry selected");
    case "date":
        console.log("Date selected");
    default:
        console.log("Default reached");
}

//executes all cases after the matched case because there are no break statements. This is called "fall-through" behavior in switch statements.