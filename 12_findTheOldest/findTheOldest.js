const findTheOldest = function(people) {
    let oldestPerson = people[0];
    if (Object.hasOwn(oldestPerson, 'yearOfDeath')) {
        oldestAge = oldestPerson.yearOfDeath - oldestPerson.yearOfBirth;
    } else {
        oldestAge = new Date().getFullYear() - oldestPerson.yearOfBirth;
    }

    for (person of people.slice(1)) {
        if (Object.hasOwn(person, 'yearOfDeath')) {
            let personAge = person.yearOfDeath - person.yearOfBirth;
            if (personAge > oldestAge) {
                oldestPerson = person;
                oldestAge = personAge;
             }
        } else {
            personAge = new Date().getFullYear() - person.yearOfBirth;
            if (personAge > oldestAge) {
                oldestPerson = person;
                oldestAge = personAge;
             }
        }
    }
    return oldestPerson;
};

// Do not edit below this line
module.exports = findTheOldest;
