import './App.css';
import {Title} from "./components/Title";
import {InputForm} from "./components/InputForm";
import {Nav} from './components/Nav';
import {TitleContents} from './components/TitleContents';
import {SelectReasonLists} from './components/SelectReasonLists';
import {AdContents} from './components/AdContents';
import {FeatureContents} from './components/FeatureContents';
import {ItemContents} from './components/ItemContents';
import {AdFooterContents} from './components/AdFooterContents';
import {FooterContents} from './components/FooterContents';

function App() {
  // const axios = axiosBase.create({
  //   baseURL: process.env.REACT_APP_DEV_API_URL,
  //   headers: {
  //     'Content-Type': 'application/json',
  //     'X-Requested-With': 'XMLHttpRequest'
  //   },
  //   responseType: 'json'  
  // });

  return (
    <div className="body">
      <header className="header">
        <div className="serchBarContents">
        <Title/>
        <InputForm />
        </div>
        <Nav />
      </header>

      <div className="main">
        <TitleContents />
        <SelectReasonLists />
        <AdContents />
        <FeatureContents />
        <ItemContents />
      </div>

      <div className="ad-footer">
        <AdFooterContents />
      </div>

      <div className="footer">
        <FooterContents />
      </div>
    </div>
  );
}

export default App;
