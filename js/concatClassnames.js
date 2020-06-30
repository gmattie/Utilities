/**
 * @description Concatenates and returns a string of non-null class names.
 * 
 * @param  {...string|null} classNames - The strings to be concatenated.
 * @public
 * @function
 * 
 */
const concatClassNames = (...classNames) => {
    
    return classNames
        .filter((className) => className)
        .join(" ");
};