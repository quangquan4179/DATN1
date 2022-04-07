
export interface card{
  id: string,
  title:string
}
export interface list{
  id:string,
  title:string,
  cards: card[]
}



export interface listName{
  ob:object
}

export interface data {
  lists:list[],
  listIds:string[]
}



