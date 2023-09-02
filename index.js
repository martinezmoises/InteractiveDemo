/*CMPS3141-HCI - AS2-23S1
Collaborators:
Date: Sept.8.23
 */
import { createApp } from "https://mavue.mavo.io/mavue.js";

new Vue({
    el: "#app",
    data: {
        fontStyle: {
            fontStyle: "normal",
            fontVariant: "normal",
            fontWeight: "normal",
            fontSize: "20px",
            lineHeight: "1.5",
            fontFamily: "Arial, sans-serif"
        },

		userCSS: "",
		
    }
});

function fontStyle() 
 {
    alert(" 'font-style property' is used to specify the style of the font for the selected text.\n \n  It accepts three values: normal (default), italic, and oblique. \n \n  'normal' renders the text in a normal, upright style. \n \n  'italic' typically slants the text to the right, creating an italicized appearance. \n \n  'oblique' is similar to italic but uses a more basic oblique transformation, which may not be as aesthetically pleasing as true italic fonts.");
 }

function fontVariant() 
{
    alert("'font-variant' property specifies variations in the font style for text.\n \n  It accepts two values: normal (default) and small-caps. \n \n  'normal' displays the text in its standard lowercase and uppercase forms.\n \n  'small-caps' transforms lowercase letters into small capitals while leaving uppercase letters unchanged.");
}
function fontWeight() 
{
    alert("'font-weight' property defines the thickness or boldness of the font. \n \n  It accepts values from 100 (thin) to 900 (ultra-bold) in multiples of 100, or keywords like normal and bold. \n \n  Common values are normal (equivalent to 400) and bold (equivalent to 700).");
}

function lineHeight() 
 {
    alert(" 'line-height' determines the amount of space between lines of text within an element.\n \n It can be specified as a unitless number (multiplier), a percentage, or a fixed value. \n \n  A value of 1 (default) means the lines are spaced exactly one times the font size. Values greater than 1 increase line spacing, and values less than 1 decrease it.");
 }

function fontSize() 
{
    alert("'font-size' sets the size of the font for the selected text.\n \n It accepts various units such as px (pixels), em (relative to the parent element's font size), % (percentage of the parent element's font size), etc. ");
}
function fontFamily() 
{
    alert("'font-family' defines the preferred font(s) for text within an element. It is used as a fallback in case the specified font is not available on the user's device. \n \n You can list multiple fonts in order of preference, separated by commas. The browser will use the first available font from the list \n \n  It's a good practice to end the list with a generic font family like sans-serif or serif as a fallback.");
}

