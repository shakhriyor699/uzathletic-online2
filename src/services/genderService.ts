'use server'
import { axiosWithAuth } from "@/config/interceptors"
import { IGender, IGetDeleteGender } from "@/types/genderTypes"


export const getAllGenders = async () => {
  const { data } = await axiosWithAuth.get<IGetDeleteGender>('/api/gender/all')
  return data
}

export const deleteGender = async (id: number) => {
  const res = await axiosWithAuth.delete<IGetDeleteGender>(`/api/gender/delete/${id}`)
  return res
}

export const createGender = async (data: IGender) => {
  const res = await axiosWithAuth.post<IGender>('/api/gender/create', data)
  return res
}


export const updateGender = async (data: IGender, id: number) => {
  const res = await axiosWithAuth.put<IGender>(`/api/gender/update/${id}`, data)
  return res
}