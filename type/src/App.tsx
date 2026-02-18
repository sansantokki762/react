import { useState } from 'react'
import './App.css'

function App() {

  //////////////////////////
  class LoginRequest {
    private username: string
    private password: string
    num: number

    // private: 클래스 안에서만

    constructor(username: string, password: string, num: number) {
      this.username = username;
      this.password = password;
      this.num = num;
    }

    get getUsername(): string {
      return this.username
    }

    get getPassword(): string {
      return this.password
    }
  }
  //////////////////////////

  let name :string = "jinwoo"
  let list :(number | string)[] = [123, "ksdhjhfjdf"]
  let num :number | string = "ddd"

  type mytype = number | boolean

  let jingay :mytype = true

  let user: LoginRequest = new LoginRequest('lian', '1234', 12);
  user.num = 144  

  return (
    <>
      <div>{name}</div>
      <div>{list}</div>
      <div>{num}</div>
      <div>{jingay}</div>
      <div>{`${user.getUsername}님 환영합니다`}</div>
      <div>{`${user.getPassword} 님 비번 털음 ㅅㄱ ㅂㅂ`}</div>
    </>
  )
}

export default App
