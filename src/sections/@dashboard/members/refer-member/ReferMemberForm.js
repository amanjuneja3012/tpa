import { Box, Button, FormControl, Grid, Input, Stack, TextField } from '@mui/material';
import React from 'react';
import { useForm } from 'react-hook-form';

export const FORM_FIELDS = {
    FIRST_NAME: 'firstName',
    LAST_NAME: 'lastName',
    EMAIL_ID: 'emailId',
    MEMBER_TYPE: 'memberType',
    LINKEDIN_URL: 'linkedInUrl',
    MOBILE: 'mobileNumber',
    RESUME: 'resume',
};

export default function ReferMemberForm({ state, handleChange }) {
    const onSubmit = (e) => {
        e.preventDefaultt();
        console.log('submitting');
    };

    return (
        <form onSubmit={onSubmit}>
            <Grid container columnSpacing={2.5} rowSpacing={2}>
                <Grid item md={6}>
                    <FormControl fullWidth>
                        <TextField
                            type="text"
                            required
                            name={FORM_FIELDS.FIRST_NAME}
                            value={state[FORM_FIELDS.FIRST_NAME]}
                            placeholder="First Name"
                            onChange={handleChange}
                        />
                    </FormControl>
                </Grid>
                <Grid item md={6}>
                    <FormControl fullWidth>
                        <TextField
                            type="text"
                            required
                            name={FORM_FIELDS.LAST_NAME}
                            value={state[FORM_FIELDS.LAST_NAME]}
                            placeholder="Last Name"
                            onChange={handleChange}
                        />
                    </FormControl>
                </Grid>
                <Grid item md={6}>
                    <FormControl fullWidth>
                        <TextField
                            type="email"
                            name={FORM_FIELDS.EMAIL_ID}
                            value={state[FORM_FIELDS.EMAIL_ID]}
                            placeholder="E’mail I’D"
                            onChange={handleChange}
                        />
                    </FormControl>
                </Grid>
                <Grid item md={6}>
                    <FormControl fullWidth>
                        <TextField
                            name={FORM_FIELDS.MEMBER_TYPE}
                            value={state[FORM_FIELDS.MEMBER_TYPE]}
                            placeholder="Member Type"
                            onChange={handleChange}
                        />
                    </FormControl>
                </Grid>
                <Grid item md={12}>
                    <FormControl fullWidth>
                        <TextField
                            type="url"
                            name={FORM_FIELDS.LINKEDIN_URL}
                            value={state[FORM_FIELDS.LINKEDIN_URL]}
                            placeholder="LinkedIn URL"
                            onChange={handleChange}
                        />
                    </FormControl>
                </Grid>
                <Grid item md={6}>
                    <FormControl fullWidth>
                        <TextField
                            type="tel"
                            name={FORM_FIELDS.MOBILE}
                            value={state[FORM_FIELDS.MOBILE]}
                            placeholder="Mobile Number"
                            onChange={handleChange}
                        />
                    </FormControl>
                </Grid>
                <Grid item md={6}>
                    <FormControl fullWidth>
                        <TextField
                            name={FORM_FIELDS.RESUME}
                            value={state[FORM_FIELDS.RESUME]}
                            placeholder="Attach Resume"
                            InputProps={{
                                background: 'white',
                                maxWidth: '10px',
                            }}
                            onChange={handleChange}
                        />
                    </FormControl>
                </Grid>
            </Grid>

            <Box sx={{ display: 'flex', width: '100%', justifyContent: 'center', marginTop: 9.75 }}>
                <Button type="submit" variant="contained">
                    Refer Now
                </Button>
            </Box>
        </form>
    );
}
