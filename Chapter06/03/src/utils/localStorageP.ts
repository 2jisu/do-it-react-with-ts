// 저장소에 데이터를 읽는 함수
export const readItemFromStorageP = (key: string) =>
  new Promise<string | null>(async (resolve, reject) => {
    try {
      const value = localStorage.getItem(key)
      resolve(value)
    } catch (e) {
      reject(e)
    }
  })

// 저장소에 데이터를 쓰는 함수
export const writeItemToStorageP = (key: string, value: string) =>
  new Promise<string>(async (resolve, reject) => {
    try {
      localStorage.setItem(key, value)
      resolve(value)
    } catch (e) {
      reject(e)
    }
  })

export const readStringP = readItemFromStorageP
export const writeStringP = writeItemToStorageP
