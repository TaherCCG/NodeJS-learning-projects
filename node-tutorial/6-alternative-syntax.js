const items = ["item1", "item2", "item3", "item4", "item5"];

// also can export the above array as below
// module.exports.items= ["item1", "item2", "item3", "item4", "item5"];
// or as below
module.exports.items = items;

const person = {
  name: "bob",
};

// this is another way to export the above object
module.exports.singlePerson = person;
