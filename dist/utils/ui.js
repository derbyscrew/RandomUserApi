"use strict";

import get from "./getElement.js";
import Fetch from "./fetch.js";

class UI {
  constructor() {
    // UI Elements
    this.userImg = get(".user-img");
    this.userInfo = get(".info");
    this.userResult = get(".result");
    this.btns = [...document.querySelectorAll(".btn")];
    this.randomBtn = get(".random-btn");
    // Binder
    this.displayUser = this.displayUser.bind(this);
    // Event Listener
    this.randomBtn.addEventListener("click", this.displayUser);
    window.addEventListener("DOMContentLoaded", this.displayUser);
  }

  async displayUser() {
    const data = new Fetch();
    const user = await data.getData();
    this.userImg.src = user.img;
    this.userResult.textContent = user.name;
    this.btns.map((btn) => {
      btn.addEventListener("click", () => {
        btn.classList.add("active");
        const label = btn.dataset.label
        this.userInfo.textContent = label;
        this.userResult.textContent = user[label];
      })
    })
  }
}

export default UI;