import { useEffect, useMemo } from 'react'
import { useBudget } from './hooks/useBudget'
import BudgetForm from './components/BudgetForm'
import BudgetTracker from './components/BudgetTracker'
import ExpenseModal from './components/ExpenseModal'
import ExpenseList from './components/ExpenseList'
import FilterByCategory from './components/FilterByCategory'

function App() {
  const {state} = useBudget()
  const isValidObject = useMemo(()=> state.budget>0, [state.budget])

  useEffect(() => {
    localStorage.setItem('budget', state.budget.toString())
    localStorage.setItem('expenses', JSON.stringify(state.expenses))
  },[state])

  return (
    <>
      <header className="bg-blue-600 py-4 max-h-72">
      <h1 className="uppercase text-center font-black text-xl text-white">
        Planificador de gastos
      </h1>
      </header>

      <div className="flex max-md:flex-col justify-around">
        <div>
          <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg mt-5 p-5">      
            {isValidObject? <BudgetTracker /> : <BudgetForm />}    
          </div>
          <FilterByCategory />
        </div>

        {isValidObject && (
          <main className='py-5'>
            
            <ExpenseList/>
            <ExpenseModal/>
          </main>
        )}

      </div>

      
     
    </>
  )
}

export default App
