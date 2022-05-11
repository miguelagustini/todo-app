import React, { useRef, useState } from 'react'
import { connect } from 'react-redux';
import { addTodos } from "../redux/reducer";
import {GoPlus} from 'react-icons/go';
import {motion} from 'framer-motion'




const mapStateToProps = (state) => {
  return {
    todos: state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: (obj) => dispatch(addTodos(obj)),
  };
};


const Todos = (props) => {

    const [todo, setTodo] = useState("");

    const handleChange = (e)=>{
        setTodo(e.target.value);
    };

    const add = ()=>{
      if (todo === "") {
        alert('Input is Empty')
      } else{
        props.addTodo({
          id:Math.floor(Math.random()*1000),
          item: todo,
          completed: false
          })
          setTodo('')
      }
    }
   

  return (
    <div className='addTodos'>
        <input 
            type='text' 
            onChange={(e)=>handleChange(e)} 
            className='todo-input'
            value={todo}>         
        </input>

        <motion.button 
           whileHover={{ scale: 1.1 }}
           whileTap={{ scale: 0.9 }}
          className='add-btn' onClick={()=>add()
            //we pass the object
         }> <GoPlus/> </motion.button>

        <br/>
    </div>
  )
}

//we use connect method to connect this component with redux store
export default connect(mapStateToProps, mapDispatchToProps)(Todos);