import React from 'react'

export const FeatureContents = () => {
  return (
    <div className="featureContents">
      <h2 className="featureContentsTitle">FURIMAの特徴</h2>
      <ul className="featureLists">
        <li className="list">
          <img className="list-pict" src="icon-01.png" />
          <h3 className="featureListText">簡単に売り買いできる</h3>
          <p className="featureListDescription">スマホひとつで、いつでもどこでも簡単に出品・購入が可能！</p>
        </li>
        <li className="list">
          <img className="list-pict" src="icon-02.png" />
          <h3 className="featureListText">売上金は即日振込みに対応</h3>
          <p className="featureListDescription">午前9時までに振込を依頼いただければ、翌日に指定の口座に入金いたします。</p>
        </li>
        <li className="list">
          <img className="list-pict" src="icon-03.png" />
          <h3 className="featureListText">様々な支払いに対応</h3>
          <p className="featureListDescription">お支払いは、クレジットカードだけでなく、ポイントや売上金など多彩な方法があります。</p>
        </li>
      </ul>
    </div>
  )
}

export default FeatureContents;