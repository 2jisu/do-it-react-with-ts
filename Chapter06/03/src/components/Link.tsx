import {FC} from 'react'
import {LinkProps as RPLinkProps, useMatch, useResolvedPath} from 'react-router-dom'
import {Link as RPLInk} from 'react-router-dom'

export type LinkProps = RPLinkProps & {}

export const Link: FC<LinkProps> = ({className: _className, to, ...props}) => {
  const resolved = useResolvedPath(to)
  console.log('resolved', resolved)
  const match = useMatch({path: resolved.pathname, end: true})
  console.log('match', match)
  const className = [_className, match ? 'btn-active' : ''].join(' ')
  return <RPLInk {...props} to={to} className={className} />
}
