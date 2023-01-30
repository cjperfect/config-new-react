import React, { useState } from "react";
import "./style/index.less";
import { useHistory } from "react-router-dom";
import { Layout, Menu } from "antd";
const { Header, Content, Footer } = Layout;

interface IProps {
  children?: React.ReactNode;
}

type LinkType = {
  key: string;
  label: string;
};

const linkConfig: LinkType[] = [
  {
    key: "/generate-columns",
    label: "生成表格columns"
  },
  {
    key: "/code-snippet",
    label: "代码片段"
  }
];

const App: React.FC<IProps> = (props: IProps) => {
  const { children } = props;
  const history = useHistory();
  const [selectedKey, setSelectedKey] = useState(
    history.location?.pathname === "/" ? "/generate-columns" : history.location?.pathname
  );

  return (
    <div className="main-page">
      <Header>
        <Menu
          theme="dark"
          mode="horizontal"
          selectedKeys={[selectedKey]}
          items={linkConfig}
          onClick={({ key }) => {
            if (history.location.pathname === key) return;
            setSelectedKey(key);
            history.push(key);
          }}
        />
      </Header>
      <Content>{children}</Content>
      <Footer style={{ textAlign: "center" }}>
        Generate Columns ©2022 Created by Chen Jiang <a href="https://gitee.com/cjperfect/mock.git">源码地址</a>
      </Footer>
    </div>
  );
};

export default App;
