import React, { useState } from "react";
import "./style/index.less";
import { useHistory } from "react-router-dom";
import { Layout, Menu } from "antd";
import {
  ChromeOutlined,
  CodepenOutlined,
  IeOutlined,
  RedditOutlined,
  TableOutlined,
  YuqueOutlined,
} from "@ant-design/icons";
const { Header, Content, Footer } = Layout;

interface IProps {
  children?: React.ReactNode;
}

type LinkType = {
  key: string;
  label: string;
  children?: LinkType[];
  [extra: string]: any;
};

/* 菜单页面 */
const linkConfig: LinkType[] = [
  {
    key: "/",
    label: "生成测试数据",
    icon: <TableOutlined />,
  },
  {
    key: "/code-snippet",
    label: "常用代码片段",
    icon: <CodepenOutlined />,
  },
  {
    key: "/websites",
    label: "常用网站",
    icon: <IeOutlined />,
  },
  {
    key: "/blog",
    label: "个人博客",
    icon: <ChromeOutlined />,
    children: [
      {
        key: "https://blog.csdn.net/qq_39583550",
        label: "CSDN",
        icon: <RedditOutlined />,
      },
      {
        key: "https://cjperfect.gitee.io/tech-document/",
        label: "知识点记录",
        icon: <YuqueOutlined />,
      },
    ],
  },
];

const App: React.FC<IProps> = (props: IProps) => {
  const { children } = props;
  const history = useHistory();
  const [selectedKey, setSelectedKey] = useState(history.location?.pathname);

  return (
    <div className="main-page">
      <Header>
        <Menu
          mode="horizontal"
          selectedKeys={[selectedKey]}
          items={linkConfig}
          onClick={({ key }) => {
            if (key.includes("http")) {
              // 打开新的网页
              window.open(key);
              return;
            }
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
