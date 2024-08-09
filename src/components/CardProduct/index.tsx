import { VariantProps, cva, cx } from 'class-variance-authority';
import React, { useState } from "react";
import { formatPrice } from '../../utils/FormatPrice';
import Button from '../ui/Button';
import Wishlist from '../ui/Wishlist';

const cardProductStyles = cva('bg-white p-8 rounded-lg flex flex-col gap-8 w-[304px] hover:shadow-[0_8px_24px_0_rgba(0,_0,_0,_0.08)] transition-all duration-150 ease-linear', {
  variants: {
  }
})

interface ICardProduct extends
  VariantProps<typeof cardProductStyles> {
  id: number;
  oldPrice: number;
  currentPrice: number;
  installments: number;
  productImage: string;
  productName: string;
  isFavorited: boolean;
}


const CardProduct: React.FC<ICardProduct> = (props) => {
  const priceOfInstallment = props?.currentPrice / props?.installments
  const [isAdded, setIsAdded] = useState(false)
  const [isFavorited, setIsFavorited] = useState(props.isFavorited)

  return (
    <div className={cx(cardProductStyles())}>
      <div className='relative'>
        <a href='/' >
          <img
            src={props.productImage}
            alt='imagem do produto'
            width={240}
            height={240}
            loading='lazy'
          />
        </a>
        <div className='absolute top-0 right-0' >
          <Wishlist selected={isFavorited} onClick={() => setIsFavorited(!isFavorited)} />
        </div>
      </div>
      <div className='flex flex-col gap-6'>
        <p className='text-sm text-grayscale-900 font-medium'>{props.productName}</p>
        <div className=' flex flex-col gap-1'>
          <p className='text-sm font-medium text-grayscale-600 line-through tracking-[−0.07px]'>{formatPrice(props.oldPrice)}</p>
          <p className='text-xl leading-6 font-semibold text-red-500 tracking-[−0.10px]'>{formatPrice(props.currentPrice)}</p>
          <p className='text-xs font-medium tracking-[0.06px] text-grayscale-600'>Em até <span className='text-grayscale-900'>{props.installments}x de {formatPrice(priceOfInstallment)}</span> sem juros</p>
        </div>
      </div>
      <div>
        <Button text='Adicionar' textSelected='adicionado' selected={isAdded} onClick={() => setIsAdded(!isAdded)} />
      </div>
    </div>
  )
}

export default CardProduct
