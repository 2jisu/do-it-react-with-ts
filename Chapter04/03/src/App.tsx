import NumberState from './pages/NumberState'
import InputTest from './pages/InputTest'
import ShowHideModal from './pages/ShowHideModal'
import RadioInputTest from './pages/RadioInputTest'
import HigherOrderRadioInputTest from './pages/HigherOrderRadioInputTest'
import BasicForm from './pages/BasicForm'
import ObjectState from './pages/ObjectState'
import ArrayState from './pages/ArrayState'

export default function App() {
  return (
    <div>
      <ArrayState />
      <ObjectState />
      <BasicForm />
      <HigherOrderRadioInputTest />
      <RadioInputTest />
      <ShowHideModal />
      <InputTest />
      <NumberState />
    </div>
  )
}
