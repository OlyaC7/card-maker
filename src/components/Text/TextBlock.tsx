import React, { useRef, useState } from 'react'
import { PositionType, TextType } from '../../types'
import styles from './textBlock.module.css'
import { useDragAndDrop } from '../../hooks/useDragAndDrop'
type TextBlockProps = {
  textBlock: TextType
}

function TextBlock(props: TextBlockProps) {
  const { id, color, fontFamily, text, position, size, backgroundColor } =
    props.textBlock
  const ref = useRef<HTMLDivElement>(null)
  const [settings, setSettings] = useState({ position, size })
  useDragAndDrop(ref, (delta: PositionType) => {
    const newSettings = {
      position: {
        x: settings.position.x + delta.x,
        y: settings.position.y + delta.y,
      },
      size: settings.size,
    }

    setSettings(newSettings)
  })
  const refSizeTopLeft = useRef<HTMLDivElement>(null)
  useDragAndDrop(refSizeTopLeft, (delta: PositionType) => {
    const newSettings = {
      position: {
        x: settings.position.x + delta.x,
        y: settings.position.y + delta.y,
      },
      size: {
        width: settings.size.width - delta.x,
        height: settings.size.height - delta.y,
      },
    }

    setSettings(newSettings)
  })
  const refSizeTopRight = useRef<HTMLDivElement>(null)
  useDragAndDrop(refSizeTopRight, (delta: PositionType) => {
    const newSettings = {
      position: {
        x: settings.position.x,
        y: settings.position.y + delta.y,
      },
      size: {
        width: settings.size.width + delta.x,
        height: settings.size.height - delta.y,
      },
    }

    setSettings(newSettings)
  })
  const refSizeBottnRight = useRef<HTMLDivElement>(null)
  useDragAndDrop(refSizeBottnRight, (delta: PositionType) => {
    const newSettings = {
      position: {
        x: settings.position.x,
        y: settings.position.y,
      },
      size: {
        width: settings.size.width + delta.x,
        height: settings.size.height + delta.y,
      },
    }

    setSettings(newSettings)
  })
  const refSize = useRef<HTMLDivElement>(null)
  useDragAndDrop(refSize, (delta: PositionType) => {
    const newSettings = {
      position: {
        x: settings.position.x + delta.x,
        y: settings.position.y,
      },
      size: {
        width: settings.size.width - delta.x,
        height: settings.size.height + delta.y,
      },
    }

    setSettings(newSettings)
  })

  // const [postContent, setPostContent] = useState(text)
  // function handleChange(e) {
  //   setPostContent(e.target.value)
  // }

  return (
    <div
      id={id}
      ref={ref}
      style={{
        width: settings.size.width,
        height: settings.size.height,
        top: settings.position.y,
        position: 'absolute',
        left: settings.position.x,
      }}
    >
      <textarea
        className={styles.textarea}
        style={{
          color,
          fontFamily,
          backgroundColor,
        }}
        value={text}
      ></textarea>
      <span
        ref={refSizeTopLeft}
        className={styles.spanC}
        style={{
          position: 'absolute',
          top: -5,
          left: -5,
        }}
      ></span>
      <span
        ref={refSizeTopRight}
        className={styles.spanC}
        style={{
          position: 'absolute',
          top: -5,
          left: -5 + settings.size.width,
        }}
      ></span>
      <span
        ref={refSizeBottnRight}
        className={styles.spanC}
        style={{
          position: 'absolute',
          top: -5 + settings.size.height,
          left: -5 + settings.size.width,
        }}
      ></span>
      <span
        ref={refSize}
        className={styles.spanC}
        style={{
          position: 'absolute',
          top: -5 + settings.size.height,
          left: -5,
        }}
      ></span>
    </div>
  )
}

export default TextBlock
