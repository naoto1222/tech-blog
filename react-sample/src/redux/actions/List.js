export function submitText(text, texts) {
  return {
    type: "SUBMIT_TEXT",
    text: text,
    texts: texts
  }
}

export function dndList(index, atIndex, item, texts) {
  return {
    type: "DND_LIST",
    index: index,
    atIndex: atIndex,
    item: item,
    texts: texts
  }
}