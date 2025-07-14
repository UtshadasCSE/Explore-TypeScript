// Base class for all notifications
class appNotification {
  message: string;
  container: HTMLElement;

  constructor(message: string) {
    this.message = message;
    this.container = document.getElementById("notifications") as HTMLElement;
  }

  show(cssClass: string) {
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
  constructor(message: string) {
    super(message); // Call the parent constructor
  }

  show() {
    super.show("success"); // Call the parent show with "success" style
  }
}

// ErrorNotification inherits from Notification
class ErrorNotification extends appNotification {
  constructor(message: string) {
    super(message);
  }

  show() {
    super.show("error");
  }
}

// Hook up buttons
const successBtn = document.getElementById("successBtn") as HTMLButtonElement;
const errorBtn = document.getElementById("errorBtn") as HTMLButtonElement;

successBtn.addEventListener("click", () => {
  const success = new SuccessNotification("Yay! Everything worked!");
  success.show();
});

errorBtn.addEventListener("click", () => {
  const error = new ErrorNotification("Oops! Something went wrong!");
  error.show();
});
