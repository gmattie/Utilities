/**
 * @description Simulates a double-click event that is determined by two clicks occurring within the standard time of 500 milliseconds.
 * 
 * @param {function} callback - The event's callback function.
 * @return {function} 
 * @public
 * @function
 * 
 * @example
 * 
 *      const clickHandler = (event) => console.log(event);
 *      button.addEventListener("click", doubleClickHandler(clickHandler));
 * 
 */
const doubleClick = (callback) => {

    let previousClick;
  
    return (...args) => {
  
        const currentClick = Date.now();
    
            if (currentClick - previousClick < 500) {

                callback(...args);
            }
            else {
    
                previousClick = currentClick;
            }
    };
};