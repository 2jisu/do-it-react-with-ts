import {FC} from 'react'
import {Div, Title, Subtitle} from '../components'

export type ClockProps = {
  today: Date
}

const Clock: FC<ClockProps> = ({today}) => {
  return (
    <Div className="flex flex-col items-center justify-center h-screen bg-primary text-white">
      <Title className="text-5xl">{today.toLocaleTimeString()}</Title>
      <Subtitle className="mt-4 text-2xl">{today.toLocaleDateString()}</Subtitle>
    </Div>
  )
}
export default Clock
