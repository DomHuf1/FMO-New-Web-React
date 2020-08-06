import React from 'react';
import MemCard from '../../MemCard';
import {allMem1718Instru, allMem1718IA, allMem1718Pub, allMem1718Vocal} from '../../../../data/mem-card-data';

const ID_INDEX = 0;
const TYPE_INDEX = 1;
const PATH_INDEX = 2;
const NAME_INDEX = 3;
const TITLE_INDEX = 4;
const COLLEGEM_INDEX = 5;
const INFO_INDEX = 6;
const BASE_PATH = '../../../public/img/';


function AllMem1718IA() {
    const iaCards = allMem1718IA.map(
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
        <div className='internal-affair-depart-section'>
                {iaCards}
        </div>
    );
}

export default AllMem1718IA;