import React from 'react';

function MemCard(props) {
    return (
        <div className={props.cardType}>
            <div className="picture">
                <img src={props.imgPath} />
            </div>
            <div className="text-container">
                <p> 姓名：{props.name} <br />
                    职位：{props.title} <br />
                    学院/专业：{props.collegeMajor} <br />
                </p>
                <p>
                    {props.info}
                </p>
            </div>
        </div>
    );
}

export default MemCard;