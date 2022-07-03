import React from 'react'
import image from './logounj.png'
import { Grid, Container } from '@material-ui/core'

const Header = () => {
  return (
    <Grid container direction="row" justifyContent="space-around" alignItems="center" spacing={2} style={{marginLeft:30}}>
      <Grid item xs={1}>
        <Container><img src={image} width={70} height={70} alt='re'></img></Container>
      </Grid>

      <Grid item xs={11}>
        <h1>Sistem Unit Layanan Terpadu</h1>
      </Grid>
    </Grid>
  )
}

export default Header