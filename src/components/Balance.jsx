import {UseGlobalState} from "../context/GlobalState"


export default function Balance() {
   const data = UseGlobalState()

  return (
    <div>
      <h1>Balance</h1>
      <div>
        {JSON.stringify(data)}
      </div>
    </div>
  )
}
