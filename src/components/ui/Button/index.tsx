import { VariantProps, cva, cx } from 'class-variance-authority';
import React from "react";
import checkIcon from "../../../assets/check.svg";

const buttonStyles = cva('py-3 px-6 rounded-[5px] justify-center flex gap-3 uppercase font-bold text-base tracking-[-0.08px] w-full transition-all duration-150 ease-linear', {
  variants: {
    selected: {
      true: "text-gray-900 bg-green-100",
      false: "text-white bg-green-400 hover:bg-green-600"
    }
  }
})

interface IButton extends React.ButtonHTMLAttributes<HTMLButtonElement>,
  VariantProps<typeof buttonStyles> {
  text: string
  textSelected: string
  selected: boolean
}

const Button: React.FC<IButton> = ({ text, selected, textSelected, ...props }) => {
  return (
    <button className={cx(buttonStyles({ selected }))} {...props}>
      {selected && (
        <img
          src={checkIcon}
          alt="icone de selecionado"
          width={24}
          height={24}
          loading="lazy"
        />
      )}
      <span>{selected ? textSelected : text}</span>
    </button>
  )
}

export default Button