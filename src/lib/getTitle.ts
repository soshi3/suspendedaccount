export const getTitleByLanguage = (platform: string, language: string) => {
  switch (language) {
    case "ja":
      return `${platform}の停止アカウント解決をプロフェッショナルが対応`;
    case "ar":
      return `حلول حسابات ${platform} المعلقة من المحترفين`;
    case "es":
      return `Soluciones profesionales para cuentas suspendidas de ${platform}`;
    case "zh":
      return `${platform}账户停用问题专业解决方案`;
    default:
      return `${platform} suspended accounts solutions from pro`;
  }
};
