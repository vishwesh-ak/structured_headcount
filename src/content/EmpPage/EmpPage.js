import React, { useState, useEffect } from 'react';
import {Datagrid,useDatagrid,useInlineEdit,} from '@carbon/ibm-products';
import DatagridPagination from './DatagridPagination';
import { pkg } from '@carbon/ibm-products/lib/settings';
import axios from 'axios';
import './emppage.scss';
import Search   from '@carbon/react/lib/components/Search';
import {  Button } from '@carbon/react';

 
const defaultHeader = [
  {
    Header: 'EmployeeSerial',
    accessor: 'EmployeeSerial#'

  },
  {
    Header: 'Emp Name',
    accessor: 'Emp Name',
   },
  {
    Header: 'Dept Code',
    accessor: 'DeptCode',
   },
  {
    Header: ' Dept Name',
    accessor: 'Dept Name',
  },
  {
    Header: 'IsManager',
    accessor: 'IsManager?',
  },
  {
    Header: 'Emp Type',
    accessor: 'Emp Type',
  },
  {
    Header: 'Location Blue pages',
    accessor: 'Location Blue pages',
  },
  {
    Header: 'Mgr Name',
    accessor: 'Mgr Name',
  },
  {
    Header: ' Leader Name',
    accessor: 'Leader Name',
    inlineEdit: {
      type: 'text',
       validator: (n) => n.length >= 40,
       inputProps: {
        invalidText: 'Invalid text, character count must be less than 40',
      },
    },
  },
  {
    Header: ' Diversity',
    accessor: 'Diversity',
    inlineEdit: {
      type: 'text',
       validator: (n) => n.length >= 40,
       inputProps: {
        invalidText: 'Invalid text, character count must be less than 40',
      },
    },
  },
  {
    Header: 'Work Location',
    accessor: 'Work location',
  },
  {
    Header: 'Date of Joining',
    accessor: 'Date of Joining',
   
  },
  {
    Header: 'Date of Leaving',
    accessor: 'Date of Leaving',
   
  },
  {
    Header: ' Remarks',
    accessor: 'Remarks',
    inlineEdit: {
      type: 'text',
       validator: (n) => n.length >= 40,
       inputProps: {
        invalidText: 'Invalid text, character count must be less than 40',
      },
    },
  },
  {
    Header: 'Employee Status',
    accessor: 'Employee Status',

  },
];

export const EmpPage = () => {
  pkg.feature['Datagrid.useInlineEdit'] = true;
  
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);  
  const datagridState = useDatagrid({
    columns: defaultHeader,
    data: filteredData.length > 0 ? filteredData : data, 
    initialState: {
      pageSize: 50,
      pageSizes: [5, 10, 25, 50],
    },
    onDataUpdate: setData,
    DatagridPagination: DatagridPagination,
  }, useInlineEdit);

  useEffect(() => {
     axios.get('http://localhost:5000/api/getEmployees')
      .then((response) => {
        console.log("Employee data loaded")
        console.log(response.data)
        setData(response.data);
      })
      .catch((error) => {
        console.log("Eploye details denied")
        console.error('Error fetching data:', error);
      });
  }, []);

   const handleFilterEmployees = () => {
     const searchText = document.getElementById('filterInput').value;
    const filteredEmployees = data.filter((employee) => {
      return employee['Emp Name'].toLowerCase().includes(searchText.toLowerCase());
    });

     setFilteredData(filteredEmployees);
  };

  const handleSaveEdits = () => {
    axios
      .post('http://localhost:5000/api/updateEmployees', { employees: data })
      .then((response) => {
        console.log(response.data.message);
      })
      .catch((error) => {
        console.error('Error updating employees:', error);
      });
  };

  return (
    <div className="EmpPageWrap">
      <h1 className="home__heading">Blue Page SyncUp </h1>
      
      <Search
        className="filter"
        size="lg"
        style={{ width: '100vh' }} 
        placeholder="Filter by Employee Name"
        labelText="Search"
        closeButtonLabelText="Clear search input"
        id="filterInput"  
        onChange={handleFilterEmployees} 
        onKeyDown={(event) => {
          if (event.key === 'Enter') {
            handleFilterEmployees();
          }
        }}
      />
      <div>
        <Datagrid datagridState={{ ...datagridState }} onBlur={handleSaveEdits}/>
      </div>
    </div>
  );
};

export default EmpPage;

