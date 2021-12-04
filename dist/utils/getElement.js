"use strict";

const getElement = (selection) => {
  const element = document.querySelector(selection);
  if (element) {
    return element;
  } else {
    throw new Error("Element does not exist. Please Check.");
  }
}

export default getElement;