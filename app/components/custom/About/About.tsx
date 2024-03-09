import {Button} from "~/components/ui/button";
import { IoIosSpeedometer } from "react-icons/io";
import { GiHealthNormal } from "react-icons/gi";
import { GiLips } from "react-icons/gi";
import {ReactNode, useState} from "react";

interface IAdvantages{
    id: number,
    el: ReactNode,
    text: string
}

const advantages: IAdvantages[] = [
    {id: 1, el: <IoIosSpeedometer size={45} />, text: 'Швидка доставка'},
    {id: 2, el: <GiHealthNormal size={45} />, text: 'На 40% безпечніший'},
    {id: 3, el: <GiLips size={45} />, text: 'Смак'},
]
export default function About(){
    return (
        <div className='flex' >
            <div className='flex-1 ' >
               <div className='flex justify-center'  >
                   <img style={{width: '58%'}} alt='banner' src='https://static.vecteezy.com/system/resources/previews/009/875/185/original/3d-vape-black-purple-skin-looks-lying-free-png.png' />
               </div>
                <Button variant='secondary' className='m-4' size='lg' >Замовити новинку</Button>
                <Button variant='outline' className='m-4' size='lg' >Переглянути характеристики</Button>
            </div>
            <div className='flex-1' >
                <h1 className='text-8xl font-mono'>BestVape</h1>
                <p className='text-4xl text-gray-500 '>Новий Вейп для вашого здоров'я</p>
                <div className='mt-10' >
                    {
                        advantages.map((item: IAdvantages) => (
                            <div className='flex items-center mt-5' key={item.id} >
                                {item.el}
                                <p className='text-3xl ml-3' >{item.text}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}