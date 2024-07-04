'use server'

import { axiosWithAuth } from "@/config/interceptors"
import { IEvent, IEventResponse } from "@/types/eventTypes"


export const createEvent = async (data: IEvent) => {
  const res = await axiosWithAuth.post<IEventResponse>('/event/create', data)
  return res
}


export const updateEvent = async (data: IEvent, id: string) => {
  const res = await axiosWithAuth.put<IEventResponse>(`/event/update/${id}`, data)
  return res
}

export const deleteEvent = async (id: string) => {
  const res = await axiosWithAuth.delete<IEventResponse>(`/event/delete/${id}`)
  return res
}

export const getAllEvents = async () => {
  const res = await axiosWithAuth.get('/event/all')
  return res
}

export const getEvent = async (id: string) => {
  const res = await axiosWithAuth.get<IEventResponse>(`/event/show/${id}`)
  return res
}