import React from 'react'

export const Nav = () => {
  return (
    <div className='nav'>
      <ul className='listsLeft'>
        <li className="categoryList"><a href="#">カテゴリー</a></li>
        <li className="blandList"><a href="#">ブランド</a></li>
      </ul>
      <ul className='ListsRight'>
        <li className="login"><a href="#">ログイン</a></li>
        <li><a href="#">新規登録</a></li>
      </ul>
    </div>
  )
}

export default Nav;