import * as L from './localStorageP'

// 객체를 저장하는 함수
export const readObjectP = <T extends object>(key: string) =>
  new Promise<T | null>((resolve, reject) => {
    L.readStringP(key)
      .then(value => resolve(value ? JSON.parse(value) : null))
      .catch(reject)
  })

export const writeObjectP = (key: string, value: object) =>
  L.writeStringP(key, JSON.stringify(value))
