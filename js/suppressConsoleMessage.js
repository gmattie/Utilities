/**
 * @description Suppresses specific messages from being logged in the Console.
 * 
 * @param {string} message - The target message to suppress, either full text, partial text or a regular expression pattern and case-insensitive.
 * @param {string} method - The Console method of the message to suppress, including "error", "info", "log" and "warn". 
 * @public
 * @function
 * 
 * @example
 * 
 *      suppressConsoleMessage("overeager alarm system", "error");
 * 
 *      console.error("An alarm system for a nuclear power plant")  // <-- Logged
 *      console.error("An overeager alarm system for React")        // <-- Not Logged
 *      console.log("An overeager alarm system for React")          // <-- Logged
 * 
 */
const suppressConsoleMessage = (message, method) => {

    const nativeConsoleMethod = console[method];

    console[method] = (nativeMessage) => {

        if (!RegExp(message, "gi").test(nativeMessage)) {

            nativeConsoleMethod(nativeMessage);
        }
    };
};