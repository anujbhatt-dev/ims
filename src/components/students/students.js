import React, {useState} from "react";
import update from "../../assets/images/update.png";
import del from "../../assets/images/delete.png";
import searching from "../../assets/images/searching.png";
import plus from "../../assets/images/plus.png";
import minus from "../../assets/images/minus.png";
import slash from "../../assets/images/slash.png";
import Backdrop from "../UI/backdrop";
import Modal from "../UI/modal";
import { updateHandeler } from "../actions/update";
import { deleteHandeler } from "../actions/delete";
import { insertHandeler } from "../actions/insert";


const Students = () =>{

       const[show,setShow]=useState(0)

       const showHandler=(i)=>{
           setShow(!show)
       }


       const data = [
           {
               stid:"dfdsf",
               fullname:"anuj bhatt",
               course:"bca",
               gender:"male",
               age:"22",
               batch:"2019-2022",
               cid:"hit",
               tid:"34",
           },
           {
            stid:"dfvdsf",
            fullname:"anuj bhatt 2",
            course:"bca",
               gender:"male",
               age:"22",
               batch:"2019-2022",
               cid:"hit",
               tid:"34",
            },
            {
                stid:"dfddcsf",
                fullname:"anuj bhatt 3",
                course:"bca",
               gender:"male",
               age:"22",
               batch:"2019-2022",
               cid:"hit",
               tid:"34",
            },
            {
                stid:"dfdsfdc",
                fullname:"anuj bhatt 4",
                course:"bca",
               gender:"male",
               age:"22",
               batch:"2019-2022",
               cid:"hit",
               tid:"34",
            },
            {
                stid:"dfdsf",
                fullname:"anuj bhatt",
                course:"bca",
                gender:"male",
                age:"22",
                batch:"2019-2022",
                cid:"hit",
                tid:"34",
            },
            {
             stid:"dfvdsf",
             fullname:"anuj bhatt 2",
             course:"bca",
                gender:"male",
                age:"22",
                batch:"2019-2022",
                cid:"hit",
                tid:"34",
             },
             {
                 stid:"dfddcsf",
                 fullname:"anuj bhatt 3",
                 course:"bca",
                gender:"male",
                age:"22",
                batch:"2019-2022",
                cid:"hit",
                tid:"34",
             },
             {
                 stid:"dfdsfdc",
                 fullname:"anuj bhatt 4",
                 course:"bca",
                gender:"male",
                age:"22",
                batch:"2019-2022",
                cid:"hit",
                tid:"34",
             },
             {
                stid:"dfdsf",
                fullname:"anuj bhatt",
                course:"bca",
                gender:"male",
                age:"22",
                batch:"2019-2022",
                cid:"hit",
                tid:"34",
            },
            {
             stid:"dfvdsf",
             fullname:"anuj bhatt 2",
             course:"bca",
                gender:"male",
                age:"22",
                batch:"2019-2022",
                cid:"hit",
                tid:"34",
             },
             {
                 stid:"dfddcsf",
                 fullname:"anuj bhatt 3",
                 course:"bca",
                gender:"male",
                age:"22",
                batch:"2019-2022",
                cid:"hit",
                tid:"34",
             },
             {
                 stid:"dfdsfdc",
                 fullname:"anuj bhatt 4",
                 course:"bca",
                gender:"male",
                age:"22",
                batch:"2019-2022",
                cid:"hit",
                tid:"34",
             },
             {
                stid:"dfdsf",
                fullname:"anuj bhatt",
                course:"bca",
                gender:"male",
                age:"22",
                batch:"2019-2022",
                cid:"hit",
                tid:"34",
            },
            {
             stid:"dfvdsf",
             fullname:"anuj bhatt 2",
             course:"bca",
                gender:"male",
                age:"22",
                batch:"2019-2022",
                cid:"hit",
                tid:"34",
             },
             {
                 stid:"dfddcsf",
                 fullname:"anuj bhatt 3",
                 course:"bca",
                gender:"male",
                age:"22",
                batch:"2019-2022",
                cid:"hit",
                tid:"34",
             },
             {
                 stid:"dfdsfdc",
                 fullname:"anuj bhatt 4",
                 course:"bca",
                gender:"male",
                age:"22",
                batch:"2019-2022",
                cid:"hit",
                tid:"34",
             },
       ]
       const columns = [
           {title:"Fullname",field:"fullname"},
           {title:"Gender",field:"gender"},
           {title:"Student's Id",field:"stid"},
           {title:"course",field:"course"},
           {title:"age",field:"age"},
           {title:"college's Id",field:"cid"},
           {title:"Teacher's Id",field:"tid"},
           {title:"Batch",field:"batch"},
       ]

       
       const [state,setState]= useState({
         pages:Math.ceil(data.length/10),
         currentPage:1   
        })
        
        // const newData = data.splice((state.currentPage-1)*10, 10);
        // alert(JSON.stringify(data))

        const scrollTop=()=>{
            window.scrollTo({
                top: 0,
                left: 0,
                behavior: 'smooth'
              });
        }

        const minusPage=()=>{
            // alert("i m touched")
            if(state.currentPage===1 || state.currentPage<=1){
                setState({
                    currentPage:1
                })
            }else{
                setState({
                    currentPage:state.currentPage-1
                })
            }
            scrollTop()
        }

        const plusPage=()=>{
            if(state.pages===1 || state.pages>=1){
                setState({
                    currentPage:state.pages
                })
            }else{
                setState({
                    currentPage:state.currentPage+1
                })
            }
        }

        return(
            <><div className="students">
                <div  className="students__div">
                    <h1 className="search students__search">
                        <label className="search__label" htmlFor="search">
                            <img src={searching} alt="search"/>
                        </label>
                        <input className="search__input"  id="search" name="search" tyoe="text" placeholder="search student by name"/>
                    </h1>
                    <h1 className="students__h1">Total student Enrolled: <strong>{" "+data.length}</strong></h1>
                </div>
                  <table className="table students__table">
                    
                      <thead  className="table__head students__table_head">
                          <th  className="table__head_th students__table_head-th">
                             S.No.
                          </th>
                          {
                              columns.map((item,i)=>{
                                   return <th  colSpan={(i==0)?"2":"0"} className="table__head_th students__table_head-th">
                                        {item.title}
                                    </th>

                              })
                          }
                          <th  className="table__head_th students__table_head-th">
                             Update
                          </th>
                          <th  className="table__head_th students__table_head-th">
                             Delete
                          </th>
                      </thead>
                      <tbody className="table__body students__table_body">
                          {  data.map((item,i)=>{
                              
                              return <tr className="table__body_tr students__table_body-tr">
                                  <td style={(i%2==0)?{background:"#EEEDDE"}:{background:"#E5E3C9"} } className="table__body_tr-td students__table_body-tr--td">
                                        {i+1}
                                  </td>
                                  <td colSpan={2} style={(i%2==0)?{background:"#EEEDDE"}:{background:"#E5E3C9"} } className="table__body_tr-td students__table_body-tr--td">
                                        {item.fullname}
                                  </td>
                                  <td style={(i%2==0)?{background:"#EEEDDE"}:{background:"#E5E3C9"} } className="table__body_tr-td students__table_body-tr--td">
                                        {item.gender}
                                  </td>
                                  <td style={(i%2==0)?{background:"#EEEDDE"}:{background:"#E5E3C9"} } className="table__body_tr-td students__table_body-tr--td">
                                        {item.stid}
                                  </td>
                                  <td style={(i%2==0)?{background:"#EEEDDE"}:{background:"#E5E3C9"} } className="table__body_tr-td students__table_body-tr--td">
                                        {item.course}
                                  </td>
                                  <td style={(i%2==0)?{background:"#EEEDDE"}:{background:"#E5E3C9"} } className="table__body_tr-td students__table_body-tr--td">
                                        {item.age}
                                  </td>
                                  <td style={(i%2==0)?{background:"#EEEDDE"}:{background:"#E5E3C9"} } className="table__body_tr-td students__table_body-tr--td">
                                        {item.cid}
                                  </td>
                                  <td style={(i%2==0)?{background:"#EEEDDE"}:{background:"#E5E3C9"} } className="table__body_tr-td students__table_body-tr--td">
                                        {item.tid}
                                  </td>
                                  <td style={(i%2==0)?{background:"#EEEDDE"}:{background:"#E5E3C9"} } className="table__body_tr-td students__table_body-tr--td">
                                        {item.batch}
                                  </td>
                                  <td onClick={()=>updateHandeler("student",showHandler,item,i)} style={(i%2==0)?{background:"#EEEDDE"}:{background:"#E5E3C9"} } className="table__body_tr-td students__table_body-tr--td">
                                        <img className="update" src={update} alt="update icon" />
                                  </td>
                                  <td  onClick={()=>deleteHandeler("student",showHandler,item.stid,i)} style={(i%2==0)?{background:"#EEEDDE"}:{background:"#E5E3C9"} } className="table__body_tr-td students__table_body-tr--td">
                                        <img className="delete" src={del} alt="delete icon" />
                                  </td>
                              </tr>
                          })
                          }
                          
                      
                      </tbody>
                  </table>
                  <div className="pagination">
                          <div onClick={()=>{minusPage()}} className="pagination__icon"><img className="" src={minus} alt="delete icon" /></div>
                          <div  className="pagination__count">{state.currentPage}<span><img className="" src={slash} alt="delete icon" /></span>{state.pages}</div>
                          <div  onClick={()=>{plusPage()}}  className="pagination__icon"><img className="" src={plus} alt="delete icon" /></div> 
                  </div>
                  {show?[
                        <Backdrop show={showHandler}/>,
                        <Modal  >
                            <h1 onClick={()=>showHandler()}>i am student</h1>
                            h1
                            {data.map((item)=>{
                               return <h2>{item.stid}</h2>
                            })}
                        </Modal>
                   ]:null}
                  
            </div>
        </>
        )
    
}

export default Students