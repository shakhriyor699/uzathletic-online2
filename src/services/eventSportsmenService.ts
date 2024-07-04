'use server'

import { axiosWithAuth } from "@/config/interceptors"
import { IEventSportsmen } from "@/types/eventSportsmenTypes"

export const createOrUpdate = async (data: IEventSportsmen) => {
  const res = await axiosWithAuth.post<IEventSportsmen>('/api/event-sportsmen/event/create-or-update', data)
  return res
}

export const getAll = async () => {
  const { data } = await axiosWithAuth.get('/api/event-sportsmen/all')
  return data
}

export const deleteEvent = async (id: number) => {
  const res = await axiosWithAuth.delete(`/api/event-sportsmen/delete/${id}`)
  return res
}

export const getOne = async (id: number) => {
  const { data } = await axiosWithAuth.get(`/api/event-sportsmen/show/${id}`)
  return data
}