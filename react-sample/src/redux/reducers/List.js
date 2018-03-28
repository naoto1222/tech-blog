export default function listReducer(state = {text: {}, texts: []}, action) {
  const { type, text, texts, index, atIndex, item } = action

  switch (type) {
    case "SUBMIT_TEXT":
      texts.unshift(text)
      return Object.assign({}, state, {texts: texts})
    case "DND_LIST":
      texts.splice(index, 1)
      texts.splice(atIndex, 0, item)
      return Object.assign({}, state, {texts: texts})
    default:
      return state
  }
}