import React from 'react';
import MemCard from '../MemCard';
import {eb1718Data} from '../../../data/mem-card-data';

const TYPE_INDEX = 0;
const PATH_INDEX = 1;
const NAME_INDEX = 2;
const COLLEGEM_INDEX = 3;
const INFO_INDEX = 4;
const BASE_PATH = '../../../public/img/';


function Eb1718Cards() {
    const eb1718Cards = eb1718Data.map(
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
            {eb1718Cards}
        </div>
    );
}

export default Eb1718Cards;