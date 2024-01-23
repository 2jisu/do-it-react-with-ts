// 전역 변수
const cache: Record<string, any> = {}

export const useOrCreate = <T>(key: string, callback: () => T): T => {
  // callback 함수를 한 번만 호출
  if (!cache[key]) cache[key] = callback()
  return cache[key] as T
}
