import html2canvas from 'html2canvas'

export default function SaveIMG() {
  const canvasDiv = document.getElementById('canvas')
  html2canvas(canvasDiv as HTMLElement, {
    allowTaint: true,
    useCORS: true,
  }).then((canvasDiv) => {
    const dataURL = canvasDiv.toDataURL('image/jpeg')
    const link = document.createElement('a')
    link.href = dataURL
    link.download = 'card.jpg'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  })
}
