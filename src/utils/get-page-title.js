// 全局配置
import settings from '@/settings.js';

const { VUE_APP_TITLE } = settings;

export default function getPageTitle(pageTitle) {
  if (pageTitle) {
    return `${pageTitle} - ${VUE_APP_TITLE}`;
  }
  return `${VUE_APP_TITLE}`;
}
