import React from 'react'

// function myFun(e)
//     {
//         console.log('hello world');
//         console.log(e.target.innerText);
        
        
//     }
//method 1(using children)
function TabButton({children, onSelect, isSelected})
{
    
    return (
        <li>
            <button className={isSelected?'active':undefined} onClick={onSelect}>{children}</button>
        </li>
    )
}
//use in the below code like this
// import TabButton from './components/TabButton.js'
//<TabButton>Components</TabButton>

//method 2(using attributes)
// const TabButton = ({label}) => {
//     return (
//       <li><button>{label}</button></li>
//     )
//   }
//use in the below code like this
// import TabButton from './components/TabButton.js'
//<TabButton label="Components"></TabButton>

export default TabButton