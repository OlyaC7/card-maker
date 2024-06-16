import { createOpenNewEditor } from '../redux/actionCreators'
import { EditorType } from '../types'
import { Action } from '../redux/actions'

function OpenJSON(setOpenedTemplate: (arg0: EditorType) => Action) {
  const a = document.createElement('input')
  a.type = 'file'
  a.id = 'file-js-open'
  a.multiple = false
  document.body.appendChild(a)
  a.click()
  a.addEventListener('change', (e) => {
    const fileName = (e.target as HTMLInputElement).files![0]
    const reader = new FileReader()
    reader.readAsText(fileName)
    reader.onload = () => {
      const textJson = reader.result
      let newEditor: EditorType
      if (typeof textJson === 'string') {
        try {
          newEditor = JSON.parse(textJson)
          if (
            newEditor?.canvas &&
            newEditor?.selectBlock &&
            newEditor?.templates
          ) {
            console.log(newEditor)
            console.log(createOpenNewEditor(newEditor))
            setOpenedTemplate(newEditor)
          } else {
            alert('JSON-файл содержит не все нужные поля')
          }
        } catch (error) {
          alert(`Файл "${fileName.name}" не верен, выберите другой!`)
          return undefined
        }
      }
    }
    reader.onerror = () => {
      alert(reader.error)
    }
    a.remove()
  })
  a?.remove()
}

export default OpenJSON
