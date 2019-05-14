/**
 * @description The <strong>eventSuspension.js</strong> module contains functions used to postpone or delay the frequency of callbacks.
 * @module
 * 
 */
export {
    
    debounce,
    throttle
};

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

const debounce = (delay, callback) => { 

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

const throttle = (delay, callback) => {

	let previousTime = 0;
	
	return (...args) => {
	
		const currentTime = new Date().getTime();
		
		if (currentTime - previousTime > delay) {
		
            previousTime = currentTime;
            
			return callback(...args);
		}
	};
};