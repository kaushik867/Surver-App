export interface Survey{
    fieldData:{
        name : string,
        email: string,
        age: number,
        response: string,
        review: string,
        rating: number
      },
    portalData:{
      featureDetails: Array<string>
    }
  }