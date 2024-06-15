import { EditorType } from '../types'

export default function SaveJSON(editor: EditorType) {
  const name = 'card.json'
  const sessionText = JSON.stringify(editor)
  const type = 'text/plan'

  const a = document.createElement('a')
  const file = new Blob([sessionText], { type })
  a.href = URL.createObjectURL(file)
  a.download = name
  document.body.appendChild(a)
  a.click()
  a.remove()
}
