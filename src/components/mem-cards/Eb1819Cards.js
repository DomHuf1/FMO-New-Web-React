import React from 'react';
import MemCard from '../MemCard';
import {eb1819Data} from '../../../data/mem-card-data';

const TYPE_INDEX = 0;
const PATH_INDEX = 1;
const NAME_INDEX = 2;
const COLLEGEM_INDEX = 3;
const INFO_INDEX = 4;
const BASE_PATH = '../../../public/img/';


function Eb1819Cards() {
    const eb1819Cards = eb1819Data.map(
        (item) => <MemCard 
                    cardType={item[TYPE_INDEX]}
                    imgPath={BASE_PATH + item[PATH_INDEX]} 
                    name={item[NAME_INDEX]}
                    collegeMajor={item[COLLEGEM_INDEX]}
                    info={item[INFO_INDEX]}
                />
    )

    return (
        <div className='content'>
            {eb1819Cards}
        </div>
    );
}

export default Eb1819Cards;