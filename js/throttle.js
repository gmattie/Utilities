/**
 * @description Delays the frequency of a callback function by a specified time.
 * @param {number} delay - The time in milliseconds to delay the callback frequency.
 * @param {Function} callback - The event's callback function.
 * @return (Function)
 * @function
 * 
 * @example
 * 
 * const mouseMoveHandler = (event) => console.log(event);
 * document.body.addEventListener("mousemove", throttle(200, mouseMoveHandler));
 * 
 */

export const throttle = (delay, callback) => {

    let previousTime = 0;

    return (...args) => {

        const currentTime = new Date().getTime();

        if (currentTime - previousTime > delay) {

            previousTime = currentTime;

            return callback(...args);
        }
    };
};