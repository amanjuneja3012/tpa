// @mui
import { Grid, Button, Stack } from '@mui/material';
// hooks
// layouts
import Layout from '../../../layouts';

// components
import Page from '../../../components/Page';
import { GridAddIcon } from '@mui/x-data-grid';
import { MembersTable } from 'src/sections/@dashboard/members';
import Link from 'next/link';
import HeaderBreadcrumbs from 'src/components/HeaderBreadcrumbs';

// assets
// ----------------------------------------------------------------------

Members.getLayout = function getLayout(page) {
    return <Layout>{page}</Layout>;
};

// ----------------------------------------------------------------------

export default function Members() {
    return (
        <Page title="Dashboard: Members">
            <Stack direction="column" spacing={3}>
                <Grid container justifyContent="space-between" alignItems="center" xs={12} lg={12}>
                    <HeaderBreadcrumbs
                        heading="All Member"
                        links={[
                            { name: 'Dashboard', href: '#' },
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
                    <Link href="members/refer-member" shallow={true}>
                        <Button variant="contained" color="primary" startIcon={<GridAddIcon />}>
                            Refer New Member
                        </Button>
                    </Link>
                </Grid>
                <MembersTable />
            </Stack>
        </Page>
    );
}
