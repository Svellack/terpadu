// import React from 'react';
// import TextField from '@material-ui/core/TextField';
// import { makeStyles } from '@material-ui/core/styles';
// import MenuItem from '@material-ui/core/MenuItem';
// // import FilledInput from '@material-ui/core/FilledInput';
// // import OutlinedInput from '@material-ui/core/OutlinedInput';
// import FormControl from '@material-ui/core/FormControl';
// import FormHelperText from '@material-ui/core/FormHelperText';
// import Input from '@material-ui/core/Input';
// import InputLabel from '@material-ui/core/InputLabel';
// import Grid from '@material-ui/core/Grid';

// const useStyles = makeStyles((theme) => ({
//   root: {
//     display: 'flex',
//     flexWrap: 'wrap',
//   },
//   textField: {
//     marginLeft: theme.spacing(1),
//     marginRight: theme.spacing(1),
//     width: '25ch',
//   },
// }));

// const currencies = [
//   {
//     value: 'none',
//     label: '-x-',
//   },
//   {
//     value: 'EUR',
//     label: '€',
//   },
//   {
//     value: 'BTC',
//     label: '฿',
//   },
//   {
//     value: 'JPY',
//     label: '¥',
//   },
// ];

// function ValidationTextFields() {
//   const classes = useStyles();
//   const [currency, setCurrency] = React.useState('none');

//   const handleChange = (event) => {
//     setCurrency(event.target.value);
//   };
//   return (
//     <form className={classes.root} noValidate autoComplete="off">
//       <Grid container direction='row' justifyContent="space-around" alignItems="center">
//       <Grid item xs={12}>
//         <div>
//         <Grid item xs={8}>
//           <TextField
//             id="outlined-full-width"
//             label="Label"
//             style={{ margin: 8 }}
//             placeholder="Placeholder"
//             helperText="Full width!"
//             fullWidth
//             margin="normal"
//             InputLabelProps={{
//               shrink: true,
//             }}
//             variant="outlined"
//           />
//         </Grid>
//         <Grid item xs={4}>
//         <FormControl disabled>
//           <InputLabel htmlFor="component-disabled">Name</InputLabel>
//           <Input id="component-disabled" onChange={handleChange} />
//           <FormHelperText>Disabled</FormHelperText>
//         </FormControl>
//         </Grid>
//         </div>
//       </Grid>
      
//       <Grid item xs={12}>
//       <div>
//         <TextField
//           id="filled-select-currency"
//           select
//           label="Select"
//           value={currency}
//           onChange={handleChange}
//           helperText="Please select your currency"
//           variant="filled"
//         >
//           {currencies.map((option) => (
//             <MenuItem key={option.value} value={option.value}>
//               {option.label}
//             </MenuItem>
//           ))}
//         </TextField>
//         <TextField
//           id="filled-select-currency-native"
//           select
//           label="Native select"
//           value={currency}
//           onChange={handleChange}
//           SelectProps={{
//             native: true,
//           }}
//           helperText="Please select your currency"
//           variant="filled"
//         >
//           {currencies.map((option) => (
//             <option key={option.value} value={option.value}>
//               {option.label}
//             </option>
//           ))}
//         </TextField>
//       </div>
//       </Grid>

//       <Grid item xs={12}>
//       <div>
//         <TextField
//           id="outlined-select-currency"
//           select
//           label="Select"
//           value={currency}
//           onChange={handleChange}
//           helperText="Please select your currency"
//           variant="outlined"
//         >
//           {currencies.map((option) => (
//             <MenuItem key={option.value} value={option.value}>
//               {option.label}
//             </MenuItem>
//           ))}
//         </TextField>
//         <TextField
//           id="outlined-select-currency-native"
//           select
//           label="Native select"
//           value={currency}
//           onChange={handleChange}
//           SelectProps={{
//             native: true,
//           }}
//           helperText="Please select your currency"
//           variant="outlined"
//         >
//           {currencies.map((option) => (
//             <option key={option.value} value={option.value}>
//               {option.label}
//             </option>
//           ))}
//         </TextField>
//       </div>
//       </Grid>

//       <Grid item xs={12}>
//       <div>
//         <TextField error id="standard-error" label="Error" defaultValue="Hello World" />
//         <TextField
//           error
//           id="standard-error-helper-text"
//           label="Error"
//           defaultValue="Hello World"
//           helperText="Incorrect entry."
//         />
//       </div>
//       </Grid>

//       <Grid item xs={12}>
//       <div>
//         <TextField
//           error
//           id="filled-error"
//           label="Error"
//           defaultValue="Hello World"
//           variant="filled"
//         />
//         <TextField
//           error
//           id="filled-error-helper-text"
//           label="Error"
//           defaultValue="Hello World"
//           helperText="Incorrect entry."
//           variant="filled"
//         />
//       </div>
//       </Grid>

//       <Grid item xs={12}>
//       <div>
//         <TextField
//           error
//           id="outlined-error"
//           label="Error"
//           defaultValue="Hello World"
//           variant="outlined"
//         />
//         <TextField
//           error
//           id="outlined-error-helper-text"
//           label="Error"
//           defaultValue="Hello World"
//           helperText="Incorrect entry."
//           variant="outlined"
//         />
//       </div>
//       </Grid>

//       <Grid item xs={12}>
//       <div><TextField
//           id="outlined-full-width"
//           label="Label"
//           style={{ margin: 8 }}
//           placeholder="Placeholder"
//           helperText="Full width!"
//           fullWidth
//           margin="normal"
//           InputLabelProps={{
//             shrink: true,
//           }}
//           variant="outlined"
//         />
//       </div>
//       </Grid>

//       <Grid item xs={12}>
//         <div>
//         <TextField
//           label="None"
//           id="outlined-margin-none"
//           defaultValue="Default Value"
//           className={classes.textField}
//           helperText="Some important text"
//           variant="outlined"
//         />
//         </div>
//       </Grid>
//       </Grid>
//     </form>
//   );
// }

// const PeminjamanRuang = () => {
//   return (
//     <div>
//       <ValidationTextFields/>
//     </div>
//   )
// }

// export default PeminjamanRuang