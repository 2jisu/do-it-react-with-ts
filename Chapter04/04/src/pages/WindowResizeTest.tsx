import {Title, Subtitle} from '../components'
import {useWindowResize} from '../hooks'

export default function WindowResizeTest() {
  const [width, height] = useWindowResize()

  return (
    <section className="mt-4">
      <Title>WindowResizetest</Title>
      <Subtitle className="mt-4">
        width: {width}, height: {height}
      </Subtitle>
    </section>
  )
}
