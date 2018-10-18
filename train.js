const recognizer = fr.FaceRecognizer()

trainDataByClass.forEach((faces, label) => {
  const name = classNames[label]
  recognizer.addFaces(faces, name)
})
