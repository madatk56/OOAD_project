import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
export default function AddressForm() {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Điền thông tin:
      </Typography>
      
      <Grid container spacing={3}>
      <Grid item xs={12}>
          <TextField
            required
            id="companyName"
            name="companyName"
            label="Tên công ty"
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="address"
            name="address"
            label="Địa chỉ"
            fullWidth
            autoComplete="billing address-line1"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="require"
            name="require"
            label="Yêu cầu"
            fullWidth
            multiline
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="benefit"
            name="benefit"
            label="Quyền lợi"
            fullWidth
            multiline
            autoComplete="billing address-line2"
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}