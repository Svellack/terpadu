import './App.css'
import React from 'react'
import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Grid from '@material-ui/core/Grid'

import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import DashAdmin from './pages/DashAdmin'
import TranskripNilai from './pages/TranskripNilai'
import PeminjamanRuang from './pages/PeminjamanRuang'
import PeminjamanKendaraan from './pages/PeminjamanKendaraan'
import PeminjamanJasa from './pages/PeminjamanJasa'
import DashDetail from './pages/vpages/DashDetail'
import DashPeringatan from './pages/vpages/DashPeringatan'
import DashPerbaikan from './pages/vpages/DashPerbaikan'
import DashABelumD from './pages/DashABelumD'
import DashABelumDetail from './pages/vpages/DashABelumDetail'
import DashASedangD from './pages/DashASedangD'
import DashASedangDetail from './pages/vpages/DashASedangDetail'
import DashAAdaK from './pages/DashAAdaK'
import DashASalahDetail from './pages/vpages/DashASalahDetail'
import DashADibatalkan from './pages/DashADibatalkan'
import DashABatalDetail from './pages/vpages/DashABatalDetail'
import DashASuratDicetak from './pages/DashASuratDicetak'
import DashACetakDetail from './pages/vpages/DashACetakDetail'
import DashASuratDiambil from './pages/DashASuratDiambil'
import DashAAmbilDetail from './pages/vpages/DashAAmbilDetail'

//import Menu from './components/Menu'
import Toggle from './components/Toggle'
import Header from './components/Header'
import Navbar from './components/Navbar'
import NavbarAdmin from './components/NavbarAdmin'
import Footer from './components/Footer'
import './App.css'

function App() {
  const Approute = ({pilih,match}) => {
    return(
    <Router>
      <Grid container>
        <Grid id="nav" item xs={3}>
          { navToggled ? <Navbar handleNavToggle={handleNavToggle} /> : null }
          <Toggle handleNavToggle={handleNavToggle} />
          <NavbarAdmin/> 
        </Grid>

        <Grid id="nonnav" item xs={9}>
          <Routes>
              <Route index element={<Login />}></Route>
              <Route path="dashboard" element={<Dashboard />}></Route>
              <Route path="dashDetail" element={<DashDetail />}></Route>
              <Route path="dashPeringatan" element={<DashPeringatan />}></Route>
              <Route path="dashPerbaikan" element={<DashPerbaikan />}></Route>
              <Route path="transkripNilai" element={<TranskripNilai />}></Route>
              <Route path="peminjamanRuang" element={<PeminjamanRuang />}></Route>
              <Route path="peminjamanKendaraan" element={<PeminjamanKendaraan />}></Route>
              <Route path="peminjamanJasa" element={<PeminjamanJasa />}></Route>
              <Route path="dashAdmin" element={<DashAdmin />}></Route>
              <Route path="dashABelumD" element={<DashABelumD />}></Route>
              <Route path="dashABelumDetail" element={<DashABelumDetail />}></Route>
              <Route path="dashASedangD" element={<DashASedangD />}></Route>
              <Route path="dashASedangDetail" element={<DashASedangDetail />}></Route>
              <Route path="dashAAdaK" element={<DashAAdaK />}></Route>
              <Route path="dashASalahDetail" element={<DashASalahDetail />}></Route>
              <Route path="dashADibatalkan" element={<DashADibatalkan />}></Route>
              <Route path="dashABatalDetail" element={<DashABatalDetail />}></Route>
              <Route path="dashASuratDicetak" element={<DashASuratDicetak />}></Route>
              <Route path="dashACetakDetail" element={<DashACetakDetail />}></Route>
              <Route path="dashASuratDiambil" element={<DashASuratDiambil />}></Route>
              <Route path="dashAAmbilDetail" element={<DashAAmbilDetail />}></Route>
          </Routes>
        </Grid>
      </Grid>
    </Router>
    )
  }

  const [navToggled, setNavToggled] = useState(false);
  const handleNavToggle = () => {
    setNavToggled(!navToggled);
  }

  return (
    <div className="App">
      <Grid container>
        <Grid id="header" container item >
          <Header/>
        </Grid>

        <Grid id="isi" container item>
          <Approute/>
        </Grid>

        <Grid id="footer" container item>
          <Footer/>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
