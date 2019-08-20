import SimpleCrypto from 'simple-crypto-js';

const _secretKey = '98006121816199588763'
export const simpleCrypto = new SimpleCrypto(_secretKey);

export const updateObject = (oldObject, updatedProperties) => {
    return {
        ...oldObject,
        ...updatedProperties
    };
};