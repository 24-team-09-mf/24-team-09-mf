import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Wrapper = styled.div`
  padding-block: 2.5rem;
  color: var(--color-text);
`

export const CatalogTop = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  font-weight: 300;
  margin-bottom: 0.313rem;
  font-size: 0.75rem;
  text-align: center;
`

export const CatalogRowContent = styled.div`
  display: block;
  padding: 1.25rem;
  padding-right: 1.25rem;
  width: calc(100% - 25rem);
  font-size: 0.875rem;
`

export const CatalogRowThreadsCount = styled.div`
  width: 6.25rem;
  font-size: 0.75rem;
  text-align: center;
  border-left: solid 0.063rem #ffffff;
  border-right: solid 0.063rem #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const CatalogRowLastMessage = styled.div`
  width: 18.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const CatalogBlock = styled.div`
  background: rgba(var(--color-green1-rgb), 0.4);
  margin-bottom: 0.938rem;
  display: flex;
  align-items: strength;
  justify-content: flex-end;
  transition: all 0.3s;
  color: var(--color-text);
  &:last-child {
    margin-bottom: 0;
  }
  &:hover {
    background: rgba(var(--color-green1-rgb), 0.7);
  }
`

export const CatalogRowContentTitle = styled(Link)`
  font-weight: 700;
  font-size: 1.25rem;
  margin-bottom: 0.625rem;
  cursor: pointer;
  color: var(--color-text);
  border-bottom: dashed 1px var(--color-text);
  padding-bottom: 3px;
  transition: all 0.3s;
  &:hover {
    border-color: transparent;
  }
`

export const CatalogRowMessage = styled(CatalogRowLastMessage)`
  padding: 0 0.938rem;
  font-size: 0.75rem;
  justify-content: flex-start;
`

export const CatalogRowMessageDate = styled.div`
  font-size: 0.625rem;
`

export const CatalogRowMessageLink = styled(Link)`
  border-bottom: dashed 1px var(--color-text);
  margin-bottom: 0.438rem;
  cursor: pointer;
  color: #333333;
  transition: all 0.3s;
  &:hover {
    border-color: transparent;
  }
`

export const CatalogRowMessageUser = styled.div``

export const SectionRowContent = styled(Link)`
  display: block;
  padding: 1.25rem;
  padding-right: 1.25rem;
  width: calc(100% - 21.875rem);
`

export const SectionRowMessagesCount = styled.div`
  width: 6.25rem;
  font-size: 0.75rem;
  text-align: center;
  border-left: solid 0.063rem #ffffff;
  border-right: solid 0.063rem #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const SectionRowLastMessage = styled(SectionRowMessagesCount)`
  width: 9.375rem;
  border-right: none;
`

export const SectionRowContentTitle = styled.div`
  color: var(--color-text);
  cursor: pointer;
`

export const FormSeparator = styled.div`
  height: 0.063rem;
  width: 100%;
  background-color: rgba(var(--color-green2-rgb), 0.5);
  margin: 2.5rem 0;
`

export const FormInput = styled.input`
  background: var(--color-gray1);
  height: 2.5rem;
  width: 100%;
  padding: 0 0.938rem;
  margin-bottom: 0.938rem;
  border: none;
  outline: none;
`

export const FormTextarea = styled.div`
  background: var(--color-gray1);
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

export const ForumPostBlockAvatar = styled.div`
  width: 6.25rem;
  height: 6.25rem;
  border-radius: 50%;

  img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }
`

export const ForumPostContent = styled.div`
  width: calc(100% - 6.25rem);
  padding-left: 1.25rem;
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
  justify-content: space-between;
  min-height: 1.563rem;
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

export const ForumPostReplyBtn = styled.button`
  color: #000000;
  text-transform: uppercase;
  font-size: 12px;
  background-color: transparent;
  border: solid 1px #000000;
  cursor: pointer;
  transition: all 0.3s;
  display: none;

  &:hover {
    background-color: var(--color-green1);
  }
`

export const ForumPostBlock = styled.div`
  background: rgba(var(--color-green1-rgb), 0.4);
  padding: 1.25rem;
  display: flex;
  &:first-child {
    margin-top: 1.875rem;
  }
  &:nth-child(even) {
    background: #ffffff;
  }

  &:hover {
    .${ForumPostReplyBtn['componentStyle']['componentId']} {
      display: block;
    }
  }
`
