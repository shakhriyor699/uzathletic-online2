'use server'
import { axiosWithAuth } from "@/config/interceptors"
import { IEventRegistration, IEventRegistrationResponse } from "@/types/eventRegistrationTypes"

export const create = async (data: IEventRegistration) => {
  const res = await axiosWithAuth.post<IEventRegistrationResponse>('/api/event-registration/create', data)
  return res
}

export const getAll = async () => {
  const { data } = await axiosWithAuth.get<IEventRegistrationResponse[]>('/api/event-registration/all')
  return data
}


export const deleteEvent = async (id: number) => {
  const res = await axiosWithAuth.delete<IEventRegistrationResponse>(`/api/event-registration/delete/${id}`)
  return res
}

export const getOne = async (id: number) => {
  const { data } = await axiosWithAuth.get<IEventRegistrationResponse>(`/api/event-registration/show/${id}`)
  return data
}

export const update = async (data: IEventRegistration, id: number) => {
  const res = await axiosWithAuth.put<IEventRegistrationResponse>(`/api/event-registration/update/${id}`, data)
  return res
}