// import React, {useState} from 'react';

// const Calculator=()=>{
//     const [a, setA] = useState('');
//     const[b, setB] = useState('');
//     const [result, setResult]= useState(null);

//     const handleAdd=()=>{
//         setResult(Number(a)+Number(b));
//     };
//     const handleSubtract=()=>{
//         setResult(Number(a)-Number(b));
//     };
//     return (
//         <div style ={{padding : '20px'}}>
//             <input
//             type ="number"
//             placeholder = "Enter a"
//             value= {a}
//             onChange ={(e)=>setA(e.target.value)}
//             style ={{marginRight : '10px'}}
//             />
//             <input 
//             type ="number"
//             placeholder = "Enter b"
//             value= {b}
//             onChange ={(e)=>setB(e.target.value)}
//             style ={{marginRight : '10px'}}
//             />
//             <button onClick={handleAdd} style={{marginRight:'5px'}}> +</button>
//             <button onClick={handleSubtract} style={{marginRight:'5px'}}> -</button>

//             {result !== null && (
//                 <div style ={{ marginTop:'20px'}}>
//                     Result:{result} 
//                 </div>
//             )}
            
//         </div>
//     )

// }

// export default Calculator;



