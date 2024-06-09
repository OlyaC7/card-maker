import { PictureType } from '../../types'
import {
  SelectedBlock,
  SelectedBlockProps,
} from '../SelectedBlock/SelectedBlock'

type PictureBlockProps = Omit<SelectedBlockProps, 'component'> & {
  pictureBlock: PictureType
}

function PictureBlock(props: PictureBlockProps) {
  const {
    pictureBlock: { data },
  } = props

  return (
    <SelectedBlock
      {...props}
      component={
        <img
          src={data}
          style={{ width: '100%', height: '100%' }}
          draggable="false"
        ></img>
      }
    />
  )
}

export { PictureBlock }
