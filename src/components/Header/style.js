import style from 'styled-components'

export const Header = style.div`
  background: black;
  // padding: .5rem .5rem;
  // text-align: center;
  border: 1px solid red;
  display: flex;
`

export const Button = style.button`
  font-family: sans-serif;
  border: 0;
  border-radius: 1rem;
  padding: .7rem;
  margin: 2rem;
  background-color: red;
  color: #fff;
  font-weight: 700;
  cursor: pointer;
`

export const List = style.div`
  width: 100%;

  display:flex;
  justify-content: flex-end;
`

export const teste = style.span`
color:pink;
`


export const Table = style.table`
  border-collapse: collapse;
  margin: 25px 0;
  font-size: 0.9em;
  min-width: 400px;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 0 20px red;
  text-align: center; 
`

export const Th = style.th`
  background-color: red;
`

export const Tr = style.tr`
  padding: 4px;
`

export const Tbody = style.tbody`
color: white;
`
