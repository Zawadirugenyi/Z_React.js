import Expenses from "./components/Expenses";
 
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

      {
        id: 'e5',
        title: ' Tuition', 
        amount: 120094.67, 
        date: new Date(2022, 6, 8)
      },

      {
        id: 'e5',
        title: ' Personal Project ',
        amount: 60094.67, 
        date: new Date(2023, 11, 2)
      },
  ];
  
  return (
     

    <div>
      <h2>Let's get started!</h2>
      <Expenses items = {expenses}/>

    </div>
  );
}

export default App;
