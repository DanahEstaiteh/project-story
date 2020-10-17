import React from 'react';
import Button from "@material-ui/core/Button";
import { myButtonStyles } from './Style';

type varientType= "text" | "outlined" | "contained";
type colorType= "inherit" | "primary" | "secondary" | "default";
type sizeType= "small" | "medium" | "large";
type buttonType= "button" | "reset" | "submit" ;

interface MyButtonProps {
    variant: varientType;
    text: string;
    color: colorType;
    size:  sizeType;
    onClick?: (event: any) => void;
    type: buttonType;
    
  }

const MyButton:React.FC<MyButtonProps> = (props) => {
    const {text,variant,size,onClick,type,color } = props;
    const classes = myButtonStyles();
    return (
       <Button variant={variant}
       size={size}
      color={color}
       onClick={onClick}
       type={type}
       classes={{ root: classes.root, label: classes.label }}
       >{text}</Button>
    )
}


export default MyButton;