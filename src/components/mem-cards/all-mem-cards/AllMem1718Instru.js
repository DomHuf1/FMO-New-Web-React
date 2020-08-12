import React from 'react';
import MemCard from '../../MemCard';
import { allMem1718Instru, allMem1718IA, allMem1718Pub, allMem1718Vocal } from '../../../../data/mem-card-data';

const ID_INDEX = 0;
const TYPE_INDEX = 1;
const PATH_INDEX = 2;
const NAME_INDEX = 3;
const TITLE_INDEX = 4;
const COLLEGEM_INDEX = 5;
const INFO_INDEX = 6;
const BASE_PATH = '../../../public/img/';


function AllMem1718Instru() {
    const instruCards = allMem1718Instru.map(
        (item) => <MemCard
            key={item[ID_INDEX]}
            cardType={item[TYPE_INDEX]}
            imgPath={BASE_PATH + item[PATH_INDEX]}
            name={item[NAME_INDEX]}
            collegeMajor={item[COLLEGEM_INDEX]}
            info={item[INFO_INDEX]}
            title={item[TITLE_INDEX]}
        />
    )

    return (
        <div className='instru-dept-sec-17-18  dept-sec' id='all-mem-17-18-cards'>
            {instruCards}
        </div>
    );
}

export default AllMem1718Instru;