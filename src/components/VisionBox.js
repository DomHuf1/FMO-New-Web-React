import React from 'react';

function VisionBox() {
    return(
        <div className='vision-line'>
        <div className='vision-item'>
            <div className='vision-bg' id='vision-bg-left'></div>
            <div className='vision-keyword'>
                <p className='f2 heading--sanSerif'>始于热爱</p>
            </div>
            <div className='vision-main-text'>
                <p>大洋彼岸，我们所谱写的，<br /> 是一场音乐与文化的盛筵。
                    <br /> 上下五千年的文化底蕴，
                    <br /> 是中华民族的灵魂气韵，
                    <br /> 亦是游子们身越重洋、走出国门的底气。
                </p>
            </div>
        </div>

        <div className='vision-item'>
            <div className='vision-bg' id='vision-bg-mid'></div>
            <div className='vision-text-container'>
                <div className='about-subheader'><b>Our Vision</b></div>
            </div>
            <div className='vision-keyword'>
                <p className='f2 heading--sanSerif'>忠于传承</p>
            </div>
            <div className='vision-main-text'>
                <p>在这个信息爆炸，<br /> 文化多元碰撞、高度交融的时代，
                    <br /> 我们所肩负的，
                    <br /> 是保护与传承中华优秀传统文化的责任。
                </p>
            </div>
        </div>

        <div className='vision-item'>
            <div className='vision-bg' id='vision-bg-right'></div>
            <div className='vision-keyword'>
                <p className='f2 heading--sanSerif'>勇于创新</p>
            </div>
            <div className='vision-main-text'>
                <p>千年的乐谱早已失传，<br /> 但从未遗忘的是民乐的气血和灵魂。
                    <br /> 我们继承了流传的乐律，弹奏着古人的心血；
                    <br /> 也谱写着融合现代特点的原创和改编乐曲，
                    <br /> 力求继承发扬和包容创新。
                </p>
            </div>
        </div>
        </div>
    );
}

export default VisionBox;