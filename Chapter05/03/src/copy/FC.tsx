import type {FC, PropsWithChildren} from 'react'

export type CopyMeProps = {}
const CopyMe: FC<PropsWithChildren<CopyMeProps>> = ({...props}) => {
  return <div {...props} />
}
export default CopyMe
