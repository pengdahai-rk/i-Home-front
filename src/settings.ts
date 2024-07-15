import { ThemeEnum } from "./enums/ThemeEnum";

const { pkg } = __APP_INFO__;

const defaultSettings: AppSettings = {
  title: pkg.name,
  version: pkg.version,
  showSettings: true,
  tagsView: true,
  fixedHeader: true,
  sidebarLogo: true,
  layout: LayoutEnum.LEFT,
  theme: ThemeEnum.LIGHT,
  size: SizeEnum.DEFAULT,
  language: LanguageEnum.ZH_CN,
  themeColor: "#409EFF",
  watermarkEnabled: false,
  watermarkContent: pkg.name,
};

export default defaultSettings;
