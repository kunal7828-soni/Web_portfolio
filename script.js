
/*************************************************
 *        TECHNICAL SKILLS PROGRESS ANIMATION
 *************************************************/

const bars = document.querySelectorAll(".progress-bar");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const value = entry.target.getAttribute("data-progress");
        entry.target.style.width = value + "%";
        observer.unobserve(entry.target); // animate only once
      }
    });
  },
  { threshold: 0.4 }
);

bars.forEach((bar) => observer.observe(bar));

/*************************************************
 *           BANK MANAGEMENT SYSTEM
 *************************************************/


// ================= TERMINAL BANK SYSTEM =================

// const terminal = document.getElementById("terminal");
// const input = document.getElementById("input");
// const runBtn = document.getElementById("runBtn");

// class BankAccount {
//   constructor(name, accountNum, balance) {
//     this.name = name;
//     this.accountNum = accountNum;
//     this.balance = balance;
//   }

//   deposit(amount) {
//     if (amount > 0) {
//       this.balance += amount;
//       print(`✅ ₹${amount} deposited successfully.`);
//     } else {
//       print("❌ Invalid deposit amount!");
//     }
//   }

//   withdraw(amount) {
//     if (amount <= 0) {
//       print("❌ Invalid withdrawal amount!");
//     } else if (amount > this.balance) {
//       print("❌ Insufficient balance!");
//     } else {
//       this.balance -= amount;
//       print(`✅ ₹${amount} withdrawn successfully.`);
//     }
//   }

//   display() {
//     print("============================");
//     print("      ACCOUNT DETAILS       ");
//     print("============================");
//     print(`Holder  : ${this.name}`);
//     print(`Number  : ${this.accountNum}`);
//     print(`Balance : ₹${this.balance.toFixed(2)}`);
//     print("============================");
//   }
// }

// let accounts = [];
// let step = "menu";
// let temp = {};

// function print(text = "") {
//   terminal.innerHTML += `<div>${text}</div>`;
//   terminal.scrollTop = terminal.scrollHeight;
// }

// function clearTerminal() {
//   terminal.innerHTML = "";
// }

// runBtn.addEventListener("click", startProgram);

// function startProgram() {
//   clearTerminal();
//   accounts = [];
//   temp = {};
//   input.disabled = false;
//   input.focus();
//   showMenu();
// }

// function showMenu() {
//   print("==============================");
//   print("    BANK MANAGEMENT SYSTEM    ");
//   print("==============================");
//   print("1. Open Account");
//   print("2. Deposit Money");
//   print("3. Withdraw Money");
//   print("4. Display Account");
//   print("5. Exit");
//   print("");
//   print("Enter your choice:");
//   step = "menu";
// }

// input.addEventListener("keydown", (e) => {
//   if (e.key !== "Enter") return;

//   const value = input.value.trim();
//   print("> " + value);
//   input.value = "";

//   switch (step) {
//     case "menu": handleMenu(value); break;
//     case "name": temp.name = value; askAccNo(); break;
//     case "accNo": validateAccNo(value); break;
//     case "balance": createAccount(value); break;
//     case "depositAcc": askDepositAmount(value); break;
//     case "depositAmount": temp.account.deposit(Number(value)); showMenu(); break;
//     case "withdrawAcc": askWithdrawAmount(value); break;
//     case "withdrawAmount": temp.account.withdraw(Number(value)); showMenu(); break;
//     case "displayAcc": displayAccount(value); break;
//   }
// });

// function handleMenu(choice) {
//   switch (choice) {
//     case "1":
//       temp = {};
//       print("Enter Name:");
//       step = "name";
//       break;
//     case "2":
//       print("Enter Account Number:");
//       step = "depositAcc";
//       break;
//     case "3":
//       print("Enter Account Number:");
//       step = "withdrawAcc";
//       break;
//     case "4":
//       print("Enter Account Number:");
//       step = "displayAcc";
//       break;
//     case "5":
//       clearTerminal();
//       print("👋 Exiting... Goodbye!");
//       input.disabled = true;
//       break;
//     default:
//       print("⚠️ Invalid choice!");
//       showMenu();
//   }
// }

// function askAccNo() {
//   print("Enter Account Number:");
//   step = "accNo";
// }

