export const nameRegExp = /^[A-ZА-ЯЁ][а-яА-ЯёЁa-zA-Z-]+$/
export const loginRegExp = /^[A-Za-z][A-Za-z0-9_-]{3,20}/
export const phoneRegExp =
  /^(\+7|7|8)?[\s-]?\(?[489][0-9]{2}\)?[\s-]?[0-9]{3}[\s-]?[0-9]{2}[\s-]?[0-9]{2}$/
export const passwordRegExp = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,40}$/
