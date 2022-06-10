// @mui
import {
    Container,
    Grid,
    Button,
    Typography,
    Paper,
    Box,
    CardHeader,
    Stack,
} from '@mui/material';
// hooks
import useSettings from '../../hooks/useSettings';
// layouts
import Layout from '../../layouts';

// components
import Page from '../../components/Page';
import { GridAddIcon } from '@mui/x-data-grid';
import Breadcrumbs from 'src/components/Breadcrumbs';
import { MembersTable } from 'src/sections/@dashboard/general/members';

// assets
// ----------------------------------------------------------------------

GeneralApp.getLayout = function getLayout(page) {
    return <Layout>{page}</Layout>;
};

// ----------------------------------------------------------------------
export function Block({ title, sx, children }) {
    return (
        <Paper
            variant="outlined"
            sx={{
                borderRadius: 1.5,
                bgcolor: (theme) => alpha(theme.palette.grey[500], 0.04),
            }}
        >
            {title && <CardHeader title={title} />}
            <Box
                sx={{
                    p: 5,
                    minHeight: 180,
                    ...sx,
                }}
            >
                {children}
            </Box>
        </Paper>
    );
}

export default function GeneralApp() {
    const { themeStretch } = useSettings();

    return (
        <Page title="General: App">
            <Container disableGutters={false} style={{ margin: 0 }} maxWidth='100%'>
                <Stack direction="column" spacing={3}>
                    <Grid
                        container
                        justifyContent="space-between"
                        alignItems="center"
                        xs={12}
                        lg={12}
                    >
                        <Stack direction='column' spacing={1} items>
                            <Typography variant="h4">All Members</Typography>
                            <Breadcrumbs
                                links={[
                                    {
                                        name: 'Dashboard',
                                        href: '#',
                                    },
                                    {
                                        name: 'User',
                                        href: '#',
                                    },
                                    {
                                        name: 'List',
                                        href: '#',
                                    },
                                ]}
                            />
                        </Stack>
                        <Button variant="contained" color="primary" startIcon={<GridAddIcon />}>
                            Refer New Member
                        </Button>
                    </Grid>

                    <MembersTable />
                </Stack>
            </Container>
        </Page>
    );
}
