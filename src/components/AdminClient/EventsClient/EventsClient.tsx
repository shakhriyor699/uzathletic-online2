'use client'
import React, { FC } from 'react'
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { Button, Typography } from '@mui/material';
import { Eye, Pen, Trash } from 'lucide-react';
import useEventCreateModal from '@/hooks/useEventCreateModal';
import { IEvent } from '@/types/eventTypes';
import Link from 'next/link';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';






interface EventsClientProps {
  data: IEvent[]
}

interface Column {
  id: string;
  label: string;
  minWidth?: number;
  align?: 'center';
  format?: (value: number) => string;
}

const columns: Column[] = [
  { id: 'name', label: 'Название', minWidth: 170, align: 'center' },
  { id: 'date_of_event', label: 'Дата проведения', minWidth: 170, align: 'center' },
  {
    id: 'Country',
    label: 'Страна',
    minWidth: 170,
    align: 'center',
  },
];


const EventsClient: FC<EventsClientProps> = ({ data }) => {
  const { handleOpen } = useEventCreateModal()


  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };


  return (
    <div className='flex flex-col items-center'>
      <div style={{ height: 400, width: '70%' }}>
        <Typography variant='h4' sx={{ mb: 3 }}>Соревнования</Typography>
        <Button onClick={handleOpen} sx={{ mb: 3, display: 'flex', alignItems: 'center', gap: 1, marginLeft: 'auto' }} variant='contained'>
          <Pen size={15} />
          Создать
        </Button>
        <Paper sx={{ width: '100%' }}>
          <TableContainer sx={{ maxHeight: 440 }}>
            <Table stickyHeader aria-label="sticky table">
              <TableHead>
                <TableRow>
                  {columns.map((column) => (
                    <TableCell
                      key={column.id}
                      align={column.align}
                      style={{ top: 0, minWidth: column.minWidth }}
                    >
                      {column.label}
                    </TableCell>

                  ))}
                  <TableCell></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row) => {
                    return (
                      <TableRow hover role="checkbox" tabIndex={-1} key={row.id}>
                        <TableCell align="center">
                          {row.name.ru}
                        </TableCell>
                        <TableCell align="center">
                          {`${row.date_from} - ${row.date_to} ${row.days.length} дней`}
                        </TableCell>
                        <TableCell align="center">
                          {row.country?.name}
                        </TableCell>
                        <TableCell sx={{ display: 'flex', justifyContent: 'center', gap: 2 }} align="center">
                          <Link href={`/admin/events/${row.id}`}><Eye color='gray' /></Link>
                          <Trash color='red' />
                        </TableCell>
                      </TableRow>
                    );
                  })}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[5, 10, 15]}
            component="div"
            count={data.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Paper>
      </div>
    </div >
  )
}

export default EventsClient