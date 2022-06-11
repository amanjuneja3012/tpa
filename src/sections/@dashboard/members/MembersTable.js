import React, { useState } from 'react';
import {
    Card,
    Checkbox,
    InputAdornment,
    Stack,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableFooter,
    TableHead,
    TablePagination,
    TableRow,
    TableSortLabel,
    TextField,
    Typography,
} from '@mui/material';
import { Box } from '@mui/system';
import { GridSearchIcon } from '@mui/x-data-grid';
import Image from 'next/image';
import avatar from './IMG.png';
import useTable from 'src/hooks/useTable';

const memberData = {
    first_name: 'Suhan',
    last_name: 'Prabhu',
    uuid: '6695afcd-4c47-462c-895e-6a39d2edf5e7',
    Member_Type: 'Front End Developer',
    alt_name_public: 'Margaret Donnelly',
    Badge_Allocation_Records: [],
    Projects: [],
};

export default function MembersTable() {
    const {
        page,
        rowsPerPage,
        //
        onChangePage,
        onChangeRowsPerPage,
    } = useTable({ defaultRowsPerPage: 5 });

    const ProductBadge = (status) => {
        return (
            <Box display="inline-flex" alignItems="center" borderRadius={3 / 4} bgcolor="#FF4842" padding="2px 8px">
                <Typography variant="caption" fontWeight={700}>
                    {status}
                </Typography>
            </Box>
        );
    };

    const getAvatar = (member, avatar) => {
        if (avatar) return <Image src={avatar} />;
        else {
            let initals = member.first_name[0] + (member.last_name?.[0] || '');
            initals = initals.toUpperCase();

            return (
                <Box
                    sx={{
                        display: 'inline-flex',
                        borderRadius: '50%',
                        width: 40,
                        height: 40,
                        justifyContent: 'center',
                        alignItems: 'center',
                        background: '#1e403b',
                    }}
                >
                    <Typography variant="h5">{initals}</Typography>
                </Box>
            );
        }
    };

    let TABLE_DATA = [];
    for (let i = 0; i < 100; i++) {
        TABLE_DATA.push(memberData);
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
                            {TABLE_DATA.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((memberData) => (
                                <TableRow hovers>
                                    <TableCell padding="checkbox">
                                        <Checkbox />
                                    </TableCell>
                                    <TableCell>
                                        <Stack gap={2} direction="row" alignItems="center">
                                            {getAvatar(memberData, avatar)}
                                            <Typography variant="body2" fontWeight={700}>
                                                {memberData.alt_name_public}
                                            </Typography>
                                        </Stack>
                                    </TableCell>
                                    <TableCell>{`${memberData.first_name} ${memberData.last_name}`}</TableCell>
                                    <TableCell>{memberData.Member_Type}</TableCell>
                                    <TableCell>Yes</TableCell>
                                    <TableCell>{ProductBadge('Banned')}</TableCell>
                                    <TableCell></TableCell>
                                </TableRow>
                            ))}
                        </TableBody>

                        {/* <TableFooter> */}

                        {/* </TableFooter> */}
                    </Table>
                </TableContainer>

                <TablePagination
                    component="div"
                    rowsPerPageOptions={[5, 10, 25]}
                    count={TABLE_DATA.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={onChangePage}
                    onRowsPerPageChange={onChangeRowsPerPage}
                />
            </Stack>
        </Card>
    );
}
