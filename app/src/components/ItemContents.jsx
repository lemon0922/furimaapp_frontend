import React from 'react'
import ImageGarary from './ImageGarary';

export const ItemContents = () => {
  return (
    <div className="itemContents">
      <h2 className="itemTitle">ピックアップカテゴリー</h2>
      <div className="subtitle">新規投稿商品</div>
      <ImageGarary />
    </div>
  );
}

export default ItemContents;