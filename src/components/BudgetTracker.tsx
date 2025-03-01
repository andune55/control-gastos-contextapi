import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'
import { useBudget } from '../hooks/useBudget';
import AmountDisplay from './AmountDisplay';
import "react-circular-progressbar/dist/styles.css"

export default function BudgetTracker() {
    const { state, remainingBudget, totalExpenses, dispatch } = useBudget()

    const percentage = +((totalExpenses / state.budget) * 100).toFixed(2)
    //console.log(percentage)

    const resetApp = () =>{dispatch({type: 'restart-app'}) }

    return (
    <div className="flex max-sm:flex-col gap-5">
        <div className="flex justify-center max-h-[200px] max-sm:max-h-[150px]">
            <CircularProgressbar 
                value={percentage}
                styles={buildStyles({
                    pathColor: percentage >= 80? '#dc2626' : '#3b82f6',
                    trailColor: '#f5f5f5',
                    textSize: 8,
                    textColor: percentage >= 80? '#dc2626' : '#3b82f6'
                })}
                text={`${percentage}% gastado`}       
            />
        </div>

        <div className="flex flex-col justify-items-start items-center gap-2">
            {/* <button
                type="button"
                className='bg-pink-600 w-full p-2 text-white uppercase font-bold rounded-lg cursor-pointer'
                onClick={resetApp}
            >
                Resetear App
            </button> */}

            <AmountDisplay
                label="Presupuesto"
                amount={state.budget}
            />
            <AmountDisplay
                label="Disponible"
                amount={remainingBudget}
            />
            <AmountDisplay
                label="Gastado"
                amount={totalExpenses}            
            />
        </div>
        
    </div>
    )
}
