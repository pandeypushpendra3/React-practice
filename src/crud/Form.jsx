import React from 'react';

const FormElement = ({handleSubmit,name,setName}) => {
  return (
      <>
          <form onSubmit={handleSubmit}>
          <div className ="form-group">
          <input type="text" placeholder="Enter NAme" 
          onChange={(e)=>setName(e.target.value)}
          value={name} style={{width :"50%"}}
              autoFocus required
          />
          <br></br>
          <button >Submit</button>
          <button onClick={()=>setName("")}>Cancel</button>

          </div>



          </form>
      </>
  )
};

export {FormElement};