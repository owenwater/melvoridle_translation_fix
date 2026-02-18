# Melvor Idle Translation Fixes (Simplified Chinese)

A mod for [Melvor Idle](https://melvoridle.com/) that fixes various translation errors in the Simplified Chinese (zh-CN) localization.

Mod can be downloaded from [Mod.io](https://mod.io/g/melvoridle/m/translation-fix#description).

## Features
- **Specific Translation Overrides**: Targets and corrects specific string keys without affecting the rest of the game.
- **Language Detection**: Only applies changes when the game language is set to Simplified Chinese.

## Fixed Translations

The mod currently includes fixes for the following:

### Monsters
- **Names**: Zombie (僵尸), Raging Horned Elite (狂暴角龙精英), Chicken (鸡), Golbin (戈耳宾).

### Augmented Stronghold
- **Names**: Augmented Stronghold (进阶要塞).

### Items & Equipment
- **Pickaxes**: Corrected descriptions for Iron, Steel, Black, Mithril, Adamant, Rune, and Dragon Pickaxes.
- **Potions**: Gem Detector Potion I, II, III, IV.
- **Resources**: Mahogany Logs (桃花心木原木).

### Skills & Mechanics
- **Cartography**: POI Discovery text.
- **Archaeology**: Medium artefact size (中型).
- **Magic**:
  - Holy Invocation description.
  - Cursed Offering description (Alt Magic).
- **Slayer**: Elite Slayer Task completion notification.
- **Combat**: Curses & Auroras compatibility text.

### Pet
- **Names**: Cute Rock (可爱岩石), Royal Rock (皇家岩石), Elf Rock (精灵岩石), Magic Rock (魔法岩石), Party Rock (派对岩石)

### Town
- **Names**: Cool Rocks (酷岩石).

### Lore
- **Encoding Fix**: Corrected garbled characters in `LORE_PARAGRAPH_5_2`.
- **Typo Fix**: `LORE_PARAGRAPH_7_3` (统治着 -> 统治者).

### Modifiers
- **Skill Preservation**: Clarified "Skill Preservation Cap" as "留存资源几率上限".


## 修正的翻译

### 商店：镐升级描述(多个)
- -5% 采矿间隔（来自镐子的总叠加效果：-5%）。+1% 几率每次执行动作时获得双倍矿石（来自镐子的总叠加效果：+1%）。
  - 错别字：稿 -> 镐。

### 战斗：怪物名称
- 僵尸, 狂暴角龙精英
  - 编码错误: 修正???字符
- 鸡
  - 翻译错误：鸡肉 -> 鸡
- 戈耳宾 (Golbin)
  - 翻译统一：哥布林 -> 戈耳宾 (Golbin)
- 进阶
  - 翻译改进：扩张 -> 进阶 (所有二阶要塞有关此条，包括要塞名称和相关物品名称)
- 不死强化 1（扩张）
  - 翻译错误：不死~~扩张~~强化 1（扩张）

### 挑战任务/战斗
- 你完成了 ${count} 项精英屠杀者任务
  - 错别字: 娃成 -> 完成

### 城镇：建筑
- 酷岩石
  - 翻译统一：酷洛克 -> 酷岩石

### 魔法/物品
- 可以与诅咒和光环咒语一同使用
  - 翻译错误: 无法 -> 可以

### 伐木: 桃花心木
- 桃花心木原木
  - 翻译改进：桃花心木原木 -> 桃花心木 （区别树和原木）。

### 草药学：寻宝奇兵药水(I-IV)
- +2% 几率开采“宝石矿脉”或陨石矿时获得 1 枚至尊品质宝石
  - 翻译改进：矿脉 -> “宝石矿脉”

### 生活类魔法：神圣感召 I,II, III
- 对 ${qty1} x ${itemName} 附魔，使其埋葬后可获得 ${qty2} 祝祭点。
  - 翻译错误：去除‘小瓮‘

### 生活类魔法：诅咒祭品
- ${fixedItemQty0} x 诅咒原木转化为 ${amount} x 诅咒灰烬。
  - 翻译错误：罪恶 -> 诅咒

### 制图学/战斗
- 在制图学世界地图 ${worldName} 中发现 ${placeNames}'
  - 占位符错误：${worldName}和${placeNames}的顺序错误

### 考古学：遗物规格
- 中型
  - 翻译改进：普通 -> 中型 (区别遗物规格和品质)

### 宠物：岩石
- 优雅岩, 可爱岩, 皇家岩, 精灵岩, 魔法岩, 派对岩, 酷岩石
  - 翻译缺失：Rock -> 岩/岩石

### 故事 Lore
- 编码错误（部分替换）：修正“无缘无故”中的乱码字符
- 错别字：统治着 -> 统治者

### 属性 Modifiers
- 留存资源几率上限
  - 翻译改进：留存资源上限 -> 留存资源几率上限

