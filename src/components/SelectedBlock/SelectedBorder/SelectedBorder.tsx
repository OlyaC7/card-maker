import { useRef } from "react";
import css from "./SelectedBorder.module.css";
import { useDragAndDrop } from "../../../hooks/useDragAndDrop";
import { PositionType, SizeType } from "../../../types";

type BorderSelectedProps = {
    position: PositionType,
    updatePosition: (position: PositionType) => void,
    size: SizeType,
    updateSize: (size: SizeType) => void,
}

function BorderSelected({
    position,
    updatePosition,
    size,
    updateSize
}: BorderSelectedProps) {
    const topLeft = useRef<HTMLDivElement>(null)

    useDragAndDrop({
        ref: topLeft,
        onMove: (delta) => {
            const newPosition = {
                x: position.x + delta.x,
                y: position.y + delta.y
            }
            const newSize = {
                width: size.width - delta.x,
                height: size.height - delta.y
            }
            updatePosition(newPosition)
            updateSize(newSize)
        },
        onMouseUp: () => {
            // обновить состояние в Redux
        }
    })

    return (
        <>
            <div
                ref={topLeft}
                className={css["top-left"] + " " + css.resize}
            />
            <div
                className={css["top-right"] + " " + css.resize}
            />
            <div className={css["bottom-right"] + " " + css.resize} />
            <div className={css["bottom-left"] + " " + css.resize} />
        </>
    );
}

export {
    BorderSelected
}