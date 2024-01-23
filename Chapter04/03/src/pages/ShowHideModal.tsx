import {useCallback} from 'react'
import {Title, Subtitle} from '../components'
import {Button, Modal, ModalContent, ModalAction} from '../theme/daisyui'
import {useToggle} from '../hooks'
import * as D from '../data'

export default function ShowHideModal() {
  const [open, toggleOpen] = useToggle(false)
  const onAccept = useCallback(() => {
    toggleOpen()
  }, [toggleOpen])

  return (
    <section className="mt-4">
      <Title>ShowHideModal</Title>
      <div className="flex justify-center p-4">
        <Button className="btn-primary" onClick={toggleOpen}>
          open modal
        </Button>
      </div>
      <Modal open={open}>
        <ModalContent
          closeIconClassName="btn-primary btn-outline"
          onCloseIconClicked={toggleOpen}>
          <Subtitle>Modal </Subtitle>
          <p>{D.randomParagraphs()}</p>
          <ModalAction>
            <button className="btn btn-primary" onClick={onAccept}>
              Accept
            </button>
            <button className="btn btn-primary" onClick={toggleOpen}>
              Close
            </button>
          </ModalAction>
        </ModalContent>
      </Modal>
    </section>
  )
}
