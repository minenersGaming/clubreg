export const toBase64 = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = () => resolve(reader.result)
    reader.onerror = (error) => reject(error)
  })

export const convertToStaticFileUriC = (isStatic, old: string) => {
  if (!isStatic) {
    return old
  }
  //static-clubreg.tucm.cc doesn't seems to work at the moment
  //return old.replace("storage.googleapis.com", "static-clubreg.tucm.cc").replace("/assets", "https://static-clubreg.tucm.cc/assets")
  return old
    .replace("storage.googleapis.com", "storage.googleapis.com")
    .replace("/assets", "https://storage.googleapis.com/assets")
}

export const convertToStaticFileUri = (old: string) => {
  return convertToStaticFileUriC(true, old)
}
