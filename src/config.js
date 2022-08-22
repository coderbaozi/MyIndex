import { includes } from "core-js/library/fn/array";

const SERVE = false; // 是否使用线上服务器

const HOST = "https://esunr.xyz:8080/api/esunrIndex"; // 线上服务器地址，如果不使用请留空

const BLOG_NAME = "你好朋友"; // 个人网站名字

const BLOG_URL = "https://www.cnblogs.com/coder-baozi/"; // 个人网站链接（请填写完整链接）

const GITHUB = "https://github.com/coderbaozi?tab=repositories"; // 右上角 Github 图标链接，留空不显示

const BACKGROUND_IMG_URL = "https://v.api.aa1.cn/api/api-gqsh/index.php?wpon=s3s398eu7y6dt7e24"; // 背景图片url，默认为必应每日图片（第三方接口）

const SORT_DATA = [
  { sortId: 1, title: "你好朋友" },
  // { sortId: 2, title: "示例分类2" }
]; // 网站分类列表，请按照API.md中'/getSort'接口中返回的data格式填写

const RECORD_NUMBER = ""; // 网站备案号，留空不显示

const PAGES_DATA = [
  {
    pageId: 1,
    sortId: 1,
    title: "JAVA",
    subtitle: "JAVA全栈知识",
    url: "https://pdai.tech/",
    icon: ""
  },
  {
    pageId: 2,
    sortId: 1,
    title: "API",
    subtitle: "免费API",
    url: "https://api.aa1.cn/",
    icon: ""
  }
]; // 网站分类列表，请按照API.md中'/getPages'接口中返回的data格式填写

const SLOGAN = [
  "江流宛转绕芳甸，月照花林皆似霰",
  "此时相望不相闻，愿逐月华流照君",
  "Welcome, my friend!",
  "江水流春去欲尽，江潭落月复西斜",
  "人生代代无穷已，江月年年只相似",
  "空里流霜不觉飞，汀上白沙看不见",
  "江流宛转绕芳甸，月照花林皆似霰",
  "滟滟随波千万里，何处春江无月明",
  " 白云一片去悠悠，青枫浦上不胜愁"
]; // 在Logo下方显示的标题

const FOOTER_INFO = true; // 是否显示抽屉右下角的文字信息

export default {
  SERVE,
  HOST,
  BLOG_URL,
  BLOG_NAME,
  SORT_DATA,
  PAGES_DATA,
  SLOGAN,
  GITHUB,
  FOOTER_INFO,
  BACKGROUND_IMG_URL,
  RECORD_NUMBER
};
