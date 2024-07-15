import React from 'react';

const HamDropdown = (props) => {
    return(
        <React.Fragment>
            {console.log(props.list)}
            {props.list.map((item) => (
                                <a className={props.styling} key={item.name} href={"/collection/" + `${item.name}`}>{item.name}</a>
                            ))}
        </React.Fragment>
    )
}

export default HamDropdown;