'use server'
import { axiosWithAuth } from "@/config/interceptors"
import { ICreateSportsman, ISportsman } from "@/types/sportsmanTypes"

export const create = async (data: ICreateSportsman) => {
  const res = await axiosWithAuth.post<ICreateSportsman>('/api/sportsman/create', data)
}

export const getAll = async () => {
  const { data } = await axiosWithAuth.get<ISportsman>('/api/sportsmen/all')
  return data
}

export const update = async (data: ICreateSportsman, id: number) => {
  const res = await axiosWithAuth.put<ICreateSportsman>(`/api/sportsman/update/${id}`, data)
  return res
}

export const deleteSportsman = async (id: number) => {
  const res = await axiosWithAuth.delete<ISportsman>(`/api/sportsman/delete/${id}`)
  return res
}

export const getOne = async (id: number) => {
  const { data } = await axiosWithAuth.get<ISportsman>(`/api/sportsmen/${id}`)
  return data
}