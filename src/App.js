import { Routes, Route } from "react-router-dom"

import DataArrayContextProvider from "./context/DataArrayContext"
import EmployeeCreation from './components/EmployeeCreation'
import EmployeesTable from "./components/EmployeesTable"

function App() {
  
    return (
        <DataArrayContextProvider>
            <Routes>
                <Route path="/" element={ <EmployeeCreation /> } />
                <Route path="/employees" element={ <EmployeesTable /> }/>
            </Routes>
        </DataArrayContextProvider>
    )
}

export default App
