export function submitText(text, texts) {
  return {
    type: "SUBMIT_TEXT",
    text: text,
    texts: texts
  };
}