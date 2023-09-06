export default class UserInfo {
  constructor({ userName, userInfo }) {
    this._userName = userName;
    this._userInfo = userInfo;
  }
  getUserInfo() {
    const userInfo = {
      name: this._userName.textContent,
      info: this._userInfo.textContent,
    };
    console.log(userInfo);
    return userInfo;
  }
  setUserInfo(data) {
    this._userName.textContent = data.name;
    this._userInfo.textContent = data.info;
  }
}
