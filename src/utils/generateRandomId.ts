function generateRandomId() {
  return 'id' + Math.random().toString(16).slice(2)
}

export { generateRandomId }
