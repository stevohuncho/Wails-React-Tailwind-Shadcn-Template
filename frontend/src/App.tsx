import {useState} from 'react';
import logo from './assets/images/logo-universal.png';
import {Greet} from "../wailsjs/go/main/App";
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

function App() {
    const [resultText, setResultText] = useState("Please enter your name below 👇");
    const [name, setName] = useState('');
    const updateName = (e: any) => setName(e.target.value);
    const updateResultText = (result: string) => setResultText(result);

    function greet() {
        Greet(name).then(updateResultText);
    }

    return (
        <div className='flex flex-col justify-center items-center space-y-2 h-screen'>
            <img src={logo} alt="logo" className='w-[50%] h-[50%]'/>
            <div>{resultText}</div>
            <div className='flex space-x-2'>
                <Input className="input nodrag" onChange={updateName} autoComplete="off" name="input" type="text"/>
                <Button className="btn" onClick={greet}>Greet</Button>
            </div>
        </div>
    )
}

export default App
