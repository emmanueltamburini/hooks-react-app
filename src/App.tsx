import { CounterApp } from "./01-useState/CounterApp"
import { CounterWithCustomHookApp } from "./01-useState/CounterWithCustomHookApp"
import { SimpleForm } from './02-useEffect/SimpleForm';
import { SimpleFormWithCustomHook } from "./02-useEffect/SimpleFormWithCustomHook";

function App() {
  return (
    <>
      {/* <CounterApp /> */}
      {/* <CounterWithCustomHookApp /> */}
      {/* <SimpleForm /> */}
      <SimpleFormWithCustomHook />
    </>
  )
}

export default App
