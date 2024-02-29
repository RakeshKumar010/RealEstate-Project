import { FaSun } from "react-icons/fa";
import { FaCloudMoon } from "react-icons/fa";


const ModeChange = ({setIsdDark,isDark}) => {
    
  return (
    <div className='fixed z-20 left-0 top-1/2 bg-custom-orange text-blue-50 dark:text-slate-800 p-2 rounded-full rounded-l-none' onClick={()=>{
      setIsdDark(!isDark)
    }}>
        {isDark?<FaSun className="text-4xl"/>:<FaCloudMoon className="text-4xl"/>}
    </div>
  )
}

export default ModeChange