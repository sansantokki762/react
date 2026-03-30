import React from 'react'
import Card from './card'
import './App.css'
import './index.css'

function App() {
    const hadleButtonClick = (title) => {
        alert(`${title} 카드가 클릭되었습니다!`);
    }
    const cardsData = [ {id:1, title:"첫 번째 상품", description: " Vite 환경에서 작동하는 첫 번째 카드입니다.", imageUrl:"img/1.avif", buttonText: "정보 보기"},
                        {id:2, title:"두 번째 상품", description: " Vite 환경에서 작동하는 두 번째 카드입니다.", imageUrl:"img/2.avif", buttonText: "정보 보기"},
                        {id:3, title:"세 번째 상품", description: " Vite 환경에서 작동하는 세 번째 카드입니다.", imageUrl:"img/3.avif", buttonText: "정보 보기"}
    ];
      
    return (
      <div style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        padding: "20px"
      }}>
        {cardsData.map((card) => (
          <Card 
            key={card.id}
            title={card.title}
            description={card.description}
            imageUrl={card.imageUrl}
            buttonText={card.buttonText}
            onButtonClick= {() => hadleButtonClick(card.title)}
          />
        ))};
      </div>
    )
  }


export default App
