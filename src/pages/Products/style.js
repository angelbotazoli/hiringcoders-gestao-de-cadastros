import style from 'styled-components'

export const HomeContainer = style.div`
  // max-height:100%;
  // max-width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content:center;
  height:100vh;
  width: 100vw;
//   height: 45vh;
  background: rgb(15,15,15);
`

export const Content = style.div`
  height:400px;
  width: 400px;
//   display: flex;
//   flex-direction: column;
//   justify-content:space-around;
//   max-width: 500px;
//   align-items: center;
  border-radius: 5px;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
//   flex-wrap:wrap;

  justify-content: center;
`

export const Title = style.h3`
  font-family: sans-serif;
  color: red;
  font-weight: 700;
//   padding: .1rem;
   margin-top: 1px;
  text-align: center;
`

export const Input = style.input`
  border: 1px solid #ddd;
  border-radius: .5rem;
  padding: .5rem;
  margin: .5rem;
  text-align: center;
  font-family: sans-serif;
`

export const Button = style.button`
  border: 0;
  border-radius: 1rem;
  padding: .7rem;
  margin: .5rem;
  border: 0;
  background-color: red;
  color: #fff;
  font-weight: 700;
  font-family: sans-serif;
  cursor: pointer;
`