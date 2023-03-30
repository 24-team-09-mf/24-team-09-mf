import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Section = styled.div`
  width: 75rem;
  margin: 0 auto;
  padding-block: 1.25rem;
  color: #333333;
`

export const H1 = styled.h1`
  font-family: 'Oswald';
  font-size: 1.875rem;
  line-height: 2.75rem;
  font-weight: 400;
  margin-bottom: 1.875rem;
`

export const H2 = styled.h2((props: { marginBottom?: string }) => {
  const marginBottom = props.marginBottom ? props.marginBottom : '0'
  return `
    font-weight: 700;
    font-size: 1.25rem;
    margin-bottom: ${marginBottom};
  `
})

export const CatalogTop = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  font-weight: 300;
  margin-bottom: 0.313rem;
  font-size: 0.75rem;
  text-align: center;
`

export const CatalogRow1 = styled.div`
  display: block;
  padding: 0.938rem;
  padding-right: 1.25rem;
  width: calc(100% - 25rem);
`

export const CatalogRow2 = styled.div`
  width: 6.25rem;
  font-size: 0.75rem;
  text-align: center;
  border-left: solid 0.063rem #ffffff;
  border-right: solid 0.063rem #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const CatalogRow3 = styled.div`
  width: 18.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const CatalogBlock = styled.div`
  background: rgba(209, 227, 172, 0.4);
  margin-bottom: 0.938rem;
  display: flex;
  align-items: strength;
  justify-content: flex-end;
  &:last-child {
    margin-bottom: 0;
  }
`

export const CatalogRow1Title = styled(Link)`
  font-weight: 700;
  font-size: 1.25rem;
  margin-bottom: 0.625rem;
  cursor: pointer;
  color: #333333;
  &:hover {
    text-decoration: underline;
  }
`

export const CatalogRowMessage = styled(CatalogRow3)`
  padding: 0 0.938rem;
  font-size: 0.75rem;
  justify-content: flex-start;
`

export const CatalogRowMessageDate = styled.div`
  font-size: 0.625rem;
`

export const CatalogRowMessageLink = styled(Link)`
  text-decoration-line: underline;
  margin-bottom: 0.438rem;
  cursor: pointer;
  color: #333333;
  &:hover {
    text-decoration: none;
  }
`

export const CatalogRowMessageUser = styled.div``

export const SectionRow1 = styled.div`
  display: block;
  padding: 0.938rem;
  padding-right: 1.25rem;
  width: calc(100% - 21.875rem);
`

export const SectionRow2 = styled.div`
  width: 6.25rem;
  font-size: 0.75rem;
  text-align: center;
  border-left: solid 0.063rem #ffffff;
  border-right: solid 0.063rem #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const SectionRow3 = styled(SectionRow2)`
  width: 9.375rem;
  border-right: none;
`

export const SectionRow1Title = styled(Link)`
  color: #333333;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`

export const FormSep = styled.div`
  height: 0.063rem;
  width: 100%;
  background-color: rgba(87, 153, 69, 0.5);
  margin: 2.5rem 0;
`

export const FormInput = styled.input`
  background: #fafafa;
  height: 2.5rem;
  width: 100%;
  padding: 0 0.938rem;
  margin-bottom: 0.938rem;
  border: none;
  outline: none;
`

export const FormTextarea = styled.div`
  background: #fafafa;
  height: 7.5rem;
  width: 100%;
  padding: 0.938rem;
  margin-bottom: 0.938rem;
  border: none;
  outline: none;
  overflow-y: scroll;
`

export const FormButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`

export const ForumPostBlock = styled.div`
  background: rgba(209, 227, 172, 0.4);
  padding: 1.25rem;
  display: flex;
  &:first-child {
    margin-top: 1.875rem;
  }
  &:nth-child(even) {
    background: #ffffff;
  }
`

export const ForumPostBlockAvatar = styled.div`
  width: 6.25rem;
  height: 6.25rem;
  background: #c4c4c4;
  border-radius: 0.313rem;
`

export const ForumPostContent = styled.div`
  width: calc(100% - 6.25rem);
  padding-left: 1.875rem;
`

export const ForumPostTop = styled.div`
  display: flex;
  margin-bottom: 1.25rem;
  justify-content: space-between;
  align-items: center;
`

export const ForumPostUserName = styled.div`
  font-weight: 700;
`

export const ForumPostDate = styled.div`
  font-size: 0.75rem;
`
export const ForumPostBottom = styled.div`
  margin-top: 1.25rem;
  display: flex;
  justify-content: flex-end;
`

export const ForumPostRate = styled.div`
  display: flex;
`

export const ForumPostRateButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  transition: all 0.3s;
  &:hover {
    opacity: 0.5;
  }
`

export const ForumPostRateText = styled.div`
  margin: 0 0.625rem;
  font-size: 0.75rem;
`
