import { useRouter } from 'next/router'
import { useEffect } from 'react';

export function Vishal(){
    
    const router=useRouter();
    useEffect(() => {
        console.log("Router data",router.query.something);
    }, [router])    

    return (
        <div>
            hi
            {router.query.something}
        </div>
      )
    
}

export default function something() {
    
  return (
    <div>
        dskljfkl
        <Vishal/>
    </div>
  )
}
