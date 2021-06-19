import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpenses = (props) => {
  const [form, setForm] = useState(false);
  const saveExpenseData = (enteredExpenseData) => {
    const expenseData = { ...enteredExpenseData, id: Math.random().toString() };
    props.onAddExpense(expenseData);
    setForm(false);
  };
  const formDisplay = () => {
    setForm(true);
  };
  const onCancelHandler = () => {
    setForm(false);
  };

  return (
    <div className="new-expense">
      {form && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseData}
          onCancel={onCancelHandler}
        />
      )}
      {!form && (
        <button type="submit" on onClick={formDisplay}>
          Add New Expense
        </button>
      )}
    </div>
  );
};

export default NewExpenses;
