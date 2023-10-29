import TodoType from "./app/types/todoType"

const todoToday = [
  {
    id: '23423',
    todoAt: '14.10.2023',
    title: 'Lorem ipsum dolor sit amet consectetur.',
    check: false
  },
  {
    id: '53423',
    todoAt: '14.10.2023',
    title: 'Lorem ipsum dolor sit amet consectetur.',
    check: false
  },
  {
    id: '53423',
    todoAt: '14.10.2023',
    title: 'Lorem ipsum dolor sit amet consectetur.',
    check: true
  },
]
const todoBefore = [
  {
    id: '23423',
    todoAt: '13.10.2023',
    title: 'Lorem ipsum dolor sit amet consectetur.',
    check: true
  }
]
const todoAfter: TodoType[] | [] = [
  // {
  //   id: '23423',
  //   todoAt: '24.10.2023',
  //   title: 'Lorem ipsum dolor sit amet consectetur.',
  //   check: false
  // }
]


export  {todoToday, todoBefore, todoAfter}