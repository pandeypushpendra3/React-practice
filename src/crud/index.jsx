import { React, useState, useEffect } from 'react';
import { getNames,createName, removeName } from "./api"
import { Link } from "react-router-dom"
import { FormElement } from "./Form"
import { Loading } from "./Loading";


const Crud = () => {

    const [name, setName] = useState("");
    const [loading, setLoading] = useState(false);
    const [names, setNames] = useState([]);



    useEffect(() => {
        loadNames();
    }, [])


    const loadNames = () => {
        getNames().then((name) => setNames(name.data));
    }
    const handleSubmit=(e)=>{


e.preventDefault();

setLoading(true);
createName({name}).then((res)=>{
    setLoading(false);
    setName("");
    loadNames();
    
        <>
            <h4>`${res.data.name} is created`</h4>
        </>
}).catch((err)=>{
    setLoading(false);

    if(err.response.status === 400) {
        return (
            <>
            <h1> `Show ${err}`</h1>
           
        </>
        )
    }
})
    }




    const handleRemove=(id,name)=>{
//    if(window.confirm('Are you sure you want to remove ?')) {
    removeName(id).then((res)=>{
    setLoading(false);
    loadNames();
    // console.log(res);
    return(
        <>
            <h1>`${name}`is deleted</h1>
        </>
    )

}).catch((err)=>{
    if(err.response.status===400){
        setLoading(false);
        console.log(err)
    }
})
            
    // }


}




    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-8">{
                        loading ? (<Loading />) : (
<>
<h4>Crud with JSON server</h4>

<FormElement handleSubmit ={handleSubmit} name={name} setName={setName}/>
                            {names.map((t) => {
                                return (<>
                                    <div key={t.id} className="border row mx-2 align-items-center">

                                        <ul>
                                            <li>{t.name}</li>
                                        </ul>
                                        <span onClick={()=>handleRemove(t.id,t.name)}
                                            className="btn btn-sm float-right"
                                        >
                                            <button>Delete</button>
                                        </span>
                                        <Link to={`/update/${t.id}`}>
                                            <span 
                                                className="btn btn-sm float-right"
                                            >
                                                <button>Edit</button>
                                            </span>
                                        </Link>

                                    </div>

                                </>)
                            })


                        })
                        </>)}
                    </div>
                </div>
                 </div>

</>
)};

export {Crud}
