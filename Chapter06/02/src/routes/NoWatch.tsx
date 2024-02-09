import {useCallback} from 'react'
import {useNavigate} from 'react-router-dom'

export default function NoMatch() {
  const navigate = useNavigate()

  const goBack = useCallback(() => {
    navigate(-1)
  }, [navigate])
  return (
    <div className="flex flex-col p-4">
      <p className="p-4 text-xl text-center alert alert-error">Oops! No page found!</p>
      <div className="flex justify-center mt-4">
        <button className="ml-4 btn btn-primary btn-xs" onClick={goBack}>
          go Back
        </button>
      </div>
    </div>
  )
}
