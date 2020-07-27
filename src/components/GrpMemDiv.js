import React from 'react';
import GrpMembers from './GrpMembers';

function GrpMemDiv() {
    return (
        <div className='group-img-container'>
            <GrpMembers 
                containerName='img-1819-container'
                imgName='img-1819'
                imgPath='../../public/img/member18-19/group.jpg'
                year='2018 - 2019'
                ebPgName='/#/eb18-19'
                allMemPgName='/#/allMem18-19'
            />
            <GrpMembers 
                containerName='img-1718-container'
                imgName='img-1718'
                imgPath='../../public/img/member17-18/group.jpeg'
                year='2017 - 2018'
                ebPgName='/#/eb17-18'
                allMemPgName='/#/allMem17-18'
            />
        </div>
    );
}

export default GrpMemDiv;