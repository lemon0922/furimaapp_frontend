import React from 'react'

export const SelectReasonLists = () => {
  return (
    <div className="selectReasonLists">
      <h2 className="listsTitle">FURIMAが選ばれる3つの理由</h2>
      <ul className="reasonLists">
        <li className="list">
          <img className="listPict" src="pict-reason-01.png" />
          <span className="reasnListNumber">1</span>
          <h3 className="reasonListText">
            <span className="reasonListBlueText">3分</span>
            ですぐに出品
          </h3>
          <p className="reasonListDescription">スマホで入力するだけで簡単に出品できる!</p>
        </li>
        <li className="list">
          <img className="listPict" src="pict-reason-02.png" />
          <span className="reasnListNumber">2</span>
          <h3 className="reasonListText">
            <span className="reasonListBlueText">シンプル</span>
            で使いやすい
          </h3>
          <p className="reasonListDescription">めんどくさい入力は必要なく、検索も購入もスムーズ！</p>
        </li>
        <li className="list">
          <img className="listPict" src="pict-reason-03.png" />
          <span className="reasnListNumber">3</span>
          <h3 className="reasonListText">
            手数料
            <span className="reasonListBlueText">業界最安</span>
          </h3>
          <p className="reasonListDescription">10%でお得に出品&購入！</p>
        </li>
      </ul>
    </div>
  )
}

export default SelectReasonLists;