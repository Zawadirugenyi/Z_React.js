import ExpenseItem from "./components/ExpenseItem"; 


function App() {
  const expenses = [
    {
      id: 'e1',
      title: 'Donation', 
      amount: 12954.67, 
      date: new Date(2021, 4, 9)
    },

    {
      id: 'e2',
      title: 'Car Insurance',
      amount: 294.67, 
      date: new Date(2018, 0, 28)
    },

    {
      id: 'e3',
      title: ' Clothes shopping', 
      amount: 294.67, 
      date: new Date(2020, 12, 17)
    },

    {
      id: 'e4',
      title: ' Savings ', 
      amount: 30094.67, 
      date: new Date(2023, 6, 28)
    },
  ];
  
  return (
     

    <div>
      <h2>Let's get started!</h2>

     <ExpenseItem 
     title={expenses[0].title} 
     amount={expenses[0].amount} 
     date={expenses[0].date} 
     > </ExpenseItem>

     <ExpenseItem
     title={expenses[1].title} 
     amount={expenses[1].amount} 
     date={expenses[1].date} 
     ></ExpenseItem>

     <ExpenseItem
      title={expenses[2].title} 
      amount={expenses[2].amount} 
      date={expenses[2].date} 
      > </ExpenseItem>

     <ExpenseItem 
     title={expenses[3].title} 
     amount={expenses[3].amount} 
     date={expenses[3].date}
      > </ExpenseItem>

    </div>
  );
}

export default App;
