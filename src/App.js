import { useState } from 'react';
import { toast,ToastContainer } from 'react-toastify';
import { COPY_Fail, COPY_SUCCESS } from './message';
import { numbers, upperCaseLetters, lowerCaseLetters, specialCharacters } from './charactors'


function App() {
  const [password, setPassword] = useState("")
  const [passwordLength, setPasswordLength] = useState(26)
  const [includeUpperCase, setIncludeUpperCase] = useState(false)
  const [includeLowerCase, setIncludeLowerCase] = useState(false)
  const [includeNumbers, setIncludeNumbers] = useState(false)
  const [includeSymbols, setIncludeSymbols] = useState(false)

  console.log({passwordLength});
  console.log({includeUpperCase});
  console.log({includeLowerCase});
  console.log({includeSymbols});
  console.log({includeNumbers});

  const handleGeneratePassword =()=>{
    if (!includeUpperCase && !includeLowerCase && !includeNumbers && !includeSymbols) {
      notify("To generate password you must select atleast one checkbox", true)
    }
    else {
      let characterList = ""
      if (includeNumbers) {
        characterList = characterList + numbers
      }
      if (includeUpperCase) {
        characterList = characterList + upperCaseLetters
      }
      if (includeLowerCase) {
        characterList = characterList + lowerCaseLetters
      }
      if (includeSymbols) {
        characterList = characterList + specialCharacters
      }
      setPassword(createPassword(characterList))
      notify("Password is generated successfully", false)
    }


  }

  const createPassword = (characterList) => {
    let password = ""
    const characterListLength = characterList.length
    for (let i = 0; i < passwordLength; i++) {
      const characterIndex = Math.round(Math.random() * characterListLength)
      password = password + characterList.charAt(characterIndex)
    }
    return password
  }
  const copyToClipboard = (password) => {

    navigator.clipboard.writeText(password)
  }


  const notify = (message, hasError = false) => {
    if (hasError) {
      console.log(message);
      toast.error(message, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
    else {
      console.log(message);
      toast(message, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }

  }


  return (
    <div className="w-full h-screen bg-white" >
     
      <div className=' flex flex-col justify-center items-center p-2 w-full h-full'>

        <div className='max-w-[400px] w-full bg-gray-600 rounded-lg '>
                <div className='py-3'>
                  <h2 className='text-center text-white font-bold font-mono text-2xl pt-3'>Password Generator</h2>
                </div>
                <div className='flex justify-center  '>
                  
                 <input className='block w-full p-4 m-3 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md text-center focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' type="text" value={password} />
                 

                </div>
                <div className='flex flex-col text-white p-4'>
                    <div className='flex justify-between my-1'>
                        <label htmlFor="">Password length</label> <input className='w-[45px] text-black text-center' defaultValue={passwordLength} onChange={(e) => setPasswordLength(e.target.value)}  id="password-stregth" name="password-strength" max="26" min="8" type="number" />
                    </div>
                    <div className='flex justify-between '>
                      <label htmlFor="">Add Uppercase Letters</label> <input type="checkbox" checked={includeUpperCase} onChange={(e) => setIncludeUpperCase(e.target.checked)}  id="uppercase-letters" name="uppercase-letters" />
                    </div>
                    <div className='flex justify-between my-1'>
                      <label htmlFor="">Add Lowercase Letters</label>  <input checked={includeLowerCase} onChange={(e) => setIncludeLowerCase(e.target.checked)} type="checkbox" id="lowercase-letters" name="lowercase-letters" />
                    </div>
                    <div className='flex justify-between my-1'>
                      <label htmlFor="">Include Numbers</label>  <input checked={includeNumbers} onChange={(e) => setIncludeNumbers(e.target.checked)} type="checkbox" id="include-numbers" name="include-numbers" />
                    </div>
                    
                    <div className='flex justify-between my-1'>
                    <label htmlFor="">Include Symbols</label>    <input checked={includeSymbols} onChange={(e) => setIncludeSymbols(e.target.checked)} type="checkbox" id="include-symbols" name="include-symbols" />
                    </div>



                 

                </div>
                <div className='flex justify-center my-3'>

                <button onClick={handleGeneratePassword} type="button" class="py-2.5 px-5 mr-2 mb-2 text-sm font-medium my-2  text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Genearate</button>
             


                </div>
                



        </div>

      </div>

     
      
    </div>
  );
}

export default App;
