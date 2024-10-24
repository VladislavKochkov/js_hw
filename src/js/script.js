'use strict';
(function () {
    const user = (name, age) => {
        let _name = name;
        let _age = age;

        const getName = () => _name;

        const setName = (newName) => {
            _name = newName;
        };

        const getAge = () => _age;

        const setAge = (newAge) => {
            if (typeof newAge === 'number' && newAge >= 0 && newAge <= 120) {
                _age = newAge;
            } else {
                console.error('Error: age only from 0 to 120!');
            }
        };

        return {
            getName,
            setName,
            getAge,
            setAge,
        };
    };

    const user1 = user('Vladislav', 19);
    const user2 = user('Elizaveta', 20);

    console.log('User 1:', user1.getName(), user1.getAge());
    console.log('User 2:', user2.getName(), user2.getAge());

    user1.setName('Maksim');
    user1.setAge(16);

    console.log('Updated User 1:', user1.getName(), user1.getAge());
})();
