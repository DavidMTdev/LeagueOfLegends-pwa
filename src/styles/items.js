import styled from 'styled-components'

export const ItemSContainer = styled.div`
  display: flex;
  width: 100%;
  backdround-color: red;
`

export const ItemSelectedContainer = styled.div`
  position: fixed;
  left: 50vw;
  display: block;
  width: 70%;
`

export const ItemContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 50vw;
  align-content: center;
  justify-content: center;
`

export const ItemImage = styled.img`
  width: 50px;
  height: 50px;
`

export const SelectedBuild = styled.div`
  display: flex;
  /* margin: 0 20px; */
`

export const Button = styled.button`
  background-color: #1e2328;
  border: 2px solid rgba(192, 252, 253, 0.7);
  padding: 5px 40px;
  color: white;
  margin: 0 20px;
`
