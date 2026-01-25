# bangumi-onair

github workflow 每日执行以下动作

1. git checkout https://github.com/bangumi-data/bangumi-data/blob/master/dist/data.json
2. 检查 data.json 是否有更新
3. 调用 filter_onair.ts 从 data.json 生成 onair.json
4. 自动提交 onair.json 到 dist 目录

CDN：https://cdn.jsdelivr.net/gh/akebi-chan/bangumi-onair/dist/onair.json
