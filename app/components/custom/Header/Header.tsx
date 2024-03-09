import {ReactNode, useState} from "react";
import { FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";

interface IMenu{
    id: number,
    name: string
}

interface ISocial{
    id: number,
    icon: ReactNode
}

const menu: IMenu[] = [
    {id: 1, name: 'Why we?'},
    {id: 2, name: 'Pods'},
    {id: 3, name: 'Contacts'},
    {id: 4, name: 'Faq'},
];

const social: ISocial[] = [
    {id: 1, icon: <FaInstagram size={40} />},
    {id: 2, icon: <FaFacebook size={40} />},
    {id: 3, icon: <FaTwitter size={40} />}
]

export default function Header(){
    return (
        <header className='flex justify-between items-center' >
            <img src='https://i.pinimg.com/originals/fd/44/c1/fd44c1631be88a4e808ef3bd77db6091.png' alt='vape' className='w-40' />
            <div className='flex items-center'>
                {
                    menu.map((item: IMenu) => (
                        <p className='p-10 cursor-pointer transition-all duration-500 ease-in-out hover:text-purple-500 hover:scale-105' key={item.id}>{item.name}</p>
                    ))
                }
            </div>
            <div className='flex' >
                {
                    social.map((item:ISocial) => <div key={item.id} className='p-5' >{item.icon}</div>)
                }
            </div>
        </header>
    )
}