'use strict';

( () => {


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

    function deepFreeze(obj) {
        const objProperties = Object.keys(obj);

        for (const key of objProperties) {
            const value = obj[key];

            if (value && typeof value === "object") {
                deepFreeze(value);
            }
        }
        return Object.freeze(obj);
    }

    console.log(deepFreeze(user), Object.isFrozen(user));


})();