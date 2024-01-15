import React from 'react'
import ReactDOM from 'react-dom/client'

// 물리 DOM
let pPhysicalDOM = document.createElement('p')
pPhysicalDOM.innerText = 'Hello physical DOM wolrd!'
document.body.appendChild(pPhysicalDOM)

// 가상 DOM
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
const pVirtualDOM = React.createElement('p', null, 'Hello virtual DOM world!')
// root.render: 가상 DOM 을 물리 DOM 으로 전환해 주는 기능 (물리 DOM 의 appendChild 와 같은 기능), 가상 DOM 객체의 렌더링을 수행
// 렌더링: 화면에 무엇인가를 보이게 하는 것
root.render(pVirtualDOM)
