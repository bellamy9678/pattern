import { Singleton } from "./singleton.js";
import { Factory } from "./fabriq.js";
import { Observer } from "./observer.js";

/**
 *
 * Singleton
 *
 */

/* create instances and check */
const single1 = new Singleton();
const single2 = new Singleton();

console.log(single1, single2);
console.log(single1 === single2);

/**
 *
 * Factory
 *
 */

/* create instances */
const fabriq = new Factory();

const text = fabriq.create("text");
const password = fabriq.create("password");
const textarea = fabriq.create("textarea");

document.querySelector("body").append(text);
document.querySelector("body").append(password);
document.querySelector("body").append(textarea);

document.querySelector("#clear").addEventListener("click", () => {
  text.clear();
  password.clear();
  textarea.clear();
});

/**
 *
 * Observer
 *
 */

const observer = new Observer();

/* define listeners in variables, so we'll can simply remove them later */
const passwordListener = (newValue) => (password.value = newValue);
const textareaListener = (newValue) => (textarea.value = newValue);

/* add listeners in observer */
observer.addListener(passwordListener);
observer.addListener(textareaListener);

document.querySelector("#equate").addEventListener("click", () => {
  const value = text.value; // get string e.g. from input[type="text"];
  observer.callAll(value); // call all listeners
  observer.removeListener(passwordListener); // remove e.g. password listener
});
