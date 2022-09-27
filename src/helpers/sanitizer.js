function sanitizer(text) {
  return text.replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
export default sanitizer