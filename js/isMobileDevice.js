/**
 * @description Checks if the deployment target is a mobile device.
 * Additional info: https://developer.mozilla.org/en-US/docs/Web/HTTP/Browser_detection_using_the_user_agent
 * 
 * @return {boolean} 
 * @public
 * @function
 * 
 */
const isMobileDevice = () => /Mobi/i.test(window.navigator.userAgent);