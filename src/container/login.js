import React, { Component } from 'react';
import {Button, List, InputItem, WhiteSpace, WingBlank} from 'antd-mobile'

import styled from 'styled-components'

class Login extends Component {
    constructor (props) {
        super(props)

        this.state = {
            phone: '',
            password: ''
        }

        // this.change = this.change.bind(this)
        this.login  = this.login.bind(this)
        this.register = this.register.bind(this)
    }
    change (key, val) {
        this.setState({
            [key]:val
        })
    }
    
    login () {
        // this.props.login(this.state)
    }
    
    register() {

    }
    render () {
        return (
            <LoginCon>
                <img src={require("../images/logo.jpg")} alt=""/>
                <List>
                    <InputItem type="number" placeholder="请输入账号" value={this.state.phone} onChange={v => {this.change('phone', v)}}>账号</InputItem>
                    <InputItem type="password" placeholder="请输入密码" value={this.state.password} onChange={v => {this.change('password', v)}}>密码</InputItem>
                </List>
                <WingBlank className="space-hight">
                    <Button type='primary' onClick={this.login}>登陆</Button>
                    <WhiteSpace/>
                    <Button type='primary' onClick={this.register}>注册</Button>
                </WingBlank>
            </LoginCon>
        )
    }
}
export default Login

const LoginCon = styled.div`
    img {
        width: 30%;
        margin: 60px auto;
    }
    .space-hight {
        margin-top: 40px;
    }
`