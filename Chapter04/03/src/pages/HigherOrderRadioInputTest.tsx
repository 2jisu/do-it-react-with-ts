import {useMemo, useCallback, useState} from 'react'
import {Title, Subtitle} from '../components'
import * as D from '../data'

export default function RadioInputTest() {
  const jobTitles = useMemo(() => D.makeArray(4).map(D.randomJobTitle), [])

  // 고차 함수로 라디오 버튼 선택 로직 구현
  const [selectedIndex, setSelectedIndex] = useState<number>(0)
  const onChange = useCallback(
    (index: number) => () => setSelectedIndex(notUsed => index),
    []
  )

  const radioInputs = useMemo(
    () =>
      jobTitles.map((value, index) => (
        <label key={index} className="flex justify-start cursor-pointer lable">
          <input
            type="radio"
            name="higher jobs"
            className="mr-4 radio radio-primary"
            checked={index === selectedIndex}
            onChange={onChange(index)}
          />
          <span className="label-text">{value}</span>
        </label>
      )),
    [jobTitles, selectedIndex, onChange]
  )
  return (
    <section className="mt-4">
      <Title>RadioInputTest</Title>
      <div className="flex-col justify-center mt-4 flext">
        <Subtitle>What is your job?</Subtitle>
        <Subtitle className="mt-4">Selected Job: {jobTitles[selectedIndex]}</Subtitle>
        <div className="flex justify-center p-4 mt-4">
          <div className="flex flex-col mt-4">{radioInputs}</div>
        </div>
      </div>
    </section>
  )
}
