import React from "react";

const InputControl = (props) => {
    return (
        <div className="my-5 ">
            {props.label && <label className="">{props.label}: </label>}
            <input type = "text" {...props} className="rounded-md appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-purple-500 focus:border-purple-500 focus:z-10 sm:text-sm"/>
        </div>
    )
}
export default InputControl;