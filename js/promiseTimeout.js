/**
 * @description Asynchronously yields the value of a supplied Promise object if it is resolved before a set deadline.
 * Otherwise, the returned Promise object will be rejected with an optionally supplied error.
 * 
 * @param {object} promise - The Promise object to race against the deadline.
 * @param {number} deadline - The timeout value in milliseconds.
 * @param {*} [timeoutError = null] - An optional argument to catch when the Promise object is not settled before the deadline.
 * @returns {object} A pending Promise object.
 * @public
 * @function
 * 
 * @example
 *      
 *      const request = fetch(url, options);
 *      const deadline = 1000;
 *      const timeoutError = `Request took longer than ${deadline} milliseconds to resolve`;
 *      
 *      promiseTimeout(request, deadline, timeoutError)
 *          .then((value) => console.log(`Request ${value} was resolved before ${deadline} milliseconds`))
 *          .catch((error) => console.log(error));
 *      
 */

const promiseTimeout = (promise, deadline, timeoutError = null) => {

    let timerID;

    const timer = new Promise((resolve, reject) => {

        timerID = setTimeout(() => reject(timeoutError), deadline);
    });

    return Promise
        .race([ promise, timer ])
        .then((result) => {

            clearTimeout(timerID);

            return result;
        });
};