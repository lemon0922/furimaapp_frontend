import React from 'react'

export const FooterContents = () => {
  return (
    <>
      <div className="footerContents">
        <div className="furimaDetails">
          <h2 className="footerContentHead">FURIMAについて</h2>
          <ul>
            <li>
              <a className="footerLink" href="#">会社概要(運営会社)</a>
            </li>
            <li>
              <a className="footerLink" href="#">プライバシポリシー</a>
            </li>
            <li>
              <a className="footerLink" href="#">FURIMA利用規約</a>
            </li>
            <li>
              <a className="footerLink" href="#">ポイントに関する特約</a>
            </li>
          </ul>
        </div>
        <div className="furimaDetails">
          <h2 className="footerContentHead">FURIMAを見る</h2>
          <ul>
            <li>
              <a className="footerLink" href="#">カテゴリー一覧</a>
            </li>
            <li>
              <a className="footerLink" href="#">ブランド一覧</a>
            </li>
          </ul>
        </div>
        <div className="furimaDetails">
          <h2 className="footerContentHead">FURIMAについて</h2>
          <ul>
            <li>
              <a className="footerLink" href="#">FURIMAガイド</a>
            </li>
            <li>
              <a className="footerLink" href="#">FURIMAロゴ利用ガイドライン</a>
            </li>
            <li>
              <a className="footerLink" href="#">お知らせ</a>
            </li>
          </ul>
        </div>
      </div>
      <a href="#" className="footerTitle">
        <i className="fa-people-carry-box" class="fa-solid fa-people-carry-box"></i>
        <p className="footerTitleName">FURIMA</p>
      </a>
      <p>© FURIMA</p>
    </>
  )
}

export default FooterContents;