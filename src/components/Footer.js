import React from 'react'

class Footer extends React.Component {
    render() {
        return (
            <div id="footer">
                <div className="inner">
                    <ul className="copyright">
                        <li>Copyright (C) 2017-{new Date().getFullYear()} yo1000 | YO!CHI KIKUCHI</li>
                        <li>Copyright (C) Gatsby Starter Strata</li>
                        <li>Base design: <a href="http://html5up.net">HTML5 UP</a></li>
                    </ul>
                    <ul className="copyright">
                        <li>記載されている会社名・製品名・システム名などは、各社の商標、または登録商標です。</li>
                        <li><a href="https://www.jp.square-enix.com/ffviii/guideline.html" target="_blank" rel="noopener noreferrer">
                            Copyright (C) 1999, 2019 SQUARE ENIX CO., LTD. All Rights Reserved.
                        </a></li>
                        <li><a href="https://support.jp.square-enix.com/rule.php?id=5381&la=0&tag=authc" target="_blank" rel="noopener noreferrer">
                            Copyright (C) 2010 - 2019 SQUARE ENIX CO., LTD. All Rights Reserved.
                        </a></li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Footer
