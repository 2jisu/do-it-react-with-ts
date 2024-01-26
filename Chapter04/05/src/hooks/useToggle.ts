import {useState, useCallback} from 'react'

// useToggle 커스텀 훅
export const useToggle = (initialChecked: boolean = false): [boolean, () => void] => {
  const [checked, setChecked] = useState<boolean>(initialChecked)
  const toggleChecked = useCallback(() => setChecked(checked => !checked), [])
  return [checked, toggleChecked]
}
