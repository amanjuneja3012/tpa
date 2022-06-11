import { forwardRef } from 'react';
import PropTypes from 'prop-types';
// next
import Head from 'next/head';
// @mui
import { Box, Container, } from '@mui/material';

// ----------------------------------------------------------------------

const Page = forwardRef(({ children, title = '', meta, ...other }, ref) => (
    <>
        <Head>
            <title>{`${title} | Minimal-UI`}</title>
            {meta}
        </Head>

        <Box ref={ref} {...other}>
            <Container disableGutters={false} style={{ margin: 0 }} maxWidth="100%">
                {children}
            </Container>
        </Box>
    </>
));

Page.propTypes = {
    children: PropTypes.node.isRequired,
    title: PropTypes.string,
    meta: PropTypes.node,
};

export default Page;
