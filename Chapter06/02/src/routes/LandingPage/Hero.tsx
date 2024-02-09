import {Div} from '../../components'
import {Button} from '../../theme/daisyui'
import * as D from '../../data'
import {Link} from 'react-router-dom'

export default function Hero() {
  return (
    <div className="flex items-center p-4">
      <Div minWidth="30rem" width="30rem" maxWidth="30rem">
        <div className="flex flex-col justify-center p-4 font-bold">
          <p className="text-3xl italic text-center line-clamp-5">
            {D.randomSentence(20)}
          </p>
          <div className="flex items-center justify-center mt-4">
            <Link to="/board">
              <Button className="btn-primary btn-outline">go to Board</Button>
            </Link>
          </div>
        </div>
      </Div>
      <Div
        src={D.randomImage(2000, 1600, 100)}
        className="w-full ml-4"
        minHeight="20rem"
        height="20rem"
      />
    </div>
  )
}
