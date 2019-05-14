/**
 * @description The <strong>colorUtils.js</strong> module contains functions used to generate and manipulate color values.
 * @module
 * 
 */
export {
    
    getRandomColor
};

/**
 * @description automatically generates a random 24-bit color in hexadecimal format.
 * @return {string}
 * 
 * @example
 * element.style.backgroundColor = getRandomColor();
 * 
 */
const getRandomColor = () => {

    let color = "#";

    for (let i = 0; i < 3; i++)
    {
        const part = Math.round(Math.random() * 255).toString(16);

        color += (part.length > 1) ? part : "0" + part;
    }

    return color;
};