export default function VariousInputs() {
  return (
    <div>
      <p>VariousInputs</p>
      <div>
        <input type="text" placeholder="enter some texts" />
        <input type="password" placeholder="enter your password" />
        <input type="email" placeholder="enter email address" />
        <input type="range" />
        <input type="button" value="I'm a button" />
        {/* button: 자식 요소를 가질 수 있음 <-> input type="button": 자식 요소를 가질 수 없음 */}
        <input type="checkbox" value="I'm a checkbox" defaultChecked />
        <input type="radio" value="I'm a radio" defaultChecked />
        <input type="file" />
      </div>
    </div>
  )
}
