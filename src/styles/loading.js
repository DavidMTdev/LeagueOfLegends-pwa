import styled, { keyframes } from 'styled-components'

const rotate = keyframes`
  0%, 20%, 80%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.5);
  }
`
export const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px 0;
`

export const LoadingPoints = styled.div`
  display: inline-block;
  position: relative;
  width: ${props => props.size}px;
  height: ${props => props.size}px;
`

export const LoadingItem = styled.div`
  position: absolute;
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  background: #fff;
  border-radius: 50%;
  animation: ${rotate} 1.2s linear infinite;
  &:nth-child(${props => props.child}) {
    animation-delay: ${props => props.delay}s;
    top: ${props => props.top}px;
    left: ${props => props.left}px;
  }
`
