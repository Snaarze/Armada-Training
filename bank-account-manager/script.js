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

      //   prevent user from withdrawing if user balance is below the value of withdrawing
      if (this.initialValue < +this.selectors().inputValue.value) {
        return alert("Inefficient Balance");
      }
      this.initialValue = this.initialValue - this.selectors().inputValue.value;
      //   update the balance text
      this.updateBalanceText("withdraw");
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
      this.updateBalanceText("deposit");
      //   return the updated initialValue
      return this.initialValue;
    },
    // list of selectors
    selectors: function () {
      const currentBalanceText = document.querySelector(
        ".current-balance-text"
      );
      const actionText = document.querySelector(".action-text");
      const depositBtn = document.querySelector(".deposit-btn");
      const withdrawBtn = document.querySelector(".withdraw-btn");
      let inputValue = document.querySelector("#input-value");

      return {
        currentBalanceText,
        actionText,
        depositBtn,
        withdrawBtn,
        inputValue,
      };
    },
    // update the balance via screen
    updateBalanceText: function (action) {
      this.selectors().currentBalanceText.textContent = `$${this.initialValue}`;
      this.selectors().actionText.textContent = `Successfully ${action} $${
        this.selectors().inputValue.value
      }.`;
      this.selectors().inputValue.value = "";
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
const user1 = new User("Jeremy", 5000);

// initialize the all the listeners
user1.startInteraction();
