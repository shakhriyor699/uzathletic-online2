


export interface ISportsmanCoach {
  gender_id: number
  name: string
  family_name: string
}

export interface ISportsmanDesciplines {
  name: string
  pb: string
  sb: string
}

export interface ICreateSportsman {
  gender_id: number
  name: string
  family_name: string
  chest_number: string
  coaches: ISportsmanCoach[]
  sportsmen_disciplines: ISportsmanDesciplines[]
}

export interface ISportsman {
  id: number
  gender_id: number
  name: string
  family_name: string
  chest_number: string
  birth: string
}


