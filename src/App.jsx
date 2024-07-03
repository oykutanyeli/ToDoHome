import React, { useState } from "react";
import ToDoItem from "./components/ToDoItem";
import "./App.css";
import resim from "./assets/1.jpg";
import resim2 from "./assets/2.jpg";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [toDoList, setToDoList] = useState([]);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleAddClick = () => {
    if (inputValue.trim()) {
      setToDoList([...toDoList, inputValue]);
      setInputValue("");
    }
  };
  
  const playSound = () => {
    const audio = new Audio(ses);
    audio.play();
  };

  return (
    <div className="container">
      <div className="left-column">
        {/* Sol sütun içeriği */}
        <img
          src={resim2}
          alt="Öykü Tanyeli"
          style={{
            width: "50%", // Yarı yarıya küçültme
            borderRadius: "50%", // Yuvarlak yapma
            border: "5px solid purple", // Mor çerçeve ekleme
          }}
        />
        <img
          src={resim2}
          alt="Öykü Tanyeli"
          style={{
            width: "50%", 
            borderRadius: "50%", 
            border: "5px solid purple", 
          }}
        />
        <img
          src={resim2}
          alt="Öykü Tanyeli"
          style={{
            width: "50%", 
            borderRadius: "50%", 
            border: "5px solid purple", 
          }}
        />
        <img
          src={resim2}
          alt="Öykü Tanyeli"
          style={{
            width: "50%", 
            borderRadius: "50%", 
            border: "5px solid purple", 
          }}
        />
        <img
          src={resim2}
          alt="Öykü Tanyeli"
          style={{
            width: "50%", 
            borderRadius: "50%", 
            border: "5px solid purple", 
          }}
        />
      </div>
      <div className="main-column">
        
        <div className="app">
          <h1 style={{ color: "darkorchid" }}>
           Alınacaklar
          </h1>
          <div style={{ color: "black" }}></div>
          <img
            src={resim}
            alt="Öykü Tanyeli"
            style={{
              width: "30%", 
              borderRadius: "50%", 
              border: "5px solid purple", 
              cursor: "pointer", // Tıklanabilir imleç
            }}
            onClick={playSound} // Tıklama olayı
          />
          <h2 style={{ color: "purple" }}>Evin Eksikleri Listesi:</h2>
          <div className="input-container">
            <input
              type="text"
              value={inputValue}
              onChange={handleInputChange}
              placeholder="Eksikleri buraya giriniz."
            />
            <button onClick={handleAddClick}>Listeye ekle</button>
          </div>
          <p style={{ fontSize: "2em" }}>
            <h5 style={{ color: "purple" }}>Alınacaklar;</h5>
          </p>
          <div className="todo-list">
            {toDoList.map((item, index) => (
              <div key={index}>
                <ToDoItem text={`Eve ${item} al.`} />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="right-column">
        {/* Sağ sütun içeriği */}
        <img
          src={resim2}
          alt="Öykü Tanyeli"
          style={{
            width: "50%", 
            borderRadius: "50%", 
            border: "5px solid purple", 
          }}
        />
        <img
          src={resim2}
          alt="Öykü Tanyeli"
          style={{
            width: "50%", 
            borderRadius: "50%", 
            border: "5px solid purple", 
          }}
        />
        <img
          src={resim2}
          alt="Öykü Tanyeli"
          style={{
            width: "50%", 
            borderRadius: "50%", 
            border: "5px solid purple", 
          }}
        />
        <img
          src={resim2}
          alt="Öykü Tanyeli"
          style={{
            width: "50%", 
            borderRadius: "50%", 
            border: "5px solid purple", 
          }}
        />
        <img
          src={resim2}
          alt="Öykü Tanyeli"
          style={{
            width: "50%", 
            borderRadius: "50%", 
            border: "5px solid purple", 
          }}
        />
      </div>
    </div>
  );
}

export default App;


