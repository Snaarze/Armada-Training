// Hello mentors i hope you understand by using this, i want to upskill my oop/class i hope i am allowed using this
// create objects that can withdraw and deposit
function User(name, initialValue) {
  return {
    // defined by parameters
    name,
    initialValue,
    limitValue: 500,
    // user can withdraw their money
    withdraw: function (e) {
      e.preventDefault();

      //  prevent user from withdrawing if value is empty
      if (!this.selectors().inputValue.value) {
        return alert("Please enter a number");
      }

      if (this.checkLimit()) {
        return;
      }

      //   prevent user from withdrawing if user balance is below the value of withdrawing
      if (this.initialValue < +this.selectors().inputValue.value) {
        return alert("Inefficient Balance");
      }
      this.initialValue = this.initialValue - this.selectors().inputValue.value;
      //   update the balance text
      this.updateBalanceText("Withdraw");
      //   return the updated initialValue
      return this.initialValue;
    },
    // user can deposit their money
    deposit: function (e) {
      e.preventDefault();
      //  prevent user to deposit if value is empty
      if (!this.selectors().inputValue.value) {
        return alert("Please enter a number");
      }
      this.initialValue =
        this.initialValue + +this.selectors().inputValue.value;
      // updates the balance text
      this.updateBalanceText("Deposit");
      //   return the updated initialValue
      return this.initialValue;
    },
    checkLimit: function () {
      if (
        this.limitValue < 0 ||
        +this.selectors().inputValue.value > this.limitValue
      ) {
        this.selectors().limitReach.classList.toggle("hidden");
        setTimeout(() => {
          this.selectors().limitReach.classList.toggle("hidden");
        }, 3000);
        return true;
      }
      this.limitValue = this.limitValue - +this.selectors().inputValue.value;
      return false;
    },
    // list of selectors
    selectors: function () {
      const currentBalanceText = document.querySelector(
        ".current-balance-text"
      );
      const depositBtn = document.querySelector(".deposit-btn");
      const withdrawBtn = document.querySelector(".withdraw-btn");
      const ulContainer = document.querySelector("ul");
      let inputValue = document.querySelector("#input-value");
      let transactionHistoryText = document.querySelector("history");
      let limitReach = document.querySelector(".limit-reach");
      return {
        currentBalanceText,
        depositBtn,
        withdrawBtn,
        inputValue,
        transactionHistoryText,
        limitReach,
        ulContainer,
      };
    },
    // update the balance via screen
    updateBalanceText: function (action) {
      let actionText = document.createElement("li");
      actionText.textContent = `${action} :  $${
        this.selectors().inputValue.value
      }.`;

      this.selectors().ulContainer.appendChild(actionText);

      this.selectors().currentBalanceText.textContent = `$${this.initialValue}`;
      this.selectors().inputValue.value = "";

      setTimeout(() => {
        this.selectors().ulContainer.removeChild(actionText);
      }, 3000);
    },
    // initialize the listeners
    startInteraction: function () {
      // initialized the current balance of the user
      this.selectors().currentBalanceText.textContent = `$${this.initialValue}`;

      //   attach listeners
      this.selectors().depositBtn.addEventListener(
        "click",
        this.deposit.bind(this)
      );

      this.selectors().withdrawBtn.addEventListener(
        "click",
        this.withdraw.bind(this)
      );
    },
  };
}

// create a object name "Jeremy"
const user1 = User("Jeremy", 5000);

// initialize the all the listeners
user1.startInteraction();
