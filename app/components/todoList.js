"use client";
import { useState, useRef, useEffect, use } from "react";

const TodoList = () => {
    const [list, setList] = useState([]);
    const inputRef = useRef(null);

    const handleAddList = () => {
        if (inputRef.current.value === "") return;
        setList([...list, inputRef.current.value]);
        inputRef.current.value = "";
    }

    const handleRemoveList = (itemToRemove) => {
        console.log("itemToRemove", itemToRemove);
        setList(list.filter(item => item !== itemToRemove));
    }
    
    return (
        <div className="flex justify-center items-center flex-col space-y-3 mt-20">
            <h1 className="text-6xl font-bold text-violet-600">Todo List</h1>
            <div className="flex space-x-2">
                <input type="text" ref={inputRef} className="p-3 h-14 w-64 border border-gray-500 rounded-lg" />
                <button
                    className="text-white bg-green-500 p-2 text-lg font-semibold h-14 w-30 rounded-lg"
                    onClick={handleAddList}
                >Add to List</button>
            </div>
            {list.length > 0 && (
                <div className="flex flex-col space-y-2 m-3 border border-gray-500 p-3 rounded-lg h-auto w-[370px]">
                    {list.map((item, index) => (
                        <div key={index} className="flex pl-3 pr-3 justify-between items-center text-lg font-medium h-16 w-[345px] rounded-xl shadow-md mb-4">
                            <span>{item}</span>
                            <button
                                className="text-white text-lg bg-red-500 p-1 h-8 w-20 rounded-lg text-center"
                                onClick={() => {handleRemoveList(item)}}
                            >Remove</button>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}

export default TodoList;