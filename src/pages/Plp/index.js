import React from 'react';
import * as S from './style'
import Product1 from '../../assets/Product1.jpeg'
import Product2 from '../../assets/Product2.jpeg'
import Product3 from '../../assets/Product3.jpeg'

function Plp() {
  return (
    <S.Container id="products">
      <S.Title>Nossos destaques</S.Title>
      <S.Section>
        <S.Product>
          <S.Image src={Product1} alt='Samsung Z' />
          <S.Name>Samsung Z</S.Name>
          <S.Price>R$ 1.999,99</S.Price>
        </S.Product>
        <S.Product>
          <S.Image src={Product2} alt='Samsung XPTO' />
          <S.Name>Samsung XPTO</S.Name>
          <S.Price>R$ 250,00</S.Price>
        </S.Product>
        <S.Product>
          <S.Image src={Product3} alt='Samsung TURBO' />
          <S.Name>Samsung TURBO</S.Name>
          <S.Price>R$ 5.000,99</S.Price>
        </S.Product>
        <S.Product>
          <S.Image src={Product1} alt='Samsung Z' />
          <S.Name>Samsung Z</S.Name>
          <S.Price>R$ 1.999,99</S.Price>
        </S.Product>
        <S.Product>
          <S.Image src={Product1} alt='Samsung Z' />
          <S.Name>Samsung Z</S.Name>
          <S.Price>R$ 1.999,99</S.Price>
        </S.Product>
        <S.Product>
          <S.Image src={Product1} alt='Samsung Z' />
          <S.Name>Samsung Z</S.Name>
          <S.Price>R$ 1.999,99</S.Price>
        </S.Product>
      </S.Section>
    </S.Container>
  )
}

export default Plp