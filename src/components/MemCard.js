import React from 'react';

function MemCard(props) {
    return (
        <div className={props.cardType}>
            <div className="picture">
                <img src={props.imgPath} /> 
            </div>
            <div className="text-container">
                <p>姓名：{props.name} <br/> 学院/专业：{props.collegeMajor} <br/> {props.info}
                </p>
            </div>
        </div>
    );
}

export default MemCard;