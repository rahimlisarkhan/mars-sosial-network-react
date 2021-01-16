import {render} from '../index'

export let addShare =(key,text,data)=>{
    let today  = new Date().toString().split('G')[0];
    
    data.push(
        {
        [key]:text.current.value,
        create_at:today
    })

    text.current.value='';
    render()
} 