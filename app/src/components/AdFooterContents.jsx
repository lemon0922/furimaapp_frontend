import React from 'react'

export const AdFooterContents = () => {
  return (
    <div className="adFooterContents">
      <p className="adFooterExplain">だれでもかんたん、人生を変えるフリマアプリ</p>
      <h2 className="adFooterTitle">今すぐダウンロード！</h2>
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

export default AdFooterContents;