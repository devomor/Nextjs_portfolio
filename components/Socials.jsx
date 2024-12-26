import Link from "next/link";
import {FaGithub, FaLinkedinIn,FaYoutube, FaTwitter} from 'react-icons/fa'
 const socials =[
    {icon:<FaGithub/>,path:"https://github.com/devomor"},
    {icon:<FaLinkedinIn/>,path:"https://www.linkedin.com/in/devomor/"},
    {icon:<FaYoutube/>,path:"https://www.youtube.com/devomar"},
    {icon:<FaTwitter/>,path:"https://x.com/softdevomar"},
 ];
const Socials = ({containerStyle,iconStyle}) => {
    return (
        <div className={containerStyle}>
            {socials.map((item,index)=>{
                return <Link key={index} href={item.path} className={iconStyle}>{item.icon}</Link>
            })}
        </div>
    );
}

export default Socials;

