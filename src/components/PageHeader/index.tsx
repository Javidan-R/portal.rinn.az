import { FC } from "react";
interface PageHeaderProps{
    img:string;
    text:string
}
const PageHeader:FC<PageHeaderProps> = ({img,text}) => {
    return (
        <div>
            <img src={img} alt="" />
            <h3>{text}</h3>  
        </div>
    );
};

export default PageHeader;