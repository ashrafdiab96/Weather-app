import React from 'react';

const Form = (props) =>  {
    return (
        <div>
            <form onSubmit={props.getWeather}>
                <div class="myCities">
                    <select name="city" className="chooses">
                        <option value="">City...</option>
                        <option value="Cairo">Cairo</option>
                        <option value="Mekka">Mekka</option>
                        <option value="Toronto">Toronto</option>
                        <option value="New York">New York</option>
                        <option value="San Francisco">San Francisco</option>
                        <option value="Moscow">Moscow</option>
                        <option value="Tokyo">Tokyo</option>
                        <option value="Berlin">Berlin</option>
                        <option value="Zurich">Zurich</option>
                    </select>
                </div>
                <button>Get Weather</button>
            </form>
        </div>
    );
}

export default Form;