import {
    Card,
    Checkbox,
    InputAdornment,
    Stack,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    TableSortLabel,
    TextField,
    Typography,
} from '@mui/material';
import { Box } from '@mui/system';
import { GridSearchIcon } from '@mui/x-data-grid';
import Image from 'next/image';
import React from 'react';
import avatar from './IMG.png';

export default function MembersTable() {
    const memberData = {
        first_name: 'Suhan',
        last_name: 'Prabhu',
        uuid: '6695afcd-4c47-462c-895e-6a39d2edf5e7',
        Member_Type: 'Front End Developer',
        alt_name_public: 'Margaret Donnelly',
        Badge_Allocation_Records: [],
        Projects: [],
    };

    function ProductBadge(status) {
        return (
            <Box
                display="inline-flex"
                alignItems="center"
                borderRadius={3 / 4}
                bgcolor="#FF4842"
                padding="2px 8px"
            >
                <Typography variant="caption" fontWeight={700}>
                    {status}
                </Typography>
            </Box>
        );
    }

    return (
        <Card>
            <Stack direction={'column'} spacing={3}>
                <TextField
                    style={{ maxWidth: 180, margin: '20px 0px 0px 24px' }}
                    placeholder="Search..."
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <GridSearchIcon />
                            </InputAdornment>
                        ),
                    }}
                />
                <TableContainer sx={{ minWidth: 800, position: 'relative' }}>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell padding="checkbox">
                                    <Checkbox />
                                </TableCell>
                                <TableCell>
                                    <TableSortLabel>Alt Name</TableSortLabel>
                                </TableCell>
                                <TableCell>Full name</TableCell>
                                <TableCell>Type</TableCell>
                                <TableCell>Projects</TableCell>
                                <TableCell>Products</TableCell>
                                <TableCell></TableCell>
                            </TableRow>
                        </TableHead>

                        <TableBody>
                            {Array(5)
                                .fill(1)
                                .map((_) => (
                                    <TableRow hovers>
                                        <TableCell padding="checkbox">
                                            <Checkbox />
                                        </TableCell>
                                        <TableCell>
                                            <Stack
                                                gap={2}
                                                direction="row"
                                                alignItems="center"
                                            >
                                                <Image src={avatar} />
                                                <Typography
                                                    variant="body2"
                                                    fontWeight={700}
                                                >
                                                    {memberData.alt_name_public}
                                                </Typography>
                                            </Stack>
                                        </TableCell>
                                        <TableCell>
                                            {`${memberData.first_name} ${memberData.last_name}`}
                                        </TableCell>
                                        <TableCell>
                                            {memberData.Member_Type}
                                        </TableCell>
                                        <TableCell>Yes</TableCell>
                                        <TableCell>
                                            {ProductBadge('Banned')}
                                        </TableCell>
                                        <TableCell></TableCell>
                                    </TableRow>
                                ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Stack>
        </Card>
    );
}
