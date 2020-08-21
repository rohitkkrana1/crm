import React, { Component } from 'react'
import MUIDataTable from "mui-datatables";  
import "../css/leadtable.scss";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";
import AddIcon from "@material-ui/icons/Add";


 class LeadsTable extends Component {

    render() {
        const columns = ["Name", "Company", "City", "State"];

const data = [
 ["Joe James", "Test Corp", "Yonkers", "NY"],
 ["John Walsh", "Test Corp", "Hartford", "CT"],
 ["Bob Herm", "Test Corp", "Tampa", "FL"],
 ["James Houston", "Test Corp", "Dallas", "TX"],
];

const options = {
  filter:false,
  download:false,
  print:false,
  customToolbar:()=>{
    return(
      <React.Fragment>
      <Tooltip title={"New Lead"}>
        <IconButton  onClick={this.handleClick}>
          <AddIcon  />
        </IconButton>
      </Tooltip>
    </React.Fragment>
    )
  },
  filterType: 'multiselect',
};
        return (
           
            <MUIDataTable
  title={"Employee List"}
  data={data}
  columns={columns}
  options={options}
/>
        )
    }
}

export default LeadsTable
