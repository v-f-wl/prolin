import { useMemo } from "react"
import CategoryContainer from "./CategoryContainer"

const TodoCards = () => {
  const listOfToDo  = [
    {
      category: 'work',
      value: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet ducimus inventore vel iste accusamus error, iure earum sint deleniti necessitatibus officiis minus sed itaque nobis nesciunt soluta quia reprehenderit minima impedit beatae rem enim, est iusto! Alias officia modi deserunt!',
      date: '12.02.22',
      tag: 'important',
      type: 'todo',
      id: '234234',
      link: '',
      list: [
        {
          completed: false,
          id: '12313',
          value: 'vlksdnfkv'
        },
        {
          completed: false,
          id: '234',
          value: ';kvsdjnfkv;'
        },
      ]
    },
    {
      category: 'work',
      value: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
      date: '12.02.22',
      tag: 'important',
      type: 'todo',
      id: '234234',
      link: '',
      list: [
      ]
    },
    {
      category: 'home',
      value: 'New Todo',
      date: '12.02.22',
      tag: 'important',
      type: 'todo',
      id: '234234',
      link: '',
      list: [
        {
          completed: true,
          id: 'asdfasd',
          value: 'vsdfvsdfv sdfsd'
        },
        {
          completed: false,
          id: 'qwesda',
          value: 'asdvasdv'
        },
      ]
    },
  ]
  
  const RenderTodos = useMemo(() => {
    const categoryList:any = {}
    
    for (const item of listOfToDo){
      if(categoryList[item.category] === undefined){
        categoryList[item.category] = []
      }
      categoryList[item.category].push(item)
    }

    const result:any = []
    
    for(const item in categoryList){
      result.push(
        <CategoryContainer category={item} listOfTodos={categoryList[item]} />
      )
    }
    return result
  },[])


  return ( 
    <div className="flex flex-col gap-7 mt-2">{RenderTodos}</div>
  );
}
 
export default TodoCards;