// function validateAccNo(value) {
//   const accNo = Number(value);
//   if (accounts.some(a => a.accountNum === accNo)) {
//     print("❌ Account number already exists!");
//     showMenu();
//     return;
//   }
//   temp.accountNum = accNo;
//   print("Enter Initial Deposit:");
//   step = "balance";
// }

// function createAccount(balance) {
//   const bal = Number(balance);
//   if (bal < 0) {
//     print("❌ Initial balance cannot be negative!");
//     showMenu();
//     return;
//   }
//   const acc = new BankAccount(temp.name, temp.accountNum, bal);
//   accounts.push(acc);
//   clearTerminal();
//   print("✅ Account created successfully!");
//   showMenu();
// }

// function askDepositAmount(accNo) {
//   const acc = accounts.find(a => a.accountNum === Number(accNo));
//   if (!acc) {
//     print("❌ Account not found!");
//     showMenu();
//     return;
//   }
//   temp.account = acc;
//   print("Enter amount to deposit:");
//   step = "depositAmount";
// }

// function askWithdrawAmount(accNo) {
//   const acc = accounts.find(a => a.accountNum === Number(accNo));
//   if (!acc) {
//     print("❌ Account not found!");
//     showMenu();
//     return;
//   }
//   temp.account = acc;
//   print("Enter amount to withdraw:");
//   step = "withdrawAmount";
// }

// function displayAccount(accNo) {
//   clearTerminal();
//   const acc = accounts.find(a => a.accountNum === Number(accNo));
//   if (!acc) {
//     print("❌ Account not found!");
//   } else {
//     acc.display();
//   }
//   showMenu();
// }


// ================= SLIDER LOGIC =================

const slider = document.getElementById("slider");
const next = document.querySelector(".next");
const prev = document.querySelector(".prev");

const scrollAmount = 220;

if (slider && next && prev) {
  next.addEventListener("click", () => {
    slider.scrollBy({ left: scrollAmount, behavior: "smooth" });
  });

  prev.addEventListener("click", () => {
    slider.scrollBy({ left: -scrollAmount, behavior: "smooth" });
  });
}



/*************************************************
 *               CGPA CALCULATOR
 *************************************************/

// const cgpaBox = document.querySelector(".container2");
// const cgpaTerminal = cgpaBox.querySelector("#terminal");
// const cgpaInput = cgpaBox.querySelector("#input");
// const cgpaRunBtn = cgpaBox.querySelector("#runBtn");

// let cgpaStep = "";
// let totalCourses = 0;
// let current = 1;
// let totalCredits = 0;
// let totalGradePoints = 0;

// function cgpaPrint(text = "") {
//   cgpaTerminal.innerHTML += `<div>${text}</div>`;
//   cgpaTerminal.scrollTop = cgpaTerminal.scrollHeight;
// }

// function clearCGPA() {
//   cgpaTerminal.innerHTML = "";
// }

// cgpaRunBtn.addEventListener("click", () => {
//   clearCGPA();
//   totalCourses = 0;
//   current = 1;
//   totalCredits = 0;
//   totalGradePoints = 0;
//   cgpaInput.disabled = false;
//   cgpaInput.focus();
//   cgpaPrint("===== CGPA CALCULATOR =====");
//   cgpaPrint("Enter number of courses:");
//   cgpaStep = "courses";
// });

// cgpaInput.addEventListener("keydown", (e) => {
//   if (e.key !== "Enter") return;

//   const value = cgpaInput.value.trim();
//   cgpaPrint("> " + value);
//   cgpaInput.value = "";

//   if (cgpaStep === "courses") {
//     totalCourses = Number(value);
//     cgpaPrint(`Enter credits for course ${current}:`);
//     cgpaStep = "credit";
//   }
//   else if (cgpaStep === "credit") {
//     totalCredits += Number(value);
//     cgpaPrint(`Enter grade point for course ${current}:`);
//     cgpaStep = "grade";
//   }
//   else if (cgpaStep === "grade") {
//     totalGradePoints += Number(value) * Number(value);
//     current++;

//     if (current > totalCourses) {
//       const cgpa = totalGradePoints / totalCredits;
//       cgpaPrint("============================");
//       cgpaPrint("Total Credits: " + totalCredits);
//       cgpaPrint("CGPA: " + cgpa.toFixed(2));
//       cgpaPrint("============================");
//       cgpaInput.disabled = true;
//     } else {
//       cgpaPrint(`Enter credits for course ${current}:`);
//       cgpaStep = "credit";
//     }
//   }
// });



