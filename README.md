# 足迹 · Atlas Journal

个人旅行世界地图。React + Vite，数据仅保存在当前浏览器 localStorage，无需账号、密钥或数据库。

## 开发

使用 Node.js 22+：

```sh
npm ci
npm run dev -- --port 5173
```

`npm run build` 构建静态文件；`npm test` 验证国家汇总、次数分档和备份记录校验。

点击国家，或搜索国家/城市添加记录。每条记录可填写次数和日期；多条记录按国家累加，年份取最早日期。可编辑、删除。次数色阶：1、2–5、6–10、11+；年份模式从浅金色渐变至深绿色。地图支持缩放、拖动和复位。

常用城市及英文首都可离线搜索；其他城市通过 Open-Meteo Geocoding API 查询，需要网络。网络不可用时，先选择国家，手动填写城市即可。

数据不会跨设备同步，清除浏览器数据会丢失记录。使用导出 JSON 备份、导入恢复（按记录 ID 合并，同 ID 使用导入值）。同一天同时记录国家和其城市会累加次数，请按实际旅行拆分记录。

地图数据：world-atlas / Natural Earth；国家资料：world-countries；城市搜索：Open-Meteo / GeoNames。

浏览器回归：启动开发服务器后运行 `node scripts/browser-check.mjs`。默认使用 `/usr/bin/chromium`，可通过 `CHROMIUM_PATH` 指定浏览器。覆盖新增、编辑、删除、本地持久化、两种配色及移动视口；在线城市 API 使用模拟响应，联网能力不在该回归范围内。

## GitHub Pages

仓库 Settings → Pages → Build and deployment → Source 选择 **GitHub Actions**。
然后在 Actions 中选择 **Publish Atlas Journal** → **Run workflow**。成功后访问：
https://cathykkkkk.github.io/sketchverseunfurl/

页面公开可访问，旅行数据只保存在各自的浏览器，不会上传到 GitHub。请勿在代码中填写个人旅行记录。私有仓库能否使用 Pages 取决于 GitHub 套餐。
