//object modification 

const users = [
   
    { firstName: "Jayesh", lastName: "Damor" },
    { firstName: "James", lastName: "Bond" }
  
];
  const usernames = users.map(user => `${user.firstName} ${user.lastName}`); // ["Jayesh Damor", "James Bond"]
  console.log(usernames);
  
