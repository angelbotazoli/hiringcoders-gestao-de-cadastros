import React, { useState } from 'react'
import * as S from './style'
import { HeaderGeneric, TableUsers } from '../../components/Header'
import Footer from '../../components/Footer'

function Users(props) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [status, setStatus] = useState(false)

  function setUsersStorage() {
    const dataUser = {
      name: `${name}`,
      email: `${email}`,
      phone: `${phone}`
    }

    if (localStorage.getItem('users') === null) {
      localStorage.setItem('users', JSON.stringify([dataUser]))
    }
    else {
      localStorage.setItem('users', JSON.stringify([
        ...JSON.parse(localStorage.getItem('users')), dataUser])
      );
    }
    setStatus(true)
  }

  return (
    <>
      <HeaderGeneric />
      <S.HomeContainer>
        <S.Content>
          <S.Title>Preencha os campos</S.Title>
          <S.Input type="text" placeholder="Digite seu nome" value={name} onChange={element => setName(element.target.value)} />
          <S.Input type="text" placeholder="Digite seu e-mail" value={email} onChange={element => setEmail(element.target.value)} />
          <S.Input type="email" placeholder="Digite seu telefone" value={phone} onChange={element => setPhone(element.target.value)} />
          <S.Button type="submit" onClick={setUsersStorage} >Salvar</S.Button>
        </S.Content>
        {status ? <TableUsers id="users" /> : ''}

      </S.HomeContainer>
      <Footer />
    </>
  );

}

export default Users;