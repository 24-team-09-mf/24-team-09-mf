import styled from 'styled-components'

export const Wrapper = styled.div((props: { align: string }) => {
  return `
  display: flex;
  align-items: center;
  justify-content: ${props.align};
  margin: 20px 0;
`
})

export const Image = styled.img((props: { size: string }) => {
  return `
    height: ${props.size};
    width: auto;
    margin-right: 1.5rem;
`
})

export const Title = styled.h2((props: { fontSize: string }) => {
  return `
    font-size: ${props.fontSize};
    font-weight: bold;
    text-transform: uppercase;
    line-height: 100%;
  `
})
