"use strict";

const removeActive = (btns) => {
  btns.map((btn) => {
    btn.classList.remove("active");
  });
}

export default removeActive;