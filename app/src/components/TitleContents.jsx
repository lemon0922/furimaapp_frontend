import React from 'react'

export const TitleContents = () => {
  return (
    <div className="titleContents">
      <h2 className="serviceTitle">人生を変えるフリマアプリ</h2>
      <p className="serviceExplain">FURIMAはだれでもかんたんに出品・購入できる</p>
      <p className="serviceExplain">フリマアプリです</p>
      <div className="storeBtn">
        <a href="#">
          <img className="appleBtn" src="applebtn.svg" />
        </a>
        <a href="#">
        <img className="googleBtn" src="googlebtn.png" />
        </a>
      </div>
    </div>
  )
}

export default TitleContents;