import style from 'styled-components'

export const Container = style.div`
  padding: 1rem;
  font-family: sans-serif;
`

export const Title = style.h2`
  text-align: center;
  font-size: 4rem;
  color: red;
`

export const Section = style.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
`

export const Image = style.img`
  display: block;
  width: 250px;
  height: 250px;
`

export const Product = style.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  background-position: 5px 15px;
  background-repeat: no-repeat;
  background-size: 250px;
`

export const Name = style.span`
  color: black;
  padding: 0.3rem;
`

export const Price = style.span`
  margin-top: 0.5rem;
`