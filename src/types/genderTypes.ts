

export interface IGenderNameType {
  en: string
  uz: string
  ru: string
}

export interface IGender {
  name: IGenderNameType
  type: IGenderNameType
}

export interface IGetDeleteGender {
  id: string
  name: string
  type: string
}