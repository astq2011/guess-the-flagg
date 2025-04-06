'use client'

import { useRouter } from 'next/navigation'

export default function CreateParty() {

    const router = useRouter()
    function createParty() {
        const randomNumber = Math.floor(Math.random() * (999999 - 100000 + 1)) + 100000;
        router.push(`/party/${randomNumber}`)
    }
    return <>
        <div className='bg-green-500' onClick={()=>createParty()}>Create Party</div>
    </>
}