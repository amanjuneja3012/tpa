import { Card, CardContent, Stack, Typography } from '@mui/material';
import React, { useState } from 'react';
import HeaderBreadcrumbs from 'src/components/HeaderBreadcrumbs';
import Page from 'src/components/Page';
import Layout from 'src/layouts';
import { ReferMemberForm } from 'src/sections/@dashboard/members/refer-member';
import { FORM_FIELDS } from 'src/sections/@dashboard/members/refer-member/ReferMemberForm';

ReferMember.getLayout = function getLayout(page) {
    return <Layout>{page}</Layout>;
};

export default function ReferMember() {
    const [formState, setFormState] = useState({
        [FORM_FIELDS.FIRST_NAME]: '',
        [FORM_FIELDS.LAST_NAME]: '',
        [FORM_FIELDS.EMAIL_ID]: '',
        [FORM_FIELDS.LINKEDIN_URL]: '',
        [FORM_FIELDS.MEMBER_TYPE]: '',
        [FORM_FIELDS.MOBILE]: '',
        [FORM_FIELDS.RESUME]: '',
    });

    const handleFormChange = (e) => {
        setFormState((p) => ({
            ...p,
            [e.target.name]: e.target.value,
        }));
    };

    return (
        <Page title="Member:Refer">
            <Stack direction="column" spacing={3}>
                <HeaderBreadcrumbs
                    heading="Refer A Member"
                    links={[
                        {
                            name: 'Dashboard',
                            href: '#',
                        },
                        {
                            name: 'Refer User',
                            href: '#',
                        },
                    ]}
                />

                <Card>
                    <CardContent sx={{ padding: '50px 50px 132px !important' }}>
                        <ReferMemberForm state={formState} handleChange={handleFormChange} />
                    </CardContent>
                </Card>
            </Stack>
        </Page>
    );
}
