export function submitId(text) {
  return {
    type: "SUBMIT_ID",
    id: text
  };
}

export function submitPass(text) {
  return {
    type: "SUBMIT_PASS",
    pass: text
  };
}

export function loginBool(bool) {
  return {
    type: "LOGIN_BOOL",
    bool: bool
  };
}