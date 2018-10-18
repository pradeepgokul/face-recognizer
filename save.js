const modelState = recognizer.serialize()
fs.writeFileSync('model.json', JSON.stringify(modelState))
