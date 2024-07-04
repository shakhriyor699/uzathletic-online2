'use client'
import React, { FC } from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import useEventCreateModal from '@/hooks/useEventCreateModal';
import { Autocomplete, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import { Controller, FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { axiosWithAuth } from '@/config/interceptors';
import axios from 'axios';


const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 800,
  height: 700,
  overflow: 'auto',
  bgcolor: 'background.paper',
  border: '1px solid #000',
  boxShadow: 24,
  p: 4,
};

const CreateModal: FC = () => {
  const { open, handleClose } = useEventCreateModal()
  const { register, handleSubmit, reset, control } = useForm({
    mode: 'onChange',
  })


  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const newData = {
      country_id: `${data.country.id}`,
      name: {
        ru: data.nameru,
        uz: data.nameuz,
        en: data.nameen
      },
      description: {
        ru: data.descriptionru,
        uz: data.descriptionuz,
        en: data.descriptionen
      },
      description_expiration: null,
      date_from: data.datestart.replace('T', ' '),
      date_to: data.dateend.replace('T', ' '),
      start_registration_data: data.datestartreg.replace('T', ' '),
      end_registration_data: data.dateendreg.replace('T', ' ')
    }
    await axios.post('/api/event', newData)
  }

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2" sx={{ textAlign: 'center' }}>
          Создайте мероприятие
        </Typography>
        <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-3'>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <InputLabel id="demo-simple-select-label">Название</InputLabel>
            <TextField {...register('nameru', { required: true })} name="nameru" id="outlined-basic" label="Название ru" variant="outlined" sx={{ width: '100%' }} />
            <TextField {...register('nameuz', { required: true })} name="nameuz" id="outlined-basic" label="Название uz" variant="outlined" sx={{ width: '100%' }} />
            <TextField {...register('nameen', { required: true })} name="nameen" id="outlined-basic" label="Название en" variant="outlined" sx={{ width: '100%' }} />
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <InputLabel id="demo-simple-select-label">Описание</InputLabel>
            <TextField  {...register('descriptionru', { required: true })} name="descriptionru" id="outlined-basic" label="Описание ru" variant="outlined" sx={{ width: '100%' }} />
            <TextField {...register('descriptionuz', { required: true })} name="descriptionuz" id="outlined-basic" label="Описание uz" variant="outlined" sx={{ width: '100%' }} />
            <TextField {...register('descriptionen', { required: true })} name="descriptionen" id="outlined-basic" label="Описание en" variant="outlined" sx={{ width: '100%' }} />
          </Box>
          <Box sx={{ display: 'flex', gap: 2 }}>
            <Box sx={{ width: '100%' }}>
              <InputLabel sx={{ mb: 2 }} id="demo-simple-select-label">Страна</InputLabel>
              <Controller
                name="country"
                control={control}
                defaultValue={null}
                render={({ field }) => (
                  <Autocomplete
                    {...field}
                    options={[{ id: 1, label: 'Россия' }]}
                    getOptionLabel={(option) => option.label}
                    onChange={(event, value) => field.onChange(value)}
                    renderInput={(params) => <TextField {...params} label="Страна" />}
                  />
                )}
              />
            </Box>
          </Box>
          <Box sx={{ display: 'flex', gap: 2 }}>
            <Box sx={{ width: '50%' }}>
              <InputLabel sx={{ mb: 2 }} id="demo-simple-select-label">Дата начала</InputLabel>
              <TextField {...register('datestart', { required: true })} name="datestart" id="outlined-basic" type="date" variant="outlined" sx={{ width: '100%' }} />
            </Box>
            <Box sx={{ width: '50%' }}>
              <InputLabel sx={{ mb: 2 }} id="demo-simple-select-label">Дата конца</InputLabel>
              <TextField {...register('dateend', { required: true })} name="dateend" id="outlined-basic" type="date" variant="outlined" sx={{ width: '100%' }} />
            </Box>
          </Box>
          <Box sx={{ display: 'flex', gap: 2 }}>
            <Box sx={{ width: '50%' }}>
              <InputLabel sx={{ mb: 2 }} id="demo-simple-select-label">Дата начала регистрации</InputLabel>
              <TextField {...register('datestartreg', { required: true })} name="datestartreg" id="outlined-basic" type="datetime-local" variant="outlined" sx={{ width: '100%' }} />
            </Box>
            <Box sx={{ width: '50%' }}>
              <InputLabel sx={{ mb: 2 }} id="demo-simple-select-label">Дата конца регистрации</InputLabel>
              <TextField {...register('dateendreg', { required: true })} name="dateendreg" id="outlined-basic" type="datetime-local" variant="outlined" sx={{ width: '100%' }} />
            </Box>
          </Box>
          <Button type='submit' variant='contained'>Создать</Button>
        </form>
      </Box>
    </Modal>
  )
}
export default CreateModal