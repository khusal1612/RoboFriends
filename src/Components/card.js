import React from 'react';
 

const Card = (props) => {
    const {name,email,id} = props
    return (
        <div className="tc bg-light-green dib grow br3 pa3 ma2 bw2 shadow-5">
            <img alt='robots' src={`https://robohash.org/${id}?200x200`} />
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    )
}

export default Card; 