export interface SubList{
  completed: boolean,
  id: string,
  value: string
}
export interface ListOfTodo {
  category: string,
  value: string,
  date: string,
  tag: string,
  type: string,
  id: string,
  link: string,
  list?: Array<SubList>
}