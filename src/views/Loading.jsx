import {ReactComponent as Logo} from "../assets/icons/logo.svg"

const Loading = () => {
  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <div className="animate animate-bounce">
        <Logo/>
      </div>
    </div>
  )
}
export default Loading