import React from 'react'
import styled from 'styled-components'
import HorizontalSplitIcon from '@material-ui/icons/HorizontalSplit';

const Toggle = ({handleNavToggle}) => {
  return (
    <StyledToggle onClick={handleNavToggle}></StyledToggle>
  )
}

export default Toggle

const StyledToggle = styled(HorizontalSplitIcon)`

`;
