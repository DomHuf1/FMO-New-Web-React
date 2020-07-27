import React, {useState} from 'react';

function GrpMembers(props) {
    return (
        <div className={props.containerName}>
            <img className={props.imgName} src={props.imgPath} />
            <div className="header-block">
                <div>{props.year}</div>
            </div>
            <div className="middle-upper-text">
                <div className="eb">
                    <a className="ref" href={props.ebPgName}>Eboard Members</a>
                </div>
            </div>
            <div className="middle-lower-text">
                <div className="all">
                    <a className="ref" href={props.allMemPgName}>All Members</a>
                </div>
            </div>
        </div>
    );

}

export default GrpMembers;