import * as React from "react"
import Svg, {Path} from 'react-native-svg';

const RegisterHeader = (props) =>{
  return (
    <Svg
      width={375}
      height={158}
      viewBox="0 0 375 158"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M359.53 18.99C215.593 111.693 4.135 139.284-114 158L.181-45.572C200.204-73.682 503.468-73.71 359.53 18.991z"
        fill="#fff"
      />
    </Svg>
  )
}

export default RegisterHeader