// lib
import styled from 'styled-components'

export const Wrapper = styled.div`
  background-color: inherit;
  align-items: center;
  display: flex;
`
export const ToggleSwitch = styled.div`
  position: relative;
  width: 7.1875rem;
  display: inline-block;
  vertical-align: middle;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  text-align: left;
`
export const Label = styled.label`
  display: block;
  overflow: hidden;
  cursor: pointer;
  border-radius: 1.875rem;
  margin: 0;
`
export const Inner = styled.span`
  display: block;
  width: 200%;
  margin-left: -100%;
  transition: margin 0.3s ease-in 0s;

  &:before,
  &:after {
    display: block;
    float: left;
    width: 50%;
    height: 2.375rem;
    padding: 0;
    line-height: 2.375rem;
    box-sizing: border-box;
  }

  &:before {
    content: attr(data-yes);
    padding-left: 0.5rem;
    background-color: #579945;
    color: #fff;
  }

  &:after {
    content: attr(data-no);
    padding-right: 0.9375rem;
    background-color: #579945;

    color: #fff;
    text-align: right;
  }
`

export const SwitchItem = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  margin: 0.3125rem;
  background: #fff;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 4.6875rem;
  border-radius: 1.875rem;
  box-shadow: 0rem 0.1875rem 0.75rem rgba(0, 0, 0, 0.15);
  transition: all 0.3s ease-in 0s;
`

export const Checkbox = styled.input`
  display: none;

  &:checked + ${Label} {
    ${Inner} {
      margin-left: 0;
    }

    ${SwitchItem} {
      right: 0rem;
    }
  }
`

export const Icon = styled.div`
  display: flex;
  align-items: center;
`
