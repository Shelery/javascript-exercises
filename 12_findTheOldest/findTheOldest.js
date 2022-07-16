
const findTheOldest = function(people) {
//     people = [ {
//         name: "Ray",
//         yearOfBirth: 1962,
//         yearOfDeath: 2011, - optional
//       },... ]

    const oldest = people.reduce((oldestPersonFound, currentPerson) => {
        let highestAge = findAge(oldestPersonFound);
        let currentAge = findAge(currentPerson);
        if (currentAge > highestAge){
            oldestPersonFound = currentPerson;
        };
        return oldestPersonFound
    })

    function findAge(person){
        // Check if person is dead
        if ("yearOfDeath" in person ){
            return person.yearOfDeath - person.yearOfBirth;
        }
        // If not: get current age
        const currentYear = new Date().getFullYear();
        return currentYear - person.yearOfBirth;
    }
    return oldest;
};

// Do not edit below this line
module.exports = findTheOldest;
