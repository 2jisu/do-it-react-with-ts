import type {FC, DetailedHTMLProps, ButtonHTMLAttributes, PropsWithChildren} from 'react'

export type ReactButtonProps = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>

export type ButtonProps = ReactButtonProps & {}

export const Button: FC<PropsWithChildren<ButtonProps>> = ({
  className: _className,
  ...buttonProps
}) => {
  const className = ['btn', _className].join(' ')
  return <button {...buttonProps} className={className} />
}
