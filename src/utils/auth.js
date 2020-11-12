const USER_DATA_KEY = {
  Username: "localStorageUserName",
  Token: "localStorageUserToken",
  Userhead: "localStorageUserHead",
  UserID: "localStorageUserID",
}

export function getuser() {
  console.log("获取用户信息")
  return {
    Username: window.localStorage.getItem(USER_DATA_KEY.Username),
    Token: window.localStorage.getItem(USER_DATA_KEY.Token),
    Userhead: window.localStorage.getItem(USER_DATA_KEY.Userhead),
    UserID: window.localStorage.getItem(USER_DATA_KEY.UserID)
  }
}

export function login(token, Username, Userhead, UserID) {
  console.log("成功记录用户信息")
  window.localStorage.setItem(USER_DATA_KEY.Token, token)
  window.localStorage.setItem(USER_DATA_KEY.Username, Username)
  window.localStorage.setItem(USER_DATA_KEY.Userhead, Userhead)
  window.localStorage.setItem(USER_DATA_KEY.UserID, UserID)
  return token
}

export function logout() {
  window.localStorage.removeItem(USER_DATA_KEY.Token)
  window.localStorage.removeItem(USER_DATA_KEY.Username)
  window.localStorage.removeItem(USER_DATA_KEY.Userhead)
  window.localStorage.removeItem(USER_DATA_KEY.UserID)
  window.localStorage.clear()
  console.log("退出登录")
}