'use strict';
(function () {
    const deepFreeze = (obj) => {
        if (obj && typeof obj === 'object') {
            Object.entries(obj).forEach(([, value]) => {
                if (typeof value === 'object' && value !== null) {
                    deepFreeze(value);
                }
            });

            return Object.freeze(obj);
        }

        return obj;
    };

    const user = {
        data: {
            a: 1,
            b: 2,
            c: 3,
            d: {
                a1: 1,
                b1: 2,
                c1: 3,
                d1: {
                    a2: 3,
                    b2: 3,
                    c2: 3,
                },
            },
        },
    };

    deepFreeze(user);
    // attempt to change the object
    user.data.a = 4; // change will not happen
    console.log(user.data); // 1
})();
