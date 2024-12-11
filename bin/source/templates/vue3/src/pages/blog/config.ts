/**
 * @name 博客相关的配置
 */

import cooperation from "./detail/files/cooperation";
import anti from "./detail/files/anti";
import security from "./detail/files/security";
import security_post from "~/assets/blogs/security.webp";
import cooperation_post from "~/assets/blogs/cooperation.webp";
import anti_post from "~/assets/blogs/anti.webp";

/** 所有的博客列表 */
export const allBlogList = [
  {
    date: "2022-08-20",
    post: anti_post,
    title:
      "Anti-Fraud Measures: How We Protect Our Clients from Loan Scams",
    tags: ["all", "press"],
    postId: 3142,
    content: anti,
  },
  {
    date: "2022-08-20",
    post: cooperation_post,
    title:
      "Win-Win Cooperation: Driving the Growth of Personal Financial Services",
    tags: ["all", "business"],
    postId: 2386,
    content: cooperation,
  },
  {
    date: "2022-08-20",
    post: security_post,
    title: "Digital Lending: PesoGo's Security and Convenience",
    tags: ["all", "press"],
    postId: 4521,
    content: security,
  },
];

/** 所有的博客分类 */
export const blogCate = [
  { label: "All", value: "all" },
  { label: "Business & Finance", value: "business" },
  { label: "Lifestyle", value: "lifestyle" },
  { label: "Press Release", value: "press" },
  { label: "Activities", value: "activities" },
];

/** 时间转换 */
export function formatDate(dateStr: string): string {
  const date = new Date(dateStr); // 将字符串转换为日期对象
  const options: Intl.DateTimeFormatOptions = {
    day: "2-digit",
    month: "short",
    year: "numeric",
  }; // 定义日期格式选项
  return new Intl.DateTimeFormat("en-US", options).format(date);
}

/** 根据发布日期降序 */
export function sortByDateDesc(data: any[]): any[] {
  return data.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}
