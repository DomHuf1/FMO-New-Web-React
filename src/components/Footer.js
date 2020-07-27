import React from 'react';

function Footer() {
    return (
        <div className='footer-container' id='contact'>
            <div className='footer-sub'>Contact Us</div>
            <div className='table-container'>
            <table className='footer-table'>
                <tbody>
                <tr>
                    <td className='table-left'>
                        <b>Email: </b>fivemill@ucsd.edu<br />
                        <b>WeChat: </b>FMO_ucsd
                    </td>
                    <td className='table-mid'>
                        <abbr title='WeChat: FMO_ucsd'>
                            <img src='../../public/img/icons/wechat.png' />
                        </abbr>
                    </td>
                    <td className='table-mid'>
                        <abbr title='Email: fivemill@ucsd.edu'>
                            <img src='../../public/img/icons/email.png' />
                        </abbr>
                    </td>
                    <td className='table-mid'>
                        <a href='https://www.youtube.com/channel/UCX9stGGOHjYgP7ll-1hL0rw'>
                            <img src='../../public/img/icons/youtube.png' />
                        </a>
                    </td>
                    <td className='table-mid'>
                        <a href='https://www.facebook.com/Five-Millennia-Orchestra-1763590593936910'>
                            <img src='../../public/img/icons/facebook.png' />
                        </a>
                    </td>
                    <td className='table-mid'>
                        <a href='https://www.instagram.com/ucsd_five_millennia_orchestra/?hl=en'>
                            <img src='../../public/img/icons/instagram.png' />
                        </a>
                    </td>
                    <td className='table-right'>
                        <div className='join-us'>
                            <button className='join-button' onclick='doc()'>我们随时欢迎你的加入
                            </button>
                        </div>
                    </td>
                </tr>
                </tbody>
            </table>
            </div>
        </div>
    );
}

export default Footer;