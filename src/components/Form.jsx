import React from 'react'

const Form = (props) =>(
    <div>
        <form onSubmit={props.getWeather}>
            <input type="text" name="city" placeholder="Введите старну"/>
            <input type="text" name="country" placeholder="Введите город"/>
            <button>Узнать погоду</button>
        </form>    
    </div>
)

export default Form;