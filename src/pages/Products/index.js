import React, { useState } from 'react'
import * as S from './style'
import { HeaderGeneric, TableProducts } from '../../components/Header'
import Footer from '../../components/Footer'

function Products(props) {
  const [product, setProduct] = useState('')
  const [quantity, setQuantity] = useState('')
  const [price, setPrice] = useState('')
  const [status, setStatus] = useState(false)

  function setProductsStorage() {
    const dataProducts = {
      product: `${product}`,
      quantity: `${quantity}`,
      price: `${price}`
    }

    if (localStorage.getItem('products') === null) {
      localStorage.setItem('products', JSON.stringify([dataProducts]))
    }
    else {
      localStorage.setItem('products', JSON.stringify([
        ...JSON.parse(localStorage.getItem('products')), dataProducts])
      );
    }
    setStatus(true)
  }

  return (
    <>
      <HeaderGeneric />
      <S.HomeContainer>
        <S.Content>
          <S.Title>Preencha </S.Title>
          <S.Input type="text" placeholder="Digite o nome do produto" value={product} onChange={element => setProduct(element.target.value)} />
          <S.Input type="text" placeholder="Digite a quantidade" value={quantity} onChange={element => setQuantity(element.target.value)} />
          <S.Input type="email" placeholder="Digite o valor" value={price} onChange={element => setPrice(element.target.value)} />
          <S.Button type="submit" onClick={setProductsStorage} >Salvar</S.Button>
        </S.Content>
        {status ? <TableProducts id="products" /> : ''}

      </S.HomeContainer>
      <Footer />
    </>
  );

}

export default Products;