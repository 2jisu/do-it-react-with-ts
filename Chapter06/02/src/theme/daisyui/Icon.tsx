import type {FC} from 'react'
import type {ButtonProps} from './Button'
import type {IconProps as CIconProps} from '../../components'
import {Button} from './Button'
import {Icon as CIcon} from '../../components'

export type IconProps = ButtonProps &
  CIconProps & {
    iconClassName?: string
  }

export const Icon: FC<IconProps> = ({name, iconClassName, className, ...buttonProps}) => {
  const btnClassName = ['btn-circle', className].join(' ')
  return (
    <Button {...buttonProps} className={btnClassName}>
      <CIcon className={iconClassName} name={name} />
    </Button>
  )
}
