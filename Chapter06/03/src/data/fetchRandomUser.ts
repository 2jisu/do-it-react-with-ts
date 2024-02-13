export type IRandomUser = {
  email: string
  name: {title: string; first: string; last: string}
  picture: {large: string}
}
const convertRandomUser = (result: unknown) => {
  const {email, name, picture} = result as IRandomUser
  return {email, name, picture}
}
export const fetchRandomUser = (): Promise<IRandomUser> =>
  new Promise((resolve, reject) => {
    fetch('https://randomuser.me/api/')
      .then(res => res.json())
      .then((data: unknown) => {
        // console.log(data) // convertRandomUser를 구현하고자 할 때 사용합니다
        const {results} = data as {results: IRandomUser[]}
        resolve(convertRandomUser(results[0]))
      })
      .catch(reject)
  })
