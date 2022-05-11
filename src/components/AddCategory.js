import { useState } from "react"
import PropTypes from 'prop-types'

const AddCategory = ({ setCategories }) => {
    const [input, setInput] = useState('')

    const handleInput = (e) => {
        setInput(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if(input.trim().length > 2){
            setCategories(c => [input, ...c])
            setInput('')
        }else alert('You need write some word')
    }
    return (
        <form onSubmit={ handleSubmit }>
            <input
                type="text"
                onChange={ handleInput }
            />
        </form>
    )
}

export default AddCategory

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}