import {Subtitle, Title} from '../components'
import {useResponsive} from '../contexts'

export default function ResponsiveContextTest() {
  const breakpoint = useResponsive()
  return (
    <section className="mt-4">
      <Title>ResponsiveContextTest</Title>
      <div className="mt-4">
        <Subtitle>breakpoint: {breakpoint}</Subtitle>
      </div>
    </section>
  )
}
