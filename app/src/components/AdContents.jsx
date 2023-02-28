import React from 'react'

export const AdContents = () => {
  return (
    <div className="adContents">
      <h2 className="adTitle">会員数日本一位</h2>
      <p className="adExplain">FURIMAはフリマアプリで最も人気。</p>
      <p className="adExplain">出品・購入回数も業界最多です！</p>
      <p className="adExplain">ほしかったあの商品に出会えるかもしれません。</p>
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

export default AdContents;