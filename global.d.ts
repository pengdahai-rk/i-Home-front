declare global {
  /**
   * 分页查询参数
   */
  interface PageQuery {
    pageNum: number;
    pageSize: number;
  }

  /**
   * 分页响应对象
   */
  interface PageResult<T> {
    /** 数据列表 */
    list: T;
    /** 总数 */
    total: number;
  }

  /**
   * 页签对象
   */
  interface TagView {
    /** 页签名称 */
    name: string;
    /** 页签标题 */
    title: string;
    /** 页签路由路径 */
    path: string;
    /** 页签路由完整路径 */
    fullPath: string;
    /** 页签图标 */
    icon?: string;
    /** 是否固定页签 */
    affix?: boolean;
    /** 是否开启缓存 */
    keepAlive?: boolean;
    /** 路由查询参数 */
    query?: any;
  }

  /**
   * 系统设置
   */
  interface AppSettings {
    /** 系统标题 */
    title: string;
    /** 系统版本 */
    version: string;
    /** 是否显示设置 */
    showSettings: boolean;
    /** 是否固定头部 */
    fixedHeader: boolean;
    /** 是否显示多标签导航 */
    tagsView: boolean;
    /** 是否显示侧边栏Logo */
    sidebarLogo: boolean;
    /** 导航栏布局(left|top|mix) */
    layout: string;
    /** 主题模式(dark|light) */
    theme: string;
    /** 布局大小(default |large |small) */
    size: string;
    /** 语言( zh-cn| en) */
    language: string;
    /** 是否开启水印 */
    watermarkEnabled: boolean;
    /** 水印内容 */
    watermarkContent: string;
  }

  /**
   * 组件数据源
   */
  interface OptionType {
    /** 值 */
    value: string | number;
    /** 文本 */
    label: string;
    /** 子列表  */
    children?: OptionType[];
  }
}
export {};

import "vue-router";

declare module "vue-router" {
  // https://router.vuejs.org/zh/guide/advanced/meta.html#typescript
  // 可以通过扩展 RouteMeta 接口来输入 meta 字段
  interface RouteMeta {
    /** 菜单名称 */
    title?: string;
    /** 菜单图标  */
    icon?: string;
    /** 菜单是否隐藏 */
    hidden?: boolean;
    /** 是否固定页签 */
    affix?: boolean;
    /** 是否缓存页面 */
    keepAlive?: boolean;
    /** 是否在面包屑上隐藏 */
    breadcrumb?: boolean;
    /** 拥有菜单权限的角色编码集合 */
    roles?: string[];
  }
}
