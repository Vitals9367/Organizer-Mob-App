import * as React from "react"
import Svg, {Path} from 'react-native-svg';

const LoginHeader = (props) =>{
  return (
    <Svg
      width={375}
      height={320}
      viewBox="0 0 375 320"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M339-10.5C193.4 209.9-20.5 275.5-140 320l115.5-484.001C177.833-230.834 484.6-230.9 339-10.5z"
        fill="#fff"
      />
    </Svg>
  )
}

export default LoginHeader