import React from 'react'
import { GridComponent, ColumnDirective, 
  ColumnsDirective, Page,Edit, Search,
  Inject, Toolbar } from '@syncfusion/ej2-react-grids'
import { employeesData, employeesGrid } from '../data/dummy'
import { Header } from '../components'


const Employees = () => {

  const editing = { allowDeleting: true, allowEditing: true };

  return (
    <div className='m-2 mt-16 md:m-10 p-2 md:p-10
    bg-white  dark:bg-secondary-dark-bg rounded-3xl'>
      <Header 
      category = 'Pages' 
      title ='Employees'/>
      <GridComponent
       dataSource={employeesData}
       allowPaging
       allowSorting
       editSettings = {editing}
       toolbar={['Search']}
       width='auto'
      >
        <ColumnsDirective>
          {employeesGrid.map((item, index) => (
            <ColumnDirective key={index} {... item} />
          ))}
        </ColumnsDirective>
        <Inject services={[ Page, Search, Toolbar,Edit]}
        />

      </GridComponent> 
    </div>
  )
}

export default Employees