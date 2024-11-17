import React, {Component} from "react"

export default class Footer extends Component{
    render(){
        return(
            <footer class="footerwrap">
            <div class="footerinnerwrap">
                <h5 class="footinfo">
                    (주)크몽은 통신판매중개자이며, 통신판매의 당사자가 아닙니다.
                    <br/>
                    상품, 상품정보, 거래에 관한 의무와 책임은 판매회원에게 있습니다.
                </h5>
                <div class="footnavwrap">
                    <span class="footnavspan">
                        <a href="/" class="footnava">사업자정보 확인</a>
                    </span>
                    <span class="footnavspan">|</span>
                    <span class="footnavspan">
                        <a href="/" class="footnava">약관 및 정책</a>
                    </span>
                    <span class="footnavspan">|</span>
                    <span class="footnavspan">
                        <a href="/" class="footnava2">개인정보처리방침</a>
                    </span>
                </div>
                <h6 class="footcompany">© 2024 kmong Inc. All rights reserved.</h6>
            </div>
            </footer>
        )
    }
}