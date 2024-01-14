import { ReactNode, useEffect, useRef, useState } from 'react'
import styles from './SelectedBlock.module.css'
import { BorderSelected } from './SelectedBorder/SelectedBorder'
import { ObjectType, PositionType, SizeType } from '../../types'
import { useDragAndDrop } from '../../hooks/useDragAndDrop'

type SelectedBlockProps = {
    selected: boolean,
    changeSelection: () => void,
    component: ReactNode,
    objectInfo: ObjectType,
    updateSize: (size: SizeType) => void,
    updatePosition: (position: PositionType) => void,
}

function SelectedBlock({
    component,
    selected,
    changeSelection,
    objectInfo,
    updatePosition,
    updateSize,
}: SelectedBlockProps) {
    const ref = useRef<HTMLDivElement>(null)

    const [localPosition, setLocalPosition] = useState(objectInfo.position)
    const [localSize, setLocalSize] = useState(objectInfo.size)

    useDragAndDrop({
        ref,
        onMouseUp: () => {
            updatePosition(localPosition)
        },
        onMove: (delta) => {
            setLocalPosition({
                x: localPosition.x + delta.x,
                y: localPosition.y + delta.y
            })
        }
    })

    useEffect(() => {
        const element = ref.current

        element?.addEventListener('click', changeSelection)

        return () => {
            element?.removeEventListener('click', changeSelection)
        }
    }, [])

    return (
        <div
            ref={ref}
            className={styles.block}
            style={{
                height: localSize.height + 'px',
                width: localSize.width + 'px',
                left: localPosition.x + 'px',
                top: localPosition.y + 'px',
            }}
        >
            {component}
            {selected && (
                <BorderSelected
                    position={localPosition}
                    size={localSize}
                    updatePosition={setLocalPosition}
                    updateSize={setLocalSize}
                />
            )}
        </div>
    )
}

export {
    type SelectedBlockProps,
    SelectedBlock
}