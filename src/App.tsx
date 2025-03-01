import { useEffect, useMemo } from 'react'
import { useBudget } from './hooks/useBudget'
import BudgetForm from './components/BudgetForm'
import BudgetTracker from './components/BudgetTracker'
import ExpenseModal from './components/ExpenseModal'
import ExpenseList from './components/ExpenseList'
import FilterByCategory from './components/FilterByCategory'

function App() {
  const {state, dispatch} = useBudget()
  const isValidObject = useMemo(()=> state.budget>0, [state.budget])

  useEffect(() => {
    localStorage.setItem('budget', state.budget.toString())
    localStorage.setItem('expenses', JSON.stringify(state.expenses))
  },[state])

  const resetApp = () =>{dispatch({type: 'restart-app'}) }

  return (
    <>
      <header className="bg-blue-600 py-4 max-h-72">
        <h1 className="uppercase text-center font-black text-xl text-white">
          Planificador de gastos
        </h1>
      </header>

      <div className="flex max-md:flex-col justify-center gap-2">
        <div className="w-[50%] max-md:w-[100%] bg-white shadow-lg rounded-lg mt-4 p-4 max-sm:mt-0">              
            {isValidObject? <BudgetTracker /> : <BudgetForm />}              
          <FilterByCategory />
        </div>

        {isValidObject && (
          <main className='w-[50%] max-md:w-[100%] mt-4'>            
            <ExpenseList/>
            <ExpenseModal/>
          </main>
        )}
      </div>

      <div className="w-full flex">
        <button
            type="button"
            className='bg-pink-600 max-md:w-full mt-3 mx-auto py-2 px-4 text-white uppercase font-bold rounded-lg cursor-pointer mx-auto'
            onClick={resetApp}
        >
            Resetear App
        </button>
      </div>
     
    </>
  )
}

export default App
