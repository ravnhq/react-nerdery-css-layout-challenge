export interface BoxModelProperties {
  marginBottom: number
  marginTop: number
  marginLeft: number
  marginRight: number

  paddingBottom: number
  paddingTop: number
  paddingLeft: number
  paddingRight: number

  margin: string,
  padding: string,
}


export interface CustomBoxModel {
  boxProperties?: Partial<BoxModelProperties>
}