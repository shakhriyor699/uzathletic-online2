'use server'
import { getAllEvents } from "@/services/eventService"


export const getAllevents = async () => {
  const res = await getAllEvents()
  return res.data
}