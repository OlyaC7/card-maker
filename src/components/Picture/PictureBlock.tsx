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

  // не будет работать resize, потому что localPosition внутри SelectedBlock, он нужен здесь

  // const [localPosition, setLocalPosition] = useState(objectInfo.position)

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
