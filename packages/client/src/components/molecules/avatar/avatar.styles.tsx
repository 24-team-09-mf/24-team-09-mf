// lib
import styled from 'styled-components'

export const Wrapper = styled.div`
  position: relative;
  display: inline-block;
  margin-bottom: 20px;
  background-color: rgb(223 218 218);
  border-radius: 50%;
`

export const AvatarInput = styled.input`
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;
`
export const AvatarImage = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 50%;
`
