import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

function Filter() {
  const [searchParams,setSearchParams]=useSearchParams()
  const [category,setCategory]=useState(searchParams.getAll([]))
  

  const handleFilter=(e)=>{
    let option= e.target.value;
    const newCategory=[...category]

    if(newCategory.includes(option)){
      newCategory.splice(newCategory.indexOf(option))
    }else{
      newCategory.push(option)
    }
    setCategory(newCategory)
  }

useEffect(()=>{
  const params={}
  category && (params.category=category)
  setSearchParams(params)
},[category])

  console.log(category)
  return (
    <div style={{display:"flex", justifyContent:"center", flexDirection:"column"}}>
        <h2>Filter data based on category</h2>
      <label>
        <input type="checkbox" value="Novel" onChange={handleFilter} defaultChecked={category.includes("Novel")} />
        Novel
      </label>
      <label>
        <input type="checkbox"value="Science_Fiction" onChange={handleFilter} defaultChecked={category.includes("Science_Fiction")} />
        Science_Fiction
      </label>
      <label>
        <input type="checkbox" value="Thriller" onChange={handleFilter} defaultChecked={category.includes("Thriller")}/>
        Thriller
      </label>
      <label>
        <input type="checkbox"  value="Motivational" onChange={handleFilter} defaultChecked={category.includes("Motivational")}/>
        Motivational
      </label>
    </div>
  );
}

export default Filter;
