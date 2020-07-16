/**
 * @description Create a new object that includes a subset of key/value pairs from another object.
 * 
 * @param {object} target - The target object used for extraction.
 * @param {...string} keys - The keys to extract from the target object and include in the new object.
 * @return {object}
 * @function
 * 
 * @example
 * 
 * const obj = {a: 10, b: 20, c: 30};
 * const newObj = createObjectSubset(obj, "a", "c")
 * 
 * console.log(newObj); // {a: 10, c: 30}
 * 
 */
const createObjectSubset = (target, ...keys) => {

    return Object.fromEntries(
        
        Object.entries(target)
            .filter(([key]) => keys.includes(key))
    );
}