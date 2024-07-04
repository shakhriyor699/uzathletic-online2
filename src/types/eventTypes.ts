import { ILang } from "./langTypes"

export interface IEventResponse {
  id: string
  parent_id?: string
  country_id: string
  name: string
  description: string
  date_from: string
  date_to: string
  status: boolean
}

export interface IEvent {
  id?: number
  parent_id?: number
  country_id: string
  name: ILang
  description: ILang
  date_from: string
  date_to: string
  description_expiration?: ILang
  start_registration_data: string
  days: {
    day: string
  }[]
  end_registration_data: string
  country?: ICountry
}

interface ICountry {
  id: number
  name: string
  iso3: string
  iso2: string
  phonecode: string
  capital: string
  currency: string
  flag: number
}