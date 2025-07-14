"use strict";
// Base class for all notifications
class appNotification {
    constructor(message) {
        this.message = message;
        this.container = document.getElementById("notifications");
    }
    show(cssClass) {
        const div = document.createElement("div");
        div.className = `notification ${cssClass}`;
        div.textContent = this.message;
        this.container.appendChild(div);
        // Auto remove after 3 seconds
        setTimeout(() => {
            div.remove();
        }, 3000);
    }
}
// SuccessNotification inherits from Notification
class SuccessNotification extends appNotification {
    constructor(message) {
        super(message); // Call the parent constructor
    }
    show() {
        super.show("success"); // Call the parent show with "success" style
    }
}
// ErrorNotification inherits from Notification
class ErrorNotification extends appNotification {
    constructor(message) {
        super(message);
    }
    show() {
        super.show("error");
    }
}
// Hook up buttons
const successBtn = document.getElementById("successBtn");
const errorBtn = document.getElementById("errorBtn");
successBtn.addEventListener("click", () => {
    const success = new SuccessNotification("Yay! Everything worked!");
    success.show();
});
errorBtn.addEventListener("click", () => {
    const error = new ErrorNotification("Oops! Something went wrong!");
    error.show();
});
