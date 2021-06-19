import React, { useState } from "react";
import ExpensesList from "./ExpensesList";
import ExpensesFilter from "./ExpenseFilter";
import ExpensesChart from "./ExpensesChart";
import "./Expenses.css";
import Card from "../UI/Card";

function Expenses(props) {
  const [currentOption, setOption] = useState("2020");
  const filterSelect = (year) => {
    console.log("year selected");
    setOption(year);
    console.log(year);
  };
  const filterYear = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === currentOption;
  });

  return (
    <Card className="expenses">
      <div>
        <ExpensesFilter selection={currentOption} onFilter={filterSelect} />
      </div>
      <ExpensesChart expense={filterYear} />
      <ExpensesList item={filterYear} />
    </Card>
  );
}

export default Expenses;
