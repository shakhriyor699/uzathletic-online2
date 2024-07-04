

interface ILang {
  en: string
  uz: string
  ru: string
}

interface ISportsmen {
  id: number
}

export interface IEventRegistrationResponse {
  id: string,
  user_id: string,
  event_id: string,
  city_id: string,
  parent_id: string,
  gender_id: string,
  name: string,
  type: string,
  start_time: string,
  end_time: string,
  description: string,
  status: boolean
}

export interface IEventRegistration {
  user_id: string
  event_id: number
  city_id: string
  parent_id?: number
  gender_id: number
  name: ILang
  type: string
  description: ILang
  start_time: string
  end_time: string
  condition: ILang
  condition_type: string
  procedure: {
    name: ILang,
    type: ILang
  }
  sportsmen: ISportsmen[]
}