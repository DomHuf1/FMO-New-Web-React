import React from 'react';
import MemCard from '../MemCard';
import {eb1819Data} from '../../../data/mem-card-data';

const ID_INDEX = 0;
const TYPE_INDEX = 1;
const PATH_INDEX = 2;
const NAME_INDEX = 3;
const COLLEGEM_INDEX = 4;
const INFO_INDEX = 5;
const BASE_PATH = '../../../public/img/';

function Eb1819Cards(props) {
    const eb1819Cards = eb1819Data.map(
        (item) => <MemCard 
                    key={item[ID_INDEX]}
                    cardType={item[TYPE_INDEX]}
                    imgPath={BASE_PATH + item[PATH_INDEX]} 
                    name={item[NAME_INDEX]}
                    collegeMajor={item[COLLEGEM_INDEX]}
                    info={item[INFO_INDEX]}
                    title='Eboard'
                />
    )

    return (
        <div className='content' id='content-eb-1819'>
            {eb1819Cards}
        </div>
    );
}

export default Eb1819Cards;