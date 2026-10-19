const statuses = ["pass", "fail", "skip"];

statuses[0] = "blocked";
console.log(statuses[0]); // blocked
console.log(statuses.at(-1)); // skip
console.log(statuses.at(-2)); // fail
console.log(statuses.at(-4));