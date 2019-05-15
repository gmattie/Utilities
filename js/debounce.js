/**
 * @description Postpones executing a callback function by a specified time until all the callback's events, occurring in rapid succession, have ended.
 * @param {number} delay - The time in milliseconds to postpone the callback.
 * @param {Function} callback - The event's callback function.
 * @return {Function} 
 * @function
 * 
 * @example
 * 
 * const resizeHandler = (event) => console.log(event);
 * window.addEventListener("resize", debounce(200, resizeHandler));
 * 
 */

export const debounce = (delay, callback) => { 

    let timer;

    return (...args) => {

        if (timer) {

            clearTimeout(timer);
        }

        timer = setTimeout(() => {

            callback(...args);
            timer = null;
        }, delay);
    };
};