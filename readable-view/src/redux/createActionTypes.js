/** Declare any other action type here **/

const TYPES = [
    'REQUEST',
    'SUCCESS',
    'ERROR',
];

const createActionTypes = (base) => {
    const ref = {};

    TYPES.forEach(type => {
        ref[type] = `${base}_${type}`;
    });

    return ref;
}

export default createActionTypes;