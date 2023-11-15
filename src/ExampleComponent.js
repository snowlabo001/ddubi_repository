import React from "react";
//import ReactDOM from "react-dom";

/* function ExampleComponent(params) {
    return <h1>Hello, {params.name}</h1>;
}
  
const root = ReactDOM.createRoot(document.getElementById('root'));
const element = <ExampleComponent name="Sara" />;
root.render(element);
 */

const paramsList = [
    {
      user : {
        name : "Pengsoo",
        avatarUrl : "https://pengsoomall.com/web/product/medium/202311/03682dc378e0b97b31c78ebda14b7cc9.jpg"
      },
      text : "Awesome!!!",
      date: new Date()
    } ,
    {
        user : {
            name : "TUXEDOSAM",
            avatarUrl : "http://sanriokorea.co.kr/wp-content/themes/sanrio/images/new_main_crt11_ov.png"
        },
        text : "disappointed...",
        date: new Date()
    }
]
/* const params = 
    {
      user : {
        name : "Pengsoo",
        avatarUrl : "https://pengsoomall.com/web/product/medium/202311/03682dc378e0b97b31c78ebda14b7cc9.jpg"
      },
      text : "Awesome!!!",
      date: new Date()
    } */

function Avatar(params){
    
    return (
        <img className="Avatar" 
            src={params.avatarUrl} 
            alt={params.name} />
    );
}

function UserInfo({ user }){

    if (!user) {
        return null;
    }

    return (
        <div className="UserInfo">
            <Avatar {...user} />
            <div className="UserInfo-name">{user.name}</div>
        </div>
    );
}

function ExampleComponent() {

    return (
        <div className="Comment">
           {/*  <UserInfo {...params} /> {/* Spread 연산자로 params 객체의 속성들을 UserInfo 컴포넌트에 전달 */} 
                                    {/* <UserInfo
                                        user={params.user}
                                        text={params.text}
                                        date={params.date}
                                    /> */}
            {/* <div className="UserInfo">
                <Avatar user={params.author}/>
                <img className="Avatar" src={params.author.avatarUrl} alt={params.author.name} />
                <div className="UserInfo-name">{params.author.name}</div>
            </div> */}
            {/*    <div className="Comment-text">{params.text}</div>
            <div className="Comment-date">{params.date && params.date.toLocaleString()}</div> */}

            {paramsList.map((params, index) => (
                <div key={index}>
                    <UserInfo {...params} />
                    <div className="Comment-text">{params.text}</div>
                    <div className="Comment-date">{params.date && params.date.toLocaleString()}</div>
                </div>
            ))}

        </div>
    );
}

export default ExampleComponent;
