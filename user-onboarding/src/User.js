import React from 'react';

function User({ details }) {
    if (!details) {
        return <h3>Fetching User Details</h3>
    }

    return (
        <div className='container'>
            <h2>{details.first_name}</h2>
            <p>Email: {details.email}</p>
            <p>Password: {details.password}</p>
            {/* <p>Terms of Service: {details.terms}</p> */}
            {/* {
                !!details.terms && !!details.terms.length &&
                <div>
                Terms of Service:
                <ul>
                    {details.terms.map((like, idx) => <li key={idx}>{like}</li>)}
                </ul>
                </div>
            } */}
        </div>

    )
}

export default User;