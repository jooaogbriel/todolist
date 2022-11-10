import { useState } from 'react'
import * as C from './styles'

export const AddArea = () => {

    

    return (
        <C.Container>
            <div className='image'>➕</div>
            <input
            placeholder='Adicione uma tarefa'
            type='text'
            />
        </C.Container>
    )

}