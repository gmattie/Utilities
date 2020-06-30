/**
 * @requires react-dom/server
 * 
 * @public
 * @module
 * 
 */
import ReactDOMServer from "react-dom/server";

/**
 * @description Synchronously retrieve the width and/or heigh of a React element without visibly rendering and committing the element to the DOM.
 * 
 * @param {object} elementJSX - The target React element written in JSX.
 * @return {object} 
 * @public
 * @function
 * 
 * @example
 * 
 *      const { width, height } = getReactElementSize( <div style={{ width: "20px", height: "40px" }} ...props /> );
 *      console.log(`W: ${width}, H: ${height});  // W: 20, H: 40
 * 
 */
const getReactElementSize = (elementJSX) => {

    const elementString = ReactDOMServer.renderToStaticMarkup(elementJSX);
    const elementDocument = new DOMParser().parseFromString(elementString, "text/html");
    const elementNode = elementDocument.getRootNode().body.firstChild;

    const container = document.createElement("div");
    const containerStyle = {

        display: "block",
        position: "absolute",
        boxSizing: "border-box",
        margin: "0",
        padding: "0",
        whiteSpace: "nowrap",
        visibility: "hidden"
    };

    Object.assign(container.style, containerStyle);

    container.appendChild(elementNode);
    document.body.appendChild(container);

    const width = container.clientWidth;
    const height = container.clientHeight;

    container.removeChild(elementNode);
    document.body.removeChild(container);

    return {
        
        width,
        height
    };
};

/**
 * Export module
 * 
 */
export default getReactElementSize;