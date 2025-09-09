import { currentUser, statsData, revenueData, expenseData } from "./data.js";
import { createCard, createTable } from "./components.js";

// Welcome user
document.getElementById('welcomeUser').innerText = `Welcome Back! ${currentUser}`;

// Render stat cards
const statsContainer = document.getElementById('statsContainer');
statsData.forEach(stat => statsContainer.appendChild(createCard(stat)));

// Render tables
const tablesContainer = document.getElementById('tablesContainer');
tablesContainer.appendChild(createTable("Latest Revenue", revenueData, ["Date", "Amount", "Source"]));
tablesContainer.appendChild(createTable("Latest Expense", expenseData, ["Date", "Amount", "Category"]));

