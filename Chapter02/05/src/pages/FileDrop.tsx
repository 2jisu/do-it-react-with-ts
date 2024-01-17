import type {DragEvent} from 'react'

export default function FileDrop() {
  const onDragOver = (e: DragEvent) => e.preventDefault()

  const onDrop = (e: DragEvent) => {
    e.preventDefault() // 새 창에 드롭한 이미지가 나타나는 것 방지
    const files = e.dataTransfer.files
    if (files) {
      for (let i = 0; i < files.length; i++) {
        const file: File | null = files.item(i)
        console.log(`file[${i}]: `, file)
      }
    }
  }

  return (
    <div>
      <p>FileDrop</p>
      <div onDrop={onDrop} onDragOver={onDragOver}>
        <h1>Drop image files over Me</h1>
      </div>
    </div>
  )
}
