'use strict';
(function () {
    const generateList = (array) => {
        const ul = document.createElement('ul');
        array.forEach((item) => {
            const li = document.createElement('li');
            li.textContent = item;
            if (Array.isArray(item)) {
                li.append(generateList(item));
            }
            ul.append(li);
        });
        return ul;
    };

    const arrOfNum = [1, 2, 3];
    document.body.append(generateList(arrOfNum));

    const arrOfArrays = [1, 2, [1.1, 1.2, 1.3], 3];
    document.body.appendChild(generateList(arrOfArrays));
})();